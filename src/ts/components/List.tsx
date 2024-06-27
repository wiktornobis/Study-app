import {ReactElement, useState} from "react";
import PostList1 from "@/PostList1.tsx";
import "@/less/main.less";
const List = () => {
    const [currentPage, setCurrentPage] = useState<ReactElement>(<PostList1 />)

    return (
        <div className="general-container">
            <button onClick={() => setCurrentPage(<PostList1 />)}>
                Post List 1
            </button>
            <br/>
            {currentPage}
        </div>
    );
};



export default List;
