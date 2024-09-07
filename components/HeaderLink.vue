<script lang="ts" setup>
const props = defineProps<{
  data: {
    title: string
    shortTitle: string
    to: string
  }
}>()
</script>

<template>
  <NuxtLink :to="data.to" class="text-gray-400 font-700">
    {{ data.shortTitle }}
  </NuxtLink>
</template>

<style scoped></style>
