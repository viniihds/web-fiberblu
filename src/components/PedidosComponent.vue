<script setup>
import Navbar from '../components/NavbarComponent.vue'
import { ref, onMounted } from 'vue'
import PedidoService from '../../api/services/pedidos'

const pedidos = ref([])

onMounted(async()=>{
    const data = await PedidoService.getAllPedidos()
    pedidos.value = data
})
</script>
<template>
  <div>
      <Navbar />
      <div class="flex flex-wrap">
          <div v-for="pedido in pedidos" :key="pedido.id" class="items-center bg-white border rounded-lg shadow w-1/5 bg-green-200 m-8">
              <div class="px-12 flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400">{{ pedido.empresa.nome }}</h5>
                  <p class="mb-3 font-normal text-orange-300">R${{ pedido.total }}</p>              
                  <p class="mb-3 font-normal text-orange-300">{{ pedido.pagamento.descricao }}</p>
                  <p class="mb-3 font-normal text-orange-300">Data do pedido: {{ pedido.data }}</p>              
                  <p class="mb-3 font-normal text-orange-300">Data do pagamento: {{ pedido.dataPagamento }}</p>                           
              </div>
          </div>
      </div>
  </div>
</template>