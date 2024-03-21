import HeaderPages from '../components/HeaderPages';
import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';
import { ImovelProvider } from '../context/imovel-context';
import { useContext } from 'react';
import { ListaImoveisContext } from '../context/lista-imoveis-context';

export default function ListagemContatos() {

    const { listagem } = useContext(ListaImoveisContext);

    return (
        <>
            <HeaderPages title="Listagem contatos" />
            <MainPages>
                <ListBody>
                    {
                        listagem?.map((imovel, index) => (
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