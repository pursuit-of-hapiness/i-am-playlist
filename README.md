# This is awful

# i-am-playlist

## Workflow

* User login with spotify to get access token
* GET list of user's playlists
* Look for a playlist with owner ID 'spotifydiscover' - take its playlist_id
* Look for a playlist with name 'My Discover Weekly Picks' - take its playlist_id
* GET the list of tracks using the spotifydiscover-playlist_id
* Strip the 'spotify track URIs' off the track objects and turn into an comma-separated string
* Did the user have a playlist called 'My Discover Weekly Picks'?
* If yes, POST create a playlist with name 'My Discover Weekly Picks'
* Use the 'spotify track URIs' string to add these songs to the playlist called 'My Discover Weekly Picks'

## Endpoint docs

### Get a List of a User's Playlists

|Get a List of a User's Playlists||
|---|---|
|Request Parameters:|user_id |
|Endpoint:|https://api.spotify.com/v1/users/{user_id}/playlists |
|Method: |GET |
|OAuth Scope: |playlist-read-private, playlist-read-collaborative  |
|Link to docs for this endpoint|https://developer.spotify.com/web-api/get-list-users-playlists/|

#### Request

```
GET /v1/users/mcelearr/playlists HTTP/1.1
Host: api.spotify.com
Accept: application/json
Content-Type: application/json
Accept-Encoding: gzip, deflate, compress
Authorization: Bearer {Access Token Here}
```

#### Response

JSON object return is an array of playlist objects. This is what the 'discover weekly' object for the user mcelearr (me) looks like for this week: 

```javascript
{
  "href" : "https://api.spotify.com/v1/users/mcelearr/playlists?offset=0&limit=20",
  "items" : [ {
    "collaborative" : false,
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/spotifydiscover/playlist/4yyIpGk9RDnP4l4nDw5fZq"
    },
    "href" : "https://api.spotify.com/v1/users/spotifydiscover/playlists/4yyIpGk9RDnP4l4nDw5fZq",
    "id" : "4yyIpGk9RDnP4l4nDw5fZq",
    "images" : [ {
      "height" : null,
      "url" : "https://u.scdn.co/images/pl/default/540efd75f5fc93c74787a375c39e4597c0975be8",
      "width" : null
    } ],
    "name" : "Discover Weekly",
    "owner" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotifydiscover"
      },
      "href" : "https://api.spotify.com/v1/users/spotifydiscover",
      "id" : "spotifydiscover",
      "type" : "user",
      "uri" : "spotify:user:spotifydiscover"
    },
    "public" : false,
    "snapshot_id" : "3Lp9A8/EubVnUbuoZeyU0WWznVIjXpPSkGffs4FD6ZMZopgo1nXELX/hi25GCVqD",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/users/spotifydiscover/playlists/4yyIpGk9RDnP4l4nDw5fZq/tracks",
      "total" : 30
    },
    "type" : "playlist",
    "uri" : "spotify:user:spotifydiscover:playlist:4yyIpGk9RDnP4l4nDw5fZq"
  }
  ```
  
### Get a Playlist’s Tracks

|Get a Playlist’s Tracks||
|---|---|
|Request Parameters:|user_id, playlist_id |
|Endpoint:|https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks |
|Method: |GET |
|OAuth Scope: |-  |
|Link to docs for this endpoint|https://developer.spotify.com/web-api/get-playlists-tracks/|

#### Request

```
GET /v1/users/spotifydiscover/playlists/4yyIpGk9RDnP4l4nDw5fZq/tracks HTTP/1.1
Host: api.spotify.com
Accept: application/json
Content-Type: application/json
Accept-Encoding: gzip, deflate, compress
Authorization: Bearer {Access Token Here}
```

#### Response
What comes back is track objects in an array called items. Here is the first track object that came back from the object request:

```javascript
{
    "added_at" : "2016-07-25T04:37:44Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotifydiscover"
      },
      "href" : "https://api.spotify.com/v1/users/spotifydiscover",
      "id" : "spotifydiscover",
      "type" : "user",
      "uri" : "spotify:user:spotifydiscover"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6QEwVh0RYB2c5PfXViQu8L"
        },
        "href" : "https://api.spotify.com/v1/albums/6QEwVh0RYB2c5PfXViQu8L",
        "id" : "6QEwVh0RYB2c5PfXViQu8L",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8b42b5bd8b1402e2b7e012f5f50ae3500526863d",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/37746c248e0d34098ab644a25261ee3633671eba",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/cdf76c42f5d1db20b1214a851c5d872a92a4c1e0",
          "width" : 64
        } ],
        "name" : "AS",
        "type" : "album",
        "uri" : "spotify:album:6QEwVh0RYB2c5PfXViQu8L"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2J3LwjEkmryU6BSAubwbMF"
        },
        "href" : "https://api.spotify.com/v1/artists/2J3LwjEkmryU6BSAubwbMF",
        "id" : "2J3LwjEkmryU6BSAubwbMF",
        "name" : "Amnesia Scanner",
        "type" : "artist",
        "uri" : "spotify:artist:2J3LwjEkmryU6BSAubwbMF"
      } ],
      "available_markets" : [ "AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID" ],
      "disc_number" : 1,
      "duration_ms" : 149574,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "UK7MC1500245"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5oMCV9ck4CLZ44Ta9NY9h1"
      },
      "href" : "https://api.spotify.com/v1/tracks/5oMCV9ck4CLZ44Ta9NY9h1",
      "id" : "5oMCV9ck4CLZ44Ta9NY9h1",
      "name" : "AS Chingy",
      "popularity" : 29,
      "preview_url" : "https://p.scdn.co/mp3-preview/6e3c32138bf03cf4a5c6d4ec22d13a2f607de933",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:5oMCV9ck4CLZ44Ta9NY9h1"
    }
  }
  ```
  
### Create a Playlist

|Create a Playlist||
|---|---|
|Request Parameters:|user_id |
|Endpoint:|https://api.spotify.com/v1/users/{user_id}/playlists |
|Method: |POST |
|Body: |name of playlist and public? boolean |
|OAuth Scope: |playlist-modify-private, playlist-modify-public  |
|Link to docs for this endpoint|https://developer.spotify.com/web-api/create-playlist/|

#### Request

```
POST /v1/users/mcelearr/playlists HTTP/1.1
Host: api.spotify.com
Content-Length: 44
Accept-Encoding: gzip, deflate, compress
Accept: application/json
User-Agent: Spotify API Console v0.1
Content-Type: application/json
Authorization: Bearer {Access Token Here}
```

### Add Tracks to a Playlist

|Add Tracks to a Playlist||
|---|---|
|Request Parameters:|user_id, playlist_id |
|Endpoint:|https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks |
|Method: |POST |
|Body: |array of Spotify URI strings |
|OAuth Scope: |playlist-modify-private, playlist-modify-public  |
|Link to docs for this endpoint|https://developer.spotify.com/web-api/add-tracks-to-playlist/|

#### Request

```
POST /v1/users/mcelearr/playlists/3DHC7FZ9w9y5zoOmIpavwv/tracks?uris=spotify%3Atrack%3A0AoBVHrn422YM52l4TAS0P HTTP/1.1
Host: api.spotify.com
Content-Length: 0
Accept-Encoding: gzip, deflate, compress
Accept: application/json
User-Agent: Spotify API Console v0.1
Content-Type: application/json
Authorization: Bearer {Access Token Here}
```
