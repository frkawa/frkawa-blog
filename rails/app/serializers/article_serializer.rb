class ArticleSerializer < BaseSerializer
  attributes :id, :url, :title, :body, :status

  attribute :published_at do |resource|
    resource.published_at.strftime('%Y-%m-%d')
  end

  attribute :updated_at do |resource|
    (resource.updated_at.to_date == resource.created_at.to_date) ? '' : resource.updated_at.strftime('%Y-%m-%d')
  end
end
