import React, {ReactElement, useEffect, useRef, useState} from "react";
import Avatar from "../../components/avatar";
import {UserService} from "../../services";


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
 * Mern Frontend App
 *
 * @since 1.0.0
 * @author diego
 */
export default (): ReactElement => {


    /**
     * Abort signal
     */
    const abortControllerRef = useRef<AbortController>(null);


    /**
     * State
     */
    const [users, setUsers] = useState<UserType[]>(null);


    /**
     * On init
     */
    useEffect(() => {


        abortControllerRef.current = new AbortController();

        UserService.getAll({page: 1, limit: 10},{signal: abortControllerRef.current.signal}).then(response => {

            setUsers(response.data);

        }).catch((ex) => {

            console.error(ex.message);

        });

        return () => {

            if (abortControllerRef.current) abortControllerRef.current.abort();

        }


    }, []);


    return (

        <div className="w-full p-4 bg-diegowhite">

            <h2 className="text-4xl mb-3">List of clients</h2>

            <p className="text-lg mb-10 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor lacus, condimentum et mollis a, sodales ac sapien. Nunc a nunc accumsan, commodo mi eu, porta tellus. Duis accumsan, est quis laoreet condimentum, magna felis aliquet libero, sed porttitor orci justo in tellus. Nulla varius tristique accumsan. Nunc sit amet lorem gravida, bibendum metus in, facilisis mi. Quisque dictum accumsan erat, id consequat erat aliquet id. In facilisis orci sit amet felis ornare, eget dapibus mi sodales. Aenean nec finibus lacus. Aliquam ac vulputate purus. Etiam lacinia nisi id diam lacinia, et feugiat turpis ornare. Quisque est odio, lobortis ac urna et, bibendum dapibus augue. Etiam mi augue, luctus ut pulvinar id, pulvinar egestas mauris. Suspendisse ut ex ornare, ornare leo in, ultricies risus. Cras ullamcorper efficitur malesuada. Nulla eu dolor elit.</p>

            <table className="w-full table-auto">

                <thead>

                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>lastname</th>
                    <th>job</th>
                    <th>country</th>
                    <th>city</th>
                    <th>avatar</th>
                </tr>

                </thead>

                <tbody>

                    {users && users.length && (

                        <>

                            {

                                users.map((user, index) => {

                                    return (

                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.jobTitle}</td>
                                            <td>{user.country}</td>
                                            <td>{user.city}</td>
                                            <td>
                                                <Avatar href={user.avatar}/>
                                            </td>
                                        </tr>

                                    )

                                })

                            }

                        </>

                    )}

                </tbody>

            </table>


        </div>

    );

};
