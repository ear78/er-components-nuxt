<template>
  <div data-testid="copyright-component"
    className="flex justify-center text-xs">
    <p class="dark:text-neutral-600">
      All Rights Reserved Elliot Richardson &copy; {{ year }}
    </p>
  </div>
</template>

<script setup lang="ts">
const d = new Date();
const year = d.getFullYear();
</script>

<style scoped></style>
