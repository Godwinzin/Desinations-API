import http from 'node:http'
import {getData} from "./db.js"
import { sendResponse } from './utils/JSONResponse.js';
import {getFilteredDestinations} from './controllers/queryOptions.js'

const PORT=3000
const server=http.createServer(async (req,res)=>{
    const destinations = await getData()
    
    const urlObj =new URL(req.url,`http://${req.headers.host}`)
    const queryObj= Object.fromEntries(urlObj.searchParams)


   if (urlObj.pathname === "/api" && req.method === "GET") {
       let filteredData=getFilteredDestinations(destinations,queryObj)
       sendResponse(res,200,filteredData)
    } 
    else if (req.url.startsWith('/api/continent') && req.method === "GET") {
        const continent = req.url.split('/').pop().toLowerCase();
        const filteredData = destinations.filter((destination) => {
            return destination.region.toLowerCase() === continent;
        });

        sendResponse(res, 200, filteredData);
    } 
    else if (req.url.startsWith('/api/country') && req.method === "GET") {
        const country = req.url.split('/').pop().toLowerCase();
        const filteredData = destinations.filter((destination) => {
            return destination.country.toLowerCase() === country;
        });

        sendResponse(res, 200, filteredData);
    } 
    else {
        sendResponse(res, 404, { message: "Route not found" });
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});