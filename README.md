# Challenge-3

## Requirements:

- **Must** use TypeScript on frontend and backend;
- Can't use type any;
- Pick either mongoDB or sqlite as database;
- **Must** protect the tour routes;
- Create sliding controls in carousel format, can use and library available to do so;
- Authentication must use Firebase, and the methods must be by email, google and facebook;
- can't persist data on frontend, must get from the api built in the backend;
- Can style using external libraries;
- The used pictures can be chosen freely;
- Create a Github repository and add the instructors as project collaborators;
- Add a README to your project;
- Do small commits, always using conventional commits;
- Every picture must be stored in either a bucket from S3 or Firebase Storage

### Optional requirements:

- responsiveness;
- Destination and destination details pages.

## Instructions:

After cloning the project, run the following commands inside the _backend_ **and** _frontend_ folders:

```bash
npm install
```

followed by:

```bash
npm run dev
```

use the localhost:5173 address to access the homepage once both services are running.

## Technology used:

- node.js;
- typescript;
- Amazon AWS S3;
- express;
- nodemon;
- sqlite;
- sequelize;
- cors;
- React;
- Vite;
- tailwindcss;
- axios;
- firebase;
- react-google-maps;
- react-progress-bar;
- react-toastify;
- swiper;

## backend:

there are 6 models:

- continent;
- country;
- tour;
- category;
- review;
- booking;

the listing route of most of them are accessed through the get method using the plural model name

example: "http://localhost:8000/tours"

and most post routes use the model name followed by /add

example: "http://localhost:8000/tour/add"

there are other routes, such as to get the average rating of a tour or to get the total count of reviews for a specific tour.
