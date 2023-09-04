import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import LogoutButton from '../components/LogoutButton'
import Link from 'next/link'


export default async function NavBar() {
    
    const supabase = createServerComponentClient({ cookies })
    const {
        data: { user },
      } = await supabase.auth.getUser()

    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-auto md:h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 flex-col md:flex-row text-sm text-foreground">
                <div className='text-pink text-2xl sm:text-3xl font-bold'>
                    <Link href={'/'}>
                        MoodWave
                    </Link>
                </div>
                <div>
                    {user ? (
                    <div className="flex items-center gap-8 text-xs">
                        Hey, {user.email}!
                        <LogoutButton />
                    </div>
                    ) : (
                    <Link
                        href="/login"
                        className="py-2 px-4 rounded-md no-underline text-gray bg-pink font-bold text-sm sm:text-base text-grey hover:text-white"
                    >
                        Login
                    </Link>
                    )}
                </div>
            </div>
        </nav>
    )
  }
  