class StaticPagesController < ApplicationController
  def home
  end

  def map
    @post = Post.find(params[:post])
    p params
    p @post
    p @post
    p @post
    p @post
    p @post
    p @post
    p @post
    p @post
    p @post
    p @post
    p @post
    p @post

  end

  def help
  end
end
