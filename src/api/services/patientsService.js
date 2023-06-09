import apiInstance from "../api";

const url = '/patients'

export const getPatients = async () => {
    return await apiInstance.get(url)
}

export const deletePatient = async (id) => {
    return await apiInstance.delete(`${url}/${id}`)
}

export const postPatient = async (data) => {
    return await apiInstance.post(url, data)
}

export const updatePatient = async (id, data) => {
    return await apiInstance.put(`${url}/${id}`, data)
}