# REACT NIGHTS 2019

> This repository serves as an online course for learning React.

## Disclaimer

In STRV we believe that the best way of learning is by writing a real project. We come up with a simple e-commerce app using the [Commerce Layer API](https://commercelayer.io).

> Please take a note that by learning React you won’t become a frontend developer. There are many other areas you should be able to handle. Stay tuned for `Frontend Nights`, where we are going to focus on everything except React :)

## Course Structure

React Nights 2019 were designed for 8 weeks of studying, 16 lectures and 8 homeworks. During the period of teaching STRV frontend team was contributing to this repository.

STRV team also had a dedicated team of mentors helping our students to get through homeworks and also do the homework review of course :)

> We are highly opinionated when it comes to development. There are many other great approaches how to write apps. But what you can see in this repository is something close to what we do in a real world.

Our goal was to reveal some patterns incrementally. Some of the code was written in way it supposed to be refactored later. Thus please don’t think of this repository as recepy how to built a React app. It’s more-likely a showcase of different topics, yet done in the same project.

## Lectures

Each lecture is around 1 hour long. There are two lectures per week. Followed by one mutual homework. You can follow commit history to see each lesson.

> Each lesson is marked with prefix `[WEEK_NUMBER/LESSON_NUMBER]`

### [[W1/L00] Introduction](#introduction)

- Introduction to the React Nights course. Please note that course was designed to do a lot of selfstudying during homeworks. If you are planning to try this XY hours course we highly recommend to find a mentor who will review your PRs.
- If you have recommendations how to improve this knowledge base, feel free to submit a PR.
- Link to the presentation (video?)

### [[W1/L01] Project Setup](#project-setup)

As a project starter we choose create-react-app. Other great option could be Next.js or Gatsby. We would like to learn it right. So we need to ensure code quality, thus we implemented `Prettier` and `ESLint` and enforced it with precommit hook from combination of `husky` with `lint-staged`. Obviously as STRV developers we will use STRV's favourite configurations from [code-quality-tools](https://github.com/strvcom/code-quality-tools/).

> Note that we are not doing `stylelint` in this lessons, since it's a part of next weeks lesson - [[W2/L02] Styling in React (styled-components)](#styling-in-react). Another decision that should be made from a very beginning is [TypeScript] from week 8. But to make learning curve a bit easier, we decided to add it later. If you are brave enough, feel to tart using it right away.

Before we will start implement features, let’s get API communication get ready. Before any implementation get familiar with API you are going to use. For our demo we choose CommerceLayer API. By reading it’s [API Reference](https://commercelayer.io/api/reference/) we need to implement authentication to be able get any resources. To do so we need to create an account in CommerceLayer and get a token from API.

For demonstration of correct implementation we are fetching `list of products`.

This all for now. Let's write a simple README about what we did and how to use this project.

### [[W2/L03] Project Architecture & React Router](#project-architecture-and-react-router)

The plan for this lecture is to implement `Product Detail`. For routing we will use [react-router](). But before we will start writing code, let's think how we will structure the whole project? In STRV we are fans of [grouping by features or routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes). This kind of decision should be done alredy in lecture [Project Setup](#project-setup). So we need to refactor our code a little bit.

We will use another API endpoint so it's probably about the time to implement `a simple http API client`. We will use native [fetch](https://fetch.spec.whatwg.org/) for simplicity, but otherwise we highly recommend `ky` or `axios`.

Now is everything set and ready. Let's go for a Product Detail!

### [[W2/L04] Styling in React (styled-components)](#styling-in-react)

Now we have List of Products and Product Detail. Before we move further let's implement some decent styles, so the app is more pleasant to work with.

In STRV we are big fans of CSS-in-JS namely `styled-components`. Brief introduction to a history, benefits and usage of styled-components. Showcase of `styled-system` and `@rebass/grid`

We also are setting a first styleguide. Styles lives in `styled.js` file next to the component. The only eception are global styles and variables files.

With CSS comes huge responsibility. Friendly check putted into precommit hook by stylelint. That's what you need.

If you are building a real project you should defenitely check out Storybook.

### [[W3/L05] Global State Management](#global-state-management)

It's about the time to implement Cart and possibility to add products to it. We choose to demonstrate this functionality with Redux which is one of the most spreaded libraries in React ecosystem.

- [3/06 Context API & Redux Middlewares](#context-api-and-redux-middlewares)
  Redux comes with great middlewares. Let's briefly check what is it about. We will also leverage gain knowledge in [6/11 Side Effects & Error Reporting](#side-effects-and-error-reporting)

  Besides that it's also our duty to showcase a Context API, which is suitable for many approaches.

- [4/07. Forms](#forms)
  A proper e-commerce should have a user profile, when our users can change their information or see the past orders.
  Let's implement `Sign Up` page with [Formik]() and do a client side validation with [yup]()

- [4/08. Authentication & Routing in Depth](#authentication-and-routing-in-depth)
  Sign in, authentication, redirecting logic. Basically with this lessons our app is ready.

- [5/09 Functional Programming](#functional-programming)
- [5/10 HOCs, Render Props, Hooks](#hocs-renderprops-hooks)
- [6/11 Side Effects & Error Reporting](#side-effects-and-error-reporting)
- [6/12 Testing in React](#testing-in-react)
- [7/13 TypeScript](#typescript)
- [7/14 Server-side Rendering vs. Static Export](#ssr-vs-static-export)
- [8/15 Optimizating React Apps](#optimizing-react-apps)
- [8/16 Deployment](#deployment)
