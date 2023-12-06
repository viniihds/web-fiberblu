import api from '../api/api'

class ClienteService {
    async getAllClientes(){
        const response = await api.get('/empresa/')
        return response.data
    }
}

export default new ClienteService();