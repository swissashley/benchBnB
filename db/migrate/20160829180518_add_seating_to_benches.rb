class AddSeatingToBenches < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :seating, :integer
  end
end
