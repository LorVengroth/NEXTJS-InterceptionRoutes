import Link from "next/link";
interface User {
    userId : number ;
    id : number;
    title : string ;
    body : string
}

async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data:User[] = await res.json();
    return data;
}


export default async function Data(){
    const data = await fetchData();
return(
   <div>

    {

    data.map((data) => (
        
        <>
        <Link  href={`data/${data.id}`} >
        <h2>{data.id}</h2>
        <p>{data.body}</p>
        <p>{data.title}</p>
        </Link>
      
        </>
        
    ))
    }

   </div>
)
}