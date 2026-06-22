<template>
  <div>
    <h2>
      Sayac : {{ count }}
    </h2>
    <button @click="artir">+1 Ekle</button>
    <button @click="sifirla">Sıfırla</button>
  </div>
  <div>
    <h2>{{ user.name }}{{ user.surname }}</h2>
    <p>Yaş: {{ user.age }}</p>
    <button @click="yasArttir">Doğum günün kutlu olsun 🎂</button>
  </div>
  <input v-model="name" placeholder="Adın" />
  <input v-model="surname" placeholder="Soyadın" />
  <p>Tam Ad: {{ tamAd }}</p>
  <p>Karakter Sayısı: {{ tamAd.length }}</p>
  <input v-model="search" placeholder="Arama..." />
</template>

<script setup>
import { ref } from "vue";
import { reactive } from "vue";
import { computed } from "vue";
import { watch } from "vue";

const count = ref(0);
const user = reactive({
  name: "Ali İmran",
  surname: "Atabey",
  age: 25,
});
const name = ref("");
const surname = ref("");
const tamAd = computed(()=> {
  return `${name.value} ${surname.value}`.trim()
})
const search = ref("")

watch(search, (newValue, oldValue) => {
  console.log(`"${oldValue}" → "${newValue}"`)
  // Burada API çağrısı yapılabilir
})

function artir() {
  count.value++; 
}
function sifirla() {
  count.value = 0;
}
function yasArttir() {
  user.age++;
}

</script>

<style scoped>
  button {
    margin: 8px;
    padding: 8px 16px;
  }
</style>