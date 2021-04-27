const express = require("express")
const teams = require("./teams")
const { response } = require("express")
const app = express()

app.get("/", (request, response) => {
  return response.send("Football Teams")
})

app.get(
  "/teams",
  (getTeams = (request, response) => {
    return response.send(teams)
  })
)

app.get("/teams/:id", (request, response) => {
  const teamID = teams.find((team) => team.id === parseInt(request.params.id))
  return response.send(teamID)
  console.log(request, response)
})

app.listen(1400, () => {
  console.log("Listening on port 1400...") // eslint-disable-line no-console
})
