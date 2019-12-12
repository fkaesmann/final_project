# GA Final Project

#### Security Exam Test Taker

#### Fred Kaesmann

#### Dec. 11, 2019

#### General Assembly Bootcamp

## User story

As a student planing to take a test for a software security certification, I need to practice taking tests and keep track of my score.

### Details

This application will require the user sign in with an ID or with a guest account. It will prompt the user with a security question and four possible answers. The user will select an answer and the application will indicate correct or incorrect and track the user's score from session to session. The user will select Next to go to the next question.

## MVP

1. The MVP of the Security Exam Test Taker will be to create an application that will prompt the users with a question and display four possible answers. The user will select one answer and be alerted to if the question was right or wrong
2. The application will keep track of the number right or wrong
3. The application will have a Add Question screen, Modify Question screen and a Delete button to provide full CRUD capabilities

## Post-MVP

1. The Post-MVP phase of the Security Exam Test Taker will be to create a model for users ID, password and current score.
2. The user ID model will have the abilitiy to create a new user ID.
3. The user ID model will have the abilitiy to store the number correct in the user model so the user can come back and continue the practice tests

## Technologies in Frontend

1. React
2. HTML
3. JavaScript
4. CSS
5. Flexbox
6. CSS formatting libraries such as bootstrap

## Technologies in Backend

1. NodeJS
2. Express
3. JavaScript
4. Mongo / Mongoose

## Node components

- npm init
- npm install express
- npm install mongoose
- npm install method-override
- npm install axios

## Wireframe

![](https://media.git.generalassemb.ly/user/23449/files/5aa83080-1bf9-11ea-867e-8038abb06413)

## ERD

The Security Exam Test Taker post-MVP will be comprised of two document models, they are:

1. User document model

```
    - user ID : string
    - user password : string (maybe encrypted)
    - user current score : integer
```

2. Question document model

```
    - Question : string
    - Posible answer 1 : string
    - Posible answer 2 : string
    - Posible answer 3 : string
    - Posible answer 4 : string
    - Correct answer : integer
    - Additional details : string
```

## Finial Thoughts

Prudential uses Full Stack models, mostly with NodeJS / Express, and either Mongo or PostgreSQL. I don't know if any applications - currently - are using Ruby or Rails, so I'm sticking with the MERN stack for now.
