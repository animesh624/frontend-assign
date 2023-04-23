# Node.js Application with Express and MongoDB and NEXTJS for frontend UI components

This is a Node.js application that uses the Express framework and MongoDB database to fetch and display data in a table format. The frontend of the application is developed using NEXTJS

## Deployed url

### Frontend
https://frontend-assign.vercel.app/

### Backend
https://backendassign.onrender.com

The backend is built using Node.js and Express framework. MongoDB database is used as a data store, and Mongoose is used as to connect to the database. 

## Frontend

The frontend is built using NEXTJS and styled using CSS Modules. The frontend displays the data returned from the backend API in a table format.
`Select Query button is there to query for respective query

### Backend API Endpoints

There are 5 API endpoints in the backend for fetching data based on different conditions:

1. `/query1` - Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. `/query2` - Male Users which have phone price greater than 10,000.
3. `/query3` - Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. `/query4` - Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. `/query5` - Show the data of top 10 cities which have the highest number of users and their average income.

All of these endpoints return JSON data.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
