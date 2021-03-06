import React from 'react'

const JobComponent = ({result, filters, setFilters}) => {

    const onCatClick = (cat) => {
        setFilters([...filters, cat])
    }

    
   
    return (
        <div  key={result.id} className={`jobContainer ${result.featured ? "leftBorder" : "" }`}
            className={`jobContainer ${filters.includes(result.level)  ? "" : 'hide'}`}>
            
            <div className='mainInfo'>
        
                
                <img src={result.logo} alt='logo compania'/>
            
                <div className="textContainer">
                <div className='upperLine'>
                    <p>
                    {result.company}

                    </p>
                    <p className={`new ${result.new ? "": "clear" }`} >
                        NEW
                    </p>
                    <p className={`featured ${result.featured ? "": "clear" }`} > 
                        FEATURED
                    </p>

                </div>
                <p className='jobTitle'>
                    {result.position}
                </p>
                <div className='jobInfo'>
                    <p>{result.postedAt}</p>
                    <p>{result.contract}</p>
                    <p>{result.location}</p>
                   

                </div>
                </div>
            
            </div>
            <div className='hr'></div>

            <div className='categories'>
                <p onClick={(e) =>  filters.includes(e.target.innerHTML) ? null : onCatClick(e.target.innerHTML)}>
                    {result.role}
                    
                </p>
        
                <p onClick={(e) =>  filters.includes(e.target.innerHTML) ? null : onCatClick(e.target.innerHTML)}>
                    {result.level}
                </p>
               
                    {result.languages.map((language)=>{
                        return(
                            <p onClick={(e) =>  filters.includes(e.target.innerHTML) ? null : onCatClick(e.target.innerHTML)}>
                                {language}
                            </p>
                        )
                    })}
                    {result.tools.map((tool)=>{
                        return(
                            <p onClick={(e) =>  filters.includes(e.target.innerHTML) ? null : onCatClick(e.target.innerHTML)}>
                                {tool}
                            </p>
                        )
                    })}
            
            </div>
            
        </div>
    )
}

export default JobComponent
