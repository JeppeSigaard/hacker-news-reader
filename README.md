# React Hacker News Reader

Basic React app for displaying stories from the Hacker news Api, using Vite, Express, React@19, React Router and Tailwind.

https://github.com/user-attachments/assets/f789d755-0f16-47a9-acd2-536b038222c5

To run the project, clone it to your machine and run:

```Shell
npm i
npm start
```

#### Architectural decisions

- The project uses Vite and Tailwind for swift prototyping.
- The project includes an API proxy written in express. The proxy uses in-memory cache for balancing load against the hacker news API, and reshapes the incoming data for use in this app.
- The projects experiments with leveraging React's Suspense spec and the use() hook for data fetching on the client.
- The project showcases the React Compiler release candidate

#### How to advance

- The project is written in happy paths. A good advancement would be to include tests, error handling on the backend etc.
- While the project includes Express, the app itself is not server side rendered, which may cause unnecessary wait until first contentful paint
