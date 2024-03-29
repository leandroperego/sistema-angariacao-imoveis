import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import TabListagemContato from "../Tabs/TabListagemContato/TabListagemContato";
import GroupRadioAction from "../Tabs/TabListagemContato/GroupRadioAction";
import { useContext } from "react";
import { ImovelContext } from "../../context/imovel-context";

export default function CardListagem() {

    const imovel = useContext(ImovelContext);

    return (
        <>
            <Card key={imovel.id} className="mt-6 w-full max-w-[600px] sm:max-w-full 2xl:max-w-[1000px]">
                <CardHeader floated={false} className="flex flex-col items-center h-auto max-h-[400px] shadow-none sm:flex-row sm:justify-around md:hidden">
                    <Typography variant="h3" color={imovel.comercializacao === "Venda" ? "red" : "green"} className="w-fit bg-transparent mb-4 text-center">
                        {imovel.comercializacao.toUpperCase()}
                    </Typography>
                    <img
                        className="rounded-2xl max-w-[180px] max-h-[180px]"
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

        </>
    );
}