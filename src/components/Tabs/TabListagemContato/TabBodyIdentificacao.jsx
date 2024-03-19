import { Typography } from "@material-tailwind/react";

import { useContext } from "react";
import { ContatoContext } from '../../Cards/CardListagem';

export default function TabBodyIdentificacao() {

    const contato = useContext(ContatoContext);

    return (
        <section className="flex justify-between items-center">
            <div className="w-full h-full flex flex-col justify-around">
                <Typography variant="h4" className="mb-2 text-black">
                    {contato.tipo.toUpperCase()}
                </Typography>
                <Typography >
                    Bairro: <span className="font-bold">{contato.bairro}</span>
                </Typography>
                <Typography>
                    {contato.cidade}
                </Typography>
            </div>
            <div className="w-[150px] h-[150px] hidden md:block">
                <img src={contato.img} alt="foto do imóvel" className="object-contain w-full h-full" />
            </div>
        </section>
    )
}