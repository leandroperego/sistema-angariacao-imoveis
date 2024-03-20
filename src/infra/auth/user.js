import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { addUser } from "../db/users";

export const criarUsuario = async (usuario) => {

    let usuarioCriado = null

    await createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
        .then(async (userCredential) => {
            usuarioCriado = userCredential.user;
            await addUser({
                id: usuarioCriado.uid,
                nome: usuario.nome,
                email: usuario.email
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    
    return usuarioCriado;
}

export const efetuarLogin = async (email, password) => {

    let usuario = null;

    await setPersistence(auth, browserSessionPersistence)
        .then(async () => {return await signInWithEmailAndPassword(auth, email, password)
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