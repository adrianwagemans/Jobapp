import React, {useRef} from 'react'

const JobComponent = ({result}) => {

    const exist = useRef();
    return (
        <div className={`jobContainer ${result.featured ? "leftBorder" : "" }`}>
            
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
                <p>
                    {result.role}
                    
                </p>
        
                <p>
                    {result.level}
                </p>
               
                    {result.languages.map((language)=>{
                        return(
                            <p>
                                {language}
                            </p>
                        )
                    })}
                    {result.tools.map((tool)=>{
                        return(
                            <p>
                                {tool}
                            </p>
                        )
                    })}
                

                <p>
                    {result.role}
                </p>
            </div>
            
        </div>
    )
}

export default JobComponent
