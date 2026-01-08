interface User {
    userId : number ;
    id : number;
    title : string ;
    body : string
}

async function fetchData(id : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data:User = await res.json();
    return data;
}



export default async function DetailPage({
    params
}:{params: Promise<{id : string}>}){
    const { id } = await params;
    const data = await fetchData(id);

    return(
        <div>
        <h2>{data.id}</h2>
        <p>{data.body}</p>
        <p>{data.title}</p>
        </div>
    )
}