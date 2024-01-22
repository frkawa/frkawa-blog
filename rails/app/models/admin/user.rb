# frozen_string_literal: true

class Admin::User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :recoverable, :rememberable, :confirmable, :lockable,
  # :timeoutable, :trackable and :omniauthable

  # TODO: 本番ではregisterableは使わない。seedで自分用のadminアカウントを作る
  devise :database_authenticatable, :registerable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :articles, foreign_key: 'admin_user_id'
end
