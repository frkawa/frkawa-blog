class Api::V1::HealthCheckController < Api::V1::BaseController
  def index
    render json: { message: 'Health Check OK!!' }, status: :ok
  end
end
