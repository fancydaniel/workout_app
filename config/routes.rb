Rails.application.routes.draw do

  devise_for :views
  devise_for :users
  root to: 'dashboard#index'  
  
  resources :users do
    resources :exercises
  end

end
