const initState = {
    themeId: 1,
}
export type AppStateType = {
    theme: typeof initState
}
export const themeReducer = (state: typeof initState = initState, action: ChangeThemeIdType): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
