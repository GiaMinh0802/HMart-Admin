import axios from 'axios'
import { base_url } from '../../utils/base_url'
import { config } from '../../utils/axiosconfig'

const getOrders = async () => {
    const response = await axios.get(`${base_url}user/all-order`, config)
    return response.data
}

const getOrder = async (id) => {
    const response = await axios.get(`${base_url}user/order/${id}`, config)
    return response.data
}

const orderService = {
    getOrders,
    getOrder
}

export default orderService