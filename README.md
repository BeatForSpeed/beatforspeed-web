# BeatForSpeed Server

## API calls:

### Register user
#### POST /users/register

### List all trips of current user
#### GET /users/<userToken>/trips

### View single trip
#### GET /trips/<tripToken>

### Create a new trip
#### POST /trips

### Send a trip update
#### POST /trips/<tripToken>/update
	
### End trip
#### POST /trips/<tripToken>/end