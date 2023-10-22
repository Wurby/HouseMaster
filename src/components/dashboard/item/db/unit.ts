import { firestore } from '../../../../firebase/firebase';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { auth } from '../../../../firebase/firebase';
import randomString from 'random-string';
import type UnitOfMeasurement from '../types/unit';

export const addUnit = async (unit: UnitOfMeasurement) => {
	if (auth.currentUser === null) return new Error('User not logged in');
	else {
		if (!unit.id) {
			const docId = randomString({
				length: 12,
				numeric: false,
				special: false,
			});

			return await setDoc(doc(firestore, 'users', auth.currentUser.uid, 'units', docId), {
				...unit,
				id: docId,
			});
		} else {
			return await setDoc(doc(firestore, 'users', auth.currentUser.uid, 'units', unit.id), unit);
		}
	}
};

export const deleteUnit = async (unit: UnitOfMeasurement) => {
	if (auth.currentUser === null) return new Error('User not logged in');
	else {
		return await deleteDoc(doc(firestore, 'users', auth.currentUser.uid, 'units', unit.id));
	}
};
