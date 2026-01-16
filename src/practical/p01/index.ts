import axios from "axios";


interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface apiData {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website: string;
  company: object;
}

interface UserOutput {
  id: number;
  name: string;
  phone: string;
  address: Address | null;
}
export const getPostalAddress = async (): Promise<UserOutput[]> => {
  try {
    const res = await axios.get<apiData[]>("https://jsonplaceholder.typicode.com/users");
    const users: UserOutput[] = res.data.map((user) => ({
      id: user.id,
      name: user.name,
      phone: user.phone,
      address: user.address ? user.address : null,
    }));
      return users;
    } catch (error) {
      return [];
    }
  };