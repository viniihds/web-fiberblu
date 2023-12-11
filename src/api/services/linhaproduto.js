import api from '../api/api'

class LinhaProdutoService {
      async getAllLinhas(){
        const response = await api.get('/linhaprodutos/')
        return response.data
      }
}

export default new LinhaProdutoService();