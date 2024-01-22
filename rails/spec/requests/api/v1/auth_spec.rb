require 'rails_helper'

RSpec.describe 'Api::V1::Auth', type: :request do
  let(:user) { create(:admin_user) }

  describe 'サインイン POST /api/v1/auth/sign_in' do
    subject { post api_v1_admin_user_session_path, params: }

    context 'サインイン情報が正しい時' do
      let(:params) { { email: user.email, password: user.password } }

      it '200ステータスが返ること' do
        subject
        expect(response).to have_http_status(:ok)
      end
    end

    context 'サインイン情報が誤っている時' do
      let(:params) { { email: user.email, password: 'hogehoge' } }

      it '401ステータスが返ること' do
        subject
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'サインアウト POST /api/v1/auth/sign_out' do
    subject { delete destroy_api_v1_admin_user_session_path, params: sign_out_params }

    let(:sign_in_params) { { email: user.email, password: user.password } }
    before { post api_v1_admin_user_session_path, params: sign_in_params }

    context 'uid, access-token, clientが正しい時' do
      let(:sign_out_params) do
        {
          'uid': response.headers['uid'],
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
        }
      end

      it '200ステータスが返ること' do
        subject
        expect(response).to have_http_status(:ok)
      end
    end

    context 'サインイン情報が誤っている時' do
      let(:sign_out_params) do
        {
          'uid': 'hoge',
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
        }
      end

      it '404ステータスが返ること' do
        subject
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
