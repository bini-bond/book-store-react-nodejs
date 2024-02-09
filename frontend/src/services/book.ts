import { get, post, del } from '../api/index';
import CONFIG from '../config/config';
const token = localStorage.getItem("token");

const Authorization = `Bearer ${token}`
type ResponseBody = {
  data: [];
};

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

export async function postOrder(body:any): Promise<ResponseBody> {
  console.log("bdy", body)
  let res = await post<any, ResponseBody>(`${CONFIG.API}order`, body, {headers: {Authorization, 'Content-Type': 'application/json'}});
  console.log(res);
  return res;
}

export async function cancelOrder(id: number): Promise<ResponseBody> {
  console.log("bdy", id)
  let res = await del<ResponseBody>(`${CONFIG.API}order/${id}`, {headers: {Authorization}});
  console.log(res);
  return res;
}
