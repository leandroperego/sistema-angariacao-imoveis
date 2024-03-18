import { Outlet } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import MenuNavegacaoMobile from "../components/MenuNavegacaoMobile";

export default function Layout() {

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
            <aside className="hidden lg:flex flex-col w-1/3 h-screen fixed top-0 left-0 bg-blue-gray-800 2xl:w-1/4">
                <CardMenu />
            </aside>
            <section className="lg:absolute top-0 left-1/3 lg:w-2/3 2xl:w-3/4 2xl:left-1/4">
                <main>
                    <Outlet />
                </main>
                <footer className="rodape-principal">

                </footer>
            </section>
        </>
    );
};

{/* 
    configurar filhos aside para quando determinado tamanho de tela exibir menuNavegacaoMobile e MenuNavegacaoDesktop 

    no className do aside, determinar que quando a tela for a medida de desktop, ela ser fixa 20% com posicao fixa
    e a section conteudo ser 80% com altura infinita

    e criar um contexto para compartilhar os itens do menu
*/
}