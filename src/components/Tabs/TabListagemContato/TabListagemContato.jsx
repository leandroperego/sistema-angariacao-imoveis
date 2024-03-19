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
   
  export default function TabListagemContato() {
    const data = [
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
          className="bg-gray-300 p-3 pb-0 rounded-b-none flex justify-evenly md:justify-start md:gap-5"
          indicatorProps={{
            className: "bg-white shadow-none rounded-b-none !text-gray-900",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="md:w-auto">
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }