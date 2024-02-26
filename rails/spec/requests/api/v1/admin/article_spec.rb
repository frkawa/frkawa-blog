require 'rails_helper'

RSpec.describe 'Api::V1::Admin::Article', type: :request do
  describe '記事一覧 GET /api/v1/admin/articles' do
    before do
      create(:article, :published)
      create(:article, :draft)
      create(:article, :archived)
    end

    context 'サインインしていない時' do
      before { get api_v1_admin_articles_path }

      it '401ステータスが返ること' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'サインインしている時' do
      include_context '管理画面にサインイン'
      before { get api_v1_admin_articles_path, headers: auth_tokens }

      it '200ステータスが返ること' do
        expect(response).to have_http_status(:ok)
      end

      it '全ての記事の一覧が取得できること' do
        expect(JSON.parse(response.body).length).to eq 3
      end
    end
  end

  describe '記事取得 GET /api/v1/admin/articles/[:id]' do
    let(:article) { create(:article) }

    context 'サインインしていない時' do
      before { get api_v1_admin_article_path(article) }

      it '401ステータスが返ること' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'サインインしている時' do
      include_context '管理画面にサインイン'

      context '存在する記事の場合' do
        before { get api_v1_admin_article_path(article), headers: auth_tokens }

        it '200ステータスが返ること' do
          expect(response).to have_http_status(:ok)
        end

        it '記事が取得できること' do
          expect(JSON.parse(response.body)['id']).to eq article.id
        end
      end

      context '存在しない記事の場合' do
        before { get api_v1_admin_article_path('dummy'), headers: auth_tokens }

        it '404ステータスが返ること' do
          expect(response).to have_http_status(:not_found)
        end
      end
    end
  end

  describe '記事作成画面 GET /api/v1/admin/articles/new' do
    # NOTE: GETリクエストだが、記事編集画面でリアルタイム編集ができるようにnewの時点で下書き記事を作成している
    context 'サインインしていない時' do
      before { get new_api_v1_admin_article_path }

      it '401ステータスが返ること' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'サインインしている時' do
      include_context '管理画面にサインイン'

      context '未入力の下書き記事が存在する場合' do
        let!(:new_draft_article) { create(:article, :draft, user:, title: '', body: '') }

        before { get new_api_v1_admin_article_path, headers: auth_tokens }

        it '200ステータスが返ること' do
          expect(response).to have_http_status(:ok)
        end

        it '既に存在する未入力の下書き記事が取得できること' do
          expect(JSON.parse(response.body)['id']).to eq new_draft_article.id
        end
      end

      context '未入力の下書き記事が存在しない場合' do
        before { get new_api_v1_admin_article_path, headers: auth_tokens }

        it '200ステータスが返ること' do
          expect(response).to have_http_status(:ok)
        end

        it '新たに作成された未入力の下書き記事が取得できること' do
          expect(JSON.parse(response.body)['title']).to eq ''
          expect(JSON.parse(response.body)['body']).to eq ''
          expect(JSON.parse(response.body)['status']).to eq '下書き'
        end
      end
    end
  end

  describe '記事更新 PATCH /api/v1/admin/articles/[:id]' do
    let(:article) { create(:article) }
    let(:update_params) { { article: { title: 'update title', body: 'update body' } } }

    context 'サインインしていない時' do
      before { patch api_v1_admin_article_path(article), params: update_params }

      it '401ステータスが返ること' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'サインインしている時' do
      include_context '管理画面にサインイン'

      context '存在しない記事の場合' do
        before { patch api_v1_admin_article_path('dummy'), headers: auth_tokens, params: update_params }

        it '404ステータスが返ること' do
          expect(response).to have_http_status(:not_found)
        end
      end

      context '存在する記事の場合' do
        context '更新内容に問題無い場合' do
          before { patch api_v1_admin_article_path(article), headers: auth_tokens, params: update_params }

          it '200ステータスが返ること' do
            expect(response).to have_http_status(:ok)
          end

          it '記事が更新されること' do
            expect(article.reload.title).to eq 'update title'
            expect(article.reload.body).to eq 'update body'
          end

          it '更新された記事が取得できること' do
            expect(JSON.parse(response.body)['title']).to eq 'update title'
            expect(JSON.parse(response.body)['body']).to eq 'update body'
          end
        end

        context '更新内容に問題がある場合' do
          let(:update_params) { { article: { title: '', body: '', status: 'published' } } }

          before { patch api_v1_admin_article_path(article), headers: auth_tokens, params: update_params }

          it '422ステータスが返ること' do
            expect(response).to have_http_status(:unprocessable_entity)
          end

          it '記事が更新されないこと' do
            expect(article.reload.title).to eq article.title
            expect(article.reload.body).to eq article.body
          end

          it 'エラーメッセージが返ること' do
            expect(JSON.parse(response.body)['title']).to include 'を入力してください'
            expect(JSON.parse(response.body)['body']).to include 'を入力してください'
          end
        end
      end
    end
  end
end
