<template>
  <component :is="variant || 'h3'" class="Typography">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  sx?: Object,
  variant?: String
}>();

</script>

<style scoped>

h1,
h2,
h3,
h4,
h5,
h6 {
  &.Typography {
    font-weight: 700;
  }
}

h1.Typography {
  font-size: 1.75rem;
  margin: 0;
}

h2.Typography {
  font-size: 1.5rem;
  margin: 0;
}

h3.Typography {
  font-size: 1.125rem;
  margin: 0;
}

h4.Typography {
  font-size: 1rem;
  margin: 0;
}

h5.Typography {
  font-size: 1rem;
  margin: 0;
}

h6.Typography {
  font-size: .8rem;
  margin: 0;
}

@media (min-width: 768px) {
  h1.Typography {
    font-size: 2.75rem;
  }

  h2.Typography {
    font-size: 2.125rem;
  }

  h3.Typography {
    font-size: 1.35rem;
  }
}

@media (min-width: 1024px) {
  h1.Typography {
    font-size: 5rem;
  }

  h2.Typography {
    font-size: 2.75rem;
  }

  h3.Typography {
    font-size: 1.5rem;
  }

  h4.Typography {
    font-size: 1.125rem;
  }
}
</style>