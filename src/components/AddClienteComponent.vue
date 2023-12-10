<script setup>
import { ref, onMounted } from 'vue'

import Navbar from '../components/NavbarComponent.vue'
import ClienteService from '../../api/services/clientes'
import CategoriaEmpresaService from '../../api/services/categoriaempresa'


const categorias = ref([])
const clientes = ref([])
const currentCliente = ref ({
  nome:'',
  cnpj:'',
  endereco:'',
  email:'',
  telefone:'',
  inscricao_estadual:'',
  classificacao_fiscal:'',
  categoria:null,
})

async function save(){
  await ClienteService.saveCliente(currentCliente.value)
  const data = await ClienteService.getAllClientes()
  clientes.value = data
  currentCliente.value = {
    nome: "",
    cnpj: "",
    endereco: "",
    email: "",
    telefone: "",
    inscricao_estadual: "",
    classificacao_fiscal: "",
    categoria: null,}
    location.reload()
  }
onMounted(async()=>{
    const data = await CategoriaEmpresaService.getAllCategorias()
    categorias.value = data
})
</script>
<template>
    <Navbar />
    <div class="max-w-lg lg:ms-auto mx-auto text-center mt-24">
                            <div class="py-16 px-7 rounded-md bg-green-200">
                                                          
                                <form class="" action="" method="POST">
                                    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                                      <div class="md:col-span-2">
                                        <input v-model="currentCliente.nome" type="text" name="empresa" placeholder="Nome da Empresa" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentCliente.cnpj" type="text" name="cnpj" placeholder="CNPJ" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentCliente.endereco" type="text" name="endereco" placeholder="Endereço" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentCliente.email" type="email" id="email" name="email" placeholder="E-mail" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentCliente.telefone" type="text" name="telefone" placeholder="Telefone" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentCliente.inscricao_estadual" type="text" name="inscricao" placeholder="Inscrição Estadual" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input v-model="currentCliente.classificacao_fiscal" type="text" name="classificacao" placeholder="Classificação Fiscal" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <select v-model="currentCliente.categoria" class="w-full rounded-md py-2 px-3 ">
                                        <option>Selecione uma categoria</option>
                                        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                                          {{ categoria.descricao }}
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