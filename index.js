const express = require('express')
const teams = require('./teams')
const app = express()


app.get("/", (request, response) => {
    return response.send('Football Teams')
})

app.get("/teams", getTeams = (request, response) => {
    return response.send(teams)
})



app.listen(1400, () => {
    console.log('Listening on port 1400...') // eslint-disable-line no-console
})
