import FormCadastroContato from "../components/Forms/FormCadastroContato";
import HeaderPages from '../components/HeaderPages';


export default function CadastrarContato() {
    return (
        <>
            <HeaderPages title="Cadastrar novo contato"/>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 2xl:mx-28">
                <FormCadastroContato />
            </div>
        </>
    );
}