shared_context '管理画面にサインイン' do
  let(:user) { create(:admin_user) }
  let!(:auth_tokens) { sign_in(user) }
end
