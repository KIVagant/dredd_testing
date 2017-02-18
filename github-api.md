FORMAT: 1A
HOST: https://api.github.com/

# Github API test

Just a simple test of GitHub API

## Users Collection [/users]

### OAuth Non-Web authentication flow: load user data [GET /users/technoweenie]

+ Request JSON (application/json; charset=utf-8)

    + Headers

            Authorization: token 12345

+ Response 200 (application/json; charset=utf-8)

    + Headers

            Server: GitHub.com
            Date: Fri, 28 Jan 2017 02:30:40 GMT
            Content-Length: 1248
            Status: 200 OK
            X-RateLimit-Limit: 5000
            X-RateLimit-Remaining: 4992
            X-RateLimit-Reset: 1485553884
            Cache-Control: private, max-age=60, s-maxage=60
            Vary: Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding
            ETag: "123456701aaf50ed0c83ad4123456789"
            Last-Modified: Fri, 02 Dec 2016 07:32:00 GMT
            X-OAuth-Scopes: gist, user:email
            X-GitHub-Media-Type: github.v3; format=json
            Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
            Access-Control-Allow-Origin: *
            Content-Security-Policy: default-src 'none'
            Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
            X-Content-Type-Options: nosniff
            X-Frame-Options: deny
            X-XSS-Protection: 1; mode=block
            X-Served-By: q1234567cned3f5c4u15a34csddc1234
            X-GitHub-Request-Id: ABCD:EFGH:A5DA75D:2EF637A:12345678
            Connection: close

    + Body

            {
              "login": "technoweenie",
              "id": 21,
              "avatar_url": "https://avatars.githubusercontent.com/u/21?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/technoweenie",
              "html_url": "https://github.com/technoweenie",
              "followers_url": "https://api.github.com/users/technoweenie/followers",
              "following_url": "https://api.github.com/users/technoweenie/following{/other_user}",
              "gists_url": "https://api.github.com/users/technoweenie/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/technoweenie/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/technoweenie/subscriptions",
              "organizations_url": "https://api.github.com/users/technoweenie/orgs",
              "repos_url": "https://api.github.com/users/technoweenie/repos",
              "events_url": "https://api.github.com/users/technoweenie/events{/privacy}",
              "received_events_url": "https://api.github.com/users/technoweenie/received_events",
              "type": "User",
              "site_admin": true,
              "name": "risk danger olson",
              "company": "GitHub",
              "blog": "http://techno-weenie.net",
              "location": "Louisville, CO",
              "email": "technoweenie@gmail.com",
              "hireable": null,
              "bio": ":metal:",
              "public_repos": 164,
              "public_gists": 105,
              "followers": 2328,
              "following": 17,
              "created_at": "2008-01-14T04:33:35Z",
              "updated_at": "2017-01-24T10:45:13Z"
            }

    + Schema

            {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties": {
                    "login": {
                        "type": "string"
                    },
                    "id": {
                        "type": "number"
                    },
                    "avatar_url": {
                        "type": ["string", "null"]
                    },
                    "gravatar_id": {
                        "type": ["string", "null"]
                    },
                    "url": {
                        "type": ["string", "null"]
                    },
                    "html_url": {
                        "type": ["string", "null"]
                    },
                    "followers_url": {
                        "type": ["string", "null"]
                    },
                    "following_url": {
                        "type": ["string", "null"]
                    },
                    "gists_url": {
                        "type": ["string", "null"]
                    },
                    "starred_url": {
                        "type": ["string", "null"]
                    },
                    "subscriptions_url": {
                        "type": ["string", "null"]
                    },
                    "organizations_url": {
                        "type": ["string", "null"]
                    },
                    "repos_url": {
                        "type": ["string", "null"]
                    },
                    "events_url": {
                        "type": ["string", "null"]
                    },
                    "received_events_url": {
                        "type": ["string", "null"]
                    },
                    "type": {
                        "type": ["string", "null"]
                    },
                    "site_admin": {
                        "type": "boolean"
                    },
                    "name": {
                        "type": ["string", "null"]
                    },
                    "company": {
                        "type": ["string", "null"]
                    },
                    "blog": {
                        "type": ["string", "null"]
                    },
                    "location": {
                        "type": ["string", "null"]
                    },
                    "email": {
                        "type": ["string", "null"]
                    },
                    "hireable": {
                        "type": ["boolean", "null"]
                    },
                    "bio": {
                        "type": ["string", "null"]
                    },
                    "public_repos": {
                        "type": ["number", "null"]
                    },
                    "public_gists": {
                        "type": ["number", "null"]
                    },
                    "followers": {
                        "type": ["number", "null"]
                    },
                    "following": {
                        "type": ["number", "null"]
                    },
                    "created_at": {
                        "type": ["string", "null"]
                    },
                    "updated_at": {
                        "type": ["string", "null"]
                    }
                }
            }

## Gists Collection [/gists]

### Load all Gists [GET /gists]

+ Request JSON (application/json; charset=utf-8)

+ Response 200 (application/json; charset=utf-8)
    + Attributes (array[Gist], optional)

### Creating new Gist [POST]

+ Request JSON (application/json; charset=utf-8)

    + Headers

            Accept: application/json
            Authorization: token 12345

    + Body

            {
                "description": "This is a simple test file for gist API check",
                "public": false,
                "files": {
                    "file1.md": {
                        "content": "# Hello, world\n- This is just a GitHub API testing result"
                    }
                }
            }

    + Schema

            {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties": {
                    "files": {
                        "type": "object"
                    },
                    "description": {
                        "type": ["string"]
                    },
                    "public": {
                        "type": ["boolean"]
                    }
                },
                "required": [ "files" ]
            }

+ Response 201 (application/json; charset=utf-8)
    + Attributes (Gist)

### Load a Gist [GET /gists/{id}]

+ Request JSON (application/json; charset=utf-8)

+ Parameters
    + id: a123456bcd (string) - The ID of the Gist.

+ Response 200 (application/json; charset=utf-8)
    + Attributes (Gist)

### Delete a Gist [DELETE /gists/{id}]

+ Parameters
    + id: a123456bcd (string) - The ID of the Gist.

+ Response 204

# Data Structures

## Gist

This is a demo documentation example. Not all fields was included.

+ id: a123456bcd (string, required)
+ url: https://api.github.com/gists/{id} (string)
+ forks_url: https://api.github.com/gists/{id}/forks (string)
+ commits_url: https://api.github.com/gists/{id}/commits (string)
+ git_pull_url: https://gist.github.com/{id}.git (string)
+ public: false (boolean)
