# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Multi-step form solution](#frontend-mentor---multi-step-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](<./localhost*3000*(desktop).png>>)
![](./localhost*3000*(iPhone SE).png)

### Links

- Solution URL: [Add solution URL here](https://github.com/nain12/multi-step-form)
- Live Site URL: [Add live site URL here](https://multi-step-form-nain12.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [SCSS](https://sass-lang.com/) - CSS libary

### What I learned

Form validation in React was a bit tricky for me.

I started using uncontrolled forms for the first step of the form.

I soon realized that if I wanted to have real time validation instead of validating on the click of Submit button I had to switch to controlled forms.

Validation suddenly became a lot more easier with controlled forms.

I also used ReactJs useState extensively to preserve the selection of each step of the form.

Maintained a single source of truth in one component which made the flow of data predictable.

Making sure that the value of the state remained consistent depending on any user action anywhere along the steps was a challenge.

Provided default values for props everywhere to ensure that the app doesn't break unexpectedly.

Separating out the UI components into a separate folder helped me keep the code organized and clean.

Learned how to use mixins in CSS modules to avoid writing duplicate code.

### Continued development

I want to keep learning how to write less CSS code and make my designs more responsive.

I want to focus on responsive typography in the future.

I want to learn more about how to use CSS Grid more effectively.

### Useful resources

- [Build a custom toggle switch in React](https://w3collective.com/react-toggle-switch-component/) - I was clueless about creating a toggle switch from scratch. I found this resource helpful as the solution is simple enough to understand and can be used right away to integrate with your projects.

## Author

- Website - [Nainy Sewaney](https://www.nainysewaney.com)
- Frontend Mentor - [@nain12](https://www.frontendmentor.io/profile/nain12)
