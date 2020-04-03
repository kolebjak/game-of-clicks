# Game of clicks
## About

This game was originally a dev test but i felt like expanding it. Let's see what happens. 

## Next

Next branch could contain refactor to graphql with subscriptions on backend. On frontend i'll get rid of less styles and use styled components.  

## Frontend
Running on `https://click-fe.herokuapp.com/`
Locally running on `localhost:3001`

## Server
Running on `https://click-api.herokuapp.com/`
Locally running on `localhost:3000`

Requires mongodb running.
### API
`
GET /api/leaderboard
`

Array of teams is returned ordered by number of clicks. 
```json
[
    {
        "team": "My team",
        "clicks": 7,
        "order": 1
    },
    {
        "team": "Another team",
        "clicks": 4,
        "order": 2
    }
]    
```

`
POST /api/click
`

request
```json
{
	"team": "My team",
	"session": "abcdef"
}
```

response
```json
{
    "your_clicks": 1,
    "team_clicks": 1
}
```
