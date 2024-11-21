import axios from "axios";

const {VITE_VUE_API_URL} = import.meta.env;

function localAxios() {
    const instance = axios.create({
        baseURL: VITE_VUE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    })
    return instance;
}

export {localAxios}