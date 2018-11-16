class StaticPagesController < ApplicationController
  def home
  end

  def game
  end

  def map
    @post = Post.find(params[:id])
  end

  def help
  end
end
