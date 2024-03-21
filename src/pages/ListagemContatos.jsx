import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';
import { ImovelProvider } from '../context/imovel-context';
import { useContext, useState } from 'react';
import { ListaImoveisContext } from '../context/lista-imoveis-context';
import BarraDeFiltragem from '../components/BarraDeFiltragem';

export default function ListagemContatos() {

    const { listaImoveis } = useContext(ListaImoveisContext);

    const [listagemFiltrada, setListagemFiltrada] = useState(listaImoveis?.filter(imovel => imovel.status === '') || []);

    function getListStatusFiltered(list, statusFilter){
        let novaLista = list.filter(obj => obj.status === statusFilter);
        return novaLista
    }

    function handleFilter(statusFilter){
        if (statusFilter === undefined){
            setListagemFiltrada(listaImoveis);
        }else if(statusFilter === ''){
            const novaListagem = getListStatusFiltered(listaImoveis, statusFilter);
            setListagemFiltrada(novaListagem);
        }else{
            const novaListagem = getListStatusFiltered(listaImoveis, statusFilter);
            setListagemFiltrada(novaListagem);
        }
    }


    return (
        <>
            <header className='bg-white shadow flex flex-col items-center pt-4'>
                <h2 className='text-3xl font-bold'>Listagem de imóveis</h2>
                <div className='w-full p-4 pb-0 mt-2 flex flex-col items-center justify-between gap-2'>
                    <span className='font-medium'>Filtro: </span>
                    <BarraDeFiltragem handleFilter={handleFilter} />
                </div>
            </header>
            <MainPages>
                <ListBody>
                    {
                        listagemFiltrada?.map((imovel, index) => (
                            <ListItem key={index}>
                                <ImovelProvider imovel={imovel}>
                                    {
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