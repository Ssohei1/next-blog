# Soheil Blog

Soheil Blog is a blogging platform where users can register, log in, create, manage, and delete blog posts. The project is built with Next.js, styled with Tailwind CSS, and uses Prisma for database management. Authentication is handled with NextAuth. The platform is hosted on Liara, utilizing Liara's database and hosting services.

## Live Demo
[Soheil Blog](https://soheil-blog.liara.run)

## Features
- User registration and authentication (NextAuth)
- Create, update, and delete blog posts
- Manage user posts
- Styled with Tailwind CSS
- Prisma for database interaction
- Hosted on Liara

## Technologies Used
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API routes, Prisma
- **Database:** Liara's database service
- **Authentication:** NextAuth
- **Hosting:** Liara

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/soheil-blog.git
   cd soheil-blog
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   DATABASE_URL=your-database-url
   NEXTAUTH_SECRET=your-secret-key
   ```
4. Run Prisma migrations:
   ```sh
   npx prisma migrate dev
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Lint the project

## Dependencies
```json
{
  "@next-auth/prisma-adapter": "^1.0.7",
  "@prisma/client": "^6.5.0",
  "@types/bcrypt": "^5.0.2",
  "bcrypt": "^5.1.1",
  "lucide-react": "^0.482.0",
  "next": "15.2.2",
  "next-auth": "^4.24.11",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-toastify": "^11.0.5"
}
```

## Dev Dependencies
```json
{
  "@tailwindcss/postcss": "^4",
  "prettier": "^3.5.3",
  "prettier-plugin-tailwindcss": "^0.6.11",
  "prisma": "^6.5.0",
  "tailwindcss": "^4"
}
```

## License
This project is licensed under the MIT License.

