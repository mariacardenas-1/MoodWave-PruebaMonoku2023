import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'
import FeelingsGraphic from "@/components/FeelingsGraphic"

export default  async function Dashboard() {

    const supabase = createServerComponentClient({ cookies })

    const { data } =  await supabase.from('feelings').select()
    const {
        data: { user },
      } = await supabase.auth.getUser()

    if(!user){
        redirect('/login')
    }
    const getTotalFeeling = (feeling: string)=>{
        let total= 0
        data?.filter(obj =>{
            if(obj.feeling === feeling){
                total += 1
            }
        })
        return total
    }   

    const values = [
        {name: 'Horrible', value: getTotalFeeling('horrible')},
        {name: 'Mal', value: getTotalFeeling('mal')},
        {name: 'Meh', value: getTotalFeeling('meh')},
        {name: 'Bien', value: getTotalFeeling('bien')},
        {name: 'Increible', value: getTotalFeeling('increible')}
    ]
    return(
        <div className="">
           {/* <pre className="text-white">{JSON.stringify(data, null, 2)}</pre> */}
           <FeelingsGraphic values={values}/>
        </div>
    )
}
