<template>
  <ul>
    <li><p>İsminiz:</p>{{ name }}</li>
    <li><p>Telefonunuz:</p>{{ phone }}</li>
    <li><p>E-postanız:</p>{{ email }}</li>
  </ul>
</template>

<script>

export default {
  name: 'StudentInformation',
  props: [
    'name',
    'phone',
    'email'
  ],
  data() {
    }
  }

</script>

