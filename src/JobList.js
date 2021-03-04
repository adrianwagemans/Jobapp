import React from 'react'
import JobComponent from './JobComponent'
import data from './data.json'

function JobList({filters, setFilters}) {
    const renderedResults = data.map((result) => {
        return (
           <div>
               <JobComponent result={result} filters={filters} setFilters={setFilters}/>
           </div>
        )
    })
    return (
        <div>
         {renderedResults}
        </div>
    )
}

export default JobList
