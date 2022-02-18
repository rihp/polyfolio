import RoutePath from 'common/modules/routing/routing.enums';
import {useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {atom, useRecoilState} from 'recoil';

import useLocalStorage from '../useLocalStorage/useLocalStorage';

const USER_LS_KEY = 'polyfolio_user';
const USER_STATE_KEY = 'polyfolio_user_state';

export const MOCK_WALLET_ADDRESS = '0xf253fc2ca37c078436d07fb75e5a76a649892172';

export default function useAuth() {
  const navigate = useNavigate();
  const [persistedUser, setPersistedUser] = useLocalStorage<string>(USER_LS_KEY, null);
  const userPersistState = atom({
    key: USER_STATE_KEY,
    default: persistedUser,
  });

  const [user, setUser] = useRecoilState(userPersistState);

  const logIn = useCallback(() => {
    setUser(MOCK_WALLET_ADDRESS);
    setPersistedUser(MOCK_WALLET_ADDRESS);
  }, [setUser, setPersistedUser]);

  const logOut = useCallback(() => {
    setUser(null);
    setPersistedUser(null);
    navigate(RoutePath.BaseRoute);
  }, [setUser, setPersistedUser, navigate]);

  useEffect(() => {
    setPersistedUser(user);
  }, [setPersistedUser, user]);

  return {user, logIn, logOut, setUser};
}
