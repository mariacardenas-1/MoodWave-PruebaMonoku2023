'use client'
import { FormEvent, useState } from "react"
import Image from "next/image"
import horrible from '../public/assets/horrible.png'
import  mal from '../public/assets/mal.png'
import meh from '../public/assets/meh.png'
import bien from '../public/assets/bien.png'
import increible from '../public/assets/increible.png'


export default function FeelingForm() {
    const url = process.env.NEXT_PUBLIC_LOCAL_HOST
    const [feelingSelected, SetFeelingSelected] = useState('') 
    const feelingsOptions= [
        {feeling: 'Horrible', icon: horrible },
        {feeling: 'Mal', icon: mal },
        {feeling: 'Meh', icon: meh },
        {feeling: 'Bien', icon: bien },
        {feeling: 'Increible', icon: increible },
    ]
    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault()

        const formElement = e.currentTarget as HTMLFormElement;
        const { feeling, note } = Object.fromEntries(new FormData(formElement));

        await fetch(`${url}api/new-entry`, {
            method: 'post',
            body: JSON.stringify({ feeling, note })
        })
    }
    const handleFeelingSelected = (feeling: string) => {
        SetFeelingSelected(feeling)
    }

    return (
        <form className="gap-10 flex flex-col" onSubmit={handleSubmit}>
            <div className="flex gap-4 ">
                {feelingsOptions.map(f =>(
                    // <div>hola</div>
                    <div key={f.feeling} className='w-10'>
                        <input type='radio' id={f.feeling} name="feeling" value={f.feeling} onClick={()=>handleFeelingSelected(f.feeling)} className="hidden" />
                        <label htmlFor={f.feeling} className="flex flex-col items-center text-xs cursor-pointer"> 
                            <Image src={f.icon} alt={f.feeling} />
                            <div className={`${feelingSelected === f.feeling ? 'text-pink font-bold' : 'text-white'} text-center `}>{f.feeling}</div>
                        </label>
                    </div>
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
            <button type="submit" className="w-full p-1.5 border border-pink hover:font-bold text-white hover:text-gray bg-pinkHover hover:bg-pink rounded-md">Submit</button>
        </form>
    )
  }
  