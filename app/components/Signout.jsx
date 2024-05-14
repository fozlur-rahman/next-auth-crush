import React from "react";
import { doSignOut } from "../actions";

const Signout = () => {
    return (
        <form action={doSignOut}>
            <button type="submit" className="bg-purple-400 rounded py-2 px-3">
                Log out
            </button>
        </form>
    );
};

export default Signout;
