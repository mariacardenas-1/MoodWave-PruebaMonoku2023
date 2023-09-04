import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


export async function GET(request: Request) {

    const supabase = createRouteHandlerClient({ cookies })
    const { data } = await supabase.from('feelings').select()

    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const { feeling, note } = await request.json()
    const { data } = await supabase.from('feelings').insert({ feeling, note, user_id: user?.id })

    return NextResponse.json(data)
}