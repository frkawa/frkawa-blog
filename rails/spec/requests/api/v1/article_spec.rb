require 'rails_helper'

RSpec.describe 'Api::V1::Article', type: :request do
  describe '記事一覧 GET /api/v1/articles' do
    before do
      create_list(:article, 3, :published)
      create_list(:article, 3, :draft)
      get api_v1_articles_path
    end

    it '200ステータスが返ること' do
      expect(response).to have_http_status(:ok)
    end

    it '公開済みの記事の一覧が取得できること' do
      expect(JSON.parse(response.body).length).to eq 3
      expect(JSON.parse(response.body)).to be_all {|article| article['status'] == 'published' }
    end
  end

  describe '記事取得 GET /api/v1/articles/[:url]' do
    let(:published_article) { create(:article, :published) }
    let(:draft_article) { create(:article, :draft) }

    context '公開済みの記事の場合' do
      before { get api_v1_article_path(published_article.url) }

      it '200ステータスが返ること' do
        expect(response).to have_http_status(:ok)
      end

      it '公開済みの記事が取得できること' do
        expect(JSON.parse(response.body)['status']).to eq 'published'
      end
    end

    context '下書きの記事の場合' do
      before { get api_v1_article_path(draft_article.url) }

      it '404ステータスが返ること' do
        expect(response).to have_http_status(:not_found)
      end
    end

    context '存在しない記事の場合' do
      before { get api_v1_article_path('dummy') }

      it '404ステータスが返ること' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
