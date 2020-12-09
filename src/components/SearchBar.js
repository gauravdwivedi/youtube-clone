import React from 'react'



class SearchBar extends React.Component{

    state={
        term:''
    }

        onChangeHandle=(e)=>{
                this.setState({ term:e.target.value })
        }

        onFormSubmit=(e)=>{
            e.preventDefault();


            //TODO: Make sure we call
            //callback from parent component

            this.props.onFormSubmit(this.state.term)
        }

    render(){

        return( <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input value={this.state.term} type="text"
                           onChange={this.onChangeHandle}/>
                </div>
            </form>
        </div>)
    }
}

export default SearchBar