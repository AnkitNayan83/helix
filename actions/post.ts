"use server";

import { CurrentUser } from "@/lib/auth";
import api from "@/lib/axiosInstance";
import { PostSchema } from "@/schemas";
import * as z from "zod";

export const post = async (values: z.infer<typeof PostSchema>) => {
    const user = await CurrentUser();
    if (!user) return { error: "Unauthorized" };
    const token = user.access_token;

    const validateFields = PostSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Post Cannot be empty" };
    }

    try {
        const { data } = await api.post("/post", values, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { post: data.post };
    } catch (error: any) {
        console.log(error);

        return { error: error?.response?.data?.message || "Something went wrong" };
    }
};

export const getPostById = async (id: string) => {
    if (!id) return null;
    const user = await CurrentUser();
    if (!user) return { error: "Unauthorized" };

    try {
        const { data } = await api.get(`/post/${id}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
            },
        });

        return { post: data.post };
    } catch (error: any) {
        return { error: error.response.data.message || "Post does not exist" };
    }
};
