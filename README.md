# NASA Media Library

NASA has revealed a public API for the image collection. We would like to explore the content using a client side application.

API docs: https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

## Requirements:

- [x] Create a React single page application (it’s ok to use CRA).
- [ ] The application should consist of 2 pages: search and show (requirements below).
- [x] Make sure the application is usable on mobile devices as well.
- [ ] Provide basic tests for your code.
- [x] Feel free to style your application as you like.
- [x] Use any libraries you like.

## Search page requirements:

- [x] The page must allow users to search the NASA Media Library.
- [x] The search process must use the /search endpoint (API docs).
- [x] The page should contain the required query input and 2 optional input filters: year start and year end.
- [ ] The input data should have basic validations compliant with the API specification.
- [x] There should be a search button that starts the search process.
- [x] The search results should appear below the search section (inputs).
- [x] Each search result item should include the thumbnail, title, location, and photographer's name.
- [ ] The search result item should link to the show page - a more detailed page of the specific search result item.
- [x] Only search image collections (media_type=image).

## Show page requirements:

- [ ] The page should contain the details of the collection: title, location, photographer's name, description, keywords, date, and images from the collection.
- [ ] Choose unique images from the collection, regardless of version. Most collections only have one image. Decide which version suits your preferences.
- [ ] There should be a back button that takes you back to the search results page.
