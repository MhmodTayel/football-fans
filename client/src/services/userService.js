import { axiosInstace } from "./axiosConfig";

function register(body) {
  return axiosInstace.post("/register", body);
}

function login(body) {
  return axiosInstace.post("/login", body);
}

function getData() {
  return axiosInstace.get(`/user`);
}

export { register, login, getData };
