# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.create!(description: "AppAcademy", lat: 37.776617, lng: -122.394687, seating: 4)
Bench.create!(description: "Fitbit", lat: 37.7892855, lng: -122.3971084, seating: 5)
Bench.create!(description: "Philz coffee", lat: 37.7897433 , lng: -122.3983637, seating: 4)
Bench.create!(description: "Fisherman's Wharf", lat: 37.8000267, lng: -122.4235967, seating: 1)
Bench.create!(description: "Palace of Fine Arts Theatre", lat: 37.7985739, lng: -122.4500572, seating: 3)
Bench.create!(description: "California Academy of Sciences", lat: 37.768337, lng: -122.459278, seating: 2)
Bench.create!(description: "City College of San Francisco", lat: 37.7493369, lng: -122.4750708, seating: 6)

User.create!(username: "user1", password: "password");
User.create!(username: "user2", password: "password");
