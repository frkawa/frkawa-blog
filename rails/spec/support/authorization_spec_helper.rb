module AuthorizationSpecHelper
  def sign_in(user)
    post api_v1_admin_user_session_path, params: { email: user.email, password: user.password }
    response.headers.slice('uid', 'access-token', 'client')
  end
end
