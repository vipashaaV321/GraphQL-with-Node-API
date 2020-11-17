import express from "express"
import resolvers from "./resolvers"
import schema from "./schema"
import {graphqlHTTP} from "express-graphql"
import { graphql } from "graphql"

const app=express()
app.get("/",(req,res)=>{
    res.send("Graph-QL API")
})

const root={vip:()=>console.log("GraphQl")}
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))
app.listen(1234,()=>console.log("Running server at 1234"))