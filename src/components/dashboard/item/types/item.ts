import type UnitOfMeasurement from './unit';

/**
 * Represents an item in the inventory.
 */
export type Item = {
	id: string; // barcode number otherwise randomly generated
	name: string;
	description: string;
	category: string;
	quantity: number | null;
	unitOfMeasurement: UnitOfMeasurement[]; // oz, lbs, cans, etc.
	location: string; // pantry, fridge, etc.
	expirationDate: string; // date item expires format yyyy-mm-dd
	restockDate: string; // date item will need to be replaced format yyyy-mm-dd
	notes: string;
	favorite: boolean;
	dateAdded: string; // date item was added to inventory format yyyy-mm-dd
	onGroceryList?: boolean;
};

export default Item;
