import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeComponent.vue'
import Clientes from '../components/ClientesComponent.vue'
import Estoque from '../components/EstoqueComponent.vue'
import Pedidos from '../components/PedidosComponent.vue'
import AddCliente from '../components/AddClienteComponent.vue'
import Financeiro from '../components/FinanceiroComponent.vue'
import Login from '../components/LoginComponent.vue'
import AddProduto from '../components/AddProdutoComponent.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes
    },
    {
      path: '/estoque',
      name: 'estoque',
      component: Estoque
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedidos
    },
    {
      path: '/addcliente',
      name: 'addcliente',
      component: AddCliente
    },
    {
      path: '/financeiro',
      name: 'financeiro',
      component: Financeiro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/addproduto',
      name: 'addproduto',
      component: AddProduto
    },
  ]
})

export default router
