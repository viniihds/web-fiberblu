<script setup>
import Navbar from '../components/NavbarComponent.vue'
import { ref, onMounted } from 'vue'
import ClienteService from '../../api/services/clientes'

const clientes = ref([])

onMounted(async()=>{
    const data = await ClienteService.getAllClientes()
    clientes.value = data
})
</script>
<template>
  <div>
    <Navbar />
    <div class="flex flex-wrap">
      <div v-for="cliente in clientes" :key="cliente.id" class="flex flex-col items-center bg-white border rounded-lg shadow md:flex-row w-1/5 bg-green-200 m-8">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400">{{ cliente.nome }}</h5>
          <p class="mb-3 font-normal text-orange-300">{{ cliente.cnpj }}</p>
          <p class="mb-3 font-normal text-orange-300">{{ cliente.email }}</p>              
          <p class="mb-3 font-normal text-orange-300">{{ cliente.telefone }}</p>              
        </div>
      </div>
    </div>
  </div>
</template>