import { useState } from "react";
import "../Styling/archiveStyles.css"
import Problem from "./Problem";
import Winners from "./Winners";


const Archive = () => {

    const [page,setPage] = useState(1);
    
    return ( 
        <>
            <div className="archiveMain">
                <div className="archive-top">
                    <div className="top-left">
                        <button onClick={() => setPage(1)} className="ps">
                            <h3>Problem Statements</h3>
                        </button>
                        <button onClick={() => setPage(2)} className="all-wins">
                            <h3>Winners</h3>
                        </button>
                    </div>
                    <div className="top-right">
                        <select name="Year" id="">
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>

                        </select>
                    </div>
                </div>
                <div className="archive-content">
                    <div className="archive-scroll">
                    {
                        (page == 1) ? 
                        (
                            <Problem/>
                        ) : 
                        (
                            <Winners/>
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Archive;