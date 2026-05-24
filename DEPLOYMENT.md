# Deployment

The app is configured to be served from:

https://gallego.top/tecleador/

Vite uses `/tecleador/` as its production base path, so generated asset URLs are relative to that subdirectory.

Build the production bundle with:

```bash
npm run build
```

Publish the contents of `dist/` to the `/tecleador/` directory on the web server.

Recommended server headers:

```text
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```
