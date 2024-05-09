import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationDispatch, ApplicationState} from "../../store";
import {setLoading} from "../../store/slices/appSlice";

export default function Playground() {


    /**
     * Redux dispatcher
     */
    const dispatch: ApplicationDispatch = useDispatch();


    /**
     * Global state
     */
    const loading = useSelector( (state: ApplicationState) => state.application.loading);


    /**
     * On init
     */
    useEffect(() => {

        setTimeout(() => {

            dispatch(setLoading(true));

        }, 3000);

    }, []);


    return (

        <div>

            <p>Playground</p>

            <p>{loading ? 'TRUE' : 'FALSE'}</p>

        </div>

    )

}
