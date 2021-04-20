const { response, request } = require("express")

const getUsers = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })

}

const postUsers = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
}

const putUsers = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    })
}

const deleteUsers = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}


module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}