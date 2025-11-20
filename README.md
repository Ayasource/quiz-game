# Quiz game
## Contents
1. About this project
2. User Stories
3. Wireframes
4. Website Iterations
5. Code Development
6. Working with Co-pilot
7. Bugs
8. Code Validators
9. Features
10. Responsive
11. Accessibility
12. Miscellaneous



## About QuizMaster

## User Stories

### User friendly navigation and responsive design (must-have)

#### User story 1:

As a First-Time Visitor, I need easy navigation and a user-friendly design, including a responsive layout for my device, so I can find information quickly and efficiently without frustration.

#### Acceptance Criteria

The website is fully responsive across various devices and screen sizes.

Site layout and navigation are intuitive, allowing easy access to different sections.

#### Tasks

Apply responsive design principles using Bootstrap to ensure the website is accessible on various devices.

Arrange the site layout and navigation based on best practices, ensuring all key sections and pages are easily accessible.

### Creating Categories (must-have)

#### User story 2:

I want to test my knowledge in different areas.

#### Acceptance Criteria

The quiz will contain a least 4 different categories.

Category must be pressed before quiz starts.

#### Tasks

Use JavaScript for accessible categories.

Use JavaScript for input validation.

### Results (must-have)

#### User Story 3:
As a user I want to know straight away if I have answered correctly.

#### Acceptance Criteria

The results will be shown as green for correct and red for incorrect.

The quiz will be multiple choice and an answer must selected before the user moves on.

The quiz will have 3-4 choices per category.

#### Task

Using JavaScript to check the answer.

Using JavaScript allow user input.

Write the JavaScript needed for the game logic.

### Accessibility and performance (must-have)

#### User Story 4:

As a site owner, I want the website to be responsive and pass basic accessibility checks (ARIA roles, keyboard navigation) so it’s usable by a wide audience.

#### Acceptance Criteria

The website should have an acceptable accessibility result.

Code should run smoothly without error.

#### Tasks


Use W3c, jigsaw and python tutor as code validators.

Use Lighthouse to check the accessibility of the website.

### Leader board (should-have)

#### User story 5:
As a user I would like to see where I rank among other participants

#### Acceptance criteria

Leader board beside the quiz to show rankings of different participants

User’s results are logged immediately

Adjust the rankings by category

#### Tasks

Use HTML/CSS to build a leader board section

Use JavaScript to ensure the results of the user are logged automatically and by category.

### Difficulty levels (could-have)

#### User Story 6:
As a user I would like to challenge myself with different difficulty levels.

#### Acceptance criteria

Each category has three difficulty levels: easy, medium, hard.

Difficulty option must be selected before quiz begins.

Scores from all three levels can be aggregated.

#### Tasks

Use HTML/CSS to create the difficulty selection dropdown menu.

Use JavaScript to ensure the questions are from the correct difficulty level and the scores are correct.

### Friend Button (could-have)

#### User Story 7:

As a user, I want to be able to invite my friends directly from the quiz using an invite button. So that they can quickly join the same quiz and we can play together in real time.

#### Acceptance Criteria

The quiz screen displays a clearly visible Invite button.

When clicked, the button opens a modal or menu with sharing options (e.g., copy link, send via email, share on social apps).

See the inviter’s name or nickname.

Quiz ID or session code
#### Tasks

Create an user-friendly message (e.g., “Join me in this quiz!”).

Use HTML so that people are redirected to the quiz lobby.

Use JavaScript to alert the inviter when friends join.

## Wireframes
![Ayana wireframes 1](assets/images/wireframe%20v1.png)
![Ayana wireframes 2](<assets/images/wireframe v2.png>)

![Bayan wireframes 1](assets/images/Bayan%20wireframe.png)
![Bayan wireframes 2](assets/images/Bayan%20wireframe%202.png)

![Daryl wireframes 1](<assets/images/Daryl wireframe v1.png>)
![Daryl wireframes 2](<assets/images/Daryl wireframe v2.png>)
![Daryl wireframes 3](<assets/images/Daryl wireframe v3.png>)

![Stuart wireframe 1](assets/images/Stuart%20wireframe.png)
![Stuart wireframe 2](assets/images/Stuart%20wireframe%202.png)

## Website Iterations

