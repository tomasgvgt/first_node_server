//Server response configuration

const success = function(req, res, status, body){
    res.status(status);
    res.send({
        error: '',
        body: body,
    })
}

const error = function(req, res, status, errorMsg, errorDetails){
    console.error(errorDetails);
    res.status(status);
    res.send({
        error: errorMsg,
        body: ''
    })
}

module.exports = {
    success,
    error
}