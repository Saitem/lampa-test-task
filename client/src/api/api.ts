import axios from 'axios'
const baseUrl = 'http://localhost:5000'

export const getProductApi = async () => {
    const { data } = await axios.get(`${baseUrl}/products`)
    console.log(data)
    return data
}

export const createOrderApi = async (obj: object) => {
    return await axios.post(`${baseUrl}/order/create`, obj)
}