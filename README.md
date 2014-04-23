# BeatForSpeed Server

## API calls:

### Register user
#### POST /users/register

### List all trips of current user
#### GET /users/&lt;userToken&gt;/trips

### View single trip
#### GET /trips/&lt;tripToken&gt;

### Create a new trip
#### POST /trips

### Send a trip update
#### POST /trips/&lt;tripToken&gt;/update
	
### End trip
#### POST /trips/&lt;tripToken&gt;/end