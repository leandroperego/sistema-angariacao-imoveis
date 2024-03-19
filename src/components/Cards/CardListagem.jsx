import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import TabListagemContato from "../Tabs/TabListagemContato/TabListagemContato";
import GroupRadioAction from "../Tabs/TabListagemContato/GroupRadioAction";

export default function CardListagem() {
    return (
        <Card className="mt-6 w-full max-w-[600px] sm:max-w-full sm:mx-auto">
            <CardHeader floated={false} className="relative w-full h-auto max-w-fit max-h-[400px] shadow-none md:hidden">
                <Typography variant="h5" color="blue-gray" className="bg-transparent mb-4 text-center">
                    VENDA
                </Typography>
                <img
                    className="rounded-t-2xl"
                    src="https://ottohouse.com.br/wp-content/uploads/2019/11/trocar-de-imovel-no-fim-de-ano-e-uma-boa-ideia-26897.jpg"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <TabListagemContato />
            </CardBody>
            <CardFooter className="pt-0 flex justify-center overflow-auto">
                <GroupRadioAction />
            </CardFooter>
        </Card>
    );
}