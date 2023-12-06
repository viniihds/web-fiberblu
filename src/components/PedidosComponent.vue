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
    <div class="flex flex-wrap my-16 justify-center" v-for="pedido in pedidos" :key="pedido.id">
      <div class="flex flex-col items-center bg-white border rounded-lg shadow md:flex-row w-1/3 bg-green-200 m-8">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400">{{ pedido.empresa }}</h5>
              <p class="mb-3 font-normal text-orange-300">{{ pedido.data }}</p>
              <p class="mb-3 font-normal text-orange-300">{{ pedido.valor }}</p>              
              <p class="mb-3 font-normal text-orange-300">{{ pedido.pagamento }}</p>              
            </div>
      </div>
    </div>
      

</template>