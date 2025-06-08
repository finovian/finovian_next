import { useQuery } from '@tanstack/react-query';
import { getAllCategories, getFeaturedPosts, getLatestPosts } from '@/lib/queries';

export function useLatestPosts() {
  return useQuery({
    queryKey: ['latestPosts'],
    queryFn: getLatestPosts,
  });
}

export function useFeaturedPosts() {
  return useQuery({
    queryKey: ['featuredPosts'],
    queryFn: getFeaturedPosts,
  });
}

export function useAllCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
}
