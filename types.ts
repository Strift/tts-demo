import type { speakerConfig } from './data/dialog'

export type TTSConfig = {
  voice: string
  gender: 'FEMALE' | 'MALE'
}

export type DialogLine = {
  speaker: keyof typeof speakerConfig
  sentences: string[]
}
