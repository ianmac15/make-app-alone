import { useLocation } from 'react-router'
import { showAddFormInterface } from '../App'
import Button from './Button'

const HeaderTitle = ({ title, onClick}: properties) => {

    const location = useLocation()

    return (
        <div>
            <header className='header'>
                <h1 >{title}</h1>
                {location.pathname=== '/' && 
                (<Button text='Add' onClick ={onClick}/>)}
            </header>

        </div>
    )
}

type properties = {
    title: string
    onClick: showAddFormInterface
}

export default HeaderTitle