import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getAllPagedUsers,
  getAllUsers,
  getUsersDetails,
  login,
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [usersPerPage, setUsersPerPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log(`All users: ${response.data}`);
        setUsers(response.data);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
        setPages(response.page);
        setTotalPage(response.total_pages);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users");
        console.table(users);
      });
  };

  const obtainPageUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        console.log(`All paged users: ${response.data}`);
        setUsers(response.data);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
        setPages(response.page);
        setTotalPage(response.total_pages);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users");
        console.table(users);
      });
  };

  const obtainUsersDetails = (id) => {
    getUsersDetails(id)
      .then((response) => {
        console.log(`All paged user: ${response.data}`);
        setSelectedUser(response.data);
      })
      .catch((error) => {
        alert(`Error while retreiving the user: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining user");
        console.table(selectedUser);
      });
  };

  const auth = () => {
    login("eve.holt@reqres.in", "cityslicka")
      .then((response) => {
        console.log(`Token: ${response.token}`);
        sessionStorage.setItem(response.token);
      })
      .catch((error) => {
        alert(`Error while  login user: ${error}`);
      })
      .finally(() => {
        console.log("Ended login user");
      });
  };

  return (
    <div>
      <h1>Fetch Example</h1>
      <Button variant="outlined" color="primary" onClick={auth}>
        Auth User
      </Button>
      <h2>Users:</h2>
      {/* Nexting pages */}
      <div className="mt-2">
        <p>
          Showing {usersPerPage} users of {totalUsers}
        </p>
        <p>
          Showing {pages} page of {totalPage}
        </p>
        <div className="d-flex gap-3">
          {pages > 1 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                obtainPageUsers(pages - 1);
              }}
            >
              Prev Page
            </Button>
          )}
          {pages !== totalPage && (
            <Button
              variant="contained"
              onClick={() => {
                obtainPageUsers(pages + 1);
              }}
            >
              Next Page
            </Button>
          )}
        </div>
      </div>
      {/* showing the users */}
      {users.map((user, index) => (
        <div
          key={index}
          className="d-flex align-items-center gap-3 justify-content-between text-primary fw-bold text-center"
        >
          <p>
            {user.first_name} {user.last_name}
          </p>
          <picture className="mt-3">
            <img
              onMouseOver={() => obtainUsersDetails(user.id)}
              onMouseOut={() => setSelectedUser(null)}
              className="rounded-circle btn"
              src={user.avatar}
              alt={user.first_name}
            />
          </picture>
        </div>
      ))}
      {/* details user */}
      {selectedUser && (
        <article className="position-fixed top-0 end-0 bg-dark p-3 text-white  text-center">
          <picture className="mt-3">
            <img
              className="rounded-circle"
              style={{ width: "70px" }}
              src={selectedUser.avatar}
              alt={selectedUser.first_name}
            />
          </picture>
          <p className="fw-bold">
            {selectedUser.first_name} {selectedUser.last_name}
          </p>
          <p>{selectedUser.email}</p>

          <small>
            <i>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            </i>
          </small>
        </article>
      )}
    </div>
  );
};

export default FetchExample;
