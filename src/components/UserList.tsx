import { SortBy, type User } from "../types.d";

interface UserListProps {
  changeSorting: (sort: SortBy) => void;
  deleteUser: (index: string) => void;
  showColors: boolean;
  users: User[];
}

const UserList = ({
  changeSorting,
  deleteUser,
  showColors,
  users,
}: UserListProps) => {
  return (
    <table className={showColors ? "table table--showColors" : "table"}>
      <thead>
        <tr>
          <th>Photo</th>
          <th className="pointer" onClick={() => changeSorting(SortBy.NAME)}>
            Name
          </th>
          <th className="pointer" onClick={() => changeSorting(SortBy.LAST)}>
            Last
          </th>
          <th className="pointer" onClick={() => changeSorting(SortBy.COUNTRY)}>
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.login.uuid}>
              <td>
                <img src={user.picture.thumbnail} alt="" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.login.uuid)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
