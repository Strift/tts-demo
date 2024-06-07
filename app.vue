<script lang="ts" setup>
import { dialog, speakerConfig } from './data/dialog'
</script>

<template>
  <header class="bg-blue-500 text-white text-center py-4 mb-8 sticky top-0">
    <h1>中文 - Fête des adultes 2ème année</h1>
  </header>
  <div class="mx-3 mb-8">
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
