import api from '../api/api'

class EstoqueService {
    async getAllProdutos(){
        const response = await api.get('/produto/')
        return response.data
    }
}

export default new EstoqueService();