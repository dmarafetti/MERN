import {UserType} from "../../index";
import axios from "axios";


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
