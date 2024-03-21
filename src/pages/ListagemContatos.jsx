import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';
import { ImovelProvider } from '../context/imovel-context';
import { useContext, useState } from 'react';
import { ListaImoveisContext } from '../context/lista-imoveis-context';
import BarraDeFiltragem from '../components/BarraDeFiltragem';

export default function ListagemContatos() {

    const { listagem } = useContext(ListaImoveisContext);
    console.log(listagem);

    const [listagemFiltrada, setListagemFiltrada] = useState(listagem);

    function getListStatusFiltered(list, statusFilter){
        let novaLista = list.filter(obj => obj.status === statusFilter);
        console.log(novaLista);
        return novaLista
    }

    function handleFilter(statusFilter){
        if (!statusFilter){
            setListagemFiltrada(listagem);
        }

        const novaListagem = getListStatusFiltered(listagem, statusFilter);
        setListagemFiltrada(novaListagem);
    }


    return (
        <>
            <header className='bg-white shadow flex flex-col items-center pt-4'>
                <h2 className='text-3xl font-bold'>Listagem de imóveis</h2>
                <div className='w-full p-4 pb-0 mt-2 bg-blue-gray-100 flex flex-col items-center justify-between gap-2'>
                    <span className='font-medium'>Filtro: </span>
                    <BarraDeFiltragem listagem={listagem} handleFilter={handleFilter} />
                </div>
            </header>
            <MainPages>
                <ListBody>
                    {
                        listagemFiltrada?.map((imovel, index) => (
                            <ListItem key={index}>
                                <ImovelProvider imovel={imovel}>
                                    {
                                        imovel.status === '' &&
                                        <CardListagem />
                                    }
                                </ImovelProvider>
                            </ListItem>
                        ))
                    }
                </ListBody>
            </MainPages>
        </>
    );
}