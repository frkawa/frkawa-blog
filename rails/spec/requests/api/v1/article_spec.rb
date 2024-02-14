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

  describe '記事取得 GET /api/v1/articles/[:id]' do
    let(:published_article) { create(:article, :published) }
    let(:draft_article) { create(:article, :draft) }

    context '公開済みの記事の場合' do
      before { get api_v1_article_path(published_article) }

      it '200ステータスが返ること' do
        expect(response).to have_http_status(:ok)
      end

      it '公開済みの記事が取得できること' do
        expect(JSON.parse(response.body)['status']).to eq 'published'
      end
    end

    context '下書きの記事の場合' do
      before { get api_v1_article_path(draft_article) }

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

  describe '記事投稿 POST /api/v1/articles' do
    let(:article_params) { attributes_for(:article) }

    context 'サインインしている時' do
      let(:user) { create(:admin_user) }
      let(:auth_tokens) { sign_in(user) }

      it '記事が投稿できること' do
        expect { post api_v1_articles_path, params: { article: article_params }, headers: auth_tokens }.to change { Article.count }.by(1)
        expect(response).to have_http_status(:ok)
      end
    end

    context 'サインインしていない時' do
      it '401ステータスが返ること' do
        expect { post api_v1_articles_path, params: { article: article_params } }.to change { Article.count }.by(0)
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
