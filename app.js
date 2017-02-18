var app = require('express')();

app.get('/', function(req, res) {
    res.json({message: 'Hello World!'});
});

app.get('/users/technoweenie', function(req, res) {
    res.set(
        {
            "Server": "GitHub-Mock.local",
            "Date": "Fri, 28 Jan 2017 02:31:55 GMT",
            "Content-Type": "application/json; charset=utf-8",
            "Content-Length": 1248,
            "Status": "200 OK",
            "X-RateLimit-Limit": 5000,
            "X-RateLimit-Remaining": 4992,
            "X-RateLimit-Reset": 1485553884,
            "Cache-Control": "private, max-age=60, s-maxage=60",
            "Vary": "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding",
            "ETag": "\"123456701aaf50ed0c83ad4123456789\"",
            "Last-Modified": "Fri, 02 Dec 2016 07:32:00 GMT",
            "X-OAuth-Scopes": "gist, user:email",
            "X-Accepted-OAuth-Scopes": "",
            "X-GitHub-Media-Type": "github.v3; format=json",
            "Access-Control-Expose-Headers": "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
            "Access-Control-Allow-Origin": "*",
            "Content-Security-Policy": "default-src 'none'",
            "Strict-Transport-Security": "max-age=31536000; includeSubdomains; preload",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "deny",
            "X-XSS-Protection": "1; mode=block",
            "X-Served-By": "q1234567cned3f5c4u15a34csddc1234",
            "X-GitHub-Request-Id": "ABCD:EFGH:25DA75D:2EF637A:12345679"
        }
    ).json(
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
    );
});

app.get('/gists', function(req, res) {
    res.set(
        {
            "Server": "GitHub-Mock.local",
            "Date": "Fri, 28 Jan 2017 02:31:55 GMT",
            "Content-Type": "application/json; charset=utf-8"
        }
    ).json(
        [
            {
                "url": "https://api.github.com/gists/12345678c62ca49gf313ahd156781234",
                "forks_url": "https://api.github.com/gists/12345678c62ca49gf313ahd156781234/forks",
                "commits_url": "https://api.github.com/gists/12345678c62ca49gf313ahd156781234/commits",
                "id": "12345678c62ca49gf313ahd156781234",
                "git_pull_url": "https://gist.github.com/12345678c62ca49gf313ahd156781234.git",
                "git_push_url": "https://gist.github.com/12345678c62ca49gf313ahd156781234.git",
                "html_url": "https://gist.github.com/12345678c62ca49gf313ahd156781234",
                "files": {
                    "file.html": {
                        "filename": "file.html",
                        "type": "text/html",
                        "language": "HTML",
                        "raw_url": "https://gist.githubusercontent.com/anonymous/12345678c62ca49gf313ahd156781234/raw/1234ac2e64b06898787920a14f85511be/file.html",
                        "size": 45934
                    }
                },
                "public": true,
                "created_at": "2017-01-28T01:29:29Z",
                "updated_at": "2017-01-28T01:29:29Z",
                "description": "just a test",
                "comments": 0,
                "user": null,
                "comments_url": "https://api.github.com/gists/12345678c62ca49gf313ahd156781234/comments",
                "truncated": false
            }
        ]
    );
});

app.get('/gists/:id', function(req, res) {
    res.set(
        {
            "Server": "GitHub-Mock.local",
            "Date": "Fri, 28 Jan 2017 02:31:55 GMT",
            "Content-Type": "application/json; charset=utf-8"
        }
    ).json(
        {
            "url": "https://api.github.com/gists/" + req.params.id,
            "forks_url": "https://api.github.com/gists/" + req.params.id + "/forks",
            "commits_url": "https://api.github.com/gists/" + req.params.id + "/commits",
            "id": req.params.id,
            "git_pull_url": "https://gist.github.com/" + req.params.id + ".git",
            "git_push_url": "https://gist.github.com/" + req.params.id + ".git",
            "html_url": "https://gist.github.com/" + req.params.id,
            "files": {
                "file.html": {
                    "filename": "file.html",
                    "type": "text/html",
                    "language": "HTML",
                    "raw_url": "https://gist.githubusercontent.com/anonymous/" + req.params.id + "/raw/12345678910abc/file.html",
                    "size": 45934
                }
            },
            "public": true,
            "created_at": "2017-01-28T01:29:29Z",
            "updated_at": "2017-01-28T01:29:29Z",
            "description": "just a test",
            "comments": 0,
            "user": null,
            "comments_url": "https://api.github.com/gists/" + req.params.id + "/comments",
            "truncated": false
        }
    );
});

app.post('/gists', function(req, res) {
    res.status(201).set(
        {
            "Server": "GitHub-Mock.local",
            "Date": "Fri, 28 Jan 2017 02:31:55 GMT",
            "Content-Type": "application/json; charset=utf-8"
        }
    ).json(
        {
            "url": "https://api.github.com/gists/d7b4325ac95ca49ef310aed14dfa8b15",
            "forks_url": "https://api.github.com/gists/d7b4325ac95ca49ef310aed14dfa8b15/forks",
            "commits_url": "https://api.github.com/gists/d7b4325ac95ca49ef310aed14dfa8b15/commits",
            "id": "d7b4325ac95ca49ef310aed14dfa8b15",
            "git_pull_url": "https://gist.github.com/d7b4325ac95ca49ef310aed14dfa8b15.git",
            "git_push_url": "https://gist.github.com/d7b4325ac95ca49ef310aed14dfa8b15.git",
            "html_url": "https://gist.github.com/d7b4325ac95ca49ef310aed14dfa8b15",
            "files": {},
            "public": false
        }
    );
});
app.delete('/gists/:id', function(req, res) {
    res.status(204).set(
        {
            "Server": "GitHub-Mock.local",
            "Date": "Fri, 28 Jan 2017 02:31:55 GMT"
        }
    ).end();
});

app.listen(3000);
