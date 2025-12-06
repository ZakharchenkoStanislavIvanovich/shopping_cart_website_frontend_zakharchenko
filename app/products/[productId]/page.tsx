interface SingleProrductProps {
    params: { productId: string};
}

export default async function SingleProrduct({ params }: SingleProrductProps) {
    return <p>Single product {params.productId}</p>;
}