const EMP_DATA_URL = "http://localhost:3000/user";

class ApiServices{

    fetchUser(){
        return fetch(EMP_DATA_URL);
    }

    addUserDetail(user){
        return fetch(EMP_DATA_URL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
    );
    }

    fetchUserById(id) {
        return fetch(EMP_DATA_URL+'/'+id);
    }

}

export default new ApiServices();