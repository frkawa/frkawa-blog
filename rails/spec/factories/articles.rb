FactoryBot.define do
  factory :article do
    association :user, factory: :admin_user
    title { Faker::Book.title }
    body { Faker::Lorem.paragraphs.join("\n") }
    status { Article.status.values.sample }
    published_at { Time.current }
  end
end
