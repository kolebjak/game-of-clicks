# App
Running on `https://click-api.herokuapp.com/`

# API

## leaderboard
`
GET /api/leaderboard
`
### response
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

## click
`
POST /api/click
`

### request
```json
{
	"team": "My team",
	"session": "abcdef"
}
```

### response
```json
{
    "your_clicks": 1,
    "team_clicks": 1
}
```
