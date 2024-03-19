import HeaderPages from '../components/HeaderPages';
import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';

export default function ListagemContatos() {

    return (
        <>
            <HeaderPages title="Listagem contatos" />
            <MainPages>
                <ListBody>
                    <ListItem>
                        <CardListagem />
                    </ListItem>
                    <ListItem>
                        <CardListagem />
                    </ListItem>
                    <ListItem>
                        <CardListagem />
                    </ListItem>
                </ListBody>
            </MainPages>
        </>
    );
}