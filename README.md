# Simple Online Store - Next.js Project

This is a simple online store project built with Next.js (TypeScript), TailwindCSS, Prisma ORM, PostgreSQL, Shadcn/ui, and NextAuth for authentication.

## Features

- User registration and login with NextAuth (email & password)
- User roles: User and Admin
- Product listing with category filter
- Product detail page with add to cart
- Shopping cart and checkout (dummy payment)
- Admin dashboard for CRUD operations on products
- File upload for product images
- Responsive and mobile-friendly design
- Form validation with Zod
- Server actions for form handling (Next.js 14 App Router)

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - UI components
- `/lib` - Prisma client, auth utilities
- `/db` - Prisma schema and migrations
- `/middlewares` - Authentication middleware
- `/public/uploads` - Uploaded product images

## Setup

1. Install dependencies:

```bash
npm install
```

2. Set up your PostgreSQL database and add the connection string to `.env` as `DATABASE_URL`.

3. Run Prisma migrations:

```bash
npx prisma migrate dev --name init
```

4. Seed the database with dummy products:

```bash
npx ts-node prisma/seed.ts
```

5. Run the development server:

```bash
npm run dev
```

## Notes

- Passwords are hashed with bcrypt.
- Authentication uses NextAuth credential provider.
- File uploads are stored in `public/uploads`.
- This project is for educational purposes and does not include real payment or email services.

## License

MIT
