'use server'

import prismadb from "@/libs/prismadb"
import { revalidatePath } from "next/cache"

export const CreatePostAction = async (formdata) => {
    try {

        const { title, body, image } = Object.fromEntries(formdata)
        const address = String(title).split(' ').join('-')
        const post = await prismadb.post.create({
            data: {
                title,
                address,
                body,
                image
            }
        })
        if (!post) return { success: false }
        revalidatePath('/admin')
        return { success: true }
    } catch (error) {
        console.log('create post:', error);

    }
}
export const DeletePostAction = async (id) => {
    try {
        await prismadb.post.delete({
            where: {
                id
            }
        })
        // if (!deletedPost) return { success: false }
        // return { success: true }
        revalidatePath('/admin')
    } catch (error) {
        console.log('delete post:', error);

    }
}