import Link from "next/link"
export default function F2(){
    return(
        <div>
            <h1>This is original inner-f2 page </h1>
             <h1>click this to link f5 : <Link href="/f5">f5</Link> </h1>
        </div>
    )
}