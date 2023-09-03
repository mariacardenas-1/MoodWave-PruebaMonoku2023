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
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
            <div className='text-pink-700 text-3xl font-bold'>MoodWave</div>
            <div>
                {user ? (
                <div className="flex items-center gap-4">
                    Hey, {user.email}!
                    <LogoutButton />
                </div>
                ) : (
                <Link
                    href="/login"
                    className="py-2 px-4 rounded-md no-underline bg-pink-700 font-bold text-base text-grey hover:bg-btn-hover"
                >
                    Login
                </Link>
                )}
            </div>
            </div>
        </nav>
    )
  }
  