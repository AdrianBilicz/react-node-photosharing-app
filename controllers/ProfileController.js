var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt =require('bcryptjs')

module.exports = {
	get: function(params,isRaw){
		return new Promise(function(resolve,reject){
			Profile.find(params,function(err, profiles){
				if(err){
					reject(err)
					return
				}
				if(isRaw){

				resolve(profiles)
				}else{
					var list = []
					profiles.forEach(function(post,i){
						list.push(post.summary())
					})
					resolve(list)
				}
			})
		})

	},
	getById: function(id,isRaw){
		return new Promise(function(resolve,reject){
			Profile.findById(id,function(err,profile){
				if(err){
					reject(err)
					return
				}
				if(isRaw){

				resolve(comments)
				}else{

					resolve(profile)
				}

			})
		})
	},
	post: function(params,isRaw){

		return new Promise(function(resolve,reject){
			if(params['password']){
				params['password'] = bcrypt.hashSync(params.password,10)
			}
			Profile.create(params,function(err,profile){
				if(err){
					reject(err)
					return
				}
				if(isRaw){

				resolve(comments)
				}else{

					resolve(profile)
				}
			})
		})
	}
}