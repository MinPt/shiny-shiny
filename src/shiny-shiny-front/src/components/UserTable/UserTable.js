import { Component } from "react";
import { Button, Table } from "react-bootstrap";
import UserCreateItem from "./UserCreateItem";
import UserTableItem from "./UserTableItem";

class UserTable extends Component {
  state = {
    isCreatingUser: false,
  };

  componentDidMount() {
    this.props.onLoad();
  }

  handleUserCreation = () => {
    this.setState({ isCreatingUser: !this.state.isCreatingUser });
  };

  render() {
    const { users } = this.props.users;
    const { isCreatingUser } = this.state;
    return (
      <Table>
        <thead>
          <tr className="">
            <th className="col-1">#</th>
            <th className="col-3">Name</th>
            <th className="col-3">Email</th>
            <th className="col-2"></th>
            <th className="col-3">
              <Button onClick={this.handleUserCreation} variant="success">
                Create user
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserTableItem user={user} index={index} key={index} />
          ))}
          {isCreatingUser ? (
            <UserCreateItem
              index={users.length}
              toggleCreation={this.handleUserCreation}
            />
          ) : null}
        </tbody>
      </Table>
    );
  }
}

export default UserTable;
