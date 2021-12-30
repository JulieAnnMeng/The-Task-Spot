class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
        # user = User.find_by_email(params[:email].downcase)
        # if user && user.authenticate(params[:password])
        #     if user.email_confirmed
        #     #     sign_in user
        #     #   redirect_back_or user
        #         session[:user_id] = user.id
        #         render json: user, status: :created
        #     else
        #     flash.now[:error] = 'Please activate your account by following the 
        #     instructions in the account confirmation email you received to proceed'
        #     render 'new'
        #     end
        # else
        #   flash.now[:error] = 'Invalid username or password ' # needs to be double checked
        #   render 'new'
        # end
    end

    def show
        # debugger
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
