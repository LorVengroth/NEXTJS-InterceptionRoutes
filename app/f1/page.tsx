import Link from "next/link"
export default function F1(){
    return(
        <div>
            <h1> This is F1 Page</h1>
            <h1>click this to link f2 : <Link href="/f1/f2">f2</Link> </h1>
            <h1>click this to link f3 : <Link href="/f3">f3</Link> </h1>
            <h1>click this to link inner-f2  : <Link href="/f1/f2/inner-f2">inner-f2</Link> </h1>
          
        </div>
    )
}

/*
(.) for same level 
(..) to match segment one level above
(..)(..) to match segments two level above 
*/