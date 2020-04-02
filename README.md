# To call Hycon utility function in browser side javascript

Here is a sample repository how to transfer Hycon utility library from server side (nodejs) JS into browser side JS

## add your function in main.js

If you want to add any functionality, please add it in main.js in a server side JS way of coding, just like in nodejs env.

## npm i

install required lib for the project, especially the converter library `browserify`

## npm run build

using the `browserify` to build a standalone library for browser side. The object name is **hycon** and the output file name is **hycon_utils.js**

## run the demo file in your browser

The demo file shows how to import library of hycon utility and how to use the function.