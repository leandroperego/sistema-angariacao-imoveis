import { Button, ButtonGroup } from "@material-tailwind/react";

export default function BarraDeFiltragem( { handleFilter } ) {
    return (
        <section>
            <ButtonGroup variant="text" >
                <Button onClick={() => handleFilter()}>Todos</Button>
                <Button className="text-blue-600" onClick={() => handleFilter('')}>Não realizado</Button>
                <Button className="text-green-600" onClick={() => handleFilter("aprovado")}>Aprovados</Button>
                <Button className="text-red-600" onClick={() => handleFilter("rejeitado")}>Rejeitados</Button>
            </ButtonGroup>
        </section>
    );
}