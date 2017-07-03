# Initiative Tracker

## Link

https://spencerkordecki.github.io/initiative-tracker

## Description

Initiative Tracker for use in tabletop RPGs built using React.js to keep track of characters' initiative. By inputting the character's health, initiative, and name, a table is created to keep track of the initative order for the current encounter. As players or NPCs are defeated in battle, they can be removed to keep track of the remaining characters.

## Usage

The application requires the user to have a player's initiative, health, and name to input them in the table. These are added through the inputs at the bottom of the table and then submitted to be added. When an encounter is completed, the page can be refreshed to start a new encounter. 

## Development

### To install

Clone the repo and use the command `yarn install`.

### To build

The command `yarn run webpack` will build the application for production putting the production files in the `dist/` folder. 

### To run

The command `yarn run start` will run the application on localhost with hot reload on save.
