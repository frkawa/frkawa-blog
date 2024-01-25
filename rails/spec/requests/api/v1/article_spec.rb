require 'rails_helper'

RSpec.describe 'Api::V1::Article', type: :request do
  describe '記事一覧 GET /api/v1/articles' do
    before do
      create_list(:article, 3)
      get api_v1_articles_path
    end

    it '200ステータスが返ること' do
      expect(response).to have_http_status(:ok)
    end

    it '記事一覧が取得できること' do
      expect(JSON.parse(response.body).length).to eq 3
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
