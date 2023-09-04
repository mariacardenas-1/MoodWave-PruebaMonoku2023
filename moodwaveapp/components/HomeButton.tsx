'use client'
import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
    label: string,
    helperClass?: string,
    routePath: string,

}


export default function HomeButton({label, helperClass, routePath}:Props) {

     
const hanldeClick= function(route:string) {
    console.log({route})
    redirect('/dashboard')
}
    return (
        <Link href={routePath} className={`${helperClass} hover:bg-pink hover:font-bold bg-pinkHover border-pink border-2 hover:text-gray text-white font-normal p-2.5 text-center rounded-2xl w-9/12  md:w-5/12 text-lg text-grey mt-14 `}>
            {label}
        </Link>
    )
  }
  