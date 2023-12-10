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
    <Navbar />
    <div class="flex flex-wrap my-16" v-for="pedido in pedidos" :key="pedido.id">
        <div class="items-center bg-white border rounded-lg shadow md:flex-row w-1/5 bg-green-200 m-8">
          <div class="px-16 flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400">{{ pedido.empresa }}</h5>
              <p class="mb-3 font-normal text-orange-300">R${{ pedido.total }}</p>              
              <p class="mb-3 font-normal text-orange-300">{{ pedido.pagamento }}</p>
              <p class="mb-3 font-normal text-orange-300">Data do pedido: {{ pedido.data }}</p>              
              <p class="mb-3 font-normal text-orange-300">Data do pagamento: {{ pedido.dataPagamento }}</p>                           
            </div>
      </div>
    </div>
      

</template>