import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the shape of the data in our context
interface UserContextType {
  editCount: number;
  setEditCount: (editCount: number) => void;
}

// 2. Create the actual context with initial value `undefined`
const UserContext = createContext<UserContextType | undefined>(undefined);

// 3. A custom hook to safely access the context

// eslint-disable-next-line react-refresh/only-export-components
export const useCountContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    // This ensures the hook is used inside the Provider
    throw new Error("useCountContext must be used within a Provider");
  }
  return context;
};

// 4. Props type for the Provider component
interface ProviderProps {
  children: ReactNode;
}

// 5. Provider component that shares the context data with its children
function CounterProvider({ children }: ProviderProps) {

  const [editCount, setEditCount] = useState<number>(0); // useState to track number of edits

  const values: UserContextType = {
    editCount,
    setEditCount,
  };

  // Provide the `editCount` and `setEditCount` to any children wrapped in this provider
  return <UserContext.Provider value={values}>
    {children}
    </UserContext.Provider>;
}

export default CounterProvider;



