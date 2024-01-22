class Article < ApplicationRecord
  extend Enumerize

  belongs_to :user, class_name: 'Admin::User', foreign_key: :admin_user_id, inverse_of: :articles

  enumerize :status, in: %i(draft published private), default: :draft

  validates :title, presence: true
  validates :body, presence: true
  validates :status, presence: true, inclusion: { in: self.status.values }
end
