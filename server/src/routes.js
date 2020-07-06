const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicyController = require('./policies/AuthenticationPolicyController')

module.exports = (app) => {
    app.post('/register', AuthenticationPolicyController.register, AuthenticationController.register)
}
