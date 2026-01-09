import { Card } from "@/app/components/Card"
import Link from "next/link"


export default function ArchivedPage(){
    return(
        <Card>
            <div> Archived Notification </div>
            <Link href="/dashboard"> Default </Link>
        </Card>
    )
}
