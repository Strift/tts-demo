<script lang="ts" setup>
const props = defineProps<{
  emoji: string
  name: string
}>()
</script>

<template>
  <div class="flex items-baseline space-x-2">
    <div class="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
      {{ props.emoji }}
    </div>
    <div class="font-semibold">
      {{ props.name }}
    </div>
  </div>
</template>
