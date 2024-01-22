require 'rails_helper'

RSpec.describe Admin::User, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:articles).class_name('Article').inverse_of(:user) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:email) }
  end
end
