# React JS Workshop - Hands-on

## Setup

1. Clone this directory
2. cd into the project directory
3. run `npm install`

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run api-server`

Launches the locally installed json-server, using `db.json` as its data store.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### Initial State

We'll use static values early on in this workshop, so rather than typing this out, we'll just copy and paste these values into the appropriate part of the code.

```
{
  todos: [
    {id:1, name: "Get through some slides", isCompleted: true},
    {id:2, name: "Learn JSX", isCompleted: false},
    {id:3, name: "Learn React API", isCompleted: false},
    {id:4, name: "Profit", isCompleted: false}
  ],
  currentTodo: ''
}
```
