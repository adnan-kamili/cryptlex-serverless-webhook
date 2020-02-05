module.exports = (req, res) => {
    const response = {
        body: req.body,
        query: req.query,
        cookies: req.cookies
    };
    console.log(response);
    res.json(respinse);
}