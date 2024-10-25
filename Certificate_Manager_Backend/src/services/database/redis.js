const Redis = require('ioredis');
const redis = new Redis();


redis.on('connect', ()=>{
console.log("client connected to redis...")
})
redis.on('ready', ()=>{
    console.log("client connected to redis and ready to use...")
    })

redis.on('error', (err)=>{
    console.log(err.message)
    })

redis.on('end', ()=>{
        console.log("client disconnected from redis...")
        })
        
process.on('SIGINT', ()=>{
           redis.quit()
        })
module.exports = redis;