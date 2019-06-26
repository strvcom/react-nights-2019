> Please note, that README is under development 😅.
> Sorry for that! It will be finished soon! :)

# REACT NIGHTS 2019

> This repository serves as an online course for learning React. It’s here to help those who want to learn more about React and frontend to develop a SPA.

## Introduction

In STRV we believe that the best way of learning is by writing a real project. We come up with a simple e-commerce app using the [Commerce Layer API](https://commercelayer.io).

> Please take note that by learning React you won’t become a frontend developer. There are many other areas you should be able to handle. Stay tuned for `Frontend Nights`, where we are going to focus on everything except React :)

### Goal

To give you a fundamental understanding of how to build a production-ready React web app.

The presenters demonstrated the best practices in building React applications — the experience they gained by working on numerous projects.

### Source

This online course was created by utilizing material from React Nights — the free offline course with a focus on React created by [STRV](https://www.strv.com/).

### Prerequisites

This course requires at least junior-level knowledge of programming. The course is relying on fundamental knowledge of React. Following the [amazing official documentation](https://reactjs.org/docs/getting-started.html) should be enough.

Overall frontend knowledge is welcomed, but not necessary. For more details, you can check _video_ and _presentation_ from [the first lecture](#00-introduction)

## Table of Contents

- [Introduction](#Introduction)
  - [Goal](#goal)
  - [Source](#source)
  - [Prerequisites](#prerequisites)
- [Course Structure](#course-structure)
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
- [Used technologies](#used-technologies)
- [Credits](#Credits)

## Course Structure

React Nights 2019 was designed for 8 weeks of studying, 16 lectures and 8 homework. During the period of teaching, STRV frontend team was contributing to this repository.

STRV team also had a dedicated team of mentors helping our students to get through homework and also do the homework review of course :)

> We are highly opinionated when it comes to development. There are many other great approaches to how to write apps. But what you can see in this repository is something close to what we do in the real world.

Our goal was to reveal some patterns incrementally. Some of the code was written in a way it supposed to be refactored later. Thus please don’t think of this repository as a recipe on how to build a React app. It’s more-likely a showcase of different topics, yet done in the same project.

## Lectures

Each lecture is around 1 hour long. There are two lectures per week. Followed by one mutual homework. You can follow commit history to see each lesson.

A lecture was **recorded**, there is also link to the **presentation**, Pull Request representing the introduction to the lecture, link to the homework solution and finally some additional resources (also listed in a presentation).

### Week 1

#### 00. Introduction

Introduction to the React Nights course. Please note that the course was designed to do a lot of self studying during _homeworks_. If you are planning to try this XY hours course we highly recommend to find a mentor who will review your Pull Requests.

> Of course, you don't need to wait the whole week to continue to the next lesson. But we highly recommend dedicating some extra time for studying of shared resources.

If you have recommendations on how to improve this knowledge base, feel free to submit a PR.

> [Video](https://www.youtube.com/watch?v=mThOdIxdblg&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=15&t=0s) | [Presentation](https://docs.google.com/presentation/d/1sqMv0K0DtEToOQ8W_8Ipwy_SML_HA88a1I7jhWBTGNg/edit#slide=id.g40dd3244bc_0_2)

#### 01. Project Setup

As a project starter, we choose create-react-app. Other great option could be Next.js or Gatsby. We would like to learn it right. So we need to ensure code quality, thus we implemented `Prettier` and `ESLint` and enforced it with pre-commit hook from a combination of `husky` with `lint-staged`. Obviously, as STRV developers we will use STRV's favorite configurations from [code-quality-tools](https://github.com/strvcom/code-quality-tools/).

> Note that we are not covering `stylelint` in this lesson, since it's a part of next weeks lesson - [Styling in React](#styling-in-react). Another decision that should be made from a very beginning is [TypeScript](#typescript) from [Week 7](#week-7). But to make a learning curve a bit easier, we decided to add it later. If you are brave enough, feel to start using it right away.

Before we will start to implement features, let’s get API communication get ready. Before any implementation, you should get familiar with API you are going to use. For our demo, we choose CommerceLayer API. By reading it’s [API Reference](https://commercelayer.io/api/reference/) we need to implement authentication to be able to get any resources. To do so we need to create an account in CommerceLayer and get a token from API.

For a demonstration of correct implementation, we are fetching `List of Products`.

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

The plan for this lecture is to implement `Product Detail`. For routing, we will use [react-router](https://github.com/ReactTraining/react-router). But before we will start writing code, let's think about how we will structure the whole project? In STRV we are fans of [grouping by features or routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes). This kind of decision should be done already in lecture [01. Project Setup](#01-project-setup). So we need to refactor our code a little bit.

We will use another API endpoint so it's probably about the time to implement `a simple http API client`. We will use native [fetch](https://fetch.spec.whatwg.org/) for simplicity, but otherwise we highly recommend [ky](https://github.com/sindresorhus/ky), tiny & elegant HTTP client based on `window.fetch`.

Now everything is set and ready. Let's go for the `Product Detail`!

> [Video](https://www.youtube.com/watch?v=tLhApVdlZaQ) | [Presentation](https://docs.google.com/presentation/d/1tKTUkn4MtT5_ahwp2nfWijNWvplboi015tdbUx98Wis/edit#slide=id.g5521228db6_0_28) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/2)

#### 03. Styling in React

Now we have List of Products and Product Detail. Before we move further let's implement some decent styles, so the app is more pleasant to work with.

In STRV we are big fans of CSS-in-JS namely `styled-components`. A brief introduction to history, benefits, and usage of styled-components. A showcase of `styled-system` and `@rebass/grid`

We also are setting a first styleguide. Styles lives in `styled.js` file next to the component. The only exception is global styles and variables files.

With CSS comes huge responsibility. Friendly check put into pre-commit hook by `stylelint`. That's what you need.

If you are building a real project you should definitely check out the [Storybook](https://storybook.js.org/).

> [Video]() | [Presentation](https://docs.google.com/presentation/d/1Mezt41vdpyLE5P9bHzHt299ES9DUPMM51dyASkMOuk0/edit#slide=id.g1454bd7dba_0_75) | [Commit](https://github.com/strvcom/react-nights-2019/pull/2/commits/f97d5b94d6787b0b6d800a5f62c754e36a7b3541)

#### Homework #2

- Set up React Router
- Think and implement the rest of the project architecture
- Fetch and display Product Detail
- Add styles for Product Detail page

[Pull Request](https://github.com/strvcom/react-nights-2019/pull/4)

#### Additional Resources #2

- https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed
- Go through the React Router documentation, especially https://reacttraining.com/react-router/web/guides/philosophy and https://reacttraining.com/react-router/web/guides/basic-components
- The magic behind styled-components: https://mxstbr.blog/2016/11/styled-components-magic-explained/
- styled-components API docs: https://www.styled-components.com/docs/api
- styled-system API: https://github.com/styled-system/styled-system
- https://csstools.github.io/sanitize.css/
- https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/

---

### Week 3

#### 04. Global State Management

It's about the time to implement `Cart` and the possibility to add products to it. We choose to demonstrate this functionality with Redux which is one of the most spread libraries in React ecosystem.

> [Video](https://www.youtube.com/watch?v=1okwf-6Ujug&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=1) | [Presentation](https://docs.google.com/presentation/d/1YItCqFTK-_SzD8sO_uTrae9tw_naE29pl287QITvu1Y/edit#slide=id.p1) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/3)

#### 05. Context API & Redux Middlewares

Redux comes with great middlewares. Let's briefly check what is it about. We will also leverage this gain knowledge in [10. Async Effects & Error Reporting](#10-async-effects--error-reporting) lecture.

Besides that, it's also our duty to showcase a `Context API`, which is more than suitable for many use cases. But without any contribution to the project.

> [Video](https://www.youtube.com/watch?v=1okwf-6Ujug&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=1&t=3229) | [Presentation](https://docs.google.com/presentation/d/1u5Q7e-jK5RRUKVk-6enS3EaxxBHlXRy0_0uz6FUiOWU/edit#slide=id.g40dd3244bc_0_9) | [Pull Request]()

#### Homework #3

- “Add to Cart” feature on Product Detail page
- “Remove from Cart” feature on Cart page
- Implement [redux-devtools](https://github.com/reduxjs/redux-devtools) and use it with [extension](https://github.com/zalmoxisus/redux-devtools-extension)
- we extracted `Button` component to make it reusable
- added `Layout` to Product Detail page
- updated API for getting a list and a single product to return response in the same format
- `onAddToCart` function expects only productId as an argument. Calling `event.preventDefault()` is done internally now to avoid leaking implementation details to outside components
- we removed pseudo-caching logic in ProductList component

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/5)

#### Additional Resources #3

- https://overreacted.io/writing-resilient-components/#principle-4-keep-the-local-state-isolated
- <details>
  <summary>Immutability examples</summary>
  <article class="markdown-body entry-content p-5" itemprop="text">
  <h3>Working with objects</h3>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    const user = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    }
  </code></pre>
  </div>
  <h4>Add property</h4>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    user.age = 30 // wrong
    const newUser = { ...user, age: 30 } // right
  </code></pre>
  </div>
  <h4>Remove property</h4>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    delete user.age // wrong
    const { age, ...newUser } = user // right
  </code></pre>
  </div>
  <h4>Update property</h4>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    user.firstName = 'Jane' // wrong
    const newUser = { ...user, firstName: 'Jane' } // right
  </code></pre>
  </div>
  <h3>Working with arrays</h3>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    const users = []
  </code></pre>
  </div>
  <h4>Add item</h4>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    users.push(user) // wrong
    const newUsers = [...users, user] // right
  </code></pre>
  </div>
  <h4>Remove item</h4>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    const users.pop() // wrong
    const newUsers = users.filter(u => u.id !== user.id) // right
  </code></pre>
  </div>
  <h4>Update item</h4>
  <div class="highlight highlight-source-js">
  <pre class="highlight highlight-source-js"><code class="highlight highlight-source-js">
    users[0].firstName = 'Jane' // wrong
    const newUsers = users.map(u => {
      if (u.id === user.id) {
        return {
          ...user,
          firstName: 'Jane',
        }
      }
      return u
    }) // right
  </code></pre>
  </div>
  </article>
  </details>

---

### Week 4

#### 06. Forms

Proper e-commerce should have a user profile when our users can change their information or see the past orders.
Let's implement `Sign Up` page with [Formik](https://github.com/jaredpalmer/formik) and do a client side validation with [yup](https://github.com/jquense/yup)

> [Video](https://www.youtube.com/watch?v=DcNhRhm9MwI&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=2) | [Presentation](https://docs.google.com/presentation/d/1mSpqe7AWG8ofkxUxKIDB4_Az2qBS8S_Z3FVdPhTdESw/edit#slide=id.g5521228db6_0_28) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/6)

#### 07. Authentication & Routing in Depth

Sign in, authentication, private routes, redirecting. With this lesson, our app is almost ready.

> [Video](https://www.youtube.com/watch?v=DcNhRhm9MwI&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=2&t=3015) | [Presentation](https://docs.google.com/presentation/d/1rFz7ptZ73SQ638lizShn9R3y8WSbPQqE95HBGJDuV_I/edit) | [Pull Request]()

#### Homework #4

- Create the login page with a login form
- Connect login form to API
- Get customer information and store it in Redux
- Determine in `PrivateRoute` whether a user is authenticated
- Show/hide `MyProfile` link according to the authenticated state
- Add logout functionality

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/9)

#### Additional Resources #4

- [JSON Web Tokens vs Session Cookies](https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies)
- [Where to Store Your Tokens](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
- [Security](http://www.redotheweb.com/2015/11/09/api-security.html)
- [What are Refresh Tokens](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)
- [JWT Open Standard](https://jwt.io/)

---

### Week 5

> Our app is almost ready. Now it's about the time to properly tune it! Of course in the real world, we should start with following "advanced" patterns right away. But for learning purposes, we believe this is the easiest way how to get in touch with it.

#### 08. Functional Programming

React is functional, let's learn how to make our app also functional. More theoretical lecture with great examples in Observable notebook.

> [Video](https://www.youtube.com/watch?v=P7sW_-zCQog&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=3) | [Observable notebook](https://observablehq.com/@varholak-peter/react-nights-playground) | [Pull Request]()

#### 09. HOCs, Render Props, Hooks

During the previous lesson we had a lot of code repetitions, let's make it more DRY!

> In this lesson we are doing a minor refactor from redux to hooks. On first sight, it looks good and awesome, but it will backfire us in ### [Week 7](#week-7). This was done on purpose, so we can demonstrate that every decision in your codebase matters and requires a lot of thinking.

> [Video](https://www.youtube.com/watch?v=P7sW_-zCQog&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=3&t=2652) | [Presentation](https://docs.google.com/presentation/d/1Hy0bWktlaEzYI0-AYFa_6X4BQr4rG__tgLjasEMBSmA/edit) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/10)

#### Homework #5

We did there a major refactor in favor to display how Hooks can safe us a lot of typing.

- product list and product detail has been moved to a different route and root route redirects to Product List
- route paths have been moved in constants in separate file `src/routes.js`
- new route for 404 error was added, it will be shown in case that none of the other routes in will be matched: https://github.com/strvcom/react-nights-2019/blob/320178fb8afd3799066c02d364b46089aeb29c7d/src/App.js#L38

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/11)

---

### Week 6

#### 10. Async Effects & Error Reporting

So far we were following a happy path of development, aka that everything should work just as expected. But in the real world, it's not the case. From time to time API server is down, internet connection is weak, or there is just unexpected error in our code.

> [Video](https://www.youtube.com/watch?v=V5URcw_KYFM&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=10) | [Presentation](https://docs.google.com/presentation/d/1JCvCloP-MmZAFA6oY0tCUs6jVs_pIzUavwJMl5UYtPY/edit#slide=id.g51136236ec_0_25) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/13)

#### 11. Testing in React

Testing is very important in any software development. Let's take a look, how does it work in React world. Pull request comes with a lot of practical examples.

> [Video](https://www.youtube.com/watch?v=V5URcw_KYFM&list=PLfX7tWavkVjAz0fCSZn47RvbcsTwTfD0U&index=10&t=3263) | [Presentation](https://docs.google.com/presentation/d/1ZCHj9FJabHUxmTw9U6cH9-Zgb3u7m7K9TxOt6MNqrYc/edit#slide=id.g5c04da16b1_1_0) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/12)

#### Homework #6

- - move logic to chosen async solution _(default: redux-thunks, advanced: redux-sagas, redux-observables)_
- handle refresh tokens
- notify a user about errors `server/network` and `success` _(product added to cart/deleted from cart/logged in)_
- To mock server responses `401/500` you can use https://www.charlesproxy.com/
- If you found homework too easy, please refer to `Up for the challenge?` slide for [problem inspiration](https://docs.google.com/presentation/d/1JCvCloP-MmZAFA6oY0tCUs6jVs_pIzUavwJMl5UYtPY/edit#slide=id.g56a65efc51_0_57)

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/14)

---

### Week 7

#### 12. TypeScript

TypeScript is really trendy these days. We love it in STRV. Hopefully, you will love it too!

> [Video](https://youtu.be/L9B4n4f0ibE) | [Presentation](https://docs.google.com/presentation/d/17-9y7PEbOhdM2hPm0xtvSe6WYxyg_WLFKgTE63WQgtk/) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/15)

#### 13. Server-side Rendering vs. Static Export

Since we are going to production soon, let's think about how our app should work there.

Because of numerous dynamic content, it does make sense do a SSR. We choose next.js

> This introduces a major refactor. We probably could choose `razzle` which has react-router under the hood. But still, usually, it makes sense to do this kind of decision in the very beginning of the project.

> [Video](https://youtu.be/_F_YbLNwkuE) | [Presentation](https://drive.google.com/file/d/1XEWNDDZ4Xw8ywGu-0Kn0rSq-jiRKmAAJ/view?usp=sharing) | [Pull Request](https://github.com/strvcom/react-nights-2019/pull/18)

#### Homework #7

- TypeScript
- Move from create-react-app to Next.js
  - This is a huge refactor.
  - It refers to proper project setup. Aka you should know upfront what you are building, otherwise, you can choose wrong and then spend extra time with unneeded refactor.
  - Convert your codebase into SSR using STRV branch as reference
  - Remove `react-scripts`
  - Add `next` and related libraries (`@zeit/next-css`, `@zeit/next-typescript`, `express`, `isomorphic-fetch`, `next-redux-wrapper`, `@types/next`)
  - Adjusts scripts section of your `package.json` to work with next instead of `react-scripts`, check the one defined in the project for reference.
  - Replace `useApi` hook usage on products and products details with `getInitialProps`, you could either set the data in redux or show it right away as the hook did.
  - If you are feeling like a ninja, implement the loading status in case you decide to go with the redux approach.

> [Pull Request](https://github.com/strvcom/react-nights-2019/pull/19)

---

### Week 8

#### 14. Optimizing React Apps

Our app seems to be working fine. Let's talk about optimization and bringing to users the best possible user experience.

> [Video](https://youtu.be/srxHbr346A4) | [Presentation](https://drive.google.com/file/d/12i45GV6_gNjCFnwKs23owjpGPwphc04-/view)

#### 15. Deployment

Finally, it's about the time to deploy our production ready app!

> Again in the real world (continuous) deployment could be set up in earlier stages of a project lifetime.

> [Video](https://youtu.be/srxHbr346A4?t=3771) | [Presentation](https://docs.google.com/presentation/d/11LgJDc_-60a_88_joRmILd9ptYuO6yCYUlemmua-HpU/edit#slide=id.g554c03b836_0_0)

#### Homework #8

Optimize and deploy!

## Used technologies

- Project Starters
  - create-react-app
  - next.js
- Code Quality Tools
  - Formatting - EditorConfig, Prettier
  - Linting - ESLint, stylelint
  - Static Type Checking - TypeScript
  - Enforced with pre-commit and pre-push hooks from husky in combination with lint-staged
- React
- Styling
  - styled-components
  - styled-system
- State Management
  - redux
  - redux-thunk
- Forms
  - Formik
  - yup
- Tests
  - Jest
  - react-testing-library
  - Cypress

## Credits

- [00.](#00-introduction) Introduction - [Danny Kijkov](https://github.com/dannytce)
- [01.](#01-project-setup) Project Setup - [Danny Kijkov](https://github.com/dannytce)
- [02.](#02-project-architecture--react-router) Project Architecture & React Router - [Pavel Prichodko](https://github.com/prichodko)
- [03.](#03-styling-in-react) Styling in React - [Nic Reichert](https://github.com/nicreichert)
- [04.](#04-global-state-management) Global State Management - [Konstantin Lebedev](https://github.com/koss-lebedev)
- [05.](#05-context-api--redux-middlewares) Context API & Redux Middlewares - [Jan Bartos](https://github.com/HonzaBartos)
- [06.](#06-forms) Forms - [Pedro Ferreira](https://github.com/apedroferreira)
- [07.](#authentication-and-routing-in-depth) Authentication & Routing in Depth - [Pavel Prichodko](https://github.com/prichodko)
- [08.](#08-functional-programming) Functional Programming - [Peter Varhoľák](https://github.com/varholak-peter)
- [09.](#09-hocs-render-props-hooks) HOCs, Render Props, Hooks - [Arnost Pleskot](https://github.com/arnostpleskot)
- [10.](#10-async-effects--error-reporting) Async Effects & Error Reporting - [Erik Majláth](https://github.com/erikmajlath)
- [11.](#11-testing-in-react) Testing in React - [Michal Jarnot](https://github.com/developer239)
- [12.](#12-typescript) TypeScript - [Konstantin Lebedev](https://github.com/koss-lebedev)
- [13.](#13-server-side-rendering-vs-static-export) Server-side Rendering vs. Static Export - [Luis Felipe Roman](https://github.com/Zaggen)
- [14.](#14-optimizing-react-apps) Optimizing React Apps - [Luis Felipe Roman](https://github.com/Zaggen)
- [15.](#15-deployment) Deployment - [Soo Jae Hwang](https://github.com/misoguy)

Big kudos to the whole Open Source community who make it possible to create such a course! ❤️

And of course thanks to the STRV Frontend Team who participated in the course and helped with the preparation. Finally big thanks to our brave students, who took the course and provided us with feedback!
