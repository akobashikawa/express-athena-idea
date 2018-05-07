# Express Athena

What if we could get just a part of an html document.

This is an implementation of the idea, using route `/public` parameter `querySelector`.


## Usage

- Clone this repo
- `$ npm install`
- `$ npm start`
- http://localhost:3000/public/index.html?querySelector=.title
- http://localhost:3000/remote?url=http://rulo.me&querySelector=.section__title

## How to

The idea is intercept response in order to apply cheerio before to serve.

