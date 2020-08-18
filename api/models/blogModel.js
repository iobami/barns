'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new Schema({
	title:  {
			type: String,
			required: 'Kindly enter the title of the post'
	},
	author: {
			type: String,
			required: 'Kindly enter the author of the post'
	},
	teaser: {
			type: String,
			required: 'Kindly enter the description or teaser for this post'
	},
	image: String,
	date: {
			type: String,
			required: 'Kindly enter the date of the post'
	},
	tags: [String]
});

// Collection name is images
const collectionName = process.env.DB_COLLECTION_NAME || '';
const Posts = mongoose.model(collectionName, BlogSchema);

module.exports = Posts;
