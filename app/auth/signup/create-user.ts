"use server"

import { FormError } from "@/app/common/form-response.interface";
import { API_URL } from "@/app/common/constants/api"
import { getErrorMessage } from "@/util/errors";
import { post } from "@/util/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: FormError, formData: FormData) {
    const { error } = await post("users", formData);
    if (error) {
        return { error }
    }
    redirect("/");
}
