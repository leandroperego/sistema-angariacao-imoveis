import React, { createContext, useEffect, useState } from 'react';
import { getUser } from '../infra/db/users';
import { efetuarLogin } from '../infra/auth/user';

export const usuarioInicial = {
    id: '',
    nome: '',
    email: '',
}

export const UserContext = createContext({});

export function UserProvider({ children }) {

    const [user, setUser] = useState(usuarioInicial);

    useEffect(() => {

        async function fetchUser(userId){
            const userDb = await getUser(userId);
            setUser({
                id: userDb.id,
                nome: userDb.nome,
                email: userDb.email
            });
        }

        async function handleLogin(email, password){
            await efetuarLogin(email, password);
        }

        if (sessionStorage.getItem("user")) {
            const userStorage = JSON.parse(sessionStorage.getItem("user"));
            handleLogin(userStorage.email, userStorage.password);
            fetchUser(userStorage.id);
        }

    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}