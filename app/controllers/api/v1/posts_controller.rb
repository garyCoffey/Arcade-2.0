class Api::V1::PostsController < ApplicationController
  # before_action :set_location, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  # GET /locations
  def index
    render json: Post.all
  end

  def create
    post = Post.create(post_params)
    render json: post
  end

  def show
    redirect_to static_pages_map_path(id: params[:id])
  end

  def destroy
    Post.destroy(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes(post_params)
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:id, :address, :blog).merge(user_id: current_user.id)
  end

  def find_post
    params.require(:post).permit(:id)
  end
end
