const OAuth = require('oauthio')
const keys = require('../../config/keys')

module.exports = app => {

  app.get('/oauth/redirect', OAuth.redirect((result, req, res) => {
        console.log(result);    
      })
    );
  
    app.get('/signin', OAuth.auth('spotify', keys.oauthRedirect ));

}