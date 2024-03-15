import React from "react";

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
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="logo"
                    className="h-8 w-8"
                />
                <Typography variant="h5" className="text-blue-gray lg:text-white">
                    CapSystem
                </Typography>
                <IconButton variant="text" size="sm" className="lg:hidden" onClick={actionXMarkIcon}>
                    <XMarkIcon className="h-6 w-6 stroke-2" />
                </IconButton>
            </div>
            <List className="lg:*:text-white">
                {/* <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion> */}
                {/* <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Products
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion> */}
                {/* <hr className="my-2 border-blue-gray-50" /> */}
                <ListItem>
                    <ListItemPrefix>
                        <PlusCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Cadastrar
                </ListItem>
                {/* <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem> */}
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
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Sair
                </ListItem>
            </List>
            {/* <Alert
                open={openAlert}
                className="mt-auto"
                onClose={() => setOpenAlert(false)}
            >
                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                <Typography variant="h6" className="mb-1">
                    Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                    Upgrade to Material Tailwind PRO and get even more components,
                    plugins, advanced features and premium.
                </Typography>
                <div className="mt-4 flex gap-3">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium opacity-80"
                        onClick={() => setOpenAlert(false)}
                    >
                        Dismiss
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium"
                    >
                        Upgrade Now
                    </Typography>
                </div>
            </Alert> */}
        </Card>
    );
}