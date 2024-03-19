import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export default function TabListagemContatos() {
    const data = [
        {
            label: "Identificação",
            value: "id",
            desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Dados Proprietário",
            value: "dadosProprietario",
            desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Anotações",
            value: "anotacoes",
            desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (
        <Tabs value="id" className="w-full p-2 border-2 border-gray-300 rounded-lg" orientation="vertical">
            <TabsHeader
                className="bg-gray-300 p-3 pb-0 rounded-b-none flex-col"
                indicatorProps={{
                    className: "bg-white shadow-none rounded-b-none !text-gray-900",
                }}
            >
                <header className="pr-3 mb-4">
                    <h3 className="text-2xl font-bold text-center">VENDA</h3>
                </header>
                <div className="flex gap-6">
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} className="w-auto px-4 py-2">
                        {label}
                    </Tab>
                ))}
                </div>
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