<template>
    <h2>Öğrencilerim</h2>
    <Student name="ALI IMRAN" phone="555-1234" email="ali@ali.com"/>
    <Student name="SEREN" phone="555-1234" email="seren@seren.com"/>
    <Student name="NURİ" phone="555-1234" email="nuri@nuri.com"/>
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
    }
  }
}
</script>

