# PlayVault
PlayVault is a game library where users can keep track of games they want to play, are currently playing, have completed, or have dropped.

**Users can**:

- View all games in a list
- Open a game's details page 
- View game ratings and personal notes
- Add new games
- Edit existing games
- Delete games
- Filter games by status

[Live länk Vercel](http://) 

## technics
- **React** and **TypeScript** via **Vite**
- **CSS**: styling
- **ESLint**: codequality
- **Git och GitHub**, **Vercel**

## API
- The API is from the teacher: https://questlog-api.vercel.app/docs
- The handle for this project is under: https://questlog-api.vercel.app/api/alexandrahsson/games

### How it's structured
| Method  | URL                  | What it does        |
| ------ | --------------------- | ------------------- |
| GET    | /games?status=playing | All games or status |
| GET    | /game/:id             | One game            |
| POST   | /games/new            | Create a new game   |
| PATCH  | /games/:id/edit       | Update existing game|
| DELETE | /api/users/:id        | Delete a game       |


## Image
- Photo by [Vicki Hamilton](https://pixabay.com/users/flutie8211-17475707/) from Pixabay

### Loading and error handling

All pages check `response.ok`, show a message when something goes wrong and show a loading indicator while data is fetched. The way it is displayed differs on purpose and the teacher confirmed that using different approaches on different pages is fine:

- **List and new game pages** show loading and errors inline, so the status filter or the form stays on screen and the user can't get stuck.
- **Detail and edit pages** use early returns, since they only show one game and `game` must exist before the page (or the pre-filled form) is rendered.