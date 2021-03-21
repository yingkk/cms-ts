import { apiRes } from "./interface";
export const httpSucess = (res: apiRes): boolean => res.status === 200;
