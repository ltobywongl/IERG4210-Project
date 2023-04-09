import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "abc@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log(JSON.stringify(credentials))
        const res = await fetch(`http://s59.ierg4210.ie.cuhk.edu.hk/api/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        console.log(JSON.stringify(user))

        if (res.ok && user) {
          return user
        }
        return null
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      //console.log(token);
      if (user) {
        token.user = user
      }
      return Promise.resolve(token)
    },
    async session({ session, token, user }) {
      session.user.role = user?.role ? user.role : token.user.role
      session.user.id = user?.id ? user.id : token.user.id
      return session;
    },
  },
}
export default NextAuth(authOptions)