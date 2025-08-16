# KubeSphere Console (Angular 19)

Angular 19 rewrite of the KubeSphere Console.

## Prerequisites
- Node.js >= 18
- npm >= 9
- Docker (optional)

## Quick start
```bash
npm ci
npm start
# open http://localhost:4200
```

## Runtime configuration
Edit `src/assets/config.json`:
```json
{ "apiBaseUrl": "/api", "wsBaseUrl": "ws://localhost:8000/ws" }
```

## Build
```bash
npm run build
```
Output: `dist/ks-console-ng/browser`

## Docker
```bash
docker build -t ks-console-ng:latest .
docker run -p 8000:8000 ks-console-ng:latest
```

## Lint
```bash
npm run lint
```