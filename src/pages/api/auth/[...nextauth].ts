import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        try {
          const client = await clientPromise;
          const db = client.db();
          const users = db.collection('users');
          
          const user = await users.findOne({ 
            email: String(credentials.email).toLowerCase(),
            verified: true 
          });
          
          if (!user) return null;
          
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) return null;
          
          return { 
            id: user._id.toString(), 
            name: user.name || 'Admin', 
            email: user.email 
          } as any;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
