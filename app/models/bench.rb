# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  discription :text
#  lat         :float
#  lng         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng < ?", bounds[:northEast][:lng])
        .where("lng > ?", bounds[:southWest][:lng])
  end

end
