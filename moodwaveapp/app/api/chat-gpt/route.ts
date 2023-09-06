import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function GET(request: Request){
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            {
                role: 'system',
                text: 'comportate como si fueses mi abuela regañandome por no ir a la u',
            },
            {
                role: 'user',
                text: 'abuela no puedo ir a la u',
            }
        ]
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)

    // return new Response(
    //     JSON.stringify({
    //         message: 'hola desde api/chat-gpt'
    //     }), {
    //         headers: {
    //             'Content-Type': 'application/json'}
    //     }
    // )
}