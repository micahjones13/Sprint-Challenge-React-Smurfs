1.  Explain the differences between `client-side routing` and `server-side routing`.

     - Server side routing includes a refresh when the server finishes a request.  This is good because the server will only give us the info requested, no more and no less. It's bad because refreshes/dom manipulation take time.
     - Another downside to server-side is that when a lot of information is being requested, it has a lot of protocols to run through, and this could also take a while. 
     - Client side handles routing internally using JS. This prevents refreshes because the page already has all the info, it just only shows what it needs to. This means no refreshing and faster pages. 

2.  What does HTTP stand for?

    - HyperText Transfer Protocol

3.  What does CRUD stand for?

    - Create, Read, Update, Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

  - C (create) --> post
  - R (read) --> get
  - U (update) --> put
  - D (delete) --> delete

5.  Mention three tools we can use to make AJAX requests

    - fetch, axios, jquery