import { STATUS_CODE } from '../enums/statusCode.Enum.js';


function notImplemented(res) {

    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);
}

function okResponse(res) {

    return res.sendStatus(STATUS_CODE.OK);

}

function okResponseBody(res, body) {

    return res.status(STATUS_CODE.OK).send(body);

}


function serverError(res, error) {

    console.error(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);

}

function badRequest(res) {

    return res.sendStatus(STATUS_CODE.BAD_REQUEST);

}

function noContentResponse(res) {
    return res.sendStatus(STATUS_CODE.NOT_CONTENT);
}

export {
    notImplemented,
    okResponse,
    okResponseBody,
    serverError,
    badRequest,
    noContentResponse
};
