import axios from "axios";

const {VITE_VUE_API_URL_1, VITE_VUE_API_URL_2} = import.meta.env;

function localAxios() {
    const instance = axios.create({
        baseURL: VITE_VUE_API_URL_1,
    headers: {
      "Content-Type": "application/json",
    },
    })
    return instance;
}

function localAxios_py() {
  const instance = axios.create({
      baseURL: VITE_VUE_API_URL_2,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  })
  return instance;
}

export {localAxios, localAxios_py}