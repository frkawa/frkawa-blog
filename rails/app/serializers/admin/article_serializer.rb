class Admin::ArticleSerializer < BaseSerializer
  attributes :id, :url, :title, :body, :status

  attribute :published_at do |resource|
    resource.published_at&.strftime('%Y年%-m月%-d日 %R')
  end

  attribute :created_at do |resource|
    resource.created_at.strftime('%Y年%-m月%-d日 %R')
  end

  attribute :updated_at do |resource|
    resource.updated_at.strftime('%Y年%-m月%-d日 %R')
  end
end
