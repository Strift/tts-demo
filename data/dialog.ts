import type { TTSConfig } from "~/types"

type Speaker = 'Laurent'

type DialogLine = {
  speaker: Speaker
  sentences: string[]
}

export const speakerConfig: Record<Speaker, TTSConfig> = {
  Laurent: {
    voice: 'cmn-TW-Standard-B',
    gender: 'MALE',
  },
}

export const dialog: DialogLine[] = [
  {
    speaker: 'Laurent',
    sentences: [
      "大家好，這是夜市。",
      "今天是旅行的最後一天，所以如果你們看到喜歡的東西就買下來吧。",
      "一個小時後，我會在這個會合點等大家。",
    ],
  }
]
