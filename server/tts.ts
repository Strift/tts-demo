// Imports the Google Cloud client library
import {protos, TextToSpeechClient} from '@google-cloud/text-to-speech';

const TAIWAN_LANGUAGE_CODE = 'cmn-TW';

// Creates a client
const client = new TextToSpeechClient();

export async function synthesizeSpeech(text: string) {

  // Construct the request
  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: {
      languageCode: 'cmn-TW',
      name: 'cmn-TW-Standard-A',
      ssmlGender: protos.google.cloud.texttospeech.v1.SsmlVoiceGender.FEMALE
    },
    audioConfig: {
      audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3
    },
};

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

  return response
}

export async function listVoices() {
  const [result] = await client.listVoices({});
  return result.voices?.filter(({ languageCodes }) => languageCodes?.includes(TAIWAN_LANGUAGE_CODE))
}
