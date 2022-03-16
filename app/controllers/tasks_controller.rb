class TasksController < ApplicationController
    def create
        task = Task.new(task_params)
        # debugger
        if task.save
            render json: task, status: :created
        else
            debugger
            render json: :error, status: 400
        end
    end

    def update
        task = Task.where(id: task_params[:id])
        if task.update(task_params)
            render json: task, status: :ok
        else
            debugger
            render json: :error, status: 400
        end
    end

    def destroy
        task = Task.find(task_params[:id])
        task.destroy
        head :no_content
    end

    private
    def task_params
        params.permit(:id, :list_id, :name, :due_date, :priority, :completed)
    end
end
