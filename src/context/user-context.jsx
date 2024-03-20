import React, { createContext, useState } from 'react';

export const usuarioInicial = {
    id: '',
    nome: '',
    email: '',
}

export const UserContext = createContext({});

export function UserProvider({ children }) {

    const [user, setUser] = useState(usuarioInicial);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}