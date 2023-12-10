import api from '../api/api'

class GrupoProdutoService {
      async getAllGrupos(){
        const response = await api.get('/grupoprodutos/')
        return response.data
      }
}

export default new GrupoProdutoService();