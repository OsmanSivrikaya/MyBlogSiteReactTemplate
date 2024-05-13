import axios from "axios";

// axios'u herherde çağırmak yerine function oluşturuyoruz
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
  },
});
