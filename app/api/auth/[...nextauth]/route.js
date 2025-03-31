const { authOption } = require("@/libs/next-auth");
const { default: NextAuth } = require("next-auth");
const handle = NextAuth(authOption)
export { handle as GET, handle as POST }