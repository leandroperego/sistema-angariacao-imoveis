import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TabBodyIdentificacao from "../TabListagemContato/TabBodyIdentificacao";
import TabBodyContato from "./TabBodyContato";
import TabBodyAnotacoes from "./TabBodyAnotacoes";

import { useContext } from "react";
import { ContatoContext } from '../../Cards/CardListagem';

export default function TabListagemContato() {

  const contato = useContext(ContatoContext);
  
  const tabs = [
    {
      label: "Identificação",
      value: "id",
      desc: <TabBodyIdentificacao />,
    },
    {
      label: "Contato",
      value: "contato",
      desc: <TabBodyContato />,
    },
    {
      label: "Anotações",
      value: "anotacoes",
      desc: <TabBodyAnotacoes />,
    },
  ];

  return (
    <Tabs value="id">
      <TabsHeader
        className="bg-gray-300 p-3 pb-0 rounded-b-none flex-col"
        indicatorProps={{
          className: "bg-white shadow-none rounded-b-none !text-gray-900",
        }}
      >
        <header className="pr-3 mb-2 hidden md:block">
          <h3 className="text-2xl font-bold text-right">{contato.comercializacao}</h3>
        </header>
        <div className="w-full flex justify-evenly md:justify-start md:gap-5 ">
        {tabs.map(({ label, value }) => (
          <Tab key={value} value={value} className="md:w-auto">
            {label}
          </Tab>
        ))}
        </div>
      </TabsHeader>

      <TabsBody>
        {tabs.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}