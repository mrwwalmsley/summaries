<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section>
    <h1 class="text-4xl">
      {{ title }}
    </h1>
    <span>{{ description }}</span>
  </section>
</template>

<style scoped></style>
