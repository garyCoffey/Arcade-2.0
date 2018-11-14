Rails.application.routes.draw do
  devise_for :users
  root to: "feeds#index"

  resources :feeds do
    resources :comments 
  end
end
