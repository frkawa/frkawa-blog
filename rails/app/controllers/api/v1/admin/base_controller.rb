class Api::V1::Admin::BaseController < Api::V1::BaseController
  include ActionController::Cookies

  before_action :split_token

  private

    def split_token
      return if cookies[:token].nil?

      token = cookies[:token]

      request.headers['access-token'] = token['access-token']
      request.headers['client'] = token['client']
      request.headers['uid'] = token['uid']
    end
end
