import axios from "axios"

export function login(data) {
  return axios.post("/login", data).then(res => res.data)
}
