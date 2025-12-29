import { DELAY, LIMIT_EVENT, PAGE_DEFAULT } from "@/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import authServices from "@/services/auth.service";
import eventServices from "@/services/event.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const useLandingPageLayoutNavbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const debounce = useDebounce();
  const getProfile = async () => {
    const { data } = await authServices.getProfile();
    return data.data;
  };

  const { data: dataProfile } = useQuery({
    queryKey: ["Profile"],
    queryFn: getProfile,
    enabled: router.isReady,
  });

  const getEventsSearch = async () => {
    const params = `search=${search}&limit=${LIMIT_EVENT}&page=${PAGE_DEFAULT}&isPublish=true`;
    const res = await eventServices.getEvents(params);
    const { data } = res;
    return data;
  };

  const {
    data: dataEventsSearch,
    isLoading: isLoadingEventsSearch,
    isRefetching: isRefetchingEventsSearch,
  } = useQuery({
    queryKey: ["EventsSearch", search],
    queryFn: getEventsSearch,
    enabled: !!search,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => setSearch(e.target.value), DELAY);
  };

  return {
    dataProfile,

    dataEventsSearch,
    isLoadingEventsSearch,
    isRefetchingEventsSearch,
    handleSearch,
    search,
    setSearch,
  };
};

export default useLandingPageLayoutNavbar;
