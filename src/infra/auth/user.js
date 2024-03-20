import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";

export const criarUsuario = async (email, senha) => {

    let usuarioCriado = null

    await createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            usuarioCriado = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    
    return usuarioCriado;
}

export const efetuarLogin = async (email, senha) => {

    let usuario = null;

    await setPersistence(auth, browserSessionPersistence)
        .then(async () => {return await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                usuario = userCredential.user;
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })})
        .catch((error) => {
            console.log(error);
        })

            return usuario;
    }

export const efetuarLogout = () => {
    auth.signOut();
}