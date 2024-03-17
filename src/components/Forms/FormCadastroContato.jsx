import * as formik from 'formik';
import * as yup from 'yup';

import {
    Input,
    Select,
    Option,
    Button
} from "@material-tailwind/react";
import CardInput from './formsComponents/CardInput';
import RowForm from './formsComponents/RowForm';
import ContainerForm from './formsComponents/ContainerForm';

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
                        <ContainerForm title='Dados do Imóvel'>
                            <RowForm>
                                <CardInput
                                    isInvalided={touched.comercializacao && errors.comercializacao}
                                    error={errors.comercialacao}
                                >
                                    <Select
                                        label="Comercialização"
                                        name="comercializacao"
                                        value={values.comercializacao}
                                        onChange={(val) => { setValues({ ...values, comercializacao: val }); handleChange }}
                                    >
                                        <Option value="Venda">Venda</Option>
                                        <Option value="Aluguel">Aluguel</Option>
                                    </Select>
                                </CardInput>

                                <CardInput
                                    isInvalided={touched.tipo && errors.tipo}
                                    error={errors.tipo}
                                >
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
                                </CardInput>
                            </RowForm>

                            <RowForm>
                                <CardInput>
                                    <Input
                                        label="Endereço"
                                        name="endereco"
                                        value={values.endereco}
                                        onChange={handleChange}
                                    />
                                </CardInput>
                            </RowForm>

                            <RowForm>
                                <CardInput
                                    isInvalided={touched.cidade && errors.cidade}
                                    error={errors.cidade}
                                >
                                    <Input
                                        label="Cidade"
                                        name="cidade"
                                        value={values.cidade}
                                        onChange={handleChange}
                                        error={touched.cidade && errors.cidade}
                                    />
                                </CardInput>

                                <CardInput>
                                    <Input
                                        label="Bairro"
                                        name="bairro"
                                        value={values.bairro}
                                        onChange={handleChange}
                                    />
                                </CardInput>

                                <CardInput>
                                    <Input
                                        label="Ponto de Referência"
                                        name="pontoRef"
                                        value={values.pontoRef}
                                        onChange={handleChange}
                                    />
                                </CardInput>
                            </RowForm>
                        </ContainerForm>

                        {/* Dados de Contato */}
                        <ContainerForm title='Dados de Contato'>
                            <RowForm>

                                <CardInput>
                                    <Input
                                        label="Nome"
                                        name="nome"
                                        value={values.nome}
                                        onChange={handleChange}
                                    />
                                </CardInput>

                                <CardInput
                                    isInvalided={touched.telefone1 && errors.telefone1}
                                    error={errors.telefone1}
                                >
                                    <Input
                                        label="Telefone 1"
                                        name="telefone1"
                                        value={values.telefone1}
                                        onChange={handleChange}
                                        error={touched.telefone1 && errors.telefone1}
                                    />
                                </CardInput>

                                <CardInput>
                                    <Input
                                        label="Telefone 2"
                                        name="telefone2"
                                        value={values.telefone2}
                                        onChange={handleChange}
                                    />
                                </CardInput>

                            </RowForm>
                        </ContainerForm>
                        <Button
                            color="blue"
                            className="min-w-min w-full sm:w-2/5 md:w-1/5 lg:w-auto"
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