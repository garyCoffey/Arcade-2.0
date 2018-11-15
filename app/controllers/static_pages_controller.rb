class StaticPagesController < ApplicationController
  def home
  end

  def map
    @post = Post.find(params[:id])
  end

  def help
  end
end
