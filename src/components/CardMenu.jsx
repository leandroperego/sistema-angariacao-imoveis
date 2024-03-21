import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Card,
    IconButton
} from "@material-tailwind/react";

import {
    PlusCircleIcon,
    PhoneArrowUpRightIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

import {
    XMarkIcon,
} from "@heroicons/react/24/outline";

import { efetuarLogout } from "../infra/auth/user";
import { UserContext, usuarioInicial } from "../context/user-context";
import { ListaImoveisContext } from "../context/lista-imoveis-context";

export default function CardMenu({ closeCard }) {

    const {listaImoveis} = useContext(ListaImoveisContext);
    let tamanhoLista = listaImoveis?.filter(imovel => imovel.status === '').length || 0;

    const navigate = useNavigate();
    const {user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        efetuarLogout();
        setUser(usuarioInicial);
        navigate("/");
    }

    return (
        <Card
            color="transparent"
            shadow={false}
            className="h-[calc(100vh-2rem)] w-full p-4"
        >
            <div className="mb-2 flex items-center justify-between lg:justify-normal lg:gap-4 p-4">
                <Link to={"home"} onClick={closeCard}>
                    <img
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="logo"
                        className="h-8 w-8"
                    />
                </Link>
                <Typography variant="h5" className="text-blue-gray lg:text-white">
                    CapSystem
                </Typography>
                <IconButton variant="text" size="sm" className="lg:hidden" onClick={closeCard}>
                    <XMarkIcon className="h-6 w-6 stroke-2" />
                </IconButton>
            </div>
            <List className="lg:*:text-white">
                <Link to={"cadastrar-contato"} onClick={closeCard}>
                    <ListItem>
                        <ListItemPrefix>
                            <PlusCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Cadastrar imóvel
                    </ListItem>
                </Link>

                <Link to={"listar-contatos"} onClick={closeCard}>
                    <ListItem>
                        <ListItemPrefix>
                            <PhoneArrowUpRightIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Contatos a fazer
                        <ListItemSuffix>
                            <Chip
                                value={tamanhoLista}
                                size="sm"
                                variant="ghost"
                                className="rounded-full text-blue-gray lg:*:text-blue-gray-50 lg:bg-blue-gray-300"
                            />
                        </ListItemSuffix>
                    </ListItem>
                </Link>

                <ListItem onClick={handleLogout}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Sair
                </ListItem>
            </List>
        </Card>
    );
}