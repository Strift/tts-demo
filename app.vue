<script lang="ts" setup>
import { dialog, speakerConfig } from './data/dialog';
</script>

<template>
  <div>
    <div v-for="(line, index) in dialog" :key="index">
      <div>{{ line.speaker }}</div>
      <TextToSpeech
        v-for="(text, index) in line.sentences"
        :key="index"
        :config="speakerConfig[line.speaker]"
        :text="text"
      />
    </div>
  </div>
</template>
