# REACT NIGHTS 2019

> This repository serves as an online course for learning React. It’s here to help those who want to learn more about React and frontend to develop a SPA.

## Introduction

In STRV we believe that the best way of learning is by writing a real project. We come up with a simple e-commerce app using the [Commerce Layer API](https://commercelayer.io).

> Please take a note that by learning React you won’t become a frontend developer. There are many other areas you should be able to handle. Stay tuned for `Frontend Nights`, where we are going to focus on everything except React :)

### Goal

### Source

### Prerequisites

## Course Structure

React Nights 2019 were designed for 8 weeks of studying, 16 lectures and 8 homeworks. During the period of teaching STRV frontend team was contributing to this repository.

STRV team also had a dedicated team of mentors helping our students to get through homeworks and also do the homework review of course :)

> We are highly opinionated when it comes to development. There are many other great approaches how to write apps. But what you can see in this repository is something close to what we do in a real world.

Our goal was to reveal some patterns incrementally. Some of the code was written in way it supposed to be refactored later. Thus please don’t think of this repository as recepy how to built a React app. It’s more-likely a showcase of different topics, yet done in the same project.

## Table of Contents

- [Lectures](#lectures)
  - [Week 1](#week-1)
    - [00. Introduction](#00-introduction)
    - [01. Project Setup](#01-project-setup)
    - [Homework #1](#homework-1)
  - [Week 2](#week-2)
    - [02. Project Architecture & React Router](#02-project-architecture--react-router)
    - [03. Styling in React](#03-styling-in-react)
    - [Homework #2](#homework-2)
  - [Week 3](#week-3)
    - [04. Global State Management](#04-global-state-management)
    - [05. Context API & Redux Middlewares](#05-context-api--redux-middlewares)
    - [Homework #3](#homework-3)
  - [Week 4](#week-4)
    - [06. Forms](#06-forms)
    - [07. Authentication & Routing in Depth](#authentication-and-routing-in-depth)
    - [Homework #4](#homework-4)
  - [Week 5](#week-5)
    - [08. Functional Programming](#08-functional-programming)
    - [09. HOCs, Render Props, Hooks](#09-hocs-render-props-hooks)
    - [Homework #5](#homework-5)
  - [Week 6](#week-6)
    - [10. Side Effects & Error Reporting](#10-side-effects--error-reporting)
    - [11. Testing in React](#11-testing-in-react)
    - [Homework #6](#homework-6)
  - [Week 7](#week-7)
    - [12. TypeScript](#12-typescript)
    - [13. Server-side Rendering vs. Static Export](#13-server-side-rendering-vs-static-export)
    - [Homework #7](#homework-7)
  - [Week 8](#week-8)
    - [14. Optimizing React Apps](#14-optimizing-react-apps)
    - [15. Deployment](#15-deployment)
    - [Homework #8](#homework-8)
- [Used technologies](#used-technology)
- [Speakers](#speakers)

## Lectures

Each lecture is around 1 hour long. There are two lectures per week. Followed by one mutual homework. You can follow commit history to see each lesson.

### [Week 1](#week-1)

#### [00. Introduction](#00-introduction)

Introduction to the React Nights course. Please note that course was designed to do a lot of selfstudying during _homeworks_. If you are planning to try this XY hours course we highly recommend to find a mentor who will review your Pull Requests.

> Of course you don't need to wait the whole week to continue to the next lesson. But we highly recommend to dedicate some extra time for studying of shared resources.

If you have recommendations how to improve this knowledge base, feel free to submit a PR.

#### [01. Project Setup](#01-project-setup)

As a project starter we choose create-react-app. Other great option could be Next.js or Gatsby. We would like to learn it right. So we need to ensure code quality, thus we implemented `Prettier` and `ESLint` and enforced it with precommit hook from combination of `husky` with `lint-staged`. Obviously as STRV developers we will use STRV's favourite configurations from [code-quality-tools](https://github.com/strvcom/code-quality-tools/).

> Note that we are not covering `stylelint` in this lesson, since it's a part of next weeks lesson - [Styling in React](#styling-in-react). Another decision that should be made from a very beginning is [TypeScript](#typescript) from [Week 8](#week-8). But to make learning curve a bit easier, we decided to add it later. If you are brave enough, feel to tart using it right away.

Before we will start implement features, let’s get API communication get ready. Before any implementation get familiar with API you are going to use. For our demo we choose CommerceLayer API. By reading it’s [API Reference](https://commercelayer.io/api/reference/) we need to implement authentication to be able get any resources. To do so we need to create an account in CommerceLayer and get a token from API.

For demonstration of correct implementation we are fetching `List of Products`.

This all for now. Let's write a simple README about what we did and how to use this project.

> [Video]() | [Presentation]() | [Pull Request]()

#### [Homework #1](#homework-1)

- Setup [commercelayer.io](https://commercelayer.io/)
- Project Setup
  - Project starter
  - API & config
  - Fetch list of products
  - Code quality tools
  - Documentation
- Read _Main Concepts_ in [amazing React docs](https://reactjs.org/docs/hello-world.html)

---

### [Week 2](#week-2)

#### [02. Project Architecture & React Router](#02-project-architecture--react-router)

The plan for this lecture is to implement `Product Detail`. For routing we will use [react-router](). But before we will start writing code, let's think how we will structure the whole project? In STRV we are fans of [grouping by features or routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes). This kind of decision should be done alredy in lecture [Project Setup](#project-setup). So we need to refactor our code a little bit.

We will use another API endpoint so it's probably about the time to implement `a simple http API client`. We will use native [fetch](https://fetch.spec.whatwg.org/) for simplicity, but otherwise we highly recommend `ky` or `axios`.

Now is everything set and ready. Let's go for the `Product Detail`!

> [Video]() | [Presentation]() | [Pull Request]()

#### [03. Styling in React](#03-styling-in-react)

Now we have List of Products and Product Detail. Before we move further let's implement some decent styles, so the app is more pleasant to work with.

In STRV we are big fans of CSS-in-JS namely `styled-components`. Brief introduction to a history, benefits and usage of styled-components. Showcase of `styled-system` and `@rebass/grid`

We also are setting a first styleguide. Styles lives in `styled.js` file next to the component. The only eception are global styles and variables files.

With CSS comes huge responsibility. Friendly check putted into precommit hook by stylelint. That's what you need.

If you are building a real project you should defenitely check out `Storybook`.

> [Video]() | [Presentation]() | [Pull Request]()

#### [Homework #2](#homework-2)

---

### [Week 3](#week-3)

#### [04. Global State Management](#04-global-state-management)

It's about the time to implement `Cart` and possibility to add products to it. We choose to demonstrate this functionality with Redux which is one of the most spread libraries in React ecosystem.

> [Video]() | [Presentation]() | [Pull Request]()

#### [05. Context API & Redux Middlewares](#05-context-api--redux-middlewares)

Redux comes with great middlewares. Let's briefly check what is it about. We will also leverage this gain knowledge in [Side Effects & Error Reporting](#side-effects-and-error-reporting) lecture.

Besides that it's also our duty to showcase a `Context API`, which is more than suitable for many usecases. But without any contribution to the project.

> [Video]() | [Presentation]() | [Pull Request]()

#### [Homework #3](#homework-3)

---

### [Week 4](#week-4)

#### [06. Forms](#06-forms)

A proper e-commerce should have a user profile, when our users can change their information or see the past orders.
Let's implement `Sign Up` page with [Formik]() and do a client side validation with [yup]()

> [Video]() | [Presentation]() | [Pull Request]()

#### [07. Authentication & Routing in Depth](#authentication-and-routing-in-depth)

Sign in, authentication, private routes, redirecting. With this lesson our app is almost ready.

> [Video]() | [Presentation]() | [Pull Request]()

#### [Homework #4](#homework-4)

---

### [Week 5](#week-5)

> Our app is almost ready. Now it's about the time to properely tune it! Of course in the real world we should start with following "advanced" patterns right away. But for learning purposes we believe this is the easiest way how to get in touch with it.

#### [08. Functional Programming](#08-functional-programming)

React is functional, let's learn how to make our app also functional.

> [Video]() | [Presentation]() | [Pull Request]()

#### [09. HOCs, Render Props, Hooks](#09-hocs-render-props-hooks)

During previous lesson we had a lot of code repetitions, let's make it more DRY!

> In this lesson we are doing a minor refactor from redux to hooks. On first sight it looks good and awesome, but it will backfire us in ### [Week 7](#week-7). This was done on purpose, so we can demonstrate that every decision in your codebase matters and requires a lot of thinking.

> [Video]() | [Presentation]() | [Pull Request]()

#### [Homework #5](#homework-5)

---

### [Week 6](#week-6)

#### [10. Side Effects & Error Reporting](#10-side-effects--error-reporting)

So far we were following happy path of development, aka that everything should work just as expected. But in a real world it's not the case. From time to time API server is down, internet connection is weak, or there is just unexpected error in our code.

> [Video]() | [Presentation]() | [Pull Request]()

#### [11. Testing in React](#11-testing-in-react)

Testing is a very important in any software development. Let's take a look, how does it work in React world.

> [Video]() | [Presentation]() | [Pull Request]()

#### [Homework #6](#homework-6)

---

### [Week 7](#week-7)

#### [12. TypeScript](#12-typescript)

TypeScript is really trendy these days. We love it in STRV. Hopefully you will love it too!

> [Video](https://youtu.be/L9B4n4f0ibE) | [Presentation](https://docs.google.com/presentation/d/17-9y7PEbOhdM2hPm0xtvSe6WYxyg_WLFKgTE63WQgtk/) | [Pull Request]()

#### [13. Server-side Rendering vs. Static Export](#13-server-side-rendering-vs-static-export)

Since we are going to production soon, let's think how our app should work there.

Because of numerous dynamic content it does make sense do a SSR. We choose next.js

> This introduces a major refactor. We probably could choose `razzle` which has react-router under the hood. But still, usually it make sense to do these kind of decision in the very beginning of project.

> [Video](https://youtu.be/_F_YbLNwkuE) | [Presentation](https://drive.google.com/file/d/1XEWNDDZ4Xw8ywGu-0Kn0rSq-jiRKmAAJ/view?usp=sharing) | [Pull Request]()

#### [Homework #7](#homework-7)

---

### [Week 8](#week-8)

#### [14. Optimizing React Apps](#14-optimizing-react-apps)

Our apps seems to be working fine. Let's talk about optimization and bringing to users the best possible user experinece.

> [Video](https://youtu.be/srxHbr346A4) | [Presentation](https://drive.google.com/file/d/12i45GV6_gNjCFnwKs23owjpGPwphc04-/view) | [Pull Request]()

#### [15. Deployment](#15-deployment)

Finally it's about the time to deploy our production ready app!

> Again in real world (continuous) deployment could be set up in earlier stages of a project lifetime.

> [Video](https://youtu.be/srxHbr346A4?t=3771) | [Presentation](#TODO) | [Pull Request](#TODO)

#### [Homework #8](#homework-8)

## [Used technologies](#used-technology)

## [Speakers](#speakers)
