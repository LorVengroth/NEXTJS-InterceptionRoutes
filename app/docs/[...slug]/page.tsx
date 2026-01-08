export default async function CatchAllSegment({
    params
}: {params : Promise<{slug: string[]}>}) {

    
    const { slug } = await params;

    if(slug?.length === 3){
        return(
            <h1>viewing docs for feature {slug[0]} and concept {slug[1]} and example { slug[2]}</h1>
        )
    }else if( slug?.length == 2){
        return(
            <h1>viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
        )
    }else {
        return(
            <h1>viewing docs for feature {slug[0]} </h1>
        )
    }
 
    
}