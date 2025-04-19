// import React, { useState } from "react";
// import { IoSearch } from "react-icons/io5";

// const Search = () => {
//     const [query, setQuery] = useState("");

//     return (
//         <>
//             <form>
//                 <div className="flex mt-3 p-2">
//                     <div className="input-group shadow-lg bg-black">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Search..."
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                         />
//                         <span className="input-group-text border-end-0" >
//                             <IoSearch className="hover:bg-gray rounded-full" />
//                         </span>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }
// export default Search

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
    const [query, setQuery] = useState("");

    return (
        <form className="flex justify-center mt-3 p-2">
            <div className="flex items-center w-full max-w-md bg-white text-white rounded-lg shadow-lg px-3 py-1">
                <input
                    type="text"
                    className="flex-grow bg-transparent focus:outline-none text-slate-600 placeholder-gray-400"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div type="submit" className="text-xl bg-white p-2 hover:cursor-pointer ">
                    <IoSearch className="text-slate-700"/>
                </div>
            </div>
        </form>
    );
};

export default Search;
