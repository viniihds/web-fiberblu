<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'



const pedidos = ref([])

const buscarPedidos = async() => {
    const response = await axios.get("http://191.52.55.114:19003/pedido")
    pedidos.value = response.data
}

onMounted(async () => {
    buscarPedidos();
})


</script>
<template>
    <div v-for="pedido in pedidos" :key="pedido.id">
        {{ pedido.empresa }}
    </div>
</template>
