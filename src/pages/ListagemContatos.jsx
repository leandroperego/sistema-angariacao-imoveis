import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';
import { ImovelProvider } from '../context/imovel-context';
import { useContext, useState, useEffect } from 'react';
import { ListaImoveisContext } from '../context/lista-imoveis-context';
import BarraDeFiltragem from '../components/BarraDeFiltragem';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ListagemContatos() {

    const { listaImoveis } = useContext(ListaImoveisContext);

    const [listagemFiltrada, setListagemFiltrada] = useState();
    const [filtroAtual, setFiltroAtual] = useState('');
    const [btnAtual, setBtnAtual] = useState('nao_realizado');

    useEffect(() => {

        if (btnAtual === 'nao_realizado') {
            handleFilter('');
        } else {
            handleFilter(btnAtual);
        }
    }, [btnAtual]);

    useEffect(() => {
        setListagemFiltrada(listaImoveis?.filter(imovel => imovel.status === filtroAtual) || []);
    }, [listaImoveis]);

    function getListStatusFiltered(list, statusFilter) {
        let novaLista = list.filter(obj => obj.status === statusFilter);
        return novaLista
    }

    function handleFilter(statusFilter) {
        setFiltroAtual(statusFilter);
        if (statusFilter === 'todos') {
            setListagemFiltrada(listaImoveis);
        } else if (statusFilter === '') {
            const novaListagem = getListStatusFiltered(listaImoveis, statusFilter);
            setListagemFiltrada(novaListagem);
        } else {
            const novaListagem = getListStatusFiltered(listaImoveis, statusFilter);
            setListagemFiltrada(novaListagem);
        }
    }

    const handleCancelFilter = () => {
        setFiltroAtual('');
        handleFilter('');
        setBtnAtual('nao_realizado');
    }


    return (
        <>
            <header className='bg-white shadow flex flex-col items-center pt-4 '>
                <h2 className='text-3xl font-bold'>Listagem de imóveis</h2>
                <div className='w-full p-4 pb-0 mt-2 flex flex-col items-center 2xl:max-w-5xl'>
                    <span className='w-full text-center font-medium'>Filtro: </span>
                    <BarraDeFiltragem handleFilter={handleFilter} btnAtual={btnAtual} setBtnAtual={setBtnAtual} />
                </div>
            </header>
            <MainPages>
                {
                    filtroAtual ?
                        <h4 className='pl-4 md:pl-8' onClick={handleCancelFilter}>
                            <XMarkIcon className="h-3 w-3 stroke-2" />
                            Filtragem: {filtroAtual + (filtroAtual === 'todos' ? '' : 's')}
                        </h4>
                        :
                        <p>Os imóveis listados abaixo ainda não foram contactados:</p>
                }

                <ListBody>
                    {

                        listagemFiltrada?.length === 0 ?
                            <div className='w-full h-full flex flex-col justify-center items-center gap-5 pt-24'>
                                <img src="https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png" alt="Nenhum imovel encontrado" className='w-2/5 lg:w-1/5' />
                                <p>Nenhum imóvel aqui.</p>
                            </div>
                            :
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