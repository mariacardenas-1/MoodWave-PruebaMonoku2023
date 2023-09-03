import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'

export const dynamic = 'force-dynamic'


export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full flex flex-col items-center">
      <div className='text-pink-700 font-bold text-6xl mb-14'>MoodWave</div>
      <p className='text-white w-8/12'>Sabemos que las emociones a veces pueden parecer una montaña rusa, por eso queremos ayudarte en el proceso de conocerte.</p>
      <button className='bg-pink-700 font-bold p-2.5 rounded-2xl w-40 text-lg text-grey mt-14'>Empezar</button>
    </div>
  )
}
