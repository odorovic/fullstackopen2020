# SPA Note Get Sequence Diagram

```
note over browser
Browser processes click using JS handler
Appends the input content to the notes and
sends over a http request to update server

browser --> server: HTTP https://fullstack-exampleapp.herokuapp.com/new_note_spa

note over browser
Browser has the state already displayed, and does not send anything more over.
I'm not sure if appending happens after 201, or if it gets done immediately
and then reverted if http call fails.

server --> browser: 201 CREATED + {"message":"note created"}
```