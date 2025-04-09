import { Auth } from "../types";
import { createContext } from "react";


export const AuthContext = createContext<Auth | undefined>(undefined)