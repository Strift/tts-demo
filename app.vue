<script lang="ts" setup>
import { chineseText } from './data/dialog';
</script>

<template>
  <div>
    <TextToSpeech v-for="(text, index) in chineseText" :key="index" :text="text" />
  </div>
</template>
