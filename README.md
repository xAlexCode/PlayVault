# PlayVault
A game library for your favorite games

## React + TypeScript + Vite

## Design decisions

### Loading and error handling

All pages check `response.ok`, show a message when something goes wrong and show a loading indicator while data is fetched. The way it is displayed differs on purpose and the teacher confirmed that using different approaches on different pages is fine:

- **List and new game pages** show loading and errors inline, so the status filter or the form stays on screen and the user can't get stuck.
- **Detail and edit pages** use early returns, since they only show one game and `game` must exist before the page (or the pre-filled form) is rendered.