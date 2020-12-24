


module.exports = {
    postHello: async function (req, res, next) {
        let myRes = { name: "mohammad" }
        myRes.message = req.body.message
        return res.json(myRes)
    },
    greeting: async function (req, res, next) {
        const myRes = { message: `hello ${req.params.name}` }

        return res.json(myRes)
    },

}