# Booking Manager Guide

HTML site created with static web site generator based on the metalsmith starter kit [metalsmith-base](https://github.com/evocode/metalsmith-base). 

Dependencies / Features:
- [Metalsmith](http://metalsmith.io/)
- [Gulp](http://gulpjs.com/)
- [jQuery ](https://github.com/jquery/jquery)
- [Bootstrap](https://github.com/twbs/bootstrap/)
- [Babel / ES6](https://babeljs.io/)
- [Development Server](https://github.com/evocode/metalsmith-base/blob/master/gulpfile.js#L160)


## Install

```
mkdir bm-guide
git clone git@github.com:Demeure/bm-guide.git
cd bm-guide
npm install
```
## Develop

This command will fully build a development version of the site, start the gulp watchers, and setup a development server. The command output will list the server address to open in your browser.
```
npm run start
```

### Commands

1. `npm run dev` - Run a development build
1. `npm run start` - Run a development build, start the development server and watchers
1. `npm run debug` - Run a development build in debug mode
1. `npm run production` - Run a production build, compiles assets and minifies
1. `npm run watch` - Start the gulp watchers

All commands can be run directly with: `./node_modules/.bin/gulp`

## Code Structure

### JavaScript

### CSS

### Templates
- all *handlebars templates* are in folder `/layouts`, with extension `.handlebars`
- all *handlebars partials* are in `/layouts/partials`
- the *master template* is the partial `default.handlebars`

### Assets
-


## Edit the Style Guide Content

### Adding Code
Code must be wrapped within `<pre><code class="language-html"></code></pre>`. 
Supported languages are:
- html `<pre><code class="language-html"></code></pre>`
- css `<pre><code class="language-css"></code></pre>`
- javascript `<pre><code class="language-javascript"></code></pre>`
- json `<pre><code class="language-json"></code></pre>`