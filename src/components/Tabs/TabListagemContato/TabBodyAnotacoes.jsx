import { Textarea, Button, IconButton } from "@material-tailwind/react";
 
export default function TabBodyAnotacoes() {
  return (
    <div className="relative">
      <Textarea variant="static" placeholder="Faça aqui suas anotações" rows={8} />
      <div className="flex w-full justify-end py-1.5">
        <div className="flex gap-2">
          <Button size="sm" color="red" variant="text" className="rounded-md">
            Cancelar
          </Button>
          <Button size="sm" className="rounded-md">
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
}