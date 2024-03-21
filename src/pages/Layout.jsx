import { Outlet } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import MenuNavegacaoMobile from "../components/MenuNavegacaoMobile";
import { useState, useEffect } from "react";
import { getImoveis } from "../infra/db/imoveis";
import { ListaProvider } from "../context/lista-imoveis-context";

export default function Layout() {

    const [listaImoveisCadastrados, setListaImoveisCadastrados] = useState([]);
    const [updateLista, setUpdateLista] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const imoveis = await getImoveis();
            setListaImoveisCadastrados(imoveis);
        }

        fetchData();
    }, [updateLista]);

    function getListaLengthFiltered(listagem) {
        return listagem.filter(imovel => imovel.status === '').length
    }

    return (
        <>
            <aside className="lg:hidden flex justify-between items-center py-2 px-6">
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="logo"
                    className="h-8 w-auto"
                />
                <MenuNavegacaoMobile />
            </aside>
            <ListaProvider listagem={listaImoveisCadastrados} updateLista={updateLista} setUpdateLista={setUpdateLista}>
                <aside className="hidden lg:flex flex-col w-1/3 h-screen fixed top-0 left-0 bg-blue-gray-800 2xl:w-1/4">
                    <CardMenu tamanhoLista={getListaLengthFiltered(listaImoveisCadastrados)} />
                </aside>
                <section className="lg:absolute top-0 left-1/3 lg:w-2/3 2xl:w-3/4 2xl:left-1/4">
                    <main>
                        <Outlet />
                    </main>
                    <footer className="rodape-principal">

                    </footer>
                </section>
            </ListaProvider>
        </>
    );
};