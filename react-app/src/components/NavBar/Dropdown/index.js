import React, {useState, useEffect} from "react";
import LogoutButton from "../../auth/LogoutButton";
import "./Dropdown.css";

function Dropdown() {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    return (
        <>
            <button id="dropdown-menu" onClick={openMenu}>
                <i class="fa-solid fa-bars"></i>
            </button>
            {showMenu && (
                <>
                    <LogoutButton />
                </>
            )}
        </>
    )
}

export default Dropdown;
