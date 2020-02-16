import React from 'react';
import User from './User';
import Filter from './Filter';

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            userList: props.users,
        }
    }

    onChange = event => {
        let arr = this.props.users.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()));

        this.setState({
            name: event.target.value,
            userList: arr,
        });
    }

    render() {
        return (
            <div>
                <Filter
                    count={this.state.userList.length}
                    onChange={this.onChange}
                    filterText={this.state.name}
                />
                <ul className="users">
                    {this.state.userList.map(({ name, age, id }) => <User key={id} name={name} age={age} />)}
                </ul>
            </div >
        )
    }
}

export default UserList;