import {BASE_URL} from "@/ts/constants/variables";
import {BasicResponse} from "../common/types";
import {Areas} from "./types";

export const fetchMostPopularDirection = async (): Promise<BasicResponse<Areas[]>> => {
    const response = await fetch(`${BASE_URL}/mostPopularDirection.json`);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Failed to fetch data.");
};
