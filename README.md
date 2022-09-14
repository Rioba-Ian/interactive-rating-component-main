# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges have helped improve my coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
These are screenshots of the mobile and desktop designs for both the before and after states. 
![](./images/Screen%20Shot%202022-09-14%20at%2014.52.24.png)
![](./images/Screen%20Shot%202022-09-14%20at%2014.52.36.png)
![](./images/Screen%20Shot%202022-09-14%20at%2014.53.11.png)

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live](https://rioba-ian.github.io/interactive-rating-component-main/)

## My process

At first I designed the main section for both the ratings and thank you. I tested whether it was toggle(able), than once the submit is hit, we can go to the other main card.

After that, it would be time to focus on the js part of collecting the data. In this part, I looped over all the buttons which I had also assigned values 1,2,3... like that. 
This meant that I could iterate over a button and getting its value as one clicked the other button. After that I assigned that value to another value called answerValue. 

Once I had this, I was to just "await" a click event on the submit button and save the result of the answer with an inner html to a span for the result in the thank you card. My solution is not perfect since a user can fail to submit and the button will still submit. I am still working on that and probably solve that issue. 

### Built with

- Semantic HTML5 markup (main, article, aside)
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I've learnt hover and active states for buttons once a button has been clicked we can set an active state to it. It is kinda confusing. 
