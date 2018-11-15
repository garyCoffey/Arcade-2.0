# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 10.times do 
#   User.create(email: "Faker::RickAndMorty.location", encrypted_password: "Faker::RickAndMorty.quote")
#   # Post.create(name: Faker::StarWars.character, place: Faker::HarryPotter.location, description: Faker::MostInterestingManInTheWorld.quote, category_id: ( rand(10) ))
# end
email = 'garycoffey12@gmail.com'
generated_password = Devise.friendly_token.first(8)

User.create(:email => email, :password => generated_password)


10.times do 
  Post.create(address: Faker::RickAndMorty.location, blog: Faker::RickAndMorty.quote, user_id: 1)
  # Post.create(name: Faker::StarWars.character, place: Faker::HarryPotter.location, description: Faker::MostInterestingManInTheWorld.quote, category_id: ( rand(10) ))
end