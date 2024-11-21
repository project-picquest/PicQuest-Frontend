import {localAxios} from "@/util/http-commons"

const local = localAxios();

const _login = (param, success, fail ) => {
    local.post('/user/login', param)
    .then(success)
    .catch(fail)
}

export {_login};