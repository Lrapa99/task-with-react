import APIRequest from "../utilities/config/axios.config";

export function getRandomUser() {
  return APIRequest.get("/", {
    validateStatus: function (status) {
      return status < 500;
    },
  }); //https://randomuser.me/api/
}

export function getRandomChuckNorris() {
  return APIRequest.get("/", {
    validateStatus: function (status) {
      return status < 500;
    },
  }); //https://randomuser.me/api/
}
