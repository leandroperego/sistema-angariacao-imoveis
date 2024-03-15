import React from "react";
import { Link } from "react-router-dom";

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

export default function CardMenu( { actionXMarkIcon } ) {

    return (
        <Card
            color="transparent"
            shadow={false}
            className="h-[calc(100vh-2rem)] w-full p-4"
        >
            <div className="mb-2 flex items-center justify-between lg:justify-normal lg:gap-4 p-4">
                <Link to={"home"}>
                    <img
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="logo"
                        className="h-8 w-8"
                    />
                </Link>
                <Typography variant="h5" className="text-blue-gray lg:text-white">
                    CapSystem
                </Typography>
                <IconButton variant="text" size="sm" className="lg:hidden" onClick={actionXMarkIcon}>
                    <XMarkIcon className="h-6 w-6 stroke-2" />
                </IconButton>
            </div>
            <List className="lg:*:text-white">
                <Link to={"cadastrar-contato"}>
                    <ListItem>
                        <ListItemPrefix>
                            <PlusCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Cadastrar
                    </ListItem>
                </Link>

                <Link to={"listar-contatos"}>
                <ListItem>
                    <ListItemPrefix>
                        <PhoneArrowUpRightIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Contatos a fazer
                    <ListItemSuffix>
                        <Chip
                            value="14"
                            size="sm"
                            variant="ghost"
                            className="rounded-full text-blue-gray lg:*:text-blue-gray-50 lg:bg-blue-gray-300"
                        />
                    </ListItemSuffix>
                </ListItem>
                </Link>

                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Sair
                </ListItem>
            </List>
        </Card>
    );
}