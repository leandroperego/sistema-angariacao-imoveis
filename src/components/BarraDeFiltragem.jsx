import { Button, ButtonGroup } from "@material-tailwind/react";

export default function BarraDeFiltragem({ btnAtual, setBtnAtual }) {
    
    function handleClick(e) {
        const btn = e.target;
        setBtnAtual(btn.value);
    }

    return (
        <section className="w-full flex items-center justify-center">
            <ButtonGroup variant="text" className="w-full flex sm:justify-center" >
                <Button
                    className={`${btnAtual === 'todos' ? 'bg-gray-100' : 'bg-transparent'} p-0 py-4 grow sm:grow-0 sm:p-4 sm:px-6`}
                    value={'todos'}
                    onClick={handleClick}
                >
                    Todos
                </Button>

                <Button
                    className={`text-blue-600 ${btnAtual === 'nao_realizado' ? 'bg-gray-100' : 'bg-transparent'} p-0 py-4 grow sm:grow-0 sm:p-4`}
                    value={'nao_realizado'}
                    onClick={handleClick}
                >
                    Não realizado
                </Button>

                <Button
                    className={`text-green-600 ${btnAtual === 'aprovado' ? 'bg-gray-100' : 'bg-transparent'} p-0 py-4 grow sm:grow-0 sm:p-4`}
                    value={'aprovado'}
                    onClick={handleClick}
                >
                    Aprovados
                </Button>

                <Button
                    className={`text-red-600 ${btnAtual === 'rejeitado' ? 'bg-gray-100' : 'bg-transparent'} p-0 py-4 grow sm:grow-0 sm:p-4`}
                    value={'rejeitado'}
                    onClick={handleClick}
                >
                    Rejeitados
                </Button>
            </ButtonGroup>
        </section>
    );
}