import type Item from '../types/item';
import { firestore } from '../../../../firebase/firebase';
import { auth } from '../../../../firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const removeItem = async (item: Item) => {
	if (auth.currentUser === null) return new Error('User not logged in');
	else {
		return await deleteDoc(doc(firestore, 'users', auth.currentUser.uid, 'items', item.id));
	}
};

export default removeItem;
