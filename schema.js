export const typeDefs=`#graphql
type PhoneNumber {
    id: ID,
    name: String!,
    phone: String!
}
type Query {
    phoneNumbers:[PhoneNumber]
    phoneNumber(id:ID!):PhoneNumber
}
`
