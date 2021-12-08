require ('dotenv').config();
const app = require ('./app')
const connectdb = require ('./db/mongodb')
const { appConfig, dbConfig } = require ('./config')

async function initApp (appConfig, dbConfig){
    try {
        await connectdb(dbConfig)
        app.listen(appConfig.port, () => console.log(`connected on port ${appConfig.port}`))
    } catch (error) {
        console.error(error)
        process.exit(0);
    }
}

initApp(appConfig, dbConfig)