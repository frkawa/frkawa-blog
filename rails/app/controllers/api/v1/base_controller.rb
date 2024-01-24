class Api::V1::BaseController < ApplicationController
  alias_method :current_user, :current_api_v1_admin_user
  alias_method :authenticate_user!, :authenticate_api_v1_admin_user!
  alias_method :user_signed_in?, :api_v1_admin_user_signed_in?
end
