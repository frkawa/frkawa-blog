class Api::V1::ArticlesController < ApplicationController
  def index
    articles = Article.published.order(created_at: :desc)
    render json: ArticleSerializer.new(articles)
  end

  def show
    article = Article.published.find_by(id: params[:id])
    if article
      render json: ArticleSerializer.new(article)
    else
      render json: { error: 'Article not found.' }, status: :not_found
    end
  end
end
