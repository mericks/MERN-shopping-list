# Cheese IQ

Educational app to learn more about the World of Cheese. 

Deployment site: https://cheese-iq.herokuapp.com/

Built with the MERN stack, Redux for state management, and Reactstrap and react-transition-group for styling.

I worked on this app in order to practice implementation of Redux. I added the Wikipedia call in order to have some quick content and decided to work with axios rather than fetch to gain additional experience. Likewise, use of the reactstrap library was based on a desire for experience and exposure.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Deployment

This app is deployed to Heroku and includes a Heroku post build script that compiles the React frontend on the server. Simply push to Heroku to build and load the client index.html page.

## App Info

### Built With

* [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) - Recommended tool chain for creating a new single-page app
* [Redux](https://redux.js.org/) - State management
* [reactstrap](https://reactstrap.github.io/) - React Bootstrap 4 components
* [react-transition-group](https://reactcommunity.org/react-transition-group/) - React transition components
* [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) - Data and image source

### Author

Michelle Erickson

### Version

1.0.0
