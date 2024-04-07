import React, {ReactElement, useState} from "react";
import {gql, useApolloClient, useLazyQuery, useQuery} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {httpLink} from "../../commons/apollo";


const GQL_GET_DATA = gql`
    
    query GetData ($search: String!, $pageSize: Int!, $page: Int!) {
        customer {
            firstname
            lastname
            email
        }
        products(search: $search, pageSize: $pageSize, currentPage: $page){

            items{
                uid
                sku
                name
            }
            page_info {
                current_page
                page_size
                total_pages
            }
            total_count
        }
    }
`;

const CUSTOM_TOKEN = gql`
    
    mutation CustomerToken ($email: String!, $password: String!) {
        generateCustomerToken (email: $email, password: $password) {
            token
        }
    }
`;



/**
 * Mern Frontend App
 *
 * @since 1.0.0
 * @author diego
 */
export default (): ReactElement => {

    const [getData, {data, loading, error}] = useLazyQuery(GQL_GET_DATA, {variables: {search: '', pageSize: 10, page: 1}});

    const client = useApolloClient();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');



    const reload = async () => {

        await getData({variables: {search: '', pageSize: 10, page: 1}});

    }



    /**
     * Set new credentials
     */
    const login = async () => {

        const {data} = await client.mutate({

            mutation: CUSTOM_TOKEN,
            variables: {email, password}

        });

        const token = data?.generateCustomerToken?.token;

        const authLink = setContext((request, { headers }) => {

            return {

                headers: {
                  ...headers,
                  authorization: token ? `Bearer ${token}` : "",
                }
            }
        });


        client.setLink(authLink.concat(httpLink))

        await getData({variables: {search: '', pageSize: 10, page: 1}});

    };




    return (

        <div className="w-full p-4 bg-diegowhite">

            <h2 className="text-4xl mb-3">Magento API</h2>

            <div className="mb-5">
                <form className="mb-10 max-w-96">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Username:</label>
                    <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password:</label>
                    <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                </form>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={login}>login</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3" onClick={reload}>reload</button>
            </div>

            {
                loading && (

                    <p>loading...</p>

                )

            }

            {
                error && (

                    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div className="flex">
                            <div className="py-1">
                                <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold">GraphQL error</p>
                                <p className="text-sm">{error.message}</p>
                            </div>
                        </div>
                    </div>

                )

            }

            {

                data && !error && (

                    <div className="w-full">

                        <div>
                            <h4 className="text-lg font-semibold">User information</h4>
                            <p>{data.customer.firstname}</p>
                            <p>{data.customer.lastname}</p>
                            <p>{data.customer.email}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold">Products</h4>

                            <table className="border-collapse">
                                <thead>
                                    <tr>
                                        <th>sku</th>
                                        <th>name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.products.items.map((item: any, i: number) => {

                                            return (

                                                <tr key={i}>
                                                    <td>{item.sku}</td>
                                                    <td>{item.name}</td>
                                                </tr>

                                            )

                                        })
                                    }
                                </tbody>
                            </table>


                        </div>

                    </div>

                )

            }


        </div>

    );

};
