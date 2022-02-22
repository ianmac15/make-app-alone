import React from 'react'
import { showAddFormInterface } from '../App'
import Button from './Button'

const HeaderTitle = ({ title, onClick}: properties) => {
    return (
        <div>
            <header className='header'>
                <h1 >{title}</h1>
                <Button text='Add' onClick ={onClick}/>
            </header>

        </div>
    )
}

type properties = {
    title: string
    onClick: showAddFormInterface
}

export default HeaderTitle