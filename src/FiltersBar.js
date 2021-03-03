import React,{useState} from 'react'
import Close from './images/icon-remove.svg'

const FiltersBar = () => {

    const [fitlers, setFilters] = useState (['hola', 'hola' ,'omo'])

   const activeFilters =  fitlers.map((filter)=>{
        return(
            <div className='filter'>
                <p>{filter}</p>
                <img src={Close}/> 
            </div>
        )
    })

    return (
        <div className='FiltersBar'>
            <div className='filters'>
                {activeFilters}
            </div>
            <div>
                <p id='clear'>
                    Clear
                </p>
            </div>
        </div>
    )
}

export default FiltersBar
