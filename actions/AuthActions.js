'use server'

import prismadb from "@/libs/prismadb"
import { hash } from "bcrypt"

export const creatUserAction = async (formdata) => {
    try {
        const formEntries = Object.fromEntries(formdata)
        const { name, password, email } = formEntries
        const hashedPassword = await hash(password, 12)
        const user = await prismadb.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        })
        if (!user) return { success: false }
        return { success: true }
    } catch (error) {
        console.log('createUserAction', error)
    }
}
export const checkUserEmail = async (formdata) => {
    try {
        const { email } = Object.fromEntries(formdata)
        const user = await prismadb.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) return { success: false }
        return { success: true }
    } catch (error) {
        console.log('check user email:', error)
    }
}