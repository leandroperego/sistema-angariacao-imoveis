import HeaderPages from '../components/HeaderPages';
import { Typography } from '@material-tailwind/react';

export default function Home() {
    return (
        <>
            <HeaderPages title="Bem vindo" />
            <div className="h-full mx-auto max-w-7xl pt-14 px-4 py-6 sm:px-6 lg:px-8 2xl:mx-28 flex flex-col grow items-center">
                <div className='w-full pl-20'>
                    <Typography variant="h3">Sistema de gerenciamento de imóveis</Typography>
                    <Typography variant="leed">Gerencie seus levantamentos de imóveis e mantenha tudo organizado!</Typography>
                    <Typography variant="leed">Cadastre novos imóveis, siga a lista de contatos e fale com todos.</Typography>
                </div>
                <img src="src/assets/images/cadastro-img.png" alt="Logo sistema" className='w-1/2' />
            </div>
        </>
    );
}