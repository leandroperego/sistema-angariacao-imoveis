import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';
import { ImovelProvider } from '../context/imovel-context';
import { useContext, useReducer } from 'react';
import { ListaImoveisContext } from '../context/lista-imoveis-context';
import BarraDeFiltragem from '../components/BarraDeFiltragem';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ListagemContatos() {

    const { listaImoveis } = useContext(ListaImoveisContext);

    const [listagemFiltrada, updateListagemFiltrada] = useReducer(listagemReducer, listagemInicial(listaImoveis));

    function listagemReducer(listagemFiltrada, action) {
        switch (action.type) {
            case 'filtrar':
                return {
                    btnAtual: action.btnAtual,
                    listaFiltrada: getListFiltered(action.listaImoveis, action.btnAtual)
                }
            case 'remover_filtragem':
                return listagemInicial(listaImoveis);

            case 'limpar':
                return {};
            
        }
    }

    function handleChangeFiltro(btnClicado){
        updateListagemFiltrada({
            type: 'filtrar',
            btnAtual: btnClicado,
            listaImoveis: listaImoveis
        })
    }

    return (
        <>
            <header className='bg-white shadow flex flex-col items-center pt-4 '>
                <h2 className='text-3xl font-bold'>Listagem de imóveis</h2>
                <div className='w-full p-4 pb-0 mt-2 flex flex-col items-center 2xl:max-w-5xl'>
                    <span className='w-full text-center font-medium'>Filtro: </span>
                    <BarraDeFiltragem handleChangeFiltro={handleChangeFiltro} btnAtual={listagemFiltrada.btnAtual}/>
                </div>
            </header>
            <MainPages>
                {
                    listagemFiltrada.btnAtual !== 'nao_realizado' ?
                        <h4 className='pl-4 md:pl-8 cursor-pointer' onClick={() => updateListagemFiltrada({type: 'remover_filtragem'})}>
                            <XMarkIcon className="h-3 w-3 stroke-2" />
                            Filtragem: {listagemFiltrada.btnAtual + (listagemFiltrada.btnAtual === 'todos' ? '' : 's')}
                        </h4>
                        :
                        <p>Os imóveis listados abaixo ainda não foram contactados:</p>
                }

                <ListBody>
                    {
                        seListaEstaVazia(listagemFiltrada.listaFiltrada) ?
                            mostreAvisoDeListaVazia()
                            :
                            listagemFiltrada.listaFiltrada?.map((imovel, index) => (
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

function listagemInicial(lista) {
    return {
        type: 'filtrar',
        btnAtual: 'nao_realizado',
        listaImoveis: lista,
        listaFiltrada: getListFiltered(lista, 'nao_realizado'),
    }
}

function getListFiltered(list, filter) {
    if (filter === 'todos') {
        return list;
    }

    const filterTransform = filter === 'nao_realizado' ? '' : filter;
    return list?.filter(obj => obj.status === filterTransform);
}

function seListaEstaVazia(lista) {
    return lista?.length === 0;
}

function mostreAvisoDeListaVazia() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-5 pt-24'>
            <img src="https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png" alt="Nenhum imovel encontrado" className='w-2/5 lg:w-1/5' />
            <p>Nenhum imóvel aqui.</p>
        </div>
    );
}