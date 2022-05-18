import axios, { AxiosResponse } from "axios";
const instance = axios.create({
    baseURL:'http://localhost:5000',
})

const http = {
  send: async () => {
    let r_: any;
    try {
      r_ = await instance.get("/");
    } catch (e) {
      console.log(e);
    }

    const r = r_.data;
    return r;
  },
};

export default http;
