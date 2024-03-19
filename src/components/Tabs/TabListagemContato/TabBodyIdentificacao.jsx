import { Typography } from "@material-tailwind/react";

export default function TabBodyIdentificacao() {
    return (
        <section className="flex justify-between items-center">
            <div className="w-full h-full flex flex-col justify-around">
                <Typography variant="h5" className="mb-2 text-blue-gray-600">
                    APARTAMENTO
                </Typography>
                <Typography >
                    Bairro: <span className="font-bold">Jardim das Americas</span>
                </Typography>
                <Typography>
                    Curitiba
                </Typography>
            </div>
            <div className="w-[150px] h-[150px] hidden md:block">
                <img src="https://ottohouse.com.br/wp-content/uploads/2019/11/trocar-de-imovel-no-fim-de-ano-e-uma-boa-ideia-26897.jpg" alt="foto do imóvel" className="object-contain w-full h-full" />
            </div>
        </section>
    )
}