import {protos, TextToSpeechClient} from '@google-cloud/text-to-speech';

const TAIWAN_LANGUAGE_CODE = 'cmn-TW';

const client = new TextToSpeechClient();

export async function synthesizeSpeech(text: string, { voice, gender }: { voice: string, gender: 'FEMALE' | 'MALE' }) {
  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: {
      languageCode: 'cmn-TW',
      name: voice,
      ssmlGender: gender
    },
    audioConfig: {
      audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3
    },
};

  const [response] = await client.synthesizeSpeech(request);

  return response
}

export async function listVoices() {
  const [result] = await client.listVoices({});
  return result.voices?.filter(({ languageCodes }) => languageCodes?.includes(TAIWAN_LANGUAGE_CODE))
}
