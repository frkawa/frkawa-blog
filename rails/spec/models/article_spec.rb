require 'rails_helper'

RSpec.describe Article, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user).class_name('Admin::User').inverse_of(:articles) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:url) }
    it { is_expected.to validate_presence_of(:status) }
    it { is_expected.to enumerize(:status).in(:draft, :published, :archived).with_default(:draft) }
  end

  describe 'custom validations' do
    describe 'title, body' do
      context 'statusがpublishedの場合' do
        subject { build(:article, :published) }

        it { is_expected.to validate_presence_of(:title) }
        it { is_expected.to validate_presence_of(:body) }
      end

      context 'statusがpublished以外の場合' do
        subject { build(:article, :not_published) }

        it { is_expected.not_to validate_presence_of(:title) }
        it { is_expected.not_to validate_presence_of(:body) }
      end
    end

    describe 'url' do
      it { is_expected.to allow_value('abCD-0123_').for(:url) }
      it { is_expected.not_to allow_value('あいうえお').for(:url) }
      it { is_expected.not_to allow_value('aa bb').for(:url) }

      describe 'uniqueness' do
        before { create(:article, url: 'test') }

        it { expect(build(:article, url: 'test')).not_to be_valid }
      end
    end
  end

  describe 'scopes' do
    describe '.published' do
      let!(:published_article) { create(:article, :published) }
      let!(:draft_article) { create(:article, :draft) }
      let!(:archived_article) { create(:article, :archived) }

      it '公開中の記事のみを返すこと' do
        expect(Article.published).to eq [published_article]
      end
    end
  end

  describe 'callbacks' do
    describe 'before_save: :set_published_at' do
      before { travel_to base_time }

      let(:base_time) { '2024-03-02 12:34'.to_datetime }

      context 'statusがpublished、かつpublished_atがnilの場合' do
        subject { build(:article, :published, published_at: nil) }

        it 'published_atが現在の時刻でセットされること' do
          expect { subject.save }.to change { subject.published_at }.from(nil).to(base_time)
        end
      end

      context 'statusがpublished以外、かつpublished_atがnilの場合' do
        subject { build(:article, :not_published, published_at: nil) }

        it 'published_atがセットされないこと' do
          expect { subject.save }.not_to change { subject.published_at }
        end
      end

      context 'statusがpublished、かつpublished_atがnilでない場合' do
        subject { build(:article, :not_published, published_at: base_time - 1.day) }

        it 'published_atがセットされないこと' do
          expect { subject.save }.not_to change { subject.published_at }
        end
      end
    end
  end
end
