import {ReactElement, useState} from "react";
import PostList1 from "./PostList1.tsx";
const App = () => {
    const [currentPage, setCurrentPage] = useState<ReactElement>(<PostList1 />)

    return (
        <div>
            <button onClick={() => setCurrentPage(<PostList1 />)}>
                Post List 1
            </button>
            <br/>
            {currentPage}
        </div>
    );
};



export default App;
