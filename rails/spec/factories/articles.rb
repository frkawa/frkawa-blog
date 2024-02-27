FactoryBot.define do
  factory :article do
    association :user, factory: :admin_user
    sequence(:url) { |n| "article-#{n}" }
    title { Faker::Book.title }
    body { Faker::Lorem.paragraphs.join("\n") }
    status { Article.status.values.sample }
    published_at { Time.current }

    trait :published do
      status { Article.status.find_value(:published) }
    end

    trait :not_published do
      status { Article.status.values.without('published').sample }
    end

    trait :draft do
      status { Article.status.find_value(:draft) }
    end

    trait :archived do
      status { Article.status.find_value(:archived) }
    end
  end
end
