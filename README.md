# Report: Front-end interview exercise

## 1. Requirements

### A. Create a simple CRUD application using React and JSONPlaceholder API

- ✅  Retrieve and display a list of posts (user, title, body)
- ✅  Create new post (showing a simple form in place that submit data) displaying
the created data when submitted
- ✅  Delete a post (with a button for each element in the list)
- ✅  Show us your design skills, giving a better look to what you’ve done (using
pure CSS or a framework)

### B. Bonus

- ✅  Update a post (with a button for each element in the list, showing a form in place with data to update) displaying the updated data when submitted
- ✅  Use a database or local storage to store the data
- ✅  Deploy

### C. Extra

- ✅  Make it a mobile-responsive Progressive Web App (PWA)
- ✅  Add some relevant fields to blog posts: images, date stamps, categories

## 2. Design choices

- As `tailwind.css` is part of the stack of Tapio, I decided to give it a try…and loved it ! Given the limited amount of time, I did not use Figma to prototype, but directly deep dived into the code.
- The overall “look and feel”, quite modern/minimalist, is greatly inspired from existing Tapio design (e.g. color palette, typography, …)

[Screenshots / Mockups](https://www.notion.so/4d33c8fa2ba541cd9232a8e327ac891d)

## 3. Technical choices

- As I am familiar with the Firebase/GCP ecosystem, I decided to use:
    - **Firebase Hosting** as my hosting platform
    - **Cloud Firestore** as my NoSQL cloud database

## 4. Room for improvement

<aside>
💡 This submission represents my efforts to complete the assignment during my personal time outside of work, within a week. I began this task with no professional experience in React and Tailwind, and as such, there may be opportunities for improvement in the code. However, I have done my best to demonstrate my understanding and ability to learn new technologies within the given time frame, and feel satisfied with the results.

</aside>

Here is a list of significant ways to improve this work, for a “production” build: 

- **Make use of Strapi, in the back-end**: Strapi is an open-source content management framework that allows developers to easily create and manage a RESTful API for their web and mobile applications, it's useful for managing a blog because it allows to easily create, read, update and delete the contents of the blog, handle authentication and authorization (therefore security) and also it can be extended with custom logic and plugins.
- **Make use of Typescript:** using TypeScript instead of JavaScript would have improved the application by providing stronger typing and better organization for handling complex data, such as blog posts, in the database.
- **Make use of Jest and Cypress:** Cypress and Jest include writing clear and concise test cases that cover both the component's behavior and its interactions with the application's state, using a combination of unit tests with Jest for testing small, isolated pieces of code and end-to-end tests with Cypress for testing the full flow of the application.
- **Try a more fancy design:** Simple examples I had in mind were adding [particles.js](https://vincentgarreau.com/particles.js/) in the background, as well as a [“typewriting effect”](https://www.npmjs.com/package/typewriter-effect) in the introduction. Then get feedback from real users and adjust.
- **Make use of Vite instead of CRA:** Using Vite instead of CRA would have improved the development experience by providing faster and more efficient builds, as well as offering a more lightweight and customizable setup.
- **Cleaning dependencies:** In general, maintaining a healthier and more modern dependency tree and library base would improve the overall stability and security of the application.
- **Optimise the performance:** by utilizing tools such as the React Developer Tools and Lighthouse in Chrome DevTools, taking care of best practices such as lazy loading, code splitting and utilizing efficient libraries and frameworks, as well as taking advantage of caching mechanisms that can be provided by PWA service workers.
- **Set up CI/CD pipeline:** To improve the overall quality and reliability of the React application, a continuous integration and continuous delivery pipeline could be implemented utilizing Github Actions. This pipeline could incorporate automated testing utilizing Lighthouse for performance testing, Cypress for end-to-end testing, and Jest for unit testing, ensuring that code changes are thoroughly vetted before being deployed to production.

## 5. Source code and hosting url

The hosted version is accessible here:

[My Tapio](https://my-tapio-assignment.web.app/)

The Github repository (temporarily public) can be found here:

[https://github.com/ggustin93/Front-end-exercise-tapio](https://github.com/ggustin93/Front-end-exercise-tapio)

---

# How to run it

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
