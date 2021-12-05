# Movie Trailers

## _Filter , Find and Watch Movie Trailers_

Movie Trailers react app allows users to browse and watch movie trailers. Filter by language and Genre.

## Working

- By Default scroll to view all movies that are served by our API.
- Click on any movie to view its detail and watch the trailer.
- Use the filters to filter relavant results based on Genre and Language.

## Sandbox and Github Links

You can checkout Movie Trailers application and view it Sandbox :
[Demo Link]

You can contribute and clone the repository from :
[Github Link]

## Tech

- [ReactJS] - Front end library!

## Installation

- This repo is currently hosted on [Github Link].
- Code can be pushed to the feature branch.
- You can start working on the repo by cloning it!

To clone in cli :

```sh
git clone <url of reo>
```

To install all Dependencies:

```sh
cd Movie_Trailers
npm install
```

## Initializing

To initialize the application

```sh
cd Movie_Trailers
npm start
```

You can now start viewing the application on port - localhost:3000

## Build

To build the application

```sh
cd Movie_Trailers
npm run build
```

## Compoents

I have attempted to seperate the components into two parts :

- The UI components that are stateless that are often reused to create complex UI.

| Component  | Purpose                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| Movie Card | Relates to the card that shows a thumbnail, name, votes, release date of the movie.                         |
| Trailer    | The Trailer Component allows you to view the trailer embedded in it and also give more info about the movie |
| Filter     | This component proviedes a checklist to filter movies based on Genres and Languages.                        |

- The Stateful components that use one or multiple UI Components and pass data as props.

| Component   | Purpose                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| Header      | Header component utilises the Filters component to allow the user to add filters to the movies at one single place. |
| Body->Chips | Proviedes a beautiful chips type interface to remove filters                                                        |
| Movies      | This is the place where all the movie cards are arranged and also interacts with the api to fetch and show movies.  |

## APIs and Controllers

All the api's and controllers reside in the helpers direcotry.

| Purpose               | Endpoint                                       | Payload                                                                                                                                               | Response                        |
| --------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Find all movies (Get) | [https://peaceful-forest-62260.herokuapp.com/] | Request URL: https://peaceful-forest-62260.herokuapp.com/, Request Method: GET Status Code: 200 OK , Referrer Policy: strict-origin-when-cross-origin | {Language List , Movie Data}... |
