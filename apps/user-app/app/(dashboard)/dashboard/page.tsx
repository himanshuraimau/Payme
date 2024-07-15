import { useSession, UseSessionOptions } from "next-auth/react"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth";

const fun = async() =>{
    const session = await getServerSession(authOptions)
    return <div>
        <div className="text-2xl">
        Hi,{session?.user?.name}
        </div>
    </div>
}
export default fun