<script lang="ts" setup>
import type { TTSConfig } from '~/types'

const props = defineProps<{
  text: string
  config: TTSConfig
}>()

const { data, error, pending } = await useFetch('/api/tts', {
  key: props.text,
  method: 'POST',
  body: {
    text: props.text,
    voice: props.config.voice,
    gender: props.config.gender,
  },
})

const { loadFromBase64URI, play } = useAudio()
async function playSound() {
  if (!data.value) {
    return
  }
  loadFromBase64URI(`data:audio/mp3;base64,${data.value.base64audio}`)
  play()
}
</script>

<template>
  <button
    class="block text-left"
    title="Écouter"
    @click="playSound"
  >
    <span v-if="error">
      ❗
    </span>
    <span v-else-if="pending">
      🔄
    </span>
    <span
      v-else
      class="bg-blue-600 text-gray-200 px-1 text-sm rounded-md inline-block"
    >
      ▶️
    </span>
    <span class="ml-2">{{ props.text }}</span>
  </button>
</template>
