Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/game'
  get 'static_pages/map'
  get 'static_pages/help'
  devise_for :users
  root to: 'home#index'
  namespace :api do 
    namespace :v1 do 
      resources :posts do
        resources :comments 
      end
    end
  end
end
