<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 text-white transition-colors bg-red-500 border-2 border-red-600 rounded hover:bg-red-600"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
