import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const baseURl = "https://blog.server.apenasgabs.dev/";
const api = axios.create({
  baseURL: baseURl,
});
interface RequestPros {
  url: string;
  data?: object;
  header?: object;
  setData: Dispatch<SetStateAction<any>>;
}
export const registerUser = async ({ url, data, setData }: RequestPros) => {
  const response = await api.post(url, data);
  setData(response.data);
};

export const login = async ({ url, data, setData }: RequestPros) => {
  const response = await api.post(url, data);
  setData(response.data);
};

export const fetchData = async ({ url, header, setData }: RequestPros) => {
  const response = await api.get(url, header);
  setData(response.data);
};

export const register = async ({ url, header, data, setData }: RequestPros) => {
  const response = await api.post(url, data, header);
  setData(response.data);
};

export const update = async ({ url, header, data, setData }: RequestPros) => {
  const response = await api.put(url, data, header);
  setData(response.data);
};

export const deleteUser = async (url: string, header: object) => {
  await api.delete(url, header);
};
