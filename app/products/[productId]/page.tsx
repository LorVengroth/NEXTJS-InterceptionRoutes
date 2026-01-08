export default async function ProductId({
    params
}: { params: Promise<{productId:string}>}) {

    const {productId} = await params

    return(
        <h1>This is the dynamic product id page. Id : { productId }</h1>
    )
    
}