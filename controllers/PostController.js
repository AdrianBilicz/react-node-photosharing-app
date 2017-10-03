var Post = require('../models/Post')
var Promise = require('bluebird')

module.exports = {
	get: function(params,isRaw){
		return new Promise(function(resolve,reject){
			//check the params for lat and long 
			console.log(params)
			if(params.lat !=null && params.lng!=null){
				var range = 50/6371
				params['geo'] = {
					$near: [params.lat,params.lng],
					$maxDistance: range
				}
				delete params['lat']
				delete params['lng']
			}
			console.log(params)
			Post.find(params,function(err, posts){
				if(err){
					reject(err)
					return
				}
				if(isRaw){

				resolve(posts)
				}else{
					var list = []
					posts.forEach(function(post,i){
						list.push(post.summary())
					})
					resolve(list)
				}
			})
		})

	},
	getById: function(id,isRaw){
		return new Promise(function(resolve,reject){
			Post.findById(id,function(err,post){
				if(err){
					reject(err)
					return
				}
				if(isRaw){

				resolve(post)
				}else{
					resolve(post.summary())
				}

			})
		})
	},
	post: function(params,isRaw){
		return new Promise(function(resolve,reject){
			Post.create(params,function(err,post){
				if(err){
					reject(err)
					return
				}
				if(isRaw){
				resolve(post)
				}else{
					resolve(post.summary())
				}
			})
		})
	}
}