import { cookies } from "next/headers";
import { getErrorMessage } from "./errors";
import { API_URL } from "@/app/common/constants/api";

// const getHeaders = () => ({
//     Cookie: cookies().toString()
// })

export const getHeaders = async () => {
  const cookieStore = await cookies();
  return {
    Cookie: cookieStore.toString(),
  };
};

export const post = async <T>(
  path: string,
  data: FormData | object
): Promise<{ error: string; data?: T }> => {
  const body = data instanceof FormData ? Object.fromEntries(data) : data;
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(await getHeaders()) },
    body: JSON.stringify(body),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "", data: parsedRes as T };
};

export const get = async <T>(path: string, tags?: string[], params?: URLSearchParams) => {
  const url = params ? `${API_URL}/${path}?` + params : `${API_URL}/${path}`
    const res = await fetch(url, {
        headers: { ...(await getHeaders()) },
        next: { tags }
    });
    return res.json() as T;
}
