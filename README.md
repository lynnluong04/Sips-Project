# Sips

Visit the live site: https://sips-solo-project.herokuapp.com/

Welcome to Sips! 

Sips is fullstack web application modeled after Yelp and is focused on businesses that primarily serve beverages. Users can search for drinks within the Manhattan area of New York, NY and signed up users can add their own businesses as well. 

## Technologies Used
- Languages: Javascript, HTML, CSS
- Front-End: React, JSX, Redux
- Back-End: Express, Sequelize
- Database: PostgreSQL
- Hosting: Heroku

## How to launch the full application
1. Run the following command in the directory of your choice: "git clone https://github.com/lynnluong04/Sips-Project.git"
2. Run the command "npm install" in both the frontend and backend directory
3. Run the command "npm start" in both the frontend and backend directory

## Index 
* [Feature List](https://github.com/lynnluong04/Sips-Project/wiki/Feature-List)
* [Database Schema](https://github.com/lynnluong04/Sips-Project/wiki/Database-Schema)
* [Redux State Shape](https://github.com/lynnluong04/Sips-Project/wiki/State-Shape)

## To-dos/Future features
* allow users to upload images for their businesses and reviews through AWS
* profile page
* Friends
* Likes
* Google Maps API
* Search and filters

## Technical implementation details
This is my first fullstack web application so it definitely challenged my understanding of the technologies I used. Through the process of building my application, I gained a better understanding of not only the technologies but also the data flow and how each part of the app communicated to each other.

Here are some of the obstacles I encountered while buiding Sips:
I ran into several instances where my state was not being properly hydrated and this prevented the website from updating dynamically. The updates would appear only after refreshing the page. From the errors I knew that it was most likely an issue in the frontend portion of my code. After tracing the data flow I discovered that in my reducer functions, I used the variable I declared in my thunk to update the state instead of the actual payload variable I declared in my action. Debugging this issue helped me visualize the data flow better. It also made me realize the importance of naming variables.
Another issue that I had was using incorrect paths in my thunk and backend routes which prevented any data from being sent to the database or vice versa. 

