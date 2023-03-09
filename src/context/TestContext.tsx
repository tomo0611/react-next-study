import { createContext } from "react";

// You’ll need to export it from a file so that your components can use it
const defaultValue = 1;
export const TestContext = createContext(defaultValue);
