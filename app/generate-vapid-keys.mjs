import pkg from 'web-push'
const {generateVAPIDKeys} = pkg
const vapidKeys = generateVAPIDKeys()

console.log('Paste the following keys in your .env file:')
console.log('-------------------')
console.log('NEXT_PUBLIC_VAPID_PUBLIC_KEY=', vapidKeys.publicKey)
console.log('VAPID_PRIVATE_KEY=', vapidKeys.privateKey)
