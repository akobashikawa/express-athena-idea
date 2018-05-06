# Express Athena

What if we could get just a part of an html document.

This is a simple web server with dom selection support via url parameter querySelector.

## Usage

- Clone this repo
- `$ npm install`
- `$ npm start`
- http://localhost:3000?querySelector=.site-title

## Trying as a template engine

It works for a url. It needs run render.

May be it could be useful for a service that provide selector for external sites.

We need also something running for all services.

## Trying as an interceptor

The idea is intercept response in order to apply cheerio before to serve.

I use [express-static-compiler](https://www.npmjs.com/package/express-static-compiler) for that