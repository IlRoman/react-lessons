import React, { Component } from 'react';

class Search extends Component {
    state = {
        value: '',
    }

    onInputChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    onSearch = event => {
        event.preventDefault();
        alert(`Search text: ${this.state.value}`);
    }

    render() {
        return (
            <form className="search" onSubmit={this.onSearch}>
                <input
                    type="text"
                    className="search__input"
                    onChange={this.onInputChange}
                    value={this.state.value}
                />
                <button className="search__button" type="submit">
                    Search
                </button>
            </form>
        )
    }
}

export default Search;