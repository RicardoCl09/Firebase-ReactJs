// En este fichero se creará toda la lógica de base de datos para las tasks
import { db } from ".";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";

// Create

export const addNewTask = async (task) => {
    await addDoc(collection(db, 'tasks'), task);
}

// Read

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    const tasks = querySnapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
    })
    return tasks;
}

export const updateTask = async (task) => {
    // console.log(task)
    await setDoc(
        doc(db, 'tasks', task.id), {
            title: task.title,
            description: task.description
        }
    )
}

export const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
}