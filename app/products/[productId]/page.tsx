import { Stack, Typography } from "@mui/material";
import getProduct from "./get-product";
import { getProductImage } from "../product-image";
import Image from "next/image";
import Grid from "@mui/system/Grid";
import Checkout from "@/app/checkout/checkout";

interface SingleProrductProps {
    params: { productId: string};
}

export default async function SingleProrduct({ params }: SingleProrductProps) {
  const { productId } = await params;
  const product = await getProduct(+productId);

    return (
        <Grid container marginBottom={"2rem"} rowGap={3}>
            {product.imageExists && (
            <Grid size={{md: 6, xs: 12}}>
                <Image src={getProductImage(product.id)} width="0" height="0" unoptimized className="w-full sm:w-3/4 h-auto" sizes="100vw" alt="Picture of the product" />
            </Grid>
            )}
            <Grid size={{md: 6, xs: 12}}>
                <Stack gap={3}>
                    <Typography variant="h2">{product.name}</Typography>
                    <Typography>{product.description}</Typography>
                    <Typography variant="h4">${product.price}</Typography>
                    <Checkout productId={product.id} />
                </Stack>
            </Grid>
        </Grid>
    );
}
