var express = require('express');
var router = express.Router();
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')


/* GET home page. */
router.get('/:action', function(req, res, next) {
  var action = req.params.action
  if(action == 'currentuser'){

    if(req.session == null){
      res.json({
        confirmation: 'success',
        user: null
      })
      return
    }

    if(req.session.user == null){
      res.json({
        confirmation: 'success',
        user: null
      })
      return
    }
    controllers.profile.getById(req.session.user,false)
    .then(user => {
     res.json({
      confirmation: 'success',
      user: user
    })
  })
.catch(err => {
  res.json({
    confirmation: 'fail',
    user: null
  })
})

}
if(action == 'logout'){
  req.session.reset()
  res.json({
    confirmation: 'success'
  })
}
});

router.post('/:action', function(req, res, next) {
  var action = req.params.action
  if(action == 'register'){

  	controllers.profile.post(req.body,false)
  	.then( profile => {
      // set the session 
      req.session.user = profile.id

      res.json({
       user: profile
     })
    })
  	.catch(err => {
  		res.json({
  			message: err
  		})
  	})
  }
  if(action == 'login'){
    controllers.profile.get({username: req.body.username},true)
    .then( profile => {
      // set the session 

      if(profile.length == 0){
        res.json({
          confirmation: 'fail',
          msg: 'Profile not found'
        }) 
        return
      }
      var profile = profile[0]

      var isPasswordCorrect = bcrypt.compareSync(req.body.password,profile.password)
      if(isPasswordCorrect == false){
        res.json({
          confirmation: 'fail',
          msg: 'wrong password'
        })

        return
      }
      req.session.user = profile._id
        res.json({
          confirmation: 'success',
          user: profile.summary()
        }) 
    })
    .catch(err => {
      res.json({
        message: err
      })
    })
  }
});

module.exports = router;
