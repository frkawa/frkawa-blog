module Auth::JoinToken
  # NOTE: ログイン時にcookieにtokenを保存する
  include ActionController::Cookies
  extend ActiveSupport::Concern

  included do
    prepend_after_action :join_tokens, only: [:create]
  end

  private

    def join_tokens
      return if response.headers['access-token'].nil?

      cookies[:token] = {
        value: auth_headers_data,
        httponly: true,
        expires: 30.days,
        secure: true,
      }

      response.headers.delete_if {|key| auth_headers_data.include?(key) }
    end

    def auth_headers_data
      {
        accessToken: response.headers['access-token'],
        client: response.headers['client'],
        uid: response.headers['uid'],
      }.to_json
    end
end
