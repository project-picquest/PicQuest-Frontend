import {localAxios} from "@/util/http-commons"

const local = localAxios();

const _login = (param, success, fail ) => {
    local.post('/user/login', param)
    .then(success)
    .catch(fail)
}

const _join = (param, success, fail) => {
    local.post('/user/join', param)
    .then(success)
    .catch(fail)
}

const _questSubmit = (param, success, fail) => {
    local.post('quests/submit', param)
    .then(success)
    .catch(fail)
}

export {_login, _join, _questSubmit};