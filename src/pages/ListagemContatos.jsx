import HeaderPages from '../components/HeaderPages';
import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';
import { ImovelProvider } from '../context/imovel-context';
import { ListaProvider } from '../context/lista-imoveis-context';
import { useEffect, useState } from 'react';
import { getImoveis } from '../infra/db/imoveis';

export default function ListagemContatos() {

    const [listaImoveisCadastrados, setListaImoveisCadastrados] = useState([]);
    const [updateLista, setUpdateLista] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const imoveis = await getImoveis();
            setListaImoveisCadastrados(imoveis);
        }

        fetchData();
    }, [updateLista]);

    return (
        <>
            <HeaderPages title="Listagem contatos" />
            <MainPages>
                <ListBody>
                    <ListaProvider listagem={listaImoveisCadastrados} updateLista={updateLista} setUpdateLista={setUpdateLista}>
                    {
                        listaImoveisCadastrados.map((imovel, index) => (
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
                    </ListaProvider>
                </ListBody>
            </MainPages>
        </>
    );
}