import { synthesizeSpeech } from "../tts"

export default defineEventHandler(async (event) => {
  try {
    const speech = await synthesizeSpeech('Hello World')
    return {
      base64audio: Buffer.from(speech.audioContent!).toString('base64'),
    }
  } catch (error) {
    console.log('error', error)
    return {
      error: 'error',
    }
  }
})
