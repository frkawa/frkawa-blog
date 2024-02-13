class ArticleSerializer < BaseSerializer
  attributes :id, :title, :body, :status

  attribute :published_at do |resource|
    resource.published_at.strftime('%Y-%m-%d')
  end

  attribute :updated_at do |resource|
    (resource.updated_at == resource.created_at) ? '' : resource.updated_at.strftime('%Y-%m-%d')
  end
end
