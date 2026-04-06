import React from "react";
import Nav from "../../ui/nav/nav";

function PageWrapper({children}) {
    return (
        <>
            <Nav/>
            {children}
        </>
    );
}

export default PageWrapper;