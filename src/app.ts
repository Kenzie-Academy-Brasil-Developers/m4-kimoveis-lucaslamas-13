import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import usersRoutes from "./routes/users.routes"
import { loginRouters } from "./routes/login.routes"


const app: Application = express()
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/login", loginRouters)
app.use(handleErrors)


export default app