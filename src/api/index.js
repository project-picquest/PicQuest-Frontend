import {localAxios, localAxios_py} from "@/util/http-commons"

const local = localAxios();
const local_py = localAxios_py();

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

const _getQuests = (param, success, fail) => {
    local.post('/quests', param)
    .then(success)
    .catch(fail);
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

const _postImage = (param, success, fail) => {
    local_py.post(`/submitimage`, param)
    .then(success)
    .catch(fail)
}

export {_login, _join, _postQuest, _getQuests, _getAttractions, _getAttractionsByTitle, _postImage};