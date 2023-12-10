import api from '../api/api'

class CategoriaProdutoService {
      async getAllCategorias(){
        const response = await api.get('/categoriaprodutos/')
        return response.data
      }
}

export default new CategoriaProdutoService();