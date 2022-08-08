import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'

interface User {
  id: number
  username: string
}

interface AuthContextValue {
  user: User | null
  setUser(user: User): void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)

  const entity = useMemo(() => ({ user, setUser }), [user])

  return (
    <AuthContext.Provider value={entity}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw new Error('auth-context-provider is not used')
  }

  return auth
}
