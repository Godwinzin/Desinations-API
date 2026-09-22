# Destination Finder API

A modular, lightweight Node.js HTTP server API that allows users to query, search, and filter a list of travel destinations based on various criteria like name, category, price, rating, region, or country.

---

## Project Structure

```text
my-app/
├── controllers/
│   └── queryOptions.js.js   # Contains URL search parameter filtering logic
├── utils/
│   └── JSONResponse.js            # Helper function for sending JSON HTTP responses
├── data.js                        # Exported list of destination objects
├── server.js                      # Core HTTP server and endpoint routing logic
├── db.js                          # Returns destination data as async function
└── package.json                   # Node.js project configuration (ES Modules enabled)