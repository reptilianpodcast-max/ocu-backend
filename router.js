const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/articles',controller.getArticles);
router.post('/addarticles',controller.addArticles);
router.patch('/updatearticles/:id',controller.updateArticles);
router.delete('/deletearticles/:id',controller.deleteArticles);

router.get('/news',controller.getNews);
router.post('/addnews',controller.addNews);
router.patch('/updatenews/:id',controller.updateNews);
router.delete('/deletenews/:id',controller.deleteNews);

router.get('/comments',controller.getComments);
router.post('/addcomments',controller.addComments);
router.delete('/deletecomments/:id',controller.deleteComments);

router.get('/superadmin',controller.getSuperAdmin);
router.patch('/updatesuperadmin/:id',controller.updateSuperAdmin);

router.get('/admin',controller.getAdmin);
router.post('/addadmin',controller.addAdmin);
router.patch('/updateadmin/:id',controller.updateAdmin);
router.delete('/deleteadmin/:id',controller.deleteAdmin);


module.exports = router; 