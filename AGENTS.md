# AGENTS.md

## Cursor Cloud specific instructions

### Overview

AgriHub is an Angular 14 SPA (fork of Argon Dashboard Angular) for exploring agricultural/environmental datasets. The frontend runs on port 4200 via `ng serve`. An optional Java/Spring backend at `localhost:8080` powers the data-filtering feature (Filtre page) but is **not** included in this repo.

### Node.js

Requires **Node.js 18** (Angular 14 is not compatible with Node 22+). The VM snapshot uses `nvm` with Node 18 set as default.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install --legacy-peer-deps` |
| Dev server | `npx ng serve --host 0.0.0.0 --port 4200` |
| Build | `npx ng build` |
| Lint | `npx tslint -p src/tsconfig.app.json -c tslint.json` |
| Unit tests | `CHROME_BIN=$(which google-chrome) npx ng test --watch=false --browsers=ChromeHeadless` |

### Gotchas

- **`--legacy-peer-deps` required**: `@angular-slider/ngx-slider@17` declares Angular 17 peer deps but works at runtime with Angular 14. Without `--legacy-peer-deps`, `npm install` fails.
- **`ng lint` does not work out of the box**: The `@angular-devkit/build-angular:tslint` builder is no longer bundled. Use `npx tslint` directly instead.
- **Test config references `src/styles.css`**: The `angular.json` test target lists `src/styles.css` but the project only has `src/styles.scss`. An empty `src/styles.css` is created to unblock `ng test`.
- **Case-sensitive `Charts` directory**: The original repo had `src/app/pages/Charts/` (capital C), but all imports reference `charts` (lowercase). On Linux this fails. The directory has been renamed to `charts`.
- **6 pre-existing test failures**: `ng test` reports 6 failures out of 23 specs — these are pre-existing issues (missing module imports in spec TestBed configs, Google Maps API not available in test context). The 17 passing tests confirm the app compiles and renders correctly.
