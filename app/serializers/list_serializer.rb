class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :tasks

  def tasks
    # debugger
    return Task.where(list_id: object.id) 
  end
end
