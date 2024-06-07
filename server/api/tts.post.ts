import { synthesizeSpeech } from "../tts"
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
  const id = uuidv4()
  try {
    console.log(`Request ${id}: tts.post.ts`)
    const body = await readBody(event)
    if (!body.text) {
      throw createError({
        statusCode: 422,
        statusMessage: 'Missing text',
      })
    }
    console.log(`Request ${id}: `, '🔄 synthesizing: ', body.text)
    const speech = await synthesizeSpeech(body.text)
    const base64audio = Buffer.from(speech.audioContent!).toString('base64')
    console.log(`Request ${id}: `, '✅ synthesized')
    return {
      base64audio
    }
  } catch (error) {
    console.log(`Request ${id}: `, 'error', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'internal server error',
    })
  }
})
