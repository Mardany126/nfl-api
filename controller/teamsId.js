const teams = require("../teams")

const getTeams = (request, response) => {
    return response.send(teams)
}