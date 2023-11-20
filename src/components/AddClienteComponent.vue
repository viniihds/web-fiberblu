<script setup>
import Navbar from '../components/NavbarComponent.vue'

</script>
<template>
    <Navbar />
    <div class="max-w-lg lg:ms-auto mx-auto text-center mt-24">
                            <div class="py-16 px-7 rounded-md bg-green-200">
                                                          
                                <form class="" action="" method="POST">
                                    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                                      <div class="md:col-span-2">
                                        <input type="text" name="empresa" placeholder="Nome da Empresa" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input type="text" name="cnpj" placeholder="CNPJ" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input type="text" name="endereco" placeholder="Endereço" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input type="email" id="email" name="email" placeholder="E-mail" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <input type="text" name="telefone" placeholder="Telefone" class="w-full rounded-md py-2 px-3 ">
                                      </div>
                                      <div class="md:col-span-2">
                                        <button class="py-3 text-base font-medium rounded text-white bg-green-600 w-full mt-20">Cadastrar</button>
                                      </div>
                                    </div>
                                  </form>
                            </div>
                        </div>
</template>