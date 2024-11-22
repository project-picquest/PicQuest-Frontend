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

const _postQuest = (param, success, fail) => {
    local.post('quests/submit', param)
    .then(success)
    .catch(fail)
}

const _getAttractions = (success, fail) => {
    local.get('/attractions')
    .then(success)
    .catch(fail)
}

const _getAttractionsByTitle = (title, success, fail) => {
    local.get(`/attractions/${title}`)
    .then(success)
    .catch(fail)
}

export {_login, _join, _questSubmit, _postQuest, _getAttractions, _getAttractionsByTitle};