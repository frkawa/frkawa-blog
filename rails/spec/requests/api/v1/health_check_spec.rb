require "rails_helper"

RSpec.describe "Api::V1::HealthCheck", type: :request do
  describe "GET /api/v1/health_check" do
    subject { get "/api/v1/health_check" }

    it "正常なレスポンスが返ること" do
      subject
      json = JSON.parse(response.body)

      expect(response).to have_http_status(:ok)
      expect(json["message"]).to eq("Health Check OK!!")
    end
  end
end
