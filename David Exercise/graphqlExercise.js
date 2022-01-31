const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

const allFriends = [{
    id: 1,
    name: 'danni',
    age: 10
},
{
    id: 2,
    name: 'musa',
    age: 11
},
{
    id: 3,
    name: 'lola',
    age: 14
},
{
    id: 4,
    name: 'victor',
    age: 9
},
{
    id: 5,
    name: 'fatimoh',
    age: 13
}]

const schema = buildSchema(`
    type Friends{
        id:Int!,
        name: String!
        age:Int!
    },

    type Query {
        getFriends: [Friends]
        getFriendsFriend(id: Int!, name:String): Friends
    }

`)

const root = {
    getFriends: () => allFriends,
    getFriendsFriend: (args) => allFriends.find(friend => friend.id === args.id && friend.name == args.name)

}

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(4000, () => {
    console.log('running a graphql on port 4000')
})