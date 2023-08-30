import axios from "axios";

const apiArtCustomer = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const ArtCustomerService = {
  
    async getAllArtCustomer() {
      let response = await apiArtCustomer.get("/ArtCustomer");
      let allArtCustomer = response.data;
      return allArtCustomer;
    },
  
  };