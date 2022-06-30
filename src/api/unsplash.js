import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -0xwAAoF3bHUHm1X1SOKrZOu-ikleJeX6SUCe3pZB_A",
  },
});
