# Quiz Application with React

This project is a dynamic quiz application built using React, allowing users to engage in customizable quizzes with various options for question quantity, difficulty level, and question type.

## Features:

1. **Customizable Quiz Parameters:** Users can specify the number of questions they want in the quiz, choose the difficulty level (easy, medium, or hard), and select the type of questions (multiple-choice or true/false).

2. **Fetching Questions:** Upon submitting their preferences, the application fetches questions from an external API (Open Trivia Database) based on the selected parameters.

3. **Quiz Interface:** Once the questions are fetched, users are presented with a quiz interface where they can answer each question within a set time limit. The application dynamically adjusts the time limit based on the number of questions.

4. **Scoring System:** Users earn points for correct answers, with the point value based on the difficulty level of the question. The total score is displayed to the user upon completion of the quiz.

5. **High Score Tracking:** The application keeps track of the user's high score, ensuring users can strive to beat their previous best.

## How to Use:

1. **Set Quiz Parameters:** Users can set the number of questions, difficulty level, and question type using the form provided.

2. **Start Quiz:** After submitting the preferences, the application fetches questions and presents the quiz interface.

3. **Answer Questions:** Users answer each question within the specified time limit.

4. **View Score:** Upon completion of the quiz, users can view their total score and high score.

5. **Restart or Try Again:** Users have the option to restart the quiz with new parameters or try the quiz again with the same settings.

## Technologies Used:

- React: Front-end framework for building dynamic user interfaces.
- React Context API: For managing application state and sharing data between components.
- Fetch API: For making asynchronous HTTP requests to retrieve quiz questions from the Open Trivia Database.
- JavaScript (ES6+): Core programming language for building interactive web applications.

## Project Scope:

This project provides a solid foundation for building and expanding upon a quiz application with React. Future enhancements could include features such as user authentication, leaderboards, category-based quizzes, and more question types. Additionally, improvements to the user interface and accessibility features could further enhance the overall user experience.

# Getting Started with Create React App

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
