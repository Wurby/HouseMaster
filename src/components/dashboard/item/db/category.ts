import { firestore } from '../../../../firebase/firebase';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { auth } from '../../../../firebase/firebase';
import type { Category } from '../types/category';
import randomString from 'random-string';

export const addCategory = async (category: Category) => {
	if (auth.currentUser === null) return new Error('User not logged in');
	else {
		if (!category.id) {
			const docId = randomString({
				length: 12,
				numeric: false,
				special: false,
			});

			return await setDoc(doc(firestore, 'users', auth.currentUser.uid, 'categories', docId), {
				...category,
				id: docId,
			});
		} else {
			return await setDoc(doc(firestore, 'users', auth.currentUser.uid, 'categories', category.id), category);
		}
	}
};

export const deleteCategory = async (category: Category) => {
	if (auth.currentUser === null) return new Error('User not logged in');
	else {
		return await deleteDoc(doc(firestore, 'users', auth.currentUser.uid, 'categories', category.id));
	}
};
