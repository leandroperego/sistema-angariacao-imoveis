import { Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function TabBodyContato() {

    const [isModified, setIsModified] = useState(false);

    const handleChange = () => {
        setIsModified(true);
    }

    return (
        <section className="flex flex-col gap-6">
            <div>
                <Typography>
                    Responsável:
                </Typography>
                <div className="relative flex w-full">
                    <Input
                        type="text"
                        className="pr-20 !border !border-gray-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        containerProps={{
                            className: "min-w-0",
                        }}
                        labelProps={{
                            className: "hidden",
                        }}
                        onChange={handleChange}
                    />
                    <Button
                        size="sm"
                        color="blue-gray"
                        disabled={!isModified}
                        className="!absolute right-1 top-1 rounded"
                    >
                        Atualizar
                    </Button>
                </div>
            </div>
            <Typography>
                Telefone 1: (41) 99999-9999
            </Typography>
            <Typography>
                Telefone 2: (41) 99999-9999
            </Typography>
        </section>
    )
}