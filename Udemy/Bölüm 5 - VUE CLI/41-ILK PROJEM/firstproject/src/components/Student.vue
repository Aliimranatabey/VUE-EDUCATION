<template>
  <h2>Öğrencilerim</h2>
  <ul v-for="student in data" :key="student.name">
    <li>{{ student.name }} - {{ student.phone }}</li>
  </ul>
  <div>{{ name }}</div>
</template>

<script>

export default {
  name: 'StudentInformation',
  props: [
    'name',
    'data'
  ],
  data() {
    }
  }

</script>

