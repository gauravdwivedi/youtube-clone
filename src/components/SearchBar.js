import React,{useState} from 'react'



const SearchBar =({onFormSubmit})=>{
        const [term,setTerm] =useState('')

    const  onChangeHandle=(e)=>{
                setTerm(e.target.value )
        }

    const onSubmit=(e)=>{
            e.preventDefault();


            //TODO: Make sure we call
            //callback from parent component

            onFormSubmit(term)
        }

  

        return( <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input value={term} type="text"
                           onChange={onChangeHandle}/>
                </div>
            </form>
        </div>)
    
}

export default SearchBar