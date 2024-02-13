class Api::V1::ArticlesController < Api::V1::BaseController
  before_action :authenticate_user!, only: [:create]

  def index
    articles = Article.all.order(created_at: :desc)
    render json: ArticleSerializer.new(articles)
  end

  def show
    article = Article.find_by(id: params[:id])
    if article
      render json: ArticleSerializer.new(article)
    else
      render json: { error: 'Article not found.' }, status: :not_found
    end
  end

  def create
    article = current_user.articles.create!(article_params)
    render json: ArticleSerializer.new(article)
  end

  private

    def article_params
      params.require(:article).permit(:title, :body, :status).merge(published_at: Time.current)
    end
end
