import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import TabListagemContato from "../Tabs/TabListagemContato/TabListagemContato";
import GroupRadioAction from "../Tabs/TabListagemContato/GroupRadioAction";

import { createContext } from "react";


export const ContatoContext = createContext();

export default function CardListagem({ imovel }) {

    return (

        <>
            <ContatoContext.Provider value={imovel}>
                <Card className="mt-6 w-full max-w-[600px] sm:max-w-full sm:mx-auto 2xl:max-w-[1000px]">
                    <CardHeader floated={false} className="relative w-full h-auto max-w-fit max-h-[400px] shadow-none md:hidden">
                        <Typography variant="h3" color="green" className="bg-transparent mb-4 text-center">
                            {imovel.comercializacao.toUpperCase()}
                        </Typography>
                        <img
                            className="rounded-t-2xl"
                            src={imovel.img}
                            alt="Imagem imóvel"
                        />
                    </CardHeader>
                    <CardBody>
                        <TabListagemContato />
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-center overflow-auto">
                        <GroupRadioAction />
                    </CardFooter>
                </Card>
            </ContatoContext.Provider>
        </>
    );
}