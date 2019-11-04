import Axios from "axios"


export function getUsers() {
    return Axios.get('http://localhost:4001/api/user');
}

export function postUser({ name, lastName }) {
    return Axios({
      method: 'post',
      url: 'http://localhost:4001/api/user/add',
      data: {
        name,
        lastName,
      }
    })
  }