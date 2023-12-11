<script setup>
import { ref, onMounted } from 'vue'

import Navbar from '../components/NavbarComponent.vue'
import EstoqueService from '../api/services/estoque'
import CategoriaProdutoService from '../api/services/categoriaproduto'
import LinhaProdutoService from '../api/services/linhaproduto'
import GrupoProdutoService from '../api/services/grupoproduto'


const linhas = ref([])
const grupos = ref([])
const categorias = ref([])
const produtos = ref([])
const currentProduto = ref ({
    cor: "",
    volume: null,
    preco: null,
    categoria: null,
    linha: null,
    grupo: null
})

async function save(){
  await EstoqueService.saveProduto(currentProduto.value)
  const data = await EstoqueService.getAllProdutos()
  produtos.value = data
  currentProduto.value = {
    cor:"",
    volume:null,
    preco: null,
    categoria:null,
    linha:null,
    grupo:null,
    }
    location.reload()
}
onMounted(async()=>{
    const data = await CategoriaProdutoService.getAllCategorias()
    categorias.value = data
})
onMounted(async()=>{
    const data = await LinhaProdutoService.getAllLinhas()
    linhas.value = data
})
onMounted(async()=>{
    const data = await GrupoProdutoService.getAllGrupos()
    grupos.value = data
})
</script>
<template>
    <Navbar />
    <div class="max-w-lg lg:ms-auto mx-auto text-center mt-24">
                            <div class="py-16 px-7 rounded-md bg-green-200">
                                                          
                                <form>
                                    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                                      <div class="md:col-span-2">
                                        <input v-model="currentProduto.cor" type="text" name="cor" placeholder="Cor do produto" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentProduto.volume" type="text" name="volume" placeholder="Volume do produto" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentProduto.preco" type="text" name="preco" placeholder="Preço do produto" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <select v-model="currentProduto.categoria" class="w-full rounded-md py-2 px-3 ">
                                        <option>Selecione uma categoria</option>
                                        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                                          {{ categoria.descricao }}
                                        </option>
                                      </select>
                                      </div>
                                        <div class="md:col-span-2">
                                        <select v-model="currentProduto.linha" class="w-full rounded-md py-2 px-3 ">
                                        <option>Selecione uma linha</option>
                                        <option v-for="linha in linhas" :key="linha.id" :value="linha.id">
                                          {{ linha.descricao }}
                                        </option>
                                      </select>
                                      </div>  
                                      <div class="md:col-span-2">
                                        <select v-model="currentProduto.grupo" class="w-full rounded-md py-2 px-3 ">
                                        <option>Selecione um grupo</option>
                                        <option v-for="grupo in grupos" :key="grupo.id" :value="grupo.id">
                                          {{ grupo.descricao }}
                                        </option>
                                      </select>
                                      </div>  
                                      <div class="md:col-span-2">
                                        <button class="py-3 text-base font-medium rounded text-white bg-green-600 w-full mt-20" @click="save">Cadastrar</button>
                                      </div>
                                      
                                    </div>
                                    
                                  </form>
                            </div>
                        </div>
</template>