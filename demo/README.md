## Job Listing Web App With React and Tailwind

## Intro

So basically, this is my first react project and I wouldn't mind documenting what my project entails. Working with React has exposed me to a deep understanding of dealing with a robust frontend framework(library) like React.js.

## Overview

In summary, this project was built with React and Tailwind CSS. It's a simple and interactive project that fetches data from a mock backend using a JSON server. A JSON file is created with some data, which we then send a "GET" request as well as put "POST" delete and some functionalities like add-job, edit-job, and update-job. Before achieving this process, I installed the tailwind config file using the following resource (https://tailwindcss.com/docs/guides/vite) and changed the grid template columns. I worked with react routes as well for page navigation and attached a not found (404 page) to the project. 


## State Management

This web app consists of 8 reusable components. Two of which are spinners and navbar components. The home page is made up of a simple layout with three nav links that make up the navbar. In addition, two card sections for developers and employers appear beneath the hero section for users to browse or add jobs respectively.  The use of tailwind css in this project makes it responsive on smaller devices. The job section contains all the available jobs since the homepage displays only 3 different jobs by default. The add job section displays a form used by employers or recruiters to fill out the necessary information as regards the job type, description, salary, location, and company details. I got used to useState and this is seen in the job cards on the homepage under recent jobs. A user can toggle the description of the job details without refreshing the webpage. 

## Features

The features of the app are straightforward whereby a user can:
- Browse job
- Add job
- Edit job
- Update job
- Delete the job

## Screenshots

This are screenshots of my React app's homepage.

![Homepage(1)](./screenshots/Homepage(1).png)
![Homepage(2)](./screenshots/Homepage(2).png)

This are screenshots of my React app's job page and add-job page.
![Job_Page](./screenshots/Job_Page.png)
![Add-Job_Page](./screenshots/Add-Job_Page.png)


## Conclusion

In the meantime, this web app does not filter jobs and there's no sign-up page for users and employers. I also wish to add user authentication and authorization as well as an admin dashboard. These are other features I would love to add and see how I can improve the job listing web application in all areas.



# React + Vite (NB: These are optional) 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
