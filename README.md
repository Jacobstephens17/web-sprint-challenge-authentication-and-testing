# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel should a blocker arise.

_Sprint challenges open at Midnight PST on Thursday and close at 5pm PST on Friday. You will receive feedback on what you have submitted by 5pm. No retakes will be accepted._

## Introduction

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

## Instructions

### Task 1: Project Set Up

- [1] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [1] Open the assignment in Canvas and click on the "Set up git" option.
- [1] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [1] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [1] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

### Task 2: Project Requirements

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [1] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [1] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [1] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**Notes:**

- Execute all tests locally (Codegrade's and your own) by running `npm test`.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. The "test" script has been added for you.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

**IMPORTANT:** Don't break MVP by working on stretch goals! Run `npm test` and keep an eye on your tests.

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [1] Write at least 4 tests per endpoint.
- [1] Extract user validation into a separate method and write unit tests for it.
- [1] Implement authentication using sessions instead of tokens. Build separate auth endpoints & middleware for this to avoid breaking tests.

## Submission format

- [1] Submit via Codegrade by committing and pushing any new changes.
- [1] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [1] Please don't merge your own pull request and make sure **you are on your own repo**.
- [1] Check Codegrade for automated feedback.
- [1] Check Codegrade on Monday following the Sprint Challenge for reviewer feedback.
- [1] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.
2. What does `bcryptjs` do to help us store passwords in a secure manner?
3. How are unit tests different from integration and end-to-end testing?
4. How does _Test Driven Development_ change the way we write applications and tests?
