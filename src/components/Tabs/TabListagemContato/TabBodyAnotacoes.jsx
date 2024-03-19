import { Textarea, Button, IconButton } from "@material-tailwind/react";

import { useState } from "react";
import { useContext } from "react";
import { ContatoContext } from '../../Cards/CardListagem';

export default function TabBodyAnotacoes() {

  const contato = useContext(ContatoContext);

  const [isModified, setIsModified] = useState(false);
  const [contatoAnotacoes, setContatoAnotacoes] = useState(contato.anotacoes);

  const handleChange = (e) => {
    setIsModified(true);
    setContatoAnotacoes(e.target.value);
  }

  const handleCancel = () => {
    setContatoAnotacoes(contato.anotacoes);
    setIsModified(!isModified);
  }

  const handleAtualizacao = () => {

    // Aqui fazer a atualizacao das anotacoes no contato de id contato
    /*
        async atualizarAnotacoes(id, contatoAnotacoes)
    */

    alert("Anotações: " + contatoAnotacoes);
  }

  return (
    <div className="relative">
      <Textarea
        className="text-xl"
        variant="static"
        placeholder="Faça aqui suas anotações"
        rows={8}
        value={contatoAnotacoes}
        onChange={handleChange}
      />
      <div className="flex w-full justify-end py-1.5">
        <div className="flex gap-2">
          <Button size="sm" color="red" variant="text" className="rounded-md" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button size="sm" color="green" className="rounded-md" onClick={handleAtualizacao} disabled={!isModified}>
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
}