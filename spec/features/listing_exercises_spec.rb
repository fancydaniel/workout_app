require 'rails_helper'

RSpec.feature "Listing Exercises" do
  before do
    @john = User.create(email: "john@example.com", password: "password")
    # login_as(@john)

    visit "/"

    click_link "Sign in"
    fill_in "Email", with: @john.email
    fill_in "Password", with: @john.password
    click_button "Log in"

    @e1 = @john.exercises.create(duration_in_min: 20, workout: "Weights", workout_date: "2015-08-09", user: @john)
    @e2 = @john.exercises.create(duration_in_min: 20, workout: "Cardio", workout_date: "2015-08-09", user: @john)
  end

  scenario "shows user's workout" do
    visit "/"

    click_link "My Lounge"
    expect(page).to have_content(@e1.duration_in_min)
    expect(page).to have_content(@e1.workout)
    expect(page).to have_content(@e1.workout_date)
    expect(page).to have_content(@e2.duration_in_min)
    expect(page).to have_content(@e2.workout)
    expect(page).to have_content(@e2.workout_date)
  end

end