![Stuart front page v1](<assets/images/Stuart front page v1.png>)
![Stuart front page v1 code](<assets/images/Stuart front page v1 code.png>)
![Stuart front page v1 code 2](<assets/images/Stuart front page v1 code 2.png>)
![Stuart front page v1 code 3](<assets/images/Stuart front page v1 code 3.png>)
![Stuart front page v1 code 4](<assets/images/Stuart front page v1 code 4.png>)

### Website v2

![Home page v2](assets/images/Home%20page%20v2.png)
![Geography page v2](<assets/images/Geography page v2.png>)
![Art page v2](<assets/images/Art page v2.png>)
![History page v2](<assets/images/History page v2.png>)
![Sports page v2](<assets/images/Sports page v2.png>)
![About page v2](<assets/images/About page v2.png>)
![Doc page v2](<assets/images/Doc page v2.png>)

### Website v3

![Home page v3](<assets/images/Home page v3.png>)
![Geography page v3](<assets/images/Geography page v3.png>)
![Art page v3](<assets/images/Art page v3.png>)
![History page v3](<assets/images/History page v3.png>)
![Sports page v3](<assets/images/Sports page v3.png>)
![About page v3](<assets/images/About page v3.png>)
![Doc page v3](<assets/images/Doc page v3.png>)
![Leaderboard page v1](assets/images/Leaderboard%20page%20v1.png)
### Website v4

![Home page v4](assets/images/Home%20page%20v4.png)
![Geography page v4](<assets/images/Geography page v4.png>)
![Art page v4](<assets/images/Art page v4.png>)
![History page v4](<assets/images/History page v4.png>)
![Sports page v4](<assets/images/Sports page v4.png>)
![About page v3](<assets/images/About page v3.png>)
![Doc page v3](<assets/images/Doc page v3.png>)
![Leaderboard page v2](<assets/images/Leaderboard page v2.png>)
![Quiz end screen](<assets/images/Quiz end screen.png>)

### Website v5

![Home page v5](<assets/images/Home page v5.png>)

## Code Development

### HTML

![Stuart sport quiz v1 code](assets/images/Stuart%20sport%20quiz%20v1%20code%201.png)
![Stuart sport quiz v1 code 2](<assets/images/Stuart sport quiz v1 code 2.png>)
![Stuart sport quiz v1 code 3](<assets/images/Stuart sport quiz v1 code 3.png>)
![Stuart sport quiz v1 code 4](<assets/images/Stuart sport quiz v1 code 4.png>)
![Stuart sport quiz v1 code 5](<assets/images/Stuart sport quiz v1 code 5.png>)
![Stuart sport quiz v1 code 6](<assets/images/Stuart sport quiz v1 code 6.png>)
![Stuart sport quiz v1 code 7](<assets/images/Stuart sport quiz v1 code 7.png>)

![Html code 1](<assets/images/Html code 1.png>)

### CSS

![Stuart css code 1](<assets/images/Stuart css code 1.png>)
![Stuart css code 2](<assets/images/Stuart css code 2.png>)
![Stuart css code 3](<assets/images/Stuart css code 3.png>)

### JavaScript
![JS code 1](<assets/images/JS code 1.png>)

## Working with Co-pilot

## Bugs
![First merge conflict](<assets/images/First merge conflict.png>)

![Art page v2 bug](<assets/images/Art page v2 bug.png>)

![Home page v3 bug](<assets/images/Home page v3 bug.png>)

![Geography page v4 bug](<assets/images/Geography page v4 bug.png>)

![Home page v4 bug](<assets/images/Home page v4 bug.png>)

![Home page bug v5](<assets/images/Home page bug v5.png>)

![home page bug v6](<assets/images/home page bug v6.png>)

## Code Validators

### W3c Validator

#### Index HTML

![index html validator](<assets/images/index html validator.png>)
![index html validator 2](<assets/images/index html validator 2.png>)
![index html validator 3](<assets/images/index html validator 3.png>)

#### Geography HTML

![geography html validator](<assets/images/geography html validator.png>)
![geography html validator 2](<assets/images/geography html validator 2.png>)
![geography html validator 3](<assets/images/geography html validator 3.png>)

#### Art HTML
![art html validator](<assets/images/art html validator.png>)
![art html validator 2](<assets/images/art html validator 2.png>)
![art html validator 3](<assets/images/art html validator 3.png>)

#### History HTML

![history html validator](<assets/images/history html validator.png>)
![history html validator 2](<assets/images/history html validator 2.png>)
![history html validator 3](<assets/images/history html validator 3.png>)

#### Sports HTML

![sports html validator](<assets/images/sports html validator.png>)
![sports html validator 2](<assets/images/sports html validator 2.png>)
![sports html validator 3](<assets/images/sports html validator 3.png>)
#### About HTML

![about html validator](<assets/images/about html validator.png>)
![about html validator 2](<assets/images/about html validator 2.png>)

#### Doc HTML

![doc html validator](<assets/images/doc html validator.png>)
![doc html validator 2](<assets/images/doc html validator 2.png>)

#### Leaderboard

![leaderboard html validator](<assets/images/leaderboard html validator.png>)
![leaderboard html validator 2](<assets/images/leaderboard html validator 2.png>)

### CSS Validator

![css validator](<assets/images/css validator.png>)

## Features
![Leaderboard clear notification](<assets/images/Leaderboard clear notification.png>)
![Leaderboard cleared](<assets/images/Leaderboard cleared.png>)
![Score example](<assets/images/Score example.png>)
![Score example 2](<assets/images/Score example 2.png>)

## Responsive

### Home 

![Responsive home page 1](assets/images/Responsive%20home%20page%201.png)
![Responsive home page 2](<assets/images/Responsive home page 2.png>)
![Responsive home page 3](<assets/images/Responsive home page 3.png>)

![Responsive home 2 page 1](<assets/images/Responsive home 2 page 1.png>)
![Responsive home 2 page 2](<assets/images/Responsive home 2 page 2.png>)
![Responsive home 2 page 3](<assets/images/Responsive home 2 page 3.png>)
![Responsive home 2 page 4](<assets/images/Responsive home 2 page 4.png>)

### Geography

![Responsive geography page 1](<assets/images/Responsive geography page 1.png>)
![Responsive geography page 2](<assets/images/Responsive geography page 2.png>)
![Responsive geography page 3](<assets/images/Responsive geography page 3.png>)

### Art

![Responsive art page 1](<assets/images/Responsive art page 1.png>)
![Responsive art page 2](<assets/images/Responsive art page 2.png>)
![Responsive art page 3](<assets/images/Responsive art page 3.png>)

### History

![Responsive history page 1](<assets/images/Responsive history page 1.png>)
![Responsive history page 2](<assets/images/Responsive history page 2.png>)
![Responsive history page 3](<assets/images/Responsive history page 3.png>)

### Sports

![Responsive sports page 1](<assets/images/Responsive sports page 1.png>)
![Responsive sports page 2](<assets/images/Responsive sports page 2.png>)
## Accessibility

### Lighthouse

#### 1

![Home page lighthouse 1](<assets/images/Home page lighthouse 1.png>)
![Art page lighthouse 1](<assets/images/Art page lighthouse 1.png>)
![Geography page lighthouse 1](<assets/images/Geography page lighthouse 1.png>)
![History page lighthouse 1](<assets/images/History page lighthouse 1.png>)
![About page lighthouse 1](<assets/images/About page lighthouse 1.png>)
![Doc page lighthouse 1](<assets/images/Doc page lighthouse 1.png>)

#### 2
![Home page lighthouse v2](<assets/images/Home page lighthouse v2.png>)
![Geography page lighthouse v2](<assets/images/Geography page lighthouse v2.png>)
![Art page lighthouse v2](<assets/images/Art page lighthouse v2.png>)
![History page lighthouse v2](<assets/images/History page lighthouse v2.png>)
![Sports page lighthouse v2](<assets/images/Sports page lighthouse v2.png>)
![About page lighthouse v2](<assets/images/About page lighthouse v2.png>)
![Doc page lighthouse v2](<assets/images/Doc page lighthouse v2.png>)

#### Desktop
![Home page Desktop lighthouse v1](<assets/images/Home page Desktop lighthouse v1.png>)
![Geography page Desktop lighthouse v1](<assets/images/Geography page Desktop lighthouse v1.png>)
![Art page Desktop lighthouse v1](<assets/images/Art page Desktop lighthouse v1.png>)
![History page Desktop lighthouse v1](<assets/images/History page Desktop lighthouse v1.png>)
![Sports page Desktop lighthouse v1](<assets/images/Sports page Desktop lighthouse v1.png>)

#### 3

