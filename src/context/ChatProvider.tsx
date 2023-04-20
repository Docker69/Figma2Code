import { ReactNode, createContext, useEffect, useReducer } from "react";

export const SET_DRAWER_STATE = "SET_DRAWER_STATE";

export type StateType = {
  mobileDrawerOpen: boolean;
};

//define action types with imported constants
export type ActionType = { type: typeof SET_DRAWER_STATE; payload: boolean };

const initialState: StateType = {
  mobileDrawerOpen: false,
};

export const ChatContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

// Create a reducer
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case SET_DRAWER_STATE:
      return { ...state, mobileDrawerOpen: action.payload };
    default:
      return state;
  }
};

// Create a provider
const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
