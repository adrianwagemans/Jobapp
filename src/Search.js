import React from 'react'
import axios from 'axios'
import JobList from './JobList'

const Search = () => {
    const [term, setTerm] = useState('HTML')
    const [results, setResults] = usestate([])


    const search = async () => {
        const { data } = await axios.get('https://www.mediawiki.org/w/api.php', {
             params: { 
                 action:'query',
                 list:'search',
                 origin:'*',
                 format:'json',
                 srsearch: term
             }
         })
         
         setResults(data.query.search);

     };

    return (
        <div>
            <JobList results={results}/>
        </div>
    )
}

export default Search
