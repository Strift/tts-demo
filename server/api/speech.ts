import { synthesizeSpeech } from "../tts"
import util from 'util'
import fs from 'fs'

export default defineEventHandler(async (event) => {
  try {
    const speech = await synthesizeSpeech('Hello World')
    // const outputFile = './output.mp3'
    // const writeFile = util.promisify(fs.writeFile);
    // await writeFile(outputFile, speech.audioContent!, 'binary');
    // console.log(`Audio content written to file: ${outputFile}`);
    return {
      base64audio: Buffer.from(speech.audioContent!).toString('base64'),
    }
  } catch (error) {
    console.log('error', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'internal server error',
    })
  }
})
