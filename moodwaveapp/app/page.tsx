import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import HomeButton from '@/components/HomeButton'

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="xl:w-5/12 md:items-start md:w-10/12 w-full flex flex-col items-center">
      <div className='text-pink font-bold md:text-start text-4xl sm:text-5xl lg:text-6xl my-8 '>MoodWave</div>
      <p className='text-white text-center md:text-start w-10/12 lg:w-8/12'>Sabemos que las emociones a veces pueden parecer una montaña rusa, por eso queremos ayudarte en el proceso de conocerte.</p>
      <HomeButton label='Registar emociones' routePath={'/new-registry'} />
      {user && (
        <HomeButton label='Ver mi historial' routePath={'/dashboard'} />
      )}
    </div>
  )
}