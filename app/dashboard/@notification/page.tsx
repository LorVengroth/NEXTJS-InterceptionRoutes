import { Card } from "@/app/components/Card"
import Link from "next/link"


export default function NotificationPage(){
    return(
        <Card>
            <div> Notification </div>
            <Link href="/dashboard/archived"> Archived</Link>
        </Card>
    )
}

// git name for parallel is oneMore