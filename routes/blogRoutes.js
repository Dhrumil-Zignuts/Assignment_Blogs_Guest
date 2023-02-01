const express = require('express')
const router = express.Router()
const blogController = require('../controller/G_blogConteoller')

router.get('/getAllBlogs', blogController.getAllBlogs);
router.get('/:blogId/:slug', blogController.getOneBlog);
router.get('/search', blogController.searchBlog)


module.exports = router