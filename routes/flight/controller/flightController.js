const Flights = require('../model/Flights')
const axios = require("axios")


async function getFlight (req,res,next){
    // https://serpapi.com/search.json?engine=google_flights&departure_id=PEK&arrival_id=AUS&outbound_date=2024-06-20&return_date=2024-06-26&currency=USD&hl=en
    const {departure_id,arrival_id,outbound_date,return_date,adults,children,infants_in_seat,infants_on_lap,stops} = req.body
    const foundFlights = await axios.get(`https://serpapi.com/search.json?engine=google_flights&departure_id=${departure_id}&arrival_id=${arrival_id}&outbound_date=${outbound_date}&return_date=${return_date}&adults=${adults}&children=${children}&infants_in_seat=${infants_in_seat}&infants_on_lap=${infants_on_lap}&stops=${stops}&api_key=${process.env.SERPAPI_API_SECRET_KEY}`)
    const flights = foundFlights.data.best_flights
    const newFlight = await new Flights({
        flights:flights
    })
    await newFlight.save()
    res.json({message:"found flights",data:newFlight})
}



module.exports = {
    getFlight
}