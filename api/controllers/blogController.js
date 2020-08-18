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

// const delete_a_task = (req, res) => {

// const update_a_task = (req, res) => {
// 	Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
// 			if (err)
// 					res.send(err);
// 			res.json(task);
// 	});
// };

// 	Task.deleteOne({
// 			_id: req.params.id
// 	}, function(err) {
// 			if (err)
// 					res.send(err);
// 			res.json({ message: 'Task successfully deleted' });
// 	});
// };

module.exports = {
	getDefault, getAllBlogPosts, createBlogPost,
	getSinglePost,
};
