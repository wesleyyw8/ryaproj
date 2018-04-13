# Ryanair FE Test 

## Wesley point of view
Hi guys, let me share some thoughts about this project.
I think that one component should not talk to another component. So I put the logic on its parent (home.controller) and then my components (location picker) would get this data. 
In my current project we use angular 1.x and the redux pattern... It is really great and Im kind of additced to it. So I had some trouble writing the home.controller without this pattern but it works just fine.




## Development

Create a JS bundle with Webpack::

  $ npm run build

Start the Webpack development server on 'localhost:3000'::

  $ npm run start

Run tests::

  $ npm run test

Linting::

  $ npm run lint