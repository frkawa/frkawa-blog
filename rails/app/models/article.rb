class Article < ApplicationRecord
  extend Enumerize

  belongs_to :user, class_name: 'Admin::User', foreign_key: :admin_user_id, inverse_of: :articles

  enumerize :status, in: %i[draft published archived], default: :draft, predicates: true

  with_options if: -> { status&.published? } do
    validates :title, presence: true
    validates :body, presence: true
  end

  # NOTE: URLは半角英数またはハイフン、アンダースコアのみを許可
  validates :url, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9-_]+\z/ }
  validates :status, presence: true, inclusion: { in: self.status.values }

  scope :published, -> { where(status: :published) }
end
