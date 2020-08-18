'use strict';
module.exports = function(app) {
    const blog = require('../controllers/blogController');

    // Blog Routes

		app.route('/')
			.get(blog.getDefault);
				
    app.route('/api/v1/posts')
			.get(blog.getAllBlogPosts)
			.post(blog.createBlogPost);

		app.route('/api/v1/posts/:id')
			.get(blog.getSinglePost)
			.put(blog.updateSinglePost)
			.delete(blog.deleteSinglePost);

};
