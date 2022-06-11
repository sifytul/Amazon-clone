import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID, // process.env >> environmental variable
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  
  
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID, // process.env >> environmental variable
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID, // process.env >> environmental variable
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})