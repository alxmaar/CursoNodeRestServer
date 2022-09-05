
const {Router} = require('express');
const {Usersget,
    UsersDelete,
    UsersPatch,
    UsersPost,
    UsersPut}=require('../controllers/user');

const router=Router();

router.get('/', Usersget);

router.put('/:id', UsersPut);

router.post('/', UsersPost);

router.delete('/', UsersDelete);

router.patch('/', UsersPatch);

module.exports=router;