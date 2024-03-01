class Api::V1::ArticlesController < ApplicationController
  def index
    articles = Article.published.order(created_at: :desc)
    render json: ArticleSerializer.new(articles)
  end

  def show
    article = Article.published.find_by!(url: params[:url])
    render json: ArticleSerializer.new(article)
  end
end
