import { collection, addDoc, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';

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