![Home page lighthouse v3](<assets/images/Home page lighthouse v3.png>)
![Geography page lighthouse v3](<assets/images/Geography page lighthouse v3.png>)
![Art page lighthouse v3](<assets/images/Art page lighthouse v3.png>)
![History page lighthouse v3](<assets/images/History page lighthouse v3.png>)
![Sports page lighthouse v3](assets/images/Sports%20page%20lighthouse%20v3.png)
![About page lighthouse v3](<assets/images/About page lighthouse v3.png>)
![Doc page lighthouse v3](<assets/images/Doc page lighthouse v3.png>)
![Leaderboard page lighthouse v1](<assets/images/Leaderboard page lighthouse v1.png>)
#### Desktop 2

![Home page Desktop lighthouse v2](assets/images/Home%20page%20Desktop%20lighthouse%20v2.png)
![Geography page Desktop lighthouse v2](<assets/images/Geography page Desktop lighthouse v2.png>)
![Art page Desktop lighthouse v2](<assets/images/Art page Desktop lighthouse v2.png>)
![History page Desktop lighthouse v2](<assets/images/History page Desktop lighthouse v2.png>)
![Sports page Desktop lighthouse v2](<assets/images/Sports page Desktop lighthouse v2.png>)

#### 4

![Home page lighthouse v4](<assets/images/Home page lighthouse v4.png>)
![Geography page lighthouse v4](<assets/images/Geography page lighthouse v4.png>)
![Art page lighthouse v4](<assets/images/Art page lighthouse v4.png>)
![History page lighthouse v4](<assets/images/History page lighthouse v4.png>)
![Sports page lighthouse v4](<assets/images/Sports page lighthouse v4.png>)
![Leaderboard page lighthouse v2](<assets/images/Leaderboard page lighthouse v2.png>)

#### Desktop 3

![Home page Desktop lighthouse v3](<assets/images/Home page Desktop lighthouse v3.png>)
![Geography page Desktop lighthouse v3](<assets/images/Geography page Desktop lighthouse v3.png>)
![Art page Desktop lighthouse v3](assets/images/Art%20page%20Desktop%20lighthouse%20v3.png)
![History page Desktop lighthouse v4](assets/images/History%20page%20Desktop%20lighthouse%20v4.png)
![Sports page Desktop lighthouse v3](<assets/images/Sports page Desktop lighthouse v3.png>)
![About page Desktop lighthouse v3](<assets/images/About page Desktop lighthouse v3.png>)
![Doc page Desktop lighthouse v3](<assets/images/Doc page Desktop lighthouse v3.png>)
![Leaderboard page Desktop lighthouse v1](assets/images/Leaderboard%20page%20Desktop%20lighthouse%20v1.png)

### 5

![Art page lighthouse v5](<assets/images/Art page lighthouse v5.png>)
![Geography page lighthouse v5](<assets/images/Geography page lighthouse v5.png>)
![History page lighthouse v5](<assets/images/History page lighthouse v5.png>)
![Sports page lighthouse v5](<assets/images/Sports page lighthouse v5.png>)
![Home page lighthouse v5](assets/images/Home%20page%20lighthouse%20v5.png)
#### Desktop 4

![Geography page lighthouse v4](<assets/images/Geography page lighthouse v4.png>)
![Leaderboard page Desktop lighthouse v2](<assets/images/Leaderboard page Desktop lighthouse v2.png>)

### 6

![Home page lighthouse v6](<assets/images/Home page lighthouse v6.png>)

#### Desktop 5

![Home page Desktop lighthouse v6](<assets/images/Home page Desktop lighthouse v6.png>)
![Geography page Desktop lighthouse v5](<assets/images/Geography page Desktop lighthouse v5.png>)
![Art page Desktop lighthouse v5](<assets/images/Art page Desktop lighthouse v5.png>)
![History page Desktop lighthouse v5](<assets/images/History page Desktop lighthouse v5.png>)
![Sports page Desktop lighthouse v5](<assets/images/Sports page Desktop lighthouse v5.png>)

#### Desktop 6
![Home page Desktop lighthouse v5](<assets/images/Home page Desktop lighthouse v5.png>)

## Miscellaneous
![quizmaster-favicon](assets/images/quizmaster-favicon.png)

![geography1](assets/images/geography1.jpg)

![quiz-logo](assets/bayan-images/quiz-logo.png)


![art-image](assets/images/art-image.jpg)

![history-image](assets/images/history-image.jpg)

![questions-image](assets/images/questions-image.jpg)

![sports-image](assets/images/sports-image.jpg)

