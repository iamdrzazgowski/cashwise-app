# CashWise

**CashWise** is a modern household budget management application designed to
help users easily track expenses, income, and plan their finances. The app is
fast, responsive, and intuitive, built using modern web technologies.

---

## Features

-   User registration and login (Better Auth)
-   Add, edit, and delete expense and income categories
-   View transaction history in tables and charts
-   Responsive UI (Tailwind CSS + Shadcn UI)
-   Form validation and error handling (React Hook Form)

---

## Technologies

| Layer          | Technologies                                                         |
| -------------- | -------------------------------------------------------------------- |
| Frontend       | Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, React Hook Form |
| Backend        | Next.js Server Actions, Prisma ORM                                   |
| Database       | PostgreSQL                                                           |
| Authentication | Better Auth                                                          |

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/iamdrzazgowski/cashwise-app.git
cd cashwise-app
```

2. Install dependencies:

```bash
npm install
```

---

## Database Setup

1. Create a PostgreSQL database.

2. Copy .env.example to .env and fill in your database credentials:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/cashwise"
BETTER_AUTH_SECRET="YOUR-KEY"
BETTER_AUTH_URL="http://localhost:3000"
```

3. Add the necessary authentication models

```bash
npx @better-auth/cli generate
```

4. Initialize the database using Prisma:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

## Running the App

```bash
npm run dev
```

---

## Architecture

-   Next.js – server-side rendering (SSR)
-   Server Actions – handle backend logic directly in Next.js components.
-   Prisma – ORM for PostgreSQL database.
-   Better Auth – secure user authentication and authorization.
-   Tailwind CSS & Shadcn UI – styling and ready-to-use UI components.
-   React Hook Form – form management and validation.

---

## Gallery

![Home Page](https://github.com/user-attachments/assets/ee94cce7-1f6d-4c38-95a0-22c0321ee09b)
![Login](https://github.com/user-attachments/assets/30a3a5be-7a17-40a7-a55d-213636b06e7f)
![Dashboard](https://github.com/user-attachments/assets/665d05a7-9c7b-42e1-acbb-81947da30c73)
![Transactions Page](https://github.com/user-attachments/assets/1e44fb7b-cc3a-440d-b716-621468a52da3)
![Add transaction](https://github.com/user-attachments/assets/d24f3a76-27e2-42e6-b77e-9e1f6291f660)
![Edit transaction](https://github.com/user-attachments/assets/4d7a65a9-ba68-4b96-9a00-6dd1e03738d0)
![Not found page](https://github.com/user-attachments/assets/49e8d6d7-8011-4b8f-9675-462e87ed1a44)
