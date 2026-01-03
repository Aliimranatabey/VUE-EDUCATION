<template>
  <h2>Öğrencilerim</h2>
  <ul v-for="student in students" :key="student.name">
    <li>{{ student.name }} - {{ student.phone }}</li>
  </ul>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      students: [
        { name: 'Ahmet', phone: '555-1234' },
        { name: 'Ayşe', phone: '555-5678' },
        { name: 'Mehmet', phone: '555-8765' }
      ]
    }
  }
}
</script>

