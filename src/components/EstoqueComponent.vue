<script setup>
import Navbar from '../components/NavbarComponent.vue'
import { ref, onMounted } from 'vue'
import EstoqueService from '../../api/services/estoque'

const produtos = ref([])

onMounted(async()=>{
    const data = await EstoqueService.getAllProdutos()
    produtos.value = data
})
</script>
<template>
  <div>
    <Navbar />
    <div class="flex flex-wrap">
      <div v-for="produto in produtos" :key="produto.id" class="flex flex-col items-center bg-white border rounded-lg shadow md:flex-row w-1/5 bg-green-200 m-8">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400">{{ produto.categoria }}</h5>
          <p class="mb-3 font-normal text-orange-300">{{ produto.cor }}</p>
          <p class="mb-3 font-normal text-orange-300">{{ produto.grupo }}</p>              
          <p class="mb-3 font-normal text-orange-300">{{ produto.linha }}</p>              
        </div>
      </div>
    </div>
  </div>
</template>
