const express = require('express')
const mongoose = require('mongoose')
const Blog = require('../model/G_blogModel')


// Get All Blogs
const getAllBlogs = async (req, res) => {
        try {   
            const blogs = await Blog.find({})
            // res.status(200).json({
            //     message: `Here are all the Blogs`,
            //     data: blogs
            // })
            res.render('blog-grid',{blogs: blogs})
        } catch (err) {
            res.status(500).json({
                message: `Can't Get All Blogs`,
                error: err
            })
        }
    }


// Get One Blog
const getOneBlog = async (req,res)=>{
    // const id = req.params.blogId;
    const id = req.params.blogId;
    try{
        const oneBlog = await Blog.findOne({_id: id})
        console.log(oneBlog);
        res.render('blog-single',{ oneBlog : oneBlog })
    }catch(err){
        res.status(500).json({
            message: `Can't Get One Blogs`,
            error: err
        })
    }
}


// Search Blog 
const searchBlog = async (req,res)=>{
    console.log(req.query);
    const name = req.query.search ;

    try{
        const searchedBlogs = await Blog.find({ 
            "$or" : [
                { title : {$regex: name} }
            ]
        })
        res.render('blog-grid', {blogs : searchedBlogs})

    }catch(err){
        res.status(500).json({
            message: `Can't Get One Blogs`,
            error: err
        })
    }
}


module.exports = {
    getAllBlogs,
    getOneBlog,
    searchBlog
}