import React from "react";
//import PropTypes from "prop-types";
//   constructor() {
//     super();
//     this.state = {
//       id: "id",
//       login: "mojombo",
//       avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//       html_url: "https://github.com/mojombo",
//     };
//   }
const UserItem = ({ totaluser: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="loading..."
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          more
        </a>
      </div>
    </div>
  );
};
// UserItem.PropTypes = {
//   totaluser: PropTypes.object.isRequired,
// };
export default UserItem;
