const express = require('express')
const mongoose = require('mongoose')
const Blog = require('../model/G_blogModel')

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

const getOneBlog = async (req,res)=>{
    // const id = req.params.blogId;
    const id = req.params.blogId;
    try{
        const oneBlog = await Blog.findOne({_id: id})
        // res.status(200).json({
        //     message: `Here are all the Blogs`,
        //     data: oneBlog
        // })
        console.log(oneBlog);
        res.render('blog-single',{ oneBlog : oneBlog })
    }catch(err){
        res.status(500).json({
            message: `Can't Get One Blogs`,
            error: err
        })
    }
}

const searchBlog = async (req,res)=>{
    console.log(req.query);
    const name = req.query.search ;

    try{
        const searchedBlogs = await Blog.find({ title : name})
        res.render('blog-grid', {blogs : searchedBlogs})

    }catch(err){
        es.status(500).json({
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