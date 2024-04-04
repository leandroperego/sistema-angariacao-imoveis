import React, { createContext, useEffect, useState } from 'react';
import { getUser } from '../infra/db/users';
import { efetuarLogin } from '../infra/auth/user';
import { useImmer } from 'use-immer';

export const usuarioInicial = {
    id: '',
    nome: '',
    email: '',
}

export const UserContext = createContext({});

export function UserProvider({ children }) {

    const [user, updateUser] = useImmer(usuarioInicial);

    useEffect(() => {

        async function fetchUser(userId){
            const userDb = await getUser(userId);
            updateUser((draft) => {
                draft.id = userDb.id;
                draft.nome = userDb.nome;
                draft.email = userDb.email;
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
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    );
}