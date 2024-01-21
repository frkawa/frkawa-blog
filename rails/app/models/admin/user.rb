# frozen_string_literal: true

class Admin::User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :registerable, :recoverable, :rememberable, :confirmable, :lockable,
  # :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable
  include DeviseTokenAuth::Concerns::User
end
