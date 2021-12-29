class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :list, null: false, foreign_key: true
      t.string :name
      t.datetime :due_date
      t.string :priority
      t.boolean :completed

      t.timestamps
    end
  end
end
