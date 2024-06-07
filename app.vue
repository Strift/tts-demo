<script lang="ts" setup>
import { dialog, speakerConfig } from './data/dialog'
</script>

<template>
  <div class="mx-3">
    <div class="space-y-4">
      <div
        v-for="(line, index) in dialog"
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
  </div>
</template>
