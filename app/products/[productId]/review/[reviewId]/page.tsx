export default async function NestedDynamicPage({
    params
}:{ params:Promise<{productId : string , reviewId : string}>}) {

    const {productId, reviewId} = await params

    return(
        <div>
            <h1>This is nested dynamic routes page </h1>
            <h2>This is product ID : {productId } , and review Id : {reviewId}</h2>
        </div>
    )
    
}