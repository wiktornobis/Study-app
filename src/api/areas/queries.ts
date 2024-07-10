import { useQuery, QueryClient } from "react-query";
import { fetchMostPopularDirection } from "./fetchers";
import { BasicResponse } from "../common/types";
import { Areas } from "./types";

enum QueryKeys {
    DIRECTION = "MOSTPOPULARDIRECTION",
}

export const useMostPopularDirection = () =>
    useQuery<BasicResponse<Areas[]>, Error>({
        queryKey: [QueryKeys.DIRECTION],
        queryFn: fetchMostPopularDirection,
        staleTime: 1000 * 10, //10 sekund - ten kod nadpisuje stan w main.tsx (default 5 minut)
    });

export const prefetchAREAS = async (queryClient: QueryClient) =>
    await queryClient.prefetchQuery({
        queryKey: [QueryKeys.DIRECTION],
        queryFn: fetchMostPopularDirection,
    });
