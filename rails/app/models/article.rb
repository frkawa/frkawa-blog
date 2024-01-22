class Article < ApplicationRecord
  belongs_to :user, class_name: 'Admin::User', foreign_key: :admin_user_id
end
