



export default async function DynamicPage({
    params
}:{ params: Promise<{id : string}> }) {
    
    const { id } = await params
    return(
        <h1>This is Dynamic routes page ID : { id } </h1>
    )
}




