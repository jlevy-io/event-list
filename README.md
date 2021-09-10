<br />
  <h1 align="center">Event List</h3>

  <p align="center">
    An infinite-loading list of events from the Mobilize.us API
    <br />
    <br />
    <a href="https://event-list.vercel.app/">View Demo</a>
  </p>
</p>

### Built With

This SPA was built with React

- [# Create React App](https://create-react-app.dev/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. You will need an API key from Google with the Maps JavaScript API & Geocoding API permissions.
2. Clone the repo
   ```sh
   git clone git@github.com:jlevy-io/event-list.git
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Copy the `.env.example` file to `.env` and enter your Google API key
   ```JS
   REACT_APP_GOOGLE_API_KEY=YOUR_API_KEY
   ```
5. Start the development server
   ```sh
   yarn start
   ```

<!-- USAGE EXAMPLES -->

## Usage

The application renders an infinite-scrolling list of events from the Mobilize.us API. The user can either view all events or filter Nearby Events. Each event card has a details button which will show a details card with more information. If location info is provided, a Google map with a marker will be rendered on the details card.

If filtering by Nearby Events, a Show Map button will appear which will render a Google map with clustering of the events. An event marker can be hovered to display the event title.
