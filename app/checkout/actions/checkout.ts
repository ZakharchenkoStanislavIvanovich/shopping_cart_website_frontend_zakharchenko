"use server";

import { post } from "@/util/fetch";

interface CheckoutSession {
  url: string;
}

export default async function checkout(productId: number) {
  return post<CheckoutSession>("checkout/session", { productId });
}