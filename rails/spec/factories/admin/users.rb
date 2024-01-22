FactoryBot.define do
  factory :admin_user, class: 'Admin::User' do
    email { Faker::Internet.email }
    password { Faker::Internet.password }
    password_confirmation { password }
  end
end
