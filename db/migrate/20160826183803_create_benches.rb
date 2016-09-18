class CreateBenches < ActiveRecord::Migration[5.0]
  def change
    create_table :benches do |t|
      t.text :description
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
