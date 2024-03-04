import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(process.env.NEXT_PUBLIC_FB_SECRET),
    databaseURL: process.env.NEXT_PUBLIC_FB_DATABASE_URL,
  })
}

export { admin }
