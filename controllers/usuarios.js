const {response, request } = require('express');
//este archivo se usa para crear funciones y exportarlas..

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey, page = '1', limit} = req.query;


    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPut = (req, res) => {

    const {id} = req.params;

    res.status(500).json({
        msg: 'put API -controlador ',
        id
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        body
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}






module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}








