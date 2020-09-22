export default function Module(login,password){
  let userPassword = password;
  let userfio = '';
  return{ 
    login: login,
    start: function (name,pass) { 
      if(this.login == name && userPassword == pass){
        return userfio;
      }else {
        return "Ошибка авторизации";
      }
    },
    changefio: function (fio){ 
      userfio = fio;
    }
  }
}