const port = 8000;
const db = require('./models/index')
const app = require('./app')
//  
db.instance.sync({force:true}).then(async() => {
    console.log('Database synced successfully.')
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((err) => {
    console.log(err)
})
