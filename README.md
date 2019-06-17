> Please note, that README is under development 😅.
> Sorry for that! It will be finished soon! :)

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
    - [10. Async Effects & Error Reporting](#10-async-effects--error-reporting)
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

### Week 1

#### 00. Introduction

Introduction to the React Nights course. Please note that course was designed to do a lot of selfstudying during _homeworks_. If you are planning to try this XY hours course we highly recommend to find a mentor who will review your Pull Requests.

> Of course you don't need to wait the whole week to continue to the next lesson. But we highly recommend to dedicate some extra time for studying of shared resources.

If you have recommendations how to improve this knowledge base, feel free to submit a PR.

> [Video](https://www.youtube.com/watch?v=mThOdIxdblg&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=15&t=0s) | [Presentation](https://docs.google.com/presentation/d/1sqMv0K0DtEToOQ8W_8Ipwy_SML_HA88a1I7jhWBTGNg/edit#slide=id.g40dd3244bc_0_2)

#### 01. Project Setup

As a project starter we choose create-react-app. Other great option could be Next.js or Gatsby. We would like to learn it right. So we need to ensure code quality, thus we implemented `Prettier` and `ESLint` and enforced it with precommit hook from combination of `husky` with `lint-staged`. Obviously as STRV developers we will use STRV's favourite configurations from [code-quality-tools](https://github.com/strvcom/code-quality-tools/).

> Note that we are not covering `stylelint` in this lesson, since it's a part of next weeks lesson - [Styling in React](#styling-in-react). Another decision that should be made from a very beginning is [TypeScript](#typescript) from [Week 8](#week-8). But to make learning curve a bit easier, we decided to add it later. If you are brave enough, feel to tart using it right away.

Before we will start implement features, let’s get API communication get ready. Before any implementation get familiar with API you are going to use. For our demo we choose CommerceLayer API. By reading it’s [API Reference](https://commercelayer.io/api/reference/) we need to implement authentication to be able get any resources. To do so we need to create an account in CommerceLayer and get a token from API.

For demonstration of correct implementation we are fetching `List of Products`.

This all for now. Let's write a simple README about what we did and how to use this project.

> [Video](https://www.youtube.com/watch?v=mThOdIxdblg&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=15&t=1221) | [Presentation](https://docs.google.com/presentation/d/1sqMv0K0DtEToOQ8W_8Ipwy_SML_HA88a1I7jhWBTGNg/edit#slide=id.g50606751ee_0_0) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/1)

#### Homework #1

> This homework was implemented during the lecture, see it's Pull Request above.

- Setup [commercelayer.io](https://commercelayer.io/)
- Project Setup
  - Project starter
  - API & config
  - Fetch list of products
  - Code quality tools
  - Documentation
- Read _Main Concepts_ in [amazing React docs](https://reactjs.org/docs/hello-world.html)

---

### Week 2

#### 02. Project Architecture & React Router

The plan for this lecture is to implement `Product Detail`. For routing we will use [react-router](). But before we will start writing code, let's think how we will structure the whole project? In STRV we are fans of [grouping by features or routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes). This kind of decision should be done alredy in lecture [01. Project Setup](#01-project-setup). So we need to refactor our code a little bit.

We will use another API endpoint so it's probably about the time to implement `a simple http API client`. We will use native [fetch](https://fetch.spec.whatwg.org/) for simplicity, but otherwise we highly recommend `ky` or `axios`.

Now is everything set and ready. Let's go for the `Product Detail`!

> [Video](https://www.youtube.com/watch?v=tLhApVdlZaQ) | [Presentation](https://docs.google.com/presentation/d/1tKTUkn4MtT5_ahwp2nfWijNWvplboi015tdbUx98Wis/edit#slide=id.g5521228db6_0_28) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/2)

#### 03. Styling in React

Now we have List of Products and Product Detail. Before we move further let's implement some decent styles, so the app is more pleasant to work with.

In STRV we are big fans of CSS-in-JS namely `styled-components`. Brief introduction to a history, benefits and usage of styled-components. Showcase of `styled-system` and `@rebass/grid`

We also are setting a first styleguide. Styles lives in `styled.js` file next to the component. The only eception are global styles and variables files.

With CSS comes huge responsibility. Friendly check putted into precommit hook by stylelint. That's what you need.

If you are building a real project you should defenitely check out `Storybook`.

> [Video]() | [Presentation](https://docs.google.com/presentation/d/1Mezt41vdpyLE5P9bHzHt299ES9DUPMM51dyASkMOuk0/edit#slide=id.g1454bd7dba_0_75) | [Commit](https://github.com/strvcom/react-nights-2019/pull/2/commits/f97d5b94d6787b0b6d800a5f62c754e36a7b3541)

#### Homework #2

- Add get-product API call
- Implement fetching in Product Detail
- Add styles for Product Detail page

[Pull Request](https://github.com/strvcom/react-nights-2019/pull/4)

---

### Week 3

#### 04. Global State Management

It's about the time to implement `Cart` and possibility to add products to it. We choose to demonstrate this functionality with Redux which is one of the most spread libraries in React ecosystem.

> [Video](https://www.youtube.com/watch?v=1okwf-6Ujug&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=1) | [Presentation](https://docs.google.com/presentation/d/1YItCqFTK-_SzD8sO_uTrae9tw_naE29pl287QITvu1Y/edit#slide=id.p1) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/3)

#### 05. Context API & Redux Middlewares

Redux comes with great middlewares. Let's briefly check what is it about. We will also leverage this gain knowledge in [10. Async Effects & Error Reporting](#10-async-effects--error-reporting) lecture.

Besides that it's also our duty to showcase a `Context API`, which is more than suitable for many usecases. But without any contribution to the project.

> [Video](https://www.youtube.com/watch?v=1okwf-6Ujug&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=1&t=3229) | [Presentation](https://docs.google.com/presentation/d/1u5Q7e-jK5RRUKVk-6enS3EaxxBHlXRy0_0uz6FUiOWU/edit#slide=id.g40dd3244bc_0_9) | [Pull Request]()

#### Homework #3

- Implement [redux-devtools](https://github.com/reduxjs/redux-devtools) and use it with [extension](https://github.com/zalmoxisus/redux-devtools-extension)

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/5)

---

### Week 4

#### 06. Forms

A proper e-commerce should have a user profile, when our users can change their information or see the past orders.
Let's implement `Sign Up` page with [Formik](https://github.com/jaredpalmer/formik) and do a client side validation with [yup](https://github.com/jquense/yup)

> [Video](https://www.youtube.com/watch?v=DcNhRhm9MwI&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=2) | [Presentation](https://docs.google.com/presentation/d/1mSpqe7AWG8ofkxUxKIDB4_Az2qBS8S_Z3FVdPhTdESw/edit#slide=id.g5521228db6_0_28) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/6)

#### 07. Authentication & Routing in Depth

Sign in, authentication, private routes, redirecting. With this lesson our app is almost ready.

> [Video](https://www.youtube.com/watch?v=DcNhRhm9MwI&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=2&t=3015) | [Presentation](https://docs.google.com/presentation/d/1rFz7ptZ73SQ638lizShn9R3y8WSbPQqE95HBGJDuV_I/edit) | [Pull Request]()

#### Homework #4

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/9)

---

### Week 5

> Our app is almost ready. Now it's about the time to properely tune it! Of course in the real world we should start with following "advanced" patterns right away. But for learning purposes we believe this is the easiest way how to get in touch with it.

#### 08. Functional Programming

React is functional, let's learn how to make our app also functional. More teoretical lecture with great examples in Observable notebook.

> [Video](https://www.youtube.com/watch?v=P7sW_-zCQog&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=3) | [Observable notebook](https://observablehq.com/@varholak-peter/react-nights-playground) | [Pull Request]()

#### 09. HOCs, Render Props, Hooks

During previous lesson we had a lot of code repetitions, let's make it more DRY!

> In this lesson we are doing a minor refactor from redux to hooks. On first sight it looks good and awesome, but it will backfire us in ### [Week 7](#week-7). This was done on purpose, so we can demonstrate that every decision in your codebase matters and requires a lot of thinking.

> [Video](https://www.youtube.com/watch?v=P7sW_-zCQog&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=3&t=2652) | [Presentation](https://docs.google.com/presentation/d/1Hy0bWktlaEzYI0-AYFa_6X4BQr4rG__tgLjasEMBSmA/edit) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/10)

#### Homework #5

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/11)

---

### Week 6

#### 10. Async Effects & Error Reporting

So far we were following happy path of development, aka that everything should work just as expected. But in a real world it's not the case. From time to time API server is down, internet connection is weak, or there is just unexpected error in our code.

> [Video](https://www.youtube.com/watch?v=V5URcw_KYFM&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=10) | [Presentation](https://docs.google.com/presentation/d/1JCvCloP-MmZAFA6oY0tCUs6jVs_pIzUavwJMl5UYtPY/edit#slide=id.g51136236ec_0_25) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/13)

#### 11. Testing in React

Testing is a very important in any software development. Let's take a look, how does it work in React world.

> [Video](https://www.youtube.com/watch?v=V5URcw_KYFM&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=10&t=3263) | [Presentation]() | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/12)

#### Homework #6

> [Pull Request]()

---

### Week 7

#### 12. TypeScript

TypeScript is really trendy these days. We love it in STRV. Hopefully you will love it too!

> [Video](https://youtu.be/L9B4n4f0ibE) | [Presentation](https://docs.google.com/presentation/d/17-9y7PEbOhdM2hPm0xtvSe6WYxyg_WLFKgTE63WQgtk/) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/15)

#### 13. Server-side Rendering vs. Static Export

Since we are going to production soon, let's think how our app should work there.

Because of numerous dynamic content it does make sense do a SSR. We choose next.js

> This introduces a major refactor. We probably could choose `razzle` which has react-router under the hood. But still, usually it make sense to do these kind of decision in the very beginning of project.

> [Video](https://youtu.be/_F_YbLNwkuE) | [Presentation](https://drive.google.com/file/d/1XEWNDDZ4Xw8ywGu-0Kn0rSq-jiRKmAAJ/view?usp=sharing) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/18)

#### Homework #7

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/19)

---

### Week 8

#### [14. Optimizing React Apps](#14-optimizing-react-apps)

Our apps seems to be working fine. Let's talk about optimization and bringing to users the best possible user experinece.

> [Video](https://youtu.be/srxHbr346A4) | [Presentation](https://drive.google.com/file/d/12i45GV6_gNjCFnwKs23owjpGPwphc04-/view) | [Pull Request]()

#### [15. Deployment](#15-deployment)

Finally it's about the time to deploy our production ready app!

> Again in real world (continuous) deployment could be set up in earlier stages of a project lifetime.

> [Video](https://youtu.be/srxHbr346A4?t=3771) | [Presentation](#TODO) | [Pull Request](#TODO)

#### Homework #8

## Used technologies

## Speakers
