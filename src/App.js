import React from 'react'
import JobList from './JobList'
import FiltersBar from './FiltersBar'

const App = () => {
    return (
        <div>
            <img className='headerDesktop' src='./images/bg-header-desktop.svg' alt=''/>
            <img className='headerMobile' src='./images/bg-header-mobile.svg' alt=''/>
            <FiltersBar />

            <JobList/>
        </div>
    )
}

export default App
