import React from "react";
import { Menu } from 'semantic-ui-react'
import { Link } from "../routes";
import disney from "../pages/config/disney";

const header = (props) => {

    const ownerAddress = disney.methods.owner.call();

    const items = [
        { key: 'Disney', active: true, name: 'disney_admin' },
        { key: 'User', name: 'user_admin' },
    ]
    return (


        <h1>
            <div align="center">Disney Ride Park </div>

            <Menu style={{ marginTop: "10px" }}>

                <Link route="/disney_admin">
                    <a className="item">Disney Administration</a>
                </Link>

                <Link route="/user_admin" >
                    <a className="item">User Enjoy</a>
                </Link>

                
                <Link route="/food_admin" >
                    <a className="item">Food</a>
                </Link>

            </Menu>
        </h1>

    );
};
export default header;