Rails.application.routes.draw do
  # resources :users do
  #   member do
  #     get :confirm_email
  #   end
  # end

  # resources :tasks
  # resources :lists

  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  
  get "/me", to: "sessions#show"
  delete "/me", to: "sessions#destroy"
  delete "/logout", to: "sessions#destroy"

  get "/lists", to: "lists#show"
  post "/lists", to: "lists#create"
  delete "/lists/:id", to: "lists#destroy"
  

  post "/tasks", to: "tasks#create"
  patch "/tasks/:id", to: "tasks#update"
  delete "/tasks/:id", to: "tasks#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
