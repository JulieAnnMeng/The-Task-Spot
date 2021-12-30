class UsersController < ApplicationController

    def create
        user = User.new(user_params)    
        if user.save
            session[:user_id] = user.id
            debugger
            render json: user, status: :created
        #     UserMailer.registration_confirmation(@user).deliver
        #     flash[:success] = "Please confirm your email address to continue"
        #     redirect_to root_url
        else
            flash[:error] = "Ooooppss, something went wrong!"
            render 'new'
        end
    
    
    end

    # def confirm_email
    #     user = User.find_by_confirm_token(params[:id])
    #     if user
    #         user.email_activate
    #         flash[:success] = "Welcome to the Task Spot! Your email has been confirmed.
    #         Please sign in to continue."
    #         redirect_to signin_url
    #     else
    #         flash[:error] = "Sorry. User does not exist"
    #         redirect_to root_url
    #     end
    # end
    # unable to get email working. will come back to it later

    private
    def user_params
        params.permit(:id, :first_name, :last_name, :username, :password, :password_confirmation)
    end

end
