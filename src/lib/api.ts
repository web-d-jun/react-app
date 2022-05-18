import axios, { AxiosResponse } from "axios";
const instance = axios.create({
    baseURL:'http://172.20.137.35:5000',
})

instance.defaults.withCredentials = true;
const http = {
  send: async () => {
    let r_: any;
    try {
      r_ = await instance.get("/");
      console.log(r_);
    } catch (e) {
      console.log(e);
    }

    const r = r_.data;
    return r;
  },
};

export default http;
