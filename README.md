# Coding Challenge

## Notes

1. I have tried to build this site without the use of any technologies outside the four mentioned in the challenge instructions. The only deviation from this is the 'simplehttpweb.py' file required to serve the site. Without the use of a good backend framework, however, the site is much less DRY than I would have liked. Tools that would allow me to render HTML partials, and avoid reusing large segments of the markup, are unavailable. If I have misinterpreted this restriction, I would be happy to refactor the site with access to any additional tools I might have otherwise thought off limits.

2. The authentication/authorization system used to run the site is not secure. By simply storing the user ID in the browser's cookie, and checking for its presence/content to determine whether or not the user is logged in, is not typically a safe way to manage identity. The reason I implemented it this way is because normal authenication would create a session ID that is stored in both the user's browser and the user table in a serverside database, and subsequently comparing the two to determine if the user is logged in. Without access to a database, however, this is not possible to implement.

## Development

### Launching the development server
To launch the application
> python simplehttpweb.py
