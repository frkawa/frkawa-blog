FactoryBot.define do
  factory :article do
    association :user, factory: :admin_user
    title { Faker::Book.title }
    body { Faker::Lorem.paragraphs.join("\n") }
    status { Article.status.values.sample }
    published_at { Time.current }

    trait :published do
      status { Article.status.find_value(:published) }
    end

    trait :draft do
      status { Article.status.find_value(:draft) }
    end
  end
end
