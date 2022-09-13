<template>
  <RouterView />
</template>

<style>
html {
  background: radial-gradient(50% 50% at 50% 50%, #534571 0%, #342c46 100%);
}
</style>

<script setup>
import { setLocale } from "@vee-validate/i18n";

setLocale("ka");
</script>
