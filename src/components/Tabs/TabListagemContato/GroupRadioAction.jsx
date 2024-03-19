import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    IconButton,
} from "@material-tailwind/react";

import { useState } from "react";

import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function GroupRadioAction() {

    const [radioChecked, setRadioChecked] = useState(null);

    const handleConfirmRadio = () => {
       alert(radioChecked);
    };

    return (
        <Card className="min-w-fit flex flex-row flex-wrap items-center justify-around grow">
            <List className="w-full flex-row flex-wrap justify-center">
                <ListItem className="max-w-fit p-0">
                    <label
                        htmlFor="aprovado"
                        className="flex w-full cursor-pointer items-center p-2"
                    >
                        <ListItemPrefix className="mr-3">
                            <Radio
                                color="green"
                                checked={radioChecked === "aprovado"}
                                name="validacao"
                                id="aprovado"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                                onClick={(e) => setRadioChecked(e.target.id)}
                            />
                        </ListItemPrefix>
                        <Typography
                            color="blue-gray"
                            className="font-medium text-green-600"
                        >
                            Aprovou
                        </Typography>
                    </label>
                </ListItem>
                <ListItem className="max-w-fit p-0">
                    <label
                        htmlFor="rejeitado"
                        className="flex w-full cursor-pointer items-center p-2"
                    >
                        <ListItemPrefix className="mr-3">
                            <Radio
                                color="red"
                                checked={radioChecked === "rejeitado"}
                                name="validacao"
                                id="rejeitado"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                                onClick={(e) => setRadioChecked(e.target.id)}
                            />
                        </ListItemPrefix>
                        <Typography
                            color="blue-gray"
                            className="font-medium text-red-600"
                        >
                            Rejeitou
                        </Typography>
                    </label>
                    
                </ListItem>
            </List>

            <div className={radioChecked ? "flex flex-row pb-3" : "hidden"}>
                <IconButton variant="outlined" color="red" size="sm" className="mr-4">
                    <XMarkIcon className="h-6 w-6 text-red-900" onClick={() => setRadioChecked(null)}/>
                </IconButton>
                <IconButton variant="outlined" color="green" size="sm" className="mr-4" onClick={handleConfirmRadio}>
                    <CheckIcon className="h-6 w-6 text-green-900" />
                </IconButton>
            </div>
        </Card>
    );
}