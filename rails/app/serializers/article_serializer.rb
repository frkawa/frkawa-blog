class ArticleSerializer < BaseSerializer
  root_key :article
  attributes :id, :title, :body, :status, :published_at, :updated_at
end
