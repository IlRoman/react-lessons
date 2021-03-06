import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
        }
    }

    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1,
        })
    }

    goNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1,
        })
    }

    render() {
        const listOfUsers = this.props.users
            .slice(this.state.currentPage * 3, this.state.currentPage * 3 + 3)
            .sort((a, b) => a.age - b.age)
            .map(users => <User key={users.id} {...users} />)

        return (
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    currentPage={this.state.currentPage}
                    totalItems={this.props.users.length}
                />
                <ul className="users">
                    {listOfUsers}
                </ul>
            </ div>
        )
    }
};

export default UsersList;