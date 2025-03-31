import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismadb from "./prismadb";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOption = {
    adapter: PrismaAdapter(prismadb),
    secret: process.env.NEXTAUTH_KEY,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'text'
                },
                password: {
                    label: 'password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) return null
                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user) return null
                const isPasswordValid = await compare(
                    credentials.password,
                    user.hashedPassword
                )
                if (!isPasswordValid) return null
                return user
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                return {
                    ...token,
                    // userId: u.id,
                    // userRole: u.role
                    userId: user.id,
                    userRole: user.role
                }
            }
            return token
        },
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    userId: token.userId,
                    userRole: token.userRole

                }
            }
        }
    }
}