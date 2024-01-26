import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, changeThemeId} from './bll/themeReducer'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */


const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]


const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector((state: AppStateType) => state.theme.themeId)

    const dispatch = useDispatch()
    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    const getThemeClassName = () => {
        switch (themeId) {
            case 1:
                return s.lightGround;
            case 2:
                return s.blueGround;
            case 3:
                return s.darkGround;
            default:
                return ''; // default class or an empty string if no match
        }
    }


    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={`${s2.hw}`}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={`${s.select} ${getThemeClassName()}`}
                    options={themes.map(t => ({id: t.id, value: t.value as unknown as number}))}
                    value={themeId}
                    onChange={(event) => {
                        change(+event.currentTarget.value)
                    }}
                    // сделать переключение тем

                />
            </div>
        </div>
    )
}

export default HW12

