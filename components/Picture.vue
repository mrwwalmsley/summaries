<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  height?: number
  smallSrc?: string
}>()
const { isProduction } = useRuntimeConfig()
const isSvg = props.src.endsWith('.svg')
const defaultSuffix = isSvg ? '' : '.png'

const altText = props.alt ?? props.src.replace(/[-/]/g, ' ')
</script>

<template>
  <picture>
    <source
      v-if="smallSrc && isProduction"
      media="(max-width: 960px)"
      :srcset="`/webp/${smallSrc}.webp`"
      type="image/webp"
    >
    <source
      v-if="smallSrc"
      media="(max-width: 960px)"
      :srcset="`/images/${smallSrc}.png`"
      type="image/png"
    >
    <source
      v-if="!isSvg && isProduction"
      :srcset="`/webp/${src}.webp`"
      type="image/webp"
    >
    <img
      :src="`/images/${props.src}${defaultSuffix}`"
      :alt="altText"
      :style="{
        height: height ? `${height}px` : undefined,
      }"
    >
  </picture>
</template>

