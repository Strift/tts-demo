import {Howl, Howler} from 'howler';

export const useAudio = () => {
  const audio = ref<Howl>()

  const loadFromBase64URI = async (base64URI: string) => {
    if (audio.value) {
      audio.value.unload()
    }

    audio.value = new Howl({
      src: [base64URI],
      format: ['mp3'],
    })
  }

  const play = () => {
    if (audio.value) {
      audio.value.play()
    }
  }

  return {
    loadFromBase64URI,
    play,
  }
}
