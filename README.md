# GA Final Project
Security Exam Test Taker
Fred Kaesmann
Dec. 11, 2019
General Assembly 

## User story
As a student planing to take tests for software security certifications, I need to price taking tests and recording my score.

### The Security Exam Test Taker details
This applications will require the user sign in with an ID or with a guest account.  It will prompt the user with a security question and four possible answers.  The user will select an answer and the application will indicate correct or incorrect and track the user's score from session to session.

## MVP
```
1. The MVP of the Security Exam Test Taker will be to create an application that will prompt the users with a question and display four possible answers.  The user will select one answer and be alerted to if the question was right or wrong
2. The application will keep track of the number right or wrong
3. The application will have a Add Question screen, Modify Question screen and a delete screen providing full CRUD capabilities
```

## Post-MVP
```
1. The Post-MVP phase of the Security Exam Test Taker will be to create a model for users ID, password and current score.
2. The user ID model will have the abilitiy to create a new user ID.
3. The user ID model will have the abilitiy to store the number correct in the user model so the user can come back and continue the practice tests
```

## Technologies
### Frontend
```
1. React
2. HTML
3. JavaScript
4. CSS
5. Flexbox
6. CSS formatting libraries such as bootstrap

```

### Backend
```
1. NodeJS
2. Express
3. JavaScript
4. Mongo / Mongoose
```

## Wireframe

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
Prudential uses Full Stack models, mostly with NodeJS / Express, and either Mongo or PostgreSQL.  I don't know if any applications - currently - using Ruby or Rails, so I'm sticking with the MERN stack for now.

