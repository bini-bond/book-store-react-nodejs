import { get, post } from '../api/index';
import CONFIG from '../config/config';
import { Response } from 'express';
const token = localStorage.getItem("token");

const Authorization = `Bearer ${token}`
type ResponseBody = {
  data: [];
};

type ResponseBodyObj = {
  data: {
    token: string
  }
}

export async function getBooks(page: number, limit: number): Promise<ResponseBody> {
  let res = await get<ResponseBody>(`${CONFIG.API}books?limit=${limit}&page=${page}`);
  console.log(res);
  return res;
}

export async function getOrders(page: number, limit: number): Promise<ResponseBody> {
  let res = await get<ResponseBody>(`${CONFIG.API}orders?limit=${limit}&page=${page}`, {headers: {Authorization}});
  console.log(res);
  return res;
}

export async function signIn(body:any): Promise<ResponseBodyObj> {
  console.log("bdy", body)
  let res = await post<any, ResponseBodyObj>(`${CONFIG.API}login`, body, {headers: {'Content-Type': 'application/json'}});
  console.log(res);
  return res;
}
