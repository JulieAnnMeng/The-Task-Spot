class ListsController < ApplicationController
    def show
        lists = List.where:user_id == session[:user_id]
        render json: lists
    end

    def create
        list = List.new(list_params)
        if list.save
            render json: list, status: :created
        else
            debugger
            render json: :error, status: 400
        end
    end

    def destroy
        list = List.find(list_params[:id])
        list.destroy
        head :no_content
    end

    private
    def list_params
        params.permit(:id, :user_id, :title, :description)
    end
end
