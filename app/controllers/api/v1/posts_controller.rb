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
    # @post = Post.find(params[:id])
    # redirect_to action_name_resource_path(resource_object, param_1: 'value_1', param_2: 'value_2')
    # redirect_to static_pages_map_path(post: @post)
    redirect_to static_pages_map_path(id: params[:id])
  end

  def destroy
    Fruit.destroy(params[:id])
  end

  def update
    fruit = Fruit.find(params[:id])
    fruit.update_attributes(fruit_params)
    render json: fruit
  end

  private

  def post_params
    params.require(:post).permit(:id, :address, :blog).merge(user_id: current_user.id)
  end

  def find_post
    params.require(:post).permit(:id)
  end





  # # GET /locations/1
  # def show
  # end

  # # GET /locations/new
  # def new
  #   @location = Location.new
  # end

  # # GET /locations/1/edit
  # def edit
  # end

  # # POST /locations
  # def create
  #   @location = Location.new(location_params)

  #   if @location.save
  #     redirect_to @location, notice: 'Location was successfully created.'
  #   else
  #     render :new
  #   end
  # end

  # # PATCH/PUT /locations/1
  # def update
  #   if @location.update(location_params)
  #     redirect_to @location, notice: 'Location was successfully updated.'
  #   else
  #     render :edit
  #   end
  # end

  # # DELETE /locations/1
  # def destroy
  #   @location.destroy

  #   redirect_to locations_url, notice: 'Location was successfully destroyed.'
  # end

  # private

  # def set_location
  #   @location = Location.find(params[:id])
  # end

  # def location_params
  #   params.require(:location).permit(:title, :description, :address)
  # end
end
