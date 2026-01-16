import axios from "axios";

export const getPostalAddress = async (): Promise<[]> => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = res.data;

    if (!data || !Array.isArray(data) || data.length === 0) {
      return [];
    }

    return res.data;
  } catch (error) {
    return [];
  }
};
