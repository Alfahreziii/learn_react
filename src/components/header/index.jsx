import { Outlet } from "react-router";
const Header = () => {

    return (
        <>
        <div>
            <h1>header</h1>
        </div>

        <Outlet />
        </>
    )
};

export default Header;