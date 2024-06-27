
import { useAREAS } from "@/api/areas/queries.ts";
import { Areas } from "@/api/areas/types";
import {CircularProgress} from "@mui/material";

const ExampleList = () => {
    const areasQuery = useAREAS();

    // eslint-disable-next-line react/jsx-no-undef
    if (areasQuery.status === "loading") return <div><CircularProgress color={"secondary"} /></div>;
    if (areasQuery.status === "error") return <h1>Error: {areasQuery.error.message}</h1>;

    return (
        <div>
            <h1>Posts List 1</h1>
            <ol>
                {Array.isArray (areasQuery.data) && areasQuery.data?.map((post: Areas) => (
                    <li key={post.id}>{post.nazwa}</li>
                ))}
            </ol>
        </div>
    );
};

export default ExampleList;
