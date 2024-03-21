import { Button, ButtonGroup } from "@material-tailwind/react";
import { useState } from "react";

export default function BarraDeFiltragem( { handleFilter } ) {

    const [btnAtual, setBtnAtual] = useState('nao_realizado');

    function handleClick(e){
        const btn = e.target;
        setBtnAtual(btn.value);
        
        if (btn.value === 'todos'){
            handleFilter();
        } else if(btn.value === 'nao_realizado'){
            handleFilter('');
        } else{
            handleFilter(e.target.value);
        }

    }

    return (
        <section>
            <ButtonGroup variant="text" >
                <Button className={`${btnAtual === 'todos' ? 'bg-gray-100' : 'bg-transparent'}`} value={'todos'} onClick={handleClick}>Todos</Button>
                <Button className={`text-blue-600 ${btnAtual === 'nao_realizado' ? 'bg-gray-100' : 'bg-transparent'}`} value={'nao_realizado'} onClick={handleClick}>Não realizado</Button>
                <Button className={`text-green-600 ${btnAtual === 'aprovado' ? 'bg-gray-100' : 'bg-transparent'}`} value={'aprovado'} onClick={handleClick}>Aprovados</Button>
                <Button className={`text-red-600 ${btnAtual === 'rejeitado' ? 'bg-gray-100' : 'bg-transparent'}`} value={'rejeitado'} onClick={handleClick}>Rejeitados</Button>
            </ButtonGroup>
        </section>
    );
}