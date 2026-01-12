<template>
  <Student :data="students" name="ALIIMRAN"/>
</template>

<script>
import Student from './components/Student.vue' 
export default {
  name: 'App',
  components: {
    Student
  },
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

