import { generateId } from "./generateId";

export function createNewObject() {
    return {
        id: generateId()
    }
}