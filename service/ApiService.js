import axios from 'axios';
// get ข้อมูล

const url = 'http://192.168.1.4/project/api-call-Checker/';
// เช็ค user/pass login
const getLogin = async (e, y) => {
  const seaUser = await axios
    .get(`${url}/login.php`, {
      headers: {
        'Content-Type': 'text/javascript;charset=utf-8',
      },
      params: {
        isAdd: true,
        username: e,
        password: y,
      },
    })
    .then(result => {
      return result.data;
    })
    .catch(error => {
      return error;
    });
  return seaUser;
};
export default {
  getLogin,
};
