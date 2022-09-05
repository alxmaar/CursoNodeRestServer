const {Response} = require('express');

const Usersget = (req, res=response) =>{
    const {q,nombre,apikey}=req.query;
    res.json({
        msg:'get API',
        q,
        nombre,
        apikey
    })
  }

  const UsersPost = (req, res=response) =>{
    const {nombre,edad} = req.body;
    res.json({
        msg:'Post API',
        nombre,
        edad
    })
  }

  const UsersPut = (req, res=response) =>{
    const id=req.params.id;
    res.json({
        msg:'PUT API',
        id:id
    })
  }

  const UsersPatch = (req, res=response) =>{
    
    res.json({
        msg:'patch API'
    })
  }

  const UsersDelete = (req, res=response) =>{
    
    res.json({
        msg:'delete API'
    })
  }

module.exports={ 
    Usersget,
    UsersPost,
    UsersPut,
    UsersPatch,
    UsersDelete
   }