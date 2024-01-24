require 'rails_helper'

RSpec.describe Article, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user).class_name('Admin::User').inverse_of(:articles) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:body) }
    it { is_expected.to validate_presence_of(:status) }
    it { is_expected.to enumerize(:status).in(:draft, :published, :archived).with_default(:draft) }
  end
end
