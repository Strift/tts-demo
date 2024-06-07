<script lang="ts" setup>
import { dialog1 } from './data/dialog'
</script>

<template>
  <header class="bg-blue-500 text-white text-center py-4 mb-8 sticky top-0">
    <h1>中文 - Fête des adultes 2ème année</h1>
  </header>
  <div class="mx-3 mb-8">
    <h2 class="mb-3 font-semibold text-blue-500 text-lg">
      Introduction
    </h2>
    <DialogLines :lines="dialog1" />
  </div>
</template>
