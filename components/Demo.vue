<script setup lang="ts">
const title = ref('My Demo')
</script>

<template>
  <h1>
    {{ useUppercase(title) }}
  </h1>
</template>
