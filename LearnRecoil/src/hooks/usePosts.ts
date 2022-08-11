import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { getPosts } from '../api/getPosts';
import { postsState } from '../atoms/posts';

interface Enable {
  enabled: boolean;
}

export default function usePosts(
  { enabled }: Enable = { enabled: true },
) {
  const [{ loading, data, error }, set] = useRecoilState(postsState);

  const fetchData = useCallback(async () => {
    set({ loading: true, data: null, error: null });

    try {
      const posts = await getPosts();

      set({ loading: false, data: posts, error: null });
    } catch (e) {
      set({ loading: false, data: null, error: e as Error });
    }
  }, [set]);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled, fetchData]);

  return {
    loading,
    data,
    error,
    refetch: fetchData,
  };
}
