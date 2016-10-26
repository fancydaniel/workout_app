require 'rails_helper'

RSpec.feature "Signing User In" do

  before do
    @juan = User.create!(email: "juan@example.com", password: "password")
  end

  scenario "with valid credentials" do
    visit "/"

    click_link "Sign in"
    fill_in "Email", with: @juan.email
    fill_in "Password", with: @juan.password
    click_button "Log in"

    expect(page).to have_content("Signed in successfully.")
    expect(page).to have_content("Signed in as #{@juan.email}") 
  end
  
end