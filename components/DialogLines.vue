<script lang="ts" setup>
import { speakerConfig } from '~/data/dialog'
import type { DialogLine } from '~/types'

const props = defineProps<{
  lines: DialogLine[]
}>()
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="(line, index) in props.lines"
      :key="index"
      class="flex items-baseline space-x-4"
    >
      <SpeakerName
        :emoji="speakerConfig[line.speaker].emoji"
        :name="line.speaker"
        class="w-28 shrink-0"
      />
      <div class="bg-gray-100 rounded-lg p-4">
        <TextToSpeech
          v-for="(text, index) in line.sentences"
          :key="index"
          :config="speakerConfig[line.speaker]"
          :text="text"
        />
      </div>
    </div>
  </div>
</template>
