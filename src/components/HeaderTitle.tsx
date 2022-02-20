import React from 'react'
import Button from './Button'

const HeaderTitle = ({ title }: headerProps) => {
    return (
        <div>
            <header className='header'>
                <h1 >{title}</h1>
                <Button text='Add' />
            </header>

        </div>
    )
}

type headerProps = {
    title: string
}

export default HeaderTitle