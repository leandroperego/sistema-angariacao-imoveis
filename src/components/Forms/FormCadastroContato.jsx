import * as formik from 'formik';
import * as yup from 'yup';

import {
    Input,
    Select,
    Option,
    Button
} from "@material-tailwind/react";

export default function FormCadastroContato() {
    const { Formik } = formik;

    const tiposImoveis = [
        'Casa',
        'Apartamento',
        'Sobrado',
        'Ponto Comercial',
    ];

    const schema = yup.object().shape({
        comercializacao: yup.string().required().oneOf(['Venda', 'Aluguel']),
        tipo: yup.string().required("Tipo de imóvel é obrigatório").oneOf(tiposImoveis),
        endereco: yup.string(),
        cidade: yup.string().required('Campo obrigatório'),
        bairro: yup.string(),
        pontoRef: yup.string(),
        // img: yup.string(),
        nome: yup.string(),
        telefone1: yup.string().required('Campo obrigatório'),
        telefone2: yup.string(),
    });

    const handleSubmit = (data, reset) => {
        console.log(data);
        // await addImovel(data);
        reset();
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
            initialValues={{
                comercializacao: 'Venda',
                tipo: '',
                cidade: '',
                endereco: '',
                bairro: '',
                pontoRef: '',
                // img: 'https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg',
                nome: '',
                telefone1: '',
                telefone2: '',
            }}
        >
            {
                ({ handleSubmit, handleChange, resetForm, values, setValues, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Dados do Imóvel */}
                        <section className="flex flex-col gap-6 mb-10">
                            <h3 className="text-blue-gray-700">Dados do Imóvel</h3>
                            <div className="flex flex-col gap-6 sm:flex-row">
                                <section className='w-full'>
                                    <Select
                                        label="Comercialização"
                                        name="comercializacao"
                                        value={values.comercializacao}
                                        onChange={(val) => { setValues({ ...values, comercializacao: val }); handleChange }}
                                    >
                                        <Option value="Venda">Venda</Option>
                                        <Option value="Aluguel">Aluguel</Option>
                                    </Select>
                                    {
                                        touched.comercializacao && errors.comercializacao &&
                                        <p className="text-red-500">{errors.comercializacao}</p>
                                    }
                                </section>

                                <section className='w-full'>
                                    <Select
                                        label="Tipo de Imóvel"
                                        name="tipo"
                                        value={values.tipo}
                                        onChange={(val) => { setValues({ ...values, tipo: val }); handleChange }}
                                        error={touched.tipo && errors.tipo}
                                    >
                                        {
                                            tiposImoveis.map((tipo, index) => (
                                                <Option value={tipo} key={index}>{tipo}</Option>
                                            ))
                                        }
                                    </Select>
                                    {
                                        touched.tipo && errors.tipo &&
                                        <p className="ml-1 mt-1 text-sm text-red-500">{errors.tipo}</p>
                                    }
                                </section>
                            </div>

                            <Input
                                label="Endereço"
                                name="endereco"
                                value={values.endereco}
                                onChange={handleChange}
                            />

                            <div className="flex flex-col gap-6 md:flex-row">

                                <section className='w-full'>
                                    <Input
                                        label="Cidade"
                                        name="cidade"
                                        value={values.cidade}
                                        onChange={handleChange}
                                        error={touched.cidade && errors.cidade}
                                    />
                                    {
                                        touched.cidade && errors.cidade &&
                                        <p className="ml-1 mt-1 text-sm text-red-500">{errors.cidade}</p>
                                    }
                                </section>

                                <Input
                                    label="Bairro"
                                    name="bairro"
                                    value={values.bairro}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Ponto de Referência"
                                    name="pontoRef"
                                    value={values.pontoRef}
                                    onChange={handleChange}
                                />

                            </div>
                        </section>


                        {/* Dados de Contato */}
                        <section className="flex flex-col gap-6 ">
                            <h3 className="text-blue-gray-700">Dados de Contato</h3>

                            <div className="flex flex-col gap-6 md:flex-row">

                                <Input
                                    label="Nome"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange}
                                />

                                <div className="flex flex-col gap-6 sm:flex-row">
                                    <section className='w-full'>
                                        <Input
                                            label="Telefone 1"
                                            name="telefone1"
                                            value={values.telefone1}
                                            onChange={handleChange}
                                            error={touched.telefone1 && errors.telefone1}
                                        />
                                        {
                                            touched.telefone1 && errors.telefone1 &&
                                            <p className="ml-1 mt-1 text-sm text-red-500">{errors.telefone1}</p>
                                        }
                                    </section>

                                    <Input
                                        label="Telefone 2"
                                        name="telefone2"
                                        value={values.telefone2}
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                        </section>
                        <Button
                            color="blue"
                            className="min-w-full sm:min-w-min mt-6"
                            type='submit'
                        >
                            Cadastrar
                        </Button>
                    </form>
                )
            }

        </Formik>
    );
}