

/**
 * Represents an item in the inventory.
 * @interface
 * @property {string} id - barcode number otherwise randomly generated
 * @property {string} name - name of item
 * @property {string} description - description of item
 * @property {string} category - category of item
 * @property {number} quantity - quantity of item
 * @property {string} unitOfMeasurement - unit of measurement of item
 * @property {string} location - location of item
 * @property {string} expirationDate - date item expires format yyyy-mm-dd
 * @property {string} restockDate - date item will need to be replaced format yyyy-mm-dd
 * @property {string} notes - notes about item
 * @property {boolean} favorite - whether item is a favorite
 * @property {string} dateAdded - date item was added to inventory format yyyy-mm-dd
 * @property {boolean} onGroceryList optional - whether item is on grocery list
 */
export interface Item {
    id: string; // barcode number otherwise randomly generated
    name: string;
    description: string;
    category: string;
    quantity: number | null;
    unitOfMeasurement: string; // oz, lbs, cans, etc.
    location: string; // pantry, fridge, etc.
    expirationDate: string; // date item expires format yyyy-mm-dd
    restockDate: string; // date item will need to be replaced format yyyy-mm-dd
    notes: string; 
    favorite: boolean; 
    dateAdded: string; // date item was added to inventory format yyyy-mm-dd
    onGroceryList?: boolean
    };

    export default Item;