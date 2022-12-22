const items = []

exports.list = (req,res) => {
    res.render('list page')
}

exports.write = (req,res) => {
    res.send('write page')
}

exports.modify = (req,res) => {
    res.send('modify page')
}