
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
// import { useState } from "react"
import Image from "next/image"
import horrible from '../public/assets/horrible.png'
import  mal from '../public/assets/mal.png'
import meh from '../public/assets/meh.png'
import bien from '../public/assets/bien.png'
import increible from '../public/assets/increible.png'

export default function FeelingForm() {

    // const supabase = createServerComponentClient({ cookies })

    const feelingsOptions= [
        {feeling: 'Horrible', icon: horrible },
        {feeling: 'Mal', icon: mal },
        {feeling: 'Meh', icon: meh },
        {feeling: 'Bien', icon: bien },
        {feeling: 'Increible', icon: increible },
    ]

    // const [feelingSelected, SetFeelingSelected]= useState('')
    // const [note, SetNote]= useState('')

    // const handleFeelingSelected = function (e, feeling:string) {
    //     SetFeelingSelected(feeling)
    //     e.preventDefault()
    // }
    // const handleNoteValue = function (note:string) {
    //     SetNote(note)
    // }
    const preventReload =  function (e){
        e.preventDefault()
    }

    const insertFeeling = async (formData: FormData) => {
        'use server';
        const feeling = formData.get('feeling');
        const note = formData.get('note');
        const supabase = createServerComponentClient({ cookies })
        await supabase.from('feelings').insert({ feeling, note })
        // try{
        //    const { data, error } = await supabase
        //    .from('feelings')
        //    .insert([
        //         {
        //             feeling: {feelingSelected},
        //             note: {note}
        //         }
        //    ])
        // }
        // catch(error) {
        //     console.log(error)
        // }
    }

    return (
        <form className="gap-10 flex flex-col" action={insertFeeling}>
            <div className="flex gap-4">
                {feelingsOptions.map(f =>(
                    <div>hola</div>
                    // <>
                    //     <input type='radio' id={f.feeling} name="feeling" value={f.feeling}/>
                    //     <label htmlFor={f.feeling}> 
                    //         <Image src={f.icon} alt={f.feeling}/>
                    //     </label>
                    // </>
                    // <div key={f.feeling} className="text-sm ">

                    //     <div
                    //     name='feeling'
                    //     key={f.feeling}
                    //     // onClick={(e)=>handleFeelingSelected(e, f.feeling)}
                    //     // onClick={(e)=>preventReload(e)}
                    //     // className={`${feelingSelected === f.feeling ? 'text-pink w-10 flex flex-col items-center font-bold': 'text-normal text-white w-10 flex flex-col items-center' }`}
                    //     >
                    //         <Image src={f.icon} alt={f.feeling}/>
                    //         <div>{f.feeling}</div>
                    //     </div>
                    // </div>
                ))}
            </div>
            {/* <input placeholder="holaaaa" type="texarea" onChange={(e)=>console.log(e.target.value)}></input> */}
            <div className="gap-4 flex flex-col">
                <label className="text-pink font-bold">Nota rápida</label>
                <textarea rows={4} 
                name='note'
                // onChange={(e)=>console.log(e.target.value)} 
                className="block p-2.5 w-full text-sm text-white bg-gray rounded-lg border border-pink" placeholder="Describe tus sentiminetos aquí..."></textarea>
            </div>
            <button type="submit">submit</button>
        </form>
    )
  }
  