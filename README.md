# fl-goat-farmer
![Run tests](https://github.com/gallmarch/fl-goat-farmer/workflows/Run%20tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/gallmarch/fl-goat-farmer/badge.svg?branch=develop)](https://coveralls.io/github/gallmarch/fl-goat-farmer?branch=master)

Fallen London Goat Farmer rewrite for the site redesign

## Building the extension (for reviewers and other interested parties)

You'll need up-to-date versions of Node (at least 8) and Yarn.
The extension only targets [Fallen London](https://www.fallenlondon.com), so you'll need to create an
account there if you want to see it in action (rather than simply verify that it's benign).

1. Install dependencies: `yarn install`
1. Create a build: `NODE_ENV=production yarn build` (the default development build targets a localhost partial replica of Fallen London's UI that I use for testing purposes)
1. Alternatively, run a build that watches changes and recompiles on the fly: `NODE_ENV=production yarn start`
1. Create a ZIP for distribution to the Chrome or Mozilla extension stores: `NODE_ENV=production yarn dist` (this should reproduce the submitted ZIP but may differ slightly if the bundled dependencies' versions themselves differ)
