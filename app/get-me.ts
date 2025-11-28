"use server"

import { cookies } from "next/headers";
import { API_URL } from "./common/constants/api"
import { get } from "../util/fetch";

export default async function getMe() {
    return get("users/me")
}