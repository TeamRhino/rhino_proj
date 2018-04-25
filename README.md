# Team Rhino Disaster Relief UI Remake
This project was created as an example for a better user interface for Hawaii's disaster alerts. After the Hawaii missile alert crisis, the ICS department at the University of Hawaii has been trying it's best to increase awareness about technology to the State. This is just one example of an improved user interface that the State can use to hopefully reduce the chance of another missile alert happening again.

# Installation Instructions
1. You must have Node installed and the ability to use NPM on your computer. Ideally running npm on the command line would be best.
2. Run the npm install command to download any dependencies for the project
3. To start the app run the npm start command. 

## Yarn
1. Alternatively you can use yarn to run the application. Please download Yarn from Facebook.
2. Yarn is a CLI program. By running yarn start we can spin up the application on your localhost
3. Access the website through localhost:3000
4. Run all unit tests through yarn test

# Technologies used
We chose to implement this project using React with a Redux backend. This is because it is a very popular framework and some of us had some experience using it. 

The testing framework we used was Jest with Enzyme. This made it easy to mock out our React components and test the state of them. It also made it easy to fuzz different types of input into our React Components.

# Login System 
We implemented the login system using a React + Redux tutorial provided by Jason Watmore which can be found here http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example#auth-header-js
