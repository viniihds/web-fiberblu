<template>


    <div class=" h-full bg-white">
      <div
        class="g-6 h-full wrap justify-center text-neutral-800 dark:text-neutral-200 mt-20">
        <div class="w-full">
          <div>
            <div class="g-0 lg:lg:wrap">
              <div class="px-4 md:px-0 lg:w-full">
                <div class="md:mx-6 md:p-12 text-center">
                  <div class="text-center">
                    <img
                      class="mx-auto w-36 mb-16"
                      src="./images/fiberblu.png"
                      alt="logo" />
                  </div>  
                  <form>
                    <div class="relative mb-4" data-te-input-wrapper-init>
                      
                      <label
                        for="exampleFormControlInput1"
                        class="pointer-events-none mr-64 left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-orange-300 font-semibold dark:peer-focus:text-primary"
                        >Usuário
                      </label>
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-96 ml-auto mr-auto rounded border-0 bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Usuário" />
                    </div>
                      <div class="relative mb-4" data-te-input-wrapper-init>
                      
                      <label
                        for="exampleFormControlInput11"
                        class="pointer-events-none mr-64 left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-orange-300 font-semibold dark:peer-focus:text-primary"
                        >Senha
                      </label>
                      <input
                        type="password"
                        class="peer block min-h-[auto] w-96 ml-auto mr-auto rounded border-0 bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput11"
                        placeholder="Usuário" />
                    </div>
                      <div class="my-12  pb-1 pt-1 text-center">
                        <RouterLink to="/home">
                          <button
                            class="text-orange-300 font-semibold mb-3 inline-block w-72 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style="
                              background: #16a34a;
                            ">
                            Login
                          </button>
                        </RouterLink>
                    </div>
                    <div class="pb-4">
                      <a class="text-orange-500 " href="#!">Esqueceu sua senha?</a>
                    </div>

                    <div class="items-center justify-between pb-6 ">
                      <button
                        
                        type="button"
                        class="text-orange-500 font-semibold">
                        Registrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>