import { usePrefetchQuery, useQuery } from "@tanstack/react-query";
import { QUERY_KEY_DICTIONARY } from "../../../constants/query-key-dictionary";
import { getLaunchList } from "../../../services/api";
import { minutesToMilliseconds } from "date-fns";

const useGetLaunchListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY_DICTIONARY.GET_LAUNCH_LIST,
    queryFn: getLaunchList,
    staleTime: minutesToMilliseconds(1),
  });
};

export const useGetLaunchList = () => {
  return useGetLaunchListQuery();
};

export const usePrefetchLaunchList = () => {
  usePrefetchQuery({
    queryKey: QUERY_KEY_DICTIONARY.GET_LAUNCH_LIST,
    queryFn: getLaunchList,
  });
};
