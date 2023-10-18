import type Item from "../types/item"
import { firestore } from "../../../../firebase/firebase"
import { doc, setDoc } from "firebase/firestore"; 
import { auth } from "../../../../firebase/firebase";


export const todaysDateString = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    return `${year}-${month}-${day}`
}

const addItem = async (item: Item) =>  {
 if (auth.currentUser === null) return new Error("User not logged in")
 else {
    let payload = {...item}
    payload.dateAdded = todaysDateString()
    
    if (payload.id === "") {
        const randomString = Math.random().toString(36).substring(7);
        payload.id = randomString
        return await setDoc(doc(firestore, "users", auth.currentUser.uid, "items", payload.id), payload)
    }

return await setDoc(doc(firestore, auth.currentUser.uid, "items", item.id), item)
 }
}

export default addItem