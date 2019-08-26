# ARTICLE BROWSER

This is an article browser using [NewsApi](https://newsapi.org) as a data source.
I used Parcel as a bundler with bunch of tools for code linting like eslint and prettier. Eslint prettier and unit tests are running before every commit.
For state management I chose Redux but in flavour of Redux-Starter-Kit which reduces the amount of boilerplate.

What I did not manage to finish:

- Missing unit tests (Home container)
- Supress react-select warning caused by usage ofe deprecated methods in the lib
- Lazy load images with library like [https://github.com/verlok/lazyload](https://github.com/verlok/lazyload)
- Placeholder image
- Style the modal completely - there are some differences compared the design
- Add some fancy animations eg. when more news is loading
- Optimize list re-rendering
- Remove HTML from API data
- SSR

## Requirements

For development, you will need:

- Node.js version 10.13.0
- Yarn (optional)

## Install

    $ git clone https://github.com/m1520n/article-browser.git
    $ cd article-browser
    $ yarn

### Configure app

Copy `config.example.json` to `config.json` and fill the keys with proper values.

## Start & watch development task

    $ yarn start

## Build for production

    $ yarn build

## Run unit tests

    $ yarn test

## Run eslint task

    $ yarn lint

## Run prettier task

    $ yarn prettify

## Languages & tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [Styled Components](https://www.styled-components.com) is used for styling
