import axios from "axios";

const livrosAPI = axios.create({
    baseURL: "http://localhost:8000/livros"
})

async function listarLivros(){
    const response = await livrosAPI("/")
    return response.data
}

export { listarLivros }