import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Dashboard.css'

function Dashboard () {

    const userName = useSelector((state) => state.session.user.username);
    console.log(userName)

    return (
        <>
            <h1>Hello, {userName}!</h1>
            <div>
                <button>Pinned Groups</button>
                <button>Suggested Groups</button>
                <button>Browse All</button>
                <div>Search...</div>
            </div>
            <div>Group Details</div>

        </>
    )
}

export default Dashboard;
