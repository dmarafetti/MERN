import axios from "axios";


export type UserType = {

    name: string,
    lastname: string,
    jobTitle: string,
    id: string,
    createdAt: string,
    country: string,
    city: string,
    avatar: string

};
/**
 *
 *
 *
 */
class Users {


    public getAll(params: any = {}, config?: any) {

        return axios.get<Array<UserType>>(`/users`, {params, ...config});

    }

    public get(id: string, config?: any) {

        return axios.get<UserType>(`/users/${id}`, { ...config});
    }



}


export default new Users();
