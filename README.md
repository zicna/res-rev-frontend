# Restaurant Reviewer Application

---

### Intro:

This application is part of my final step of the Flatiron Bootcamp voyage. In this application we can add, edit or delete restaurants,  browse through ones already in it. For each restaurant we can add new, delete or edit old reviews which will afect restaurant rating as a guide for a better restaurant experience. Enjoy!

![](https://image.shutterstock.com/image-photo/five-stars-on-dark-background-260nw-645742324.jpg)

---

### Table of content

1. [Description](#description)
2. [Backend ](#backend)
   1. [Database](####database)
   2. [Versoning](####versoning)
   3. [File structure](####file-structure)
   4. [Instalation](####instalation)
3. [Frontend](@frontend)
   1. [Versoning](####versoning)
   2. [File structure](####file-structure)
   3. [Instalation](####instalation)
5. [How to use this application](#how-to-use)
6. [Future upgrades](#future-upgrades)
7. [Bugs](#Bugs)
8. [License](#License)

## Description

---

## Backend

#### Database 
The database consists of two tables with `has_many` and `belongs_to` associations between them. 
![Database](public/Res-rec-app-database.jpeg)

It uses **Rails as API** provider with **PostgreSQL** as database. 

#### Versioning
**Ruby** version: `2.6.1p33 (2019-01-30 revision 66950) [x86_64-darwin20]`.

**Rails** version: `6.1.4.1 ` 
#### File structure
Regular Ruby on Rails file structure
![Rails-file-structure](public/Rails-app-file-structure.png)
#### Instalation
This is [link](https://github.com/zicna/res-rev-backend) for backend GitHub repo. 
- Fork it
- Clone it to local enivironment
- Run following commands
  ```
  rails db:create
  rails db:migrate
  rails db:seed
  rails server
  ```
  This will create database, migrate the tables and seed them with dummy data from *seed.rb* file. Server will run on `http://localhost:3001`. Note that we changed default port for `rails server` command from `3000` to `3001`.

---

## Frontend
#### Versioning of React and main dependencies
```
"react": "^17.0.2",
 "react-dom": "^17.0.2",
 "react-icons": "^4.3.1",
 "react-redux": "^7.2.6",
 "react-router-dom": "^5.3.0",
 "redux": "^4.1.2",
 "redux-thunk": "^2.4.1",
```

#### File structure
![React file structure](public/react-file-structure.png)
#### Instalation
After foking and cloning to local environment navigate to root directory. 

Run following commands:

`npm install` this will install all modules taht are listed in `package.json` file and their dependencies.

`npm start` this will runs predefined command specified in the `start` property of package's `scripts` which is `react-scripts start` 

*Note:*
`react-scripts start` sets up the develpoment environment and starts a server


---

## How To Use

After everything is up and running we can navigate to `localhost:3000` which will be home page fo our application. 

---

## Future Uppgrades
- [ ] Styling
- [ ] Adding user model on backend
- [ ] Authentication and Authorization (using JWT and devise)

---

## Bugs
1. On hard refresh data is lost 
2. 

---

## License

[MIT](LICENSE)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
