# Frontend
Running on `https://click-fe.herokuapp.com/`
Locally running on `localhost:3001`

# Server
Running on `https://click-api.herokuapp.com/`
Locally running on `localhost:3000`

Requires mongodb running.
## API
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
