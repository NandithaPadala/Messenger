// import React from "react";
// import { Col } from "react-bootstrap";
// import Search from "./Search";

// function Left(){
//     return(
//         <>
//             {/* <div className="w-[30%] border text-white border-white bg-black">Left</div> */}
//             <Col xs={3} className="border border-white text-white d-flex bg-black border gap-3">
//                 <Search></Search>
//             </Col>
//         </>
//     );
// }
// export default Left

import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
    return (
        <>
            <div className="bg-black h-screen text-white justify-content-center align-text-center">
                <h2 className="font-bold text-3xl px-4 py-1 m-3">Chats</h2>
                <Search />
                <hr />
                <div>
                    <Users></Users>
                </div>

            </div>
        </>
    );
}

export default Left;
