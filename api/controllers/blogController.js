'use strict';

const Posts = require('../models/blogModel');

const getDefault = async (req, res) => {
	try {
		res.json({
			status: 'success',
			message: 'Hello World'
		});
	} catch (e) {
		res.send(e);
	}
};

const getAllBlogPosts = async (req, res) => {
	try {
		const posts = await Posts.find({});
		res.json({
			status: 'success',
			message: 'Retrieved all posts',
			data: posts
		});
	} catch (e) {
		res.send(e);
	}
};

const createBlogPost = async (req, res) => {
	try {
		const newPost = new Posts(req.body);
		const response = await newPost.save();
		res.json({
			status: 'success',
			message: 'Blog post created',
			data: response
		});
	} catch (e) {
		res.send(e);
	}
};

const getSinglePost = async (req, res) => {
	try {
		const post = await Posts.findById(req.params.id);
		res.json({
			status: 'success',
			message: 'Retrieved post',
			data: post
		});
	} catch (e) {
		res.send(e);
	}
};

const updateSinglePost = async (req, res) => {
	try {
		const post = await Posts.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
		res.json({
			status: 'success',
			message: 'Updated post',
			data: post
		});
	} catch (e) {
		res.send(e);
	}
};

const deleteSinglePost = async (req, res) => {
	try {
		await Posts.deleteOne({ _id: req.params.id });
		res.json({
			status: 'success',
			message: 'Deleted post',
			data: {}
		});
	} catch (e) {
		res.send(e);
	}
};

module.exports = {
	getDefault,
	getAllBlogPosts,
	getSinglePost,
	createBlogPost,
	updateSinglePost,
	deleteSinglePost,
};
