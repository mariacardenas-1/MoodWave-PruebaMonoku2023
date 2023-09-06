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
    const [feelingSelected, setFeelingSelected] = useState('') 
    const [note, setNote]= useState('')
    const [error, setError] = useState('')

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

        try{
            await fetch(`${url}api/new-entry`, {
                method: 'post',
                body: JSON.stringify({ feeling, note })
            })
            window.location.href='/dashboard'
        }catch(error){
            setError('Ups! nuestros servivios estan caidos, inteta de nuevo mas tarde')
        }
        

        const response = await fetch('/api/analize', {
            method: 'post',
           
            body: JSON.stringify({ prompt }),
        });
        const data = await response.json()
        console.log({data})
    }
    const handleFeelingSelected = (feeling: string) => {
        setFeelingSelected(feeling)
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
                ))}
            </div>
            <div className="gap-4 flex flex-col">
                <label className="text-pink font-bold">Nota rápida</label>
                <textarea rows={4} 
                name='note'
                onChange={(e)=>setNote(e.target.value)}
                className="block p-2.5 w-full text-sm text-white bg-gray rounded-lg border border-pink" placeholder="Describe tus sentiminetos aquí..."></textarea>
            </div>
            <button disabled={feelingSelected === '' || note === ''} type="submit" className="w-full p-1.5 border border-pink hover:font-bold text-white hover:text-gray bg-pinkHover hover:bg-pink rounded-md disabled:bg-pinkHover disabled:border-slate-600 disabled:text-slate-400 disabled:font-normal">Submit</button>
            <div className=" text-red-500">{error && `** ${error} **`}</div>
        </form>
    )
  }
  