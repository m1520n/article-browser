# ARTICLE BROWSER

## Requirements

For development, you will only need Node.js installed on your environment.

## Install

    $ git clone https://github.com/m1520n/article-browser.git
    $ cd article-browser
    $ yarn

### Configure app

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

- api url
- api key

## Start & watch

    $ yarn start

## Simple build for production

    $ yarn build

## Languages & tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### CSS

_Autoprefixer_ is included and use [caniuse.com](http://caniuse.com/) database to avoid outdated prefixes. _You can forget CSS prefixes NOW._
