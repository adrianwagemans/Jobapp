import React from 'react'
import JobComponent from './JobComponent'
import data from './data.json'


function JobList({filters, setFilters}) {

    
    const renderedResults = data.map((result) => {

        const jobCategories = [result.level, ...result.tools, ...result.languages, result.role]
   
    
        if(filters.length !== 0){

            if (jobCategories.includes(filters[0]) || jobCategories.includes(filters[1]) || 
        jobCategories.includes(filters[2]) || jobCategories.includes(filters[3] ||
             jobCategories.includes(filters[4])
                ) ) {
        return (
           <div  key={result.id}>
               <JobComponent result={result} filters={filters} setFilters={setFilters}/>
           </div>
        )}
    }
    if(filters.length === 0)
     { return (
        <div  key={result.id}>
            <JobComponent result={result} filters={filters} setFilters={setFilters}/>
        </div>
     )}
    })
    return (
        <div>
         {renderedResults}
        </div>
    )
}

export default JobList
