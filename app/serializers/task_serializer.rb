class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date, :priority, :completed
  has_one :list
end
