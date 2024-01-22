# frozen_string_literal: true

class Admin::User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :registerable, :recoverable, :rememberable, :confirmable, :lockable,
  # :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :articles, foreign_key: 'admin_user_id', dependent: :restrict_with_error, inverse_of: :user

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
end
