import React, {ReactElement} from "react";


interface Avatar {

    href: string

}

export default ({href}: Avatar) : ReactElement => {


    return (

        <div className="w-16 border-gray-200">
            <img src={href} alt={'avatar'} className="w-full"/>
        </div>


)
}
