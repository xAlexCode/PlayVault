# PlayVault
PlayVault is a game library where users can keep track of games they want to play, are currently playing, have completed, or have dropped.

My goal grade is **G** for this assignment.

**Users can**:

- View all games in a list
- Open a game's details page 
- View game ratings and personal notes
- Add new games
- Edit existing games
- Delete games
- Filter games by status

[Live länk Vercel](https://play-vault-five.vercel.app) 

## technologies
- **React** and **TypeScript** via **Vite**
- **CSS**: styling
- **ESLint**: codequality
- **Git och GitHub**, deployed on **Vercel**

## Getting started

```bash
git clone [https://github.com/xAlexCode/PlayVault]
cd playvault
npm install
npm run dev
```

## API
- The API is provided by the teacher: https://questlog-api.vercel.app/docs
- There is no login. Games are saved under a personal handle. The handle for this project is **`alexandrahsson`**, so the base URL is: `https://questlog-api.vercel.app/api/alexandrahsson`
- The handle is set in one place, in `config`, so it can be changed easily.

## Endpoints
| Method  | URL                  | What it does        |
| ------ | --------------------- | ------------------- |
| GET    | /games?status=playing | All games or status |
| GET    | /game/:id             | One game            |
| POST   | /games/new            | Create a new game   |
| PATCH  | /games/:id/edit       | Update existing game|
| DELETE | /api/users/:id        | Delete a game       |

### Pages in the app

| Route              | Page                         |
| ------------------ | ---------------------------- |
| /                  | Home                         |
| /games             | List of games with filter    |
| /games/:id         | Game details                 |
| /games/new         | Form to add a game           |
| /games/:id/edit    | Form to edit a game          |
| *                  | 404 page                     |


## Image
- Photo by [Vicki Hamilton](https://pixabay.com/users/flutie8211-17475707/) from Pixabay

### Loading and error handling

All pages check `response.ok`, show a message when something goes wrong and show a loading indicator while data is fetched. The way it is displayed differs on purpose and the teacher confirmed that using different approaches on different pages is fine:

- **List and new game pages** show loading and errors inline, so the status filter or the form stays on screen and the user can't get stuck.
- **Detail and edit pages** use early returns, since they only show one game and `game` must exist before the page (or the pre-filled form) is rendered.