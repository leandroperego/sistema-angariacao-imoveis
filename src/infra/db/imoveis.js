import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase.config';

const fornecedorCollection = collection(db, 'imoveis');

export const addImovel = async (imovel) => {

    let imovelId = null;

    await addDoc(fornecedorCollection, imovel)
        .then((docRef) => {
            imovelId = docRef.id;
        })
        .catch((error) => {
            console.log(error);
        });

    return imovelId;
}

export const getImoveis = async () => {
    const imoveis = [];
    const querySnapshot = await getDocs(fornecedorCollection);
    querySnapshot.forEach((doc) => {
        imoveis.push(doc.data());
    });
    return imoveis;
}