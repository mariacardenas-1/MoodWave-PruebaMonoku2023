import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'
import FeelingForm from "@/components/FeelingForm"


export default  async function NewRegistry() {

    const supabase = createServerComponentClient({ cookies })

    const { data } =  await supabase.from('feelings').select()
   
    const {
        data: { user },
      } = await supabase.auth.getUser()

    if(!user){
        redirect('/login')
    }

   
    return(
        <div className="p-6 gap-8 flex flex-col">
            <div className="text-white font-bold p-5 text-xl">Como te sientes hoy?</div>
           <FeelingForm />
        </div>
    )
}
