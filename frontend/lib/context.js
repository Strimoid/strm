import { createContext, useContext } from 'react'

export const GroupContext = createContext(null)
export const UserContext = createContext(null)

export function useGroupContext() {
  return useContext(GroupContext)
}

export function useUserContext() {
  return useContext(UserContext)
}
