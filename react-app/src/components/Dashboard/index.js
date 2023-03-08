import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupList from "../GroupList";
import GroupDetails from "../GroupDetails";
import './Dashboard.css'

function Dashboard () {

    const userName = useSelector((state) => state.session.user.username);
    

    return (
        <>
            <h1>Hello, {userName}!</h1>
            <div>
                <button>Pinned Groups</button>
                <button>Suggested Groups</button>
                <button>Browse All</button>
                <div>Search...</div>
                <GroupList />
            </div>

            <GroupDetails />

        </>
    )
}

export default Dashboard;
