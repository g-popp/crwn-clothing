// @ts-nocheck
import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListiner,
} from '../utils/firebase/firebase.utils';
import { createAction } from '../utils/reducer/reducer.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const { currentUser } = state;

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubsrice = onAuthStateChangedListiner(async (user) => {
      if (user) await createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubsrice;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
