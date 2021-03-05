import React from 'react'
import Close from './images/icon-remove.svg'

const FiltersBar = ({filters, setFilters}) => {

   

   const activeFilters =  filters.map((f)=>{


    const onCloseClick = () =>{
        const filterRemove = [...filters].filter(item => item !== f)
          setFilters(filterRemove)
          
      }


        return(
            <div className='filter'>
                <p>{f}</p>
                <img alt='' onClick={()=> onCloseClick ()} src={Close}/> 
            </div>
        )
    })

    return (
        <div className={`FiltersBar ${activeFilters.length === 0 ? 'hide' : ""}`}>
            <div className='filters'  >
                {activeFilters}
            </div>
            <div>
                <p onClick={()=> setFilters([])} id='clear'>
                    Clear
                </p>
            </div>
        </div>
    )
}

export default FiltersBar
