import { createContext } from "react";

export const ListaImoveisContext = createContext({});

export const ListaProvider = ({ children, listagem, updateLista, setUpdateLista }) => {
    return (
        <ListaImoveisContext.Provider value={{listagem, updateLista, setUpdateLista}}>
            {children}
        </ListaImoveisContext.Provider>
    );
}