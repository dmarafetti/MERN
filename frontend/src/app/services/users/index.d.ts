import { UserType } from "../../index";
declare class Users {
    getAll(params?: any, config?: any): Promise<import("axios").AxiosResponse<UserType[], any>>;
    get(id: string, config?: any): Promise<import("axios").AxiosResponse<UserType, any>>;
}
declare const _default: Users;
export default _default;
