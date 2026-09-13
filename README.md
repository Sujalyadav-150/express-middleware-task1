# Express Middleware - Task 1

## Task
Create a custom middleware that adds `req.user = "Guest"` and use it on the `/welcome` route.

## Run the project

```bash
npm install
npm start
```

## Test in Postman

Send:

```text
GET http://localhost:3000/welcome
```

Expected response:

```html
<h1>Welcome, Guest!</h1>
```
