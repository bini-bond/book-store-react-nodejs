import { get, post, del } from '../api/index';
import CONFIG from '../config/config';

type ResponseBody = {
  data: [];
};

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

export async function postOrder(body:any): Promise<ResponseBody> {
  console.log("bdy", body)
  let res = await post<any, ResponseBody>(`${CONFIG.API}order`, body, {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTcwNzQ4NTk1OSwiZXhwIjoxNzA3NDg5NTU5fQ.3zP7QNfU0ct7N5G0NNJoq6NA3-pWHuDu3xZGrZzCbfo", 'Content-Type': 'application/json'}});
  console.log(res);
  return res;
}

export async function cancelOrder(id: number): Promise<ResponseBody> {
  console.log("bdy", id)
  let res = await del<ResponseBody>(`${CONFIG.API}order/${id}`, {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTcwNzQ4NTk1OSwiZXhwIjoxNzA3NDg5NTU5fQ.3zP7QNfU0ct7N5G0NNJoq6NA3-pWHuDu3xZGrZzCbfo"}});
  console.log(res);
  return res;
}
