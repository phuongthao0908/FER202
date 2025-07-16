import axios from 'axios';

const BASE_URL = 'http://localhost:3001';  // Đảm bảo URL này chính xác và phù hợp với nơi bạn chạy JSON Server

export const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.get(`${BASE_URL}/UserAccounts`);
      const users = response.data;
      
      const user = users.find(u => 
        u.username === username && 
        u.password === password && 
        u.status === 'active'
      );
      
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
};

export const laptopService = {
  getAllLaptops: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Laptops`);
      return response.data;
    } catch (error) {
      console.error('Error fetching laptops:', error);
      throw error;
    }
  },
  
  getLaptopById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/Laptops/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching laptop by id:', error);
      throw error;
    }
  },
  
  searchLaptops: async (searchTerm) => {
    try {
      const response = await axios.get(`${BASE_URL}/Laptops`);
      const laptops = response.data;
      
      if (!searchTerm) return laptops;
      
      return laptops.filter(laptop => 
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching laptops:', error);
      throw error;
    }
  }
};
