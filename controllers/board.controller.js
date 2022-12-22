const items = [] 

exports.list = (req,res) => {
    res.render("board/list.html", {items})
}
exports.write = (req,res) => {
    const {name, content, subject} = req.body
    items.push({content, name, subject})
    res.redirect(`/board/view?index=${items.length-1}`)
    console.log(items)
}
exports.view = (req, res) => {
    const {index} = req.query
    const item = {
        ...items[index],index}
    res.render('board/view.html', {item})
}
exports.modify = (req,res) => {
    const {index} = req.query
    const item = {
        ...items[index],index}

    res.render('board/modify.html', {item})
}

exports.modified = (req,res) => {
    const {index,subject,content,name} = req.body
    items[index].subject = subject
    items[index].content = content
    items[index].name = name

    res.redirect(`/board/view?index=${index}`)
}

exports.delete = (req,res) => {
    const {index} = req.body
    items.splice(index,1)
    res.redirect("/board/list")
}