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
                    <button onClick={() => setPage(1)} className="ps">
                        <h3>PS</h3>
                    </button>
                    <button onClick={() => setPage(2)} className="all-wins">
                        <h3>Winners</h3>
                    </button>
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