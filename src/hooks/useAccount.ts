import { useQuery } from '@tanstack/react-query';
import { currentUser } from '@/services';
import { ACCOUNT_INFO_RESULT } from '@/services/key';

export const useCurrentUser = () => {
  const result = useQuery(
    [ACCOUNT_INFO_RESULT],
    async () => {
      // ...
      return currentUser();
    }
  );
  return result;
};
