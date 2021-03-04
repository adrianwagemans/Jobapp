import React,{useState} from 'react'
import JobList from './JobList'
import FiltersBar from './FiltersBar'

const App = () => {

    const [filters, setFilters] = useState (['hola', 'hola' ,'omo'])
    return (
        <div>
            <img className='headerDesktop' src='./images/bg-header-desktop.svg' alt=''/>
            <img className='headerMobile' src='./images/bg-header-mobile.svg' alt=''/>
            <FiltersBar filters={filters} />

            <JobList setFilters={setFilters} filters={filters} />
        </div>
    )
}

export default App
