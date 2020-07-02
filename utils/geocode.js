const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicmF3YXQ3MjAwIiwiYSI6ImNrYzEyMm01ZDA4YzMyc3BoeTBycHFhZ20ifQ.h5bCMc9UabI4mC3HCnxefQ'      
    request({url:url,json:true},(error,{body})=>{
    if(error){
                     callback('Inable to connect to weather service',undefined)
       }
    else if(body.features.length===0){
                  callback('location not entered correctly',undefined)
     }
     else{
                callback(undefined,{
                        longitude: body.features[0].center[0],
                        latitude: body.features[0].center[1],
                        location: body.features[0].place_name
                  })
     }
  })
  
  }
  module.exports=geocode