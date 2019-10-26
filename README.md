# **JS Trial - Frontend App**

## **This is a task to build a frontend displaying a list of user profiles** 

A display of profiles for a dating app - more details can be found in the Project Notes section further down.

The Front End runs at http://localhost:8080 or http://localhost:8081

The API can be found in the [js-trial-task repository](https://github.com/HorrorOfPartyBeach/js-trial-task) and when installed runs at http://localhost:3000

------------

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

----------

## **Installing**

### **Get this Repository**

* cd into the folder you want to save the copy to and git clone the repo:

```
$ git clone https://github.com/HorrorOfPartyBeach/Northcoders-News-FE.git
```

### **Start**

* `npm install`
* `npm start`

--------------

## **Project Notes**

### **What I did**

I decided to use React and Bootstrap for the front end as I wanted to refresh my skills with React and I haven't had much chance to work with JavaScript over the last few months (my last project was predominantly HTML and CSS). I used React Bootstrap so that the site would be responsive, unfortunately I encountered an issue which I didn't immediately notice and the profiles stopped displaying in a responsive grid. I didn't have enough time to fix it so had to use another option of displaying the profiles in 4 columns on all display sizes instead.

I used Webpack and Babel as I have been trying to look at ways to increase speed and performance in my apps while also being able to use ES6 but working on older browsers too. I find the drawback is that sites built with webpack are harder to debug due to bundling everything into a single file and I do always have to take more time setting webpack and babel up to work properly initially.

I haven't connected a front end to a backend API for almost a year so I did find that challenging but I'm pleased that I was able to display some returned data, including photos. I noticed some of the profiles didn't include pictures and picture comments so I used a generic alternative image from my assets folder and 'No comment' to display if no image/comment is found.

### **What I would do differently/with more time**

I would like to spend more time practicing with React and understanding Webpack and Babel further to cut down on my initial set-up time. I would also have used Bootstrap instead of React Bootstrap as I didn't anticipate some of the differences between the two. At the very least, I would read up on React Bootstrap in the future before using it.

I am disappointed that I had a responsive grid displaying and was unable to fix the problem so with more time I may have stripped the app back and rebuilt it. I also realise I need to spend time doing more projects like this and refreshing my knowledge on the principles of React, bootstrap and responsive design.

I would have also written some functions to display the time of the last login as time passed e.g. 'Last login: 30 mins ago" etc. I had thought of doing this by calculating current time, subtracting the time from the last login data and returning it in minutes, with some additionaly logic to handle displaying hours if the time passed is more than 60 mins or days if time passed is more than 24 hours etc.

With more time, I would have broken out the logic into more components rather than built into App.js and also created a component to display a full user profile with more detail.

I  would have liked to connect to the other endpoint and create a search function so that users could be filtered by distance or activity.

Additionally, I would incorporate much more accessibility into the site so that users who rely on screen readers and other accessible devices would be able to interact with the site better.

There is a lot of things I would like to do given more time and I do recognise that I need to strengthen my current skills. This has been a great task to discover the areas I can improve on and I appreciate the opportunity to build on what I know.

--------------

## **Built With**

* [React](https://reactjs.org/) - JS library for building user interfaces
* [React Bootstrap](https://react-bootstrap.github.io/) - Bootstrap CSS for React
* [Webpack](https://webpack.js.org/) - Static module bundler for modern JavaScript applications
* [Babel](https://react-bootstrap.github.io/) - Babel is a JavaScript compiler

----------------

## **Authors**

**Emma Gilmour** - [HorrorOfPartyBeach](https://github.com/HorrorOfPartyBeach)

---------------

## **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details