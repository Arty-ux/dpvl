HTML site created with static web site generator based on the metalsmith starter kit [metalsmith-base](https://github.com/evocode/metalsmith-base). 

Dependencies / Features:
- [Metalsmith](http://metalsmith.io/)
- [Gulp](http://gulpjs.com/)
- [jQuery ](https://github.com/jquery/jquery)
- [Bootstrap](https://github.com/twbs/bootstrap/)
- [Babel / ES6](https://babeljs.io/)
- Development Server

## Install

```
mkdir FOLDERNAME
git clone github.com/emanuelbaruch/dpvl
cd FOLDERNAME
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
