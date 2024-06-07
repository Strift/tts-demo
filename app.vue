<script lang="ts" setup>
import { dialog1, dialog2 } from './data/dialog'
</script>

<template>
  <header class="bg-blue-500 text-white text-center py-4 mb-8 sticky top-0">
    <h1>中文 - Fête des adultes 2ème année</h1>
  </header>
  <div class="mx-3 mb-8 space-y-4">
    <h2 class="font-semibold text-blue-500 text-lg">
      Introduction
    </h2>
    <DialogLines :lines="dialog1" />
    <h2 class="font-semibold text-blue-500 text-lg">
      Shop de souvenirs
    </h2>
    <DialogLines :lines="dialog2" />
  </div>
</template>
