import React from 'react'
import JobComponent from './JobComponent'
import data from './data.json'

function JobList() {
    const renderedResults = data.map((result) => {
        return (
           <div>
               <JobComponent result={result}/>
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
