import { Outlet } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import MenuNavegacaoMobile from "../components/MenuNavegacaoMobile";
import { ListaProvider } from "../context/lista-imoveis-context";
import { Link } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <aside className="lg:hidden flex justify-between items-center py-2 px-6">
                <Link to="/home">
                    <img
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="logo"
                        className="h-8 w-auto"
                    />
                </Link>
                <MenuNavegacaoMobile />
            </aside>
            <ListaProvider>
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
            </ListaProvider>
        </>
    );
};