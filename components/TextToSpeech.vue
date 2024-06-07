<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()

const { data, error, pending } = await useFetch('/api/tts', {
  key: props.text,
  method: 'POST',
  body: JSON.stringify({ text: props.text }),
})

const { loadFromBase64URI, play} = useAudio()
async function playSound() {
  if (!data.value) {
    return
  }
  loadFromBase64URI(`data:audio/mp3;base64,${data.value.base64audio}`)
  play()
}
</script>

<template>
  <div>
    <div>{{ props.text }}</div>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="pending">Pending...</div>
    <div v-else>
      <pre>{{ data!.base64audio }}</pre>
      <button @click="playSound">Play</button>
    </div>
  </div>
</template>
