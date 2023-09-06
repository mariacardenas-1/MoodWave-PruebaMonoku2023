import { error } from "console"
import { NextRequest, NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai";
// import OpenAI from "openai";


// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

if(!configuration.apiKey){
    throw new Error('OPEN_API_KEY is not defined')
}
const openai= new OpenAIApi(configuration)

export function GET(request){
    return new NextResponse('funcina')
}

// export async function POST(request: Request) {
//     try{
//         const response = await openai.createCompletion({
//             prompt: 'cuentame un chiste',
//             model: "text-davinvi-003",
//             temperature: 0.7,
//             max_tokens: 60,
//         });
//         console.log({response})
//         return NextResponse.json({message: 'Hello world from API'})
//     }catch(error){

//         console.log({error})
        
//         return NextResponse.error()
//     }

// }

export async function POST(request) {
    
    try {
        const response = await openai.createCompletion({
            prompt: 'dame un saludo',
            model: 'gpt-3.5-turbo',
        })
        console.log('response', {response})
        return NextResponse.json('Hola desde server OpenApi')
    //   const formData = await req.formData();
    //   const prompt = formData.get('ai-prompt')?.toString();
    //   console.log({ formData, prompt });
  
      // VALIDATE/SERIALIZE INPUT HERE - Zod or other package
  
    //   const chatCompletion = await openai.createChatCompletion({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{ role: 'user', content: 'hola mundo' }],
    //   });
  
    //   return NextResponse.json({ result: chatCompletion.data.choices });
    } catch (error: any) {
      // Consider adjusting the error handling logic for your use case
      if (error?.response) {
        console.error(error.response.status, error.response.data);
        return NextResponse.json(error.response.data, {
          status: error.response.status,
        });
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        return NextResponse.json(
          { error: { message: 'An error occurred during your request.' } },
          { status: 500 }
        );
      }
    }
  }