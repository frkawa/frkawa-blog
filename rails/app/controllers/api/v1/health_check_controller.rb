class Api::V1::HealthCheckController < ApplicationController
  def index
    render json: { message: 'Health Check OK!!' }, status: :ok
  end
end
