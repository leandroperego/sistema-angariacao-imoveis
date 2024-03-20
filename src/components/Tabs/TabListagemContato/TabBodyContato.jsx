import { Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useContext } from "react";
import { ImovelContext } from "../../../context/imovel-context";

export default function TabBodyContato() {

    const imovel = useContext(ImovelContext);

    const [isModified, setIsModified] = useState(false);
    const [contatoNome, setContatoNome] = useState(imovel.nome);

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
        setContatoNome(imovel.nome);
        setIsModified(!isModified);
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
                Telefone 1: {imovel.telefone1}
            </Typography>
            <Typography>
                Telefone 2: {imovel.telefone2}
            </Typography>
        </section>
    )
}