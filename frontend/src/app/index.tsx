import React, {ReactElement} from "react";
import {createHashRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider} from "react-router-dom";
import Clients from "./containers/clients";
import Magento from "./containers/magento";


/**
 * Mern Frontend App
 *
 * @since 1.0.0
 * @author diego
 */
export default (): ReactElement => {


    const router = createHashRouter(

        createRoutesFromElements(

            <>
                <Route path={'/*'} element={<Layout />} >

                    <Route path={'clients'} element={<Clients />} />

                    <Route path={'magento'} element={<Magento />} />

                    {/* fallback redirect */}

                    <Route path="*" element={<Navigate to="/" />} />

                </Route>

            </>

        )

    );


    return (

        <RouterProvider router={router} />

    );

};



const Layout = () : ReactElement => {

    return (

        <div>

            <p>header</p>

            <Outlet />

            <p>footer</p>

        </div>

    )

};
