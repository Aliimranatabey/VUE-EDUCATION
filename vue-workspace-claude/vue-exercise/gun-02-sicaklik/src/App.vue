<template>

  <input v-model="celsius" placeholder="Celsius">
  <p>Celsius: {{ celsius }}</p>
  <p>Fahrenheit: {{ fahrenheit }}</p>
  <p>Kelvin: {{ kelvin }}</p>

</template>

<script setup>

import { ref } from 'vue'
import { computed, watch } from 'vue'

const celsius = ref('')
const fahrenheit = computed(() => {
  if (celsius.value === '') return ''
  return celsius.value*9/5 + 32
})
const kelvin = computed(() => {
  if (celsius.value === '') return ''
  return celsius.value + 273.15
})
watch(celsius, (newValue) => {
  console.log(`Celsius changed to: ${newValue}`)
})

</script>

<style scoped>
 input {
  padding: 8px;
  width: 200px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
}
</style>