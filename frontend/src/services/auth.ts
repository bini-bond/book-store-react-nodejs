import { get, post } from '../api/index';
import CONFIG from '../config/config';
import { Response } from 'express';

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
  let res = await get<ResponseBody>(`${CONFIG.API}orders?limit=${limit}&page=${page}`, {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTcwNzQ4NTk1OSwiZXhwIjoxNzA3NDg5NTU5fQ.3zP7QNfU0ct7N5G0NNJoq6NA3-pWHuDu3xZGrZzCbfo"}});
  console.log(res);
  return res;
}

export async function signIn(body:any): Promise<ResponseBodyObj> {
  console.log("bdy", body)
  let res = await post<any, ResponseBodyObj>(`${CONFIG.API}login`, body, {headers: {'Content-Type': 'application/json'}});
  console.log(res);
  return res;
}
