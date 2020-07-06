const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }
        catch(err){
            res.status(400).send({
                message: `${req.body.email} is already in use.`
            })
        }
    }
}
