const request=require('request')
const forecast= (longitude,latitude,callback)=>{
    const url="http://api.weatherstack.com/forecast?access_key=aad8e7b5375acc0cff91b2e109da537b&query="+latitude+","+longitude+"&units=f"
    request({url:url,json:true},(error,{body})=>{
           if(error){
                            callback('Inable to connect to weather service',undefined)
              }
           else if(!body.forecast){
                         callback('location not entered correctly',undefined)
            }
            else{
                       callback(undefined,''+(body.current.weather_descriptions)[0]+'It is currently'+body.current.temperature+'')
            }
         })
   
   }
   module.exports=forecast