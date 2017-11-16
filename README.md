NOTES:
2017.11.11 - Added Travis CI integration : 
[![Build Status](https://travis-ci.org/last-indigo/karma-jasmine-babel-setup-2017-11.svg?branch=master)](https://travis-ci.org/last-indigo/karma-jasmine-babel-setup-2017-11)

----

> npm init -y
> npm i --save-dev karma

Had problems with `karma init` in GitBash (https://github.com/karma-runner/karma/issues/2045)
So, run from Windows Powershell:
> .\node_modules\.bin\karma.cmd init

On completed, Karma extended the Package.json file with the launchers 
for browsers that I selected during the init process.

After, tried to run `npm test` again, run into error:
> Cannot find module 'jasmine-core'
Well, gladly the installation guide had mentioned that.
`https://karma-runner.github.io/1.0/intro/installation.html`
> npm install jasmine-core --save-dev

To enable polyfills in the specs, we have to include it in source files:
https://stackoverflow.com/questions/29391111/karma-phantomjs-and-es6-promises
> npm install --save-dev babel-polyfill
> files: [ 
  ... 'node_modules/babel-polyfill/dist/polyfill.js'

When you try to setup ES6 transpilation in Karma,
you follow the instructions from here:
https://github.com/babel/karma-babel-preprocessor#polyfill

So I added the
    preprocessors: {
      'src/client/**/*.spec.js': ['babel'],
    },
Got error:
  16 11 2017 00:23:11.956:ERROR [preprocess]: Can not load "babel", it is not registered!
    Perhaps you are missing some plugin?
  16 11 2017 00:23:12.086:ERROR [karma]: Found 1 load error

I'll try installing preprocessor plugin now.
> npm install karma-babel-preprocessor --save-dev

Got error:
    Cannot find module 'babel-core'
  16 11 2017 00:24:48.912:ERROR [preprocess]: Can not load "babel", it is not registered!
    Perhaps you are missing some plugin?

RUN AGAIN
> .\node_modules\.bin\karma.cmd start --report-slower-than 100

Still got errors in older browsers for arrow-fn syntax:
  PhantomJS 2.1.1 (Windows 8 0.0.0) ERROR
    SyntaxError: Unexpected token ')'
    at src/client/first.spec.js:18

  IE 11.0.0 (Windows 10 0.0.0) ERROR
    Syntax error
    at src/client/first.spec.js:18

So tried to add config for babelPreprocessor:
    babelPreprocessor: {
      options: {
        presets: ['env'],
      },
    },
Got error (expectedly):
  16 11 2017 00:29:10.366:ERROR [preprocessor.babel]: Couldn't find preset "env" relative to directory

Let's install it:
> npm install babel-preset-env --save-dev
And run karma again.

Had problems with error:
  Error: EPERM: operation not permitted, rename
The problem is solved by closing my local-server running, as advised in:
  https://github.com/react-community/create-react-native-app/issues/191

NOW IT'S FINALLY WORKING AND RECOGNIZING ARROW FUNCTIONS! :)

---

Adding of Travis CI browsers for tests is explained here:
- http://karma-runner.github.io/0.8/plus/Travis-CI.html
- https://docs.travis-ci.com/user/gui-and-headless-browsers/#Using-xvfb-to-Run-Tests-That-Require-a-GUI

Setting Chrome add-on in TravisCI
- https://docs.travis-ci.com/user/gui-and-headless-browsers/#Using-the-Chrome-addon-in-the-headless-mode