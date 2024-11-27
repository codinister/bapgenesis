'use client'

import { useQuery } from 'react-query';
import axiosfetch from './fetch';

const useGetQuery = ( key: string, url: string) => {
  const fn = () => axiosfetch({ url });
  const res = useQuery(key, fn);

  if (res) {
    return res?.data?.data;
  } else {
    return [];
  }
};

export default useGetQuery;
