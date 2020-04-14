# New Note Submit Sequence Diagram

```
note over browser
Browser processes the form click internally,
reads content from the input field
sends it to the form-provided url
sending the content encoded in Form Content

browser --> server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note note=Hello+World

note over server
Server saves the note it's persistence
and redirects to the /notes

server --> browser 302 Redirect to https://fullstack-exampleapp.herokuapp.com/notes
browser --> server HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server --> browser 200 OK + html content

note over browser
Browser parses html and finds several resources
to download listed in the html

browser --> server HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server --> browser 200 OK + css
browser --> server HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
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