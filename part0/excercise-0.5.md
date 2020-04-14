# SPA Note Get Sequence Diagram

```
browser --> server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server --> browser: 200 OK + html

note over browser
Browser parses html and finds several resources
that need to be fetched

browser --> server HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server --> browser 200 OK + css
browser --> server HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
server --> browser 200 OK + js

note over browser
Browser executes js, which includes a
http request to the server

browser --> server HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

note over browser
Server returns json data which the remainder of JS code parses
and uses to render the content.

server --> browser 200 OK + Json
```