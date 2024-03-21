import { collection, addDoc, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
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
        imoveis.push({...doc.data(), id: doc.id});
    });
    return imoveis;
}

export const getImovel = async (id) => {
    const imovel = await getDoc(doc(fornecedorCollection, id));
    return imovel.data();
}

export const updateImovel = async (id, dataUpdate) => {
    let validacao = false;
    await updateDoc(doc(fornecedorCollection, id), dataUpdate)
        .then(() => {
            validacao = true;
        })
        .catch((error) => {
            console.log(error);
        });

    return validacao;
}