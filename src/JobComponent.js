import React from 'react'

const JobComponent = ({result}) => {
    return (
        <div className='jobContainer'>
            <div className='companyLogo'>
                
                <img src={result.logo} alt='logo compania'/>
            </div>

            <div className='mainInfo'>
                <div>
                    <div>
                    {result.company}
                    </div>
                    <div className='new'>
                        {result.new ? 'NEW' : ''}
                    </div>
                    <div>
                        {result.featured ? 'FEATURED': ''}
                    </div>

                </div>
                <div className='jobTitle'>
                    {result.position}
                </div>
                <div className='jobInfo'>
                    {result.postedAt}
                    {result.contract}
                    {result.location}

                </div>
            </div>

            <div className='categories'>
                <p>
                    {result.role}
                </p>
                <p>
                    {result.level}
                </p>
                <p>
                    {result.languages.map((language)=>{
                        return(
                            <div>
                                {language}
                            </div>
                        )
                    })}
                </p>

                <p>
                    {result.role}
                </p>
            </div>
            
        </div>
    )
}

export default JobComponent
