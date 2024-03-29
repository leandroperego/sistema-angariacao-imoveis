import { createContext, useEffect, useState } from "react";
import { getImoveis } from "../infra/db/imoveis";

export const ListaImoveisContext = createContext({});

export const ListaProvider = ({ children }) => {

    const [listaImoveis, setListaImoveis] = useState([]);
    const [updateLista, setUpdateLista] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const imoveis = await getImoveis();
            localStorage.setItem("listaImoveis", JSON.stringify(imoveis));
            setListaImoveis(imoveis);
        }
        fetchData();
    }, [updateLista]);

    return (
        <ListaImoveisContext.Provider value={{listaImoveis, updateLista, setUpdateLista}}>
            {children}
        </ListaImoveisContext.Provider>
    );
}