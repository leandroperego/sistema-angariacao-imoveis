import HeaderPages from '../components/HeaderPages';
import ListBody from '../components/List/ListBody';
import ListItem from '../components/List/ListItem';
import MainPages from '../components/MainPages';
import CardListagem from '../components/Cards/CardListagem';
// import { createContext } from 'react';

// export const ContextDataContatos = createContext();

export default function ListagemContatos() {

    // buscar os dados da lista de contatos e contexto para cardListagem e filhos cardListagem

    const listaImoveisCadastrados = [

        {
            comercializacao: 'Venda',
            tipo: 'Casa',
            cidade: 'Curitiba',
            endereco: 'Rua Comendador Correia Júnior, 105',
            bairro: 'Jardim das Américas',
            pontoRef: '',
            img: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg?1693512986',
            nome: 'Leandro',
            telefone1: '(41) 99999-9999',
            telefone2: '',
            anotacoes: '',
        },
        {
            comercializacao: 'Aluguel',
            tipo: 'Apartamento',
            cidade: 'Curitiba',
            endereco: 'Rua Da Paz, 220',
            bairro: 'Batel',
            pontoRef: 'Shopping Batel',
            img: 'https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg',
            nome: '',
            telefone1: '(41) 99999-9999',
            telefone2: '(41) 99999-1212',
            anotacoes: 'Imóvel em perfeita condição',
        }
    ]

    return (
        <>
            <HeaderPages title="Listagem contatos" />
            <MainPages>
                    <ListBody>
                        {
                            listaImoveisCadastrados.map((imovel, index) => (
                                <ListItem key={index}>
                                    <CardListagem imovel={imovel} />
                                </ListItem>
                            ))
                        }
                    </ListBody>
            </MainPages>
        </>
    );
}