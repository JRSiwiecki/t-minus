import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_DICTIONARY } from "../../../constants/query-key-dictionary";
import { getLaunchList } from "../../../services/api";

const useGetLaunchListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY_DICTIONARY.GET_LAUNCH_LIST,
    queryFn: getLaunchList,
    staleTime: 1 * 60 * 1000,
  });
};

export const useGetLaunchList = () => {
  return useGetLaunchListQuery();
};
