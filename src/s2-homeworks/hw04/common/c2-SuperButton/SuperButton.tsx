import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${s[xType || 'default']}${className ? ' ' + className : ''}` // задачка на смешивание классов

    // Вариант 1:
    // jsx
    // Copy code
    // const finalClassName = `${s.button}${disabled ? ` ${s.disabled}` : ''}${xType === 'red' ? ` ${s.red}` : xType === 'secondary' ? ` ${s.secondary}` : ''}${className ? ` ${className}` : ''}`;
    // Преимущества:
    //
    //     Гибкость: Позволяет применять классы на основе множества условий.
    //     Детальный контроль: Более детальный контроль над тем, какие классы будут применены в зависимости от различных условий.
    //     Недостатки:
    //
    // Больше кода: Может быть более громоздким, особенно при наличии множества условий.
    //     Вариант 2:
    // jsx
    // Copy code
    // const finalClassName = `${s.button} ${s[xType || 'default']}${className ? ' ' + className : ''}`;
    // Преимущества:
    //
    //     Компактность: Более компактный код, особенно когда выбор класса основан на одном параметре (xType).
    //     Читаемость: Может быть более читаемым, особенно когда классы зависят от единственного условия.
    //     Недостатки:
    //
    // Менее гибкий: Может быть менее гибким в случаях, когда требуется более сложная логика для выбора классов.
    //     Какой выбрать?
    //     Если у вас есть несколько условий и требуется более детальное управление классами в зависимости от этих условий, может быть предпочтительнее использовать вариант 1.
    // Если выбор класса основан на одном параметре и вам важна читаемость и компактность кода, вариант 2 может быть более удобным.
    //     Важно также соблюдать консистентность в коде и выбирать тот подход, который лучше соответствует стилю вашего проекта и команды разработчиков.

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
