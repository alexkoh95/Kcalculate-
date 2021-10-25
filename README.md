
# Kcalculate-

### Project Name: *Kcal*culate

### Team Name: Counting Bros


#### *Kcal*culate 

A health and fitness application used to log nutritional data from daily meals, built with React and MongoDB (MERN stack). 

Libraries used: Moment.js, Chart.js, Tailwind CSS

## Project Status
Version 1.0 

This app was created by Iman Maliki, Soh Wei Hong, and Alexander Koh as part of the requirements in their General Assembly Software Engineering Immersive Course.

## App Functions:

The main functions of the app is working. Users can do the following:

 - **Account Creation**: Users of the app can create an account and store their data. Data presented in their daily logs are specific to their nutritional logs
 - **Dashboard**: Users can view their daily nutritional information and personal goals (Overview, Weight Watch, Remaining Macronutrients (calories, protein, carbohydrates, fats) in the day
 - **Log Information**: Users can log their daily nutritional information by searching for what they have consumed and entering the results into their database. This search calls upon the Nutrition Ninja API 
 - **Log History**: Users can see their last 7 days of nutritional information (calories, protein, carbohydrates, fats). This is displayed in a graph and a sidebar. Clicking on the sidebar will allow users to see the breakdown of that day's nutritional information (what food entires, macronutritional data)
 - **Settings**: Users can change their settings (password, weight, target macronutritional data, target weight) 
 - **Logout**: Users can log out of their accounts. 


## Project Screen Shot(s)

### Login Screen

![Login Screen](https://imgur.com/L2rMccu.jpg)

### Dashboard

![Dashboard](https://imgur.com/OqJy7ae.jpg)

### Log Page
![Log Page](https://imgur.com/cvgj3gx.jpg)

### Log History
![Log History](https://imgur.com/sJbXG2o.jpg)


## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

This was a week long group project built during the third module at General Assembly (GA) Singapore (SEI-31). Project goals include:
 - (1) Building a frontend with React
 - (2) Connecting frontend and backend with APIs
 - (3) Storing data in an online database such as MongoDB Atlas
 - (4) How to collaborate in a team by using GitHub (fetch, commit, push, pull cycle) 

We reinforced our understanding of the content taught by GA by using a MERN stack to achieve our app's functions. 

The main features I contributed to in this group projects are (1) Pulling from CalorieNinja's API and storing information in the database, (2) Displaying insights in the Log History page. s

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
