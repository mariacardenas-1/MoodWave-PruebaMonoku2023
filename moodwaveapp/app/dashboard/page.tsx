import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'

export default  async function Dashboard() {

    const supabase = createServerComponentClient({ cookies })

    const { data } =  await supabase.from('feelings').select()
    const {
        data: { user },
      } = await supabase.auth.getUser()

    if(!user){
        redirect('/login')
    }
    return(
        <div >
           <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
