import axios from "axios"

export const BASE_URL = 'https://gorest.co.in/public/v2'
export const token = 'Bearer 20e0fda0c686b942d7eed927c85988f935ca01dbe525731289c790549531ee06'


export const getAxios = async (url) => {
    return await axios.get(url)
}
export const postAxios = async (url, data) => {
    return await axios.post(url, data, { headers: { 'content-type': 'application/json', authorization: token }, })
}
export const putAxios = async (url, data) => {
    return await axios.put(`${url}/${data.id}`, data, { headers: { 'content-type': 'application/json', authorization: token }, })
}
export const deleteAxios = async (url, id) => {
    return await axios.delete(`${url}/${id}`, { headers: { 'content-type': 'application/json', authorization: token }, })

}

