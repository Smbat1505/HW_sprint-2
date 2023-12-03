import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sorted = [...state];
            sorted = state.sort((a, b) => a.name.localeCompare(b.name))

            if (action.payload === 'down') {
                return sorted.reverse()
            }
            return sorted
        }
        case 'check': {
            let check = [...state];
            return check.filter(a => a.age >= 18)
        }
        default:
            return state
    }
}
