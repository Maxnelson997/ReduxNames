import {
    FETCH_ITEMS
} from './types';

export function fetchItems() {
    return (
        {
            type: FETCH_ITEMS,
            payload: [
                'Brayden',
                'Jordan Hudgens',
                'Andrew'
            ]
        }
    )
}