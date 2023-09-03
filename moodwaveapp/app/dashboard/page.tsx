import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default  async function Dashboard() {

    const supabase = createServerComponentClient({ cookies })

    const { data } =  await supabase.from('feelings').select()

    return(
        <div>
           <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
