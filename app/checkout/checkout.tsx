"use client";

import { Button } from "@mui/material";
import checkout from "./actions/checkout";

interface CheckoutProps {
  productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {
  const handleCheckout = async () => {
    const session = await checkout(productId);

    if (session.error) {
      console.error("Checkout error:", session.error);
      return;
    }

    if (session.data?.url) {
      window.location.href = session.data.url;
    } else {
      console.error("No checkout URL returned:", session);
    }
  };

  return (
    <Button
      variant="contained"
      className="max-w-[25%]"
      onClick={handleCheckout}
    >
      Buy Now
    </Button>
  );
}