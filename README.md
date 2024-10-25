# Multiple_Certificate_Generator
# Getting Started with Create React App
# Multiple_Certificate_Generator_Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Folder Structure 
```
project_root/
├── public/                              # Public files like index.html and static assets
│   ├── index.html
│   ├── favicon.ico
│   ├── assets/
│   │   ├── images/
│   │   └── styles/                     # Global styles (if any)
│   │       └── global.css
├── src/
│   ├── components/                      # Reusable UI components
│   │   ├── loginPage/                   # Login Page component
│   │   │   ├── LoginPage.js             # Login Page component
│   │   │   ├── LoginPageStyles.css      # Styles for Login Page
│   │   ├── email/                       # Email related components
│   │   │   ├── SignUp.js               # Sign Up component
│   │   │   ├── SignUp.css              # Styles for Sign Up
│   │   ├── AuthContext.js               # Authentication context
│   ├── routes/                          # Route definitions
│   │   ├── AppRoutes.js                 # Main routing file
│   ├── index.js                         # Entry point for React application
│   ├── App.js                          # Main application component
        |-RoutingFile                          
│   ├── styles/                          # Global styles and themes
│   │   ├── global.css                   # Global CSS for the entire application
├── package.json
└── README.md
```



# Multiple_Certificate_Generator_Frontend

## Technologies
```
Server: NodeJS
Databases: MySQL, Redis
```

## Instructions
```
1. Setup NodeJS environment
2. Install MySQL and setup MySQL Workbench: https://www.youtube.com/watch?v=k5tICunelSU 
3. Install Redis Server and run it locally: https://youtu.be/DLKzd3bvgt8?feature=shared 
4. Replace connection details in mysql.js

create .env file in  root directory and add database credentials like this: 

DATABASE_USERNAME= "root"
DATABASE_PASSWORD= "harshal123"
DATABASE_NAME= "certificate_db"
DATABASE_HOST= "localhost"
DATABASE_PORT= "3306"
SECRET_KEY= "harshal"
SESSION_EX_TIME = "604800"



5. Do npm install in root directory of the project
6. Install nodemon for hot reload
7. Do npm start to start the server
```

## Folder Structure
```
project_root/
├── src/
│   ├── services/
│   │   ├──database/
│   │   │   ├──mysql.js
│   │   │   ├──redis.js
│   │   ├──email/
│   │   │   ├──email.js
│   ├── v1/
│   │   ├──middlewares/                 <----   Middlewares added under version 1
│   │   ├──utils/
│   │   ├──login/
│   │   │   ├──login.routes.js          <----   Routes related to the module (eg: login)
│   │   │   ├──login.validation.js      <----   Validations of api related to the module (eg: login)
│   │   │   ├──login.controller.js      <----   Controller of api related to the module (eg: login)
│   │   │   ├──login.services.js        <----   Database operations of api related to the module (eg: login)
│   │   ├──signup/
│   │   ├──reset-password/              <----   Replace the folder name with module name
│   │   ├──routes.v1.js                 <----   Version 1 (v1) API routes
│   ├── routes.root.js                  <----   Routing base file
├── bin/
│   ├──www
├── app.js
```
