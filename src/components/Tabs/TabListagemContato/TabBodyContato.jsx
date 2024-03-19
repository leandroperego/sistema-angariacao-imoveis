import { Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";

import { useContext } from "react";
import { ContatoContext } from '../../Cards/CardListagem';

export default function TabBodyContato() {

    const contato = useContext(ContatoContext);

    const [isModified, setIsModified] = useState(false);
    const [contatoNome, setContatoNome] = useState(contato.nome);

    const handleChange = (e) => {
        setIsModified(true);
        setContatoNome(e.target.value);
    }

    const handleAtualizar = () => {
        // Aqui fazer a atualizacao do nome do proprietario no contato de id contato
        /*
            async atualizarNomeContato(id, contatoNome)
        */
        alert("Novo nome: " + contatoNome);
        setIsModified(!isModified);
    }

    const handleCancelar = () => {
        setContatoNome(contato.nome);
        setIsModified(!isModified);
    }

    const handleBlur = (e) => {
        // if (isModified) {
        //     let confirmacao = confirm("Você modificou o nome e não clicou em atualizar. Tem certeza que quer cancelar?");
        //     if (confirmacao){
        //         setIsModified(!isModified);
        //         setContatoNome(contato.nome);
        //     }else{
        //         setContatoNome(e.target.value);
        //     }
        // }
    }

    return (
        <section className="flex flex-col gap-6">
            <div>
                <Typography>
                    Responsável:
                </Typography>
                <div className="relative w-full flex flex-wrap md:block gap-2">
                    <Input
                        type="text"
                        className={`pr-20 !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10`}
                        labelProps={{
                            className: 'hidden',
                        }}
                        value={contatoNome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <div className="sm:absolute right-1 top-1 rounded flex gap-2">
                        <Button
                            size="sm"
                            color="red"
                            className="rounded"
                            onClick={handleCancelar}
                            hidden={!isModified}
                        >
                            Cancelar
                        </Button>
                        <Button
                            size="sm"
                            color="green"
                            className="rounded"
                            onClick={handleAtualizar}
                            hidden={!isModified}
                        >
                            Atualizar
                        </Button>
                    </div>

                </div>
            </div>
            <Typography>
                Telefone 1: {contato.telefone1}
            </Typography>
            <Typography>
                Telefone 2: {contato.telefone2}
            </Typography>
        </section>
    )
}