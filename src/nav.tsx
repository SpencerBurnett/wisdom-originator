import { createContext, useContext } from 'react'

// Lets any section jump to another section of the Command Center.
// App provides the real implementation (setActive + scroll to top).
export const NavContext = createContext<(id: string) => void>(() => {})

export const useNav = () => useContext(NavContext)
