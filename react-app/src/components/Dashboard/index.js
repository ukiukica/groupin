import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Dashboard.css'

function Dashboard () {

    const userName = useSelector((state) => state.session.user.username);
    console.log(userName)

    return (
        <>
            <h1>Hello, {userName}!</h1>
        </>
    )
}

export default Dashboard;
