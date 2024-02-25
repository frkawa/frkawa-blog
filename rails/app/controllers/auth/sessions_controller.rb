class Auth::SessionsController < DeviseTokenAuth::SessionsController
  include Auth::JoinToken
end
