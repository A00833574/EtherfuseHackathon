import React from "react";

const Content = ({children}) => {
    return(
        <div
            id="content"
            className="col-span-8 bg-blue-300 h-[calc(100vh-4rem)] p-4"
        >
            {children}
            <div>
                
            </div>
        </div>
    );
}

export default Content;