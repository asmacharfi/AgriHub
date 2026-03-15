---
name: run-test-starter
description: How to run, test, and configure this Angular (AgriHub) codebase. Use when setting up the app, running tests, or debugging environment issues.
---

# Run & Test Starter Skill

Practical setup and execution instructions for Cloud agents working on this codebase.

---

## 1. Setup

### Install dependencies

```bash
npm install
```

### Clean install (if node_modules corrupted)

```bash
npm run install:clean
```

This removes `node_modules` and `package-lock.json`, reinstalls, then starts the dev server.

---

## 2. Run the app

### Development server

```bash
npm start
```

- Serves at **http://localhost:4200**
- Uses `src/environments/environment.ts` (production: false)
- Hash routing: URLs use `#` (e.g. `http://localhost:4200/#/dashboard`)

### Production build

```bash
npm run build
```

- Output: `dist/`
- Uses `src/environments/environment.prod.ts` via `fileReplacements` in `angular.json`

---

## 3. Environment & config

### Environment files

| File | When used |
|------|-----------|
| `src/environments/environment.ts` | Dev (`npm start`, `ng serve`) |
| `src/environments/environment.prod.ts` | Prod build (`ng build --configuration=production`) |

Current env shape: `{ production: boolean }`. Add API URLs or feature flags here if needed.

### Backend API

- **URL:** `http://localhost:8080/myapp/data` (hardcoded in `src/app/pages/filtre/filtre.component.ts`)
- Data-dependent features (Filtre, etc.) need a backend on port 8080 or a mock.

### Google Maps

- Placeholder key in `src/index.html`: `VOTRE_CLE_API`
- Replace with a real key for Maps to work, or remove the script to avoid errors.

### Feature flags

- **None** in the codebase.
- To add: extend `environment.ts` / `environment.prod.ts` and inject where needed.
- To mock: set values in `environment.ts` before running tests.

---

## 4. Authentication / login

- **Login/Register:** UI only. No auth logic, guards, or API calls.
- **Routes:** Admin routes (`/dashboard`, `/user-profile`, etc.) are **not** protected.
- No token handling or auth interceptors.
- To test flows: navigate directly to `/login` or `/register`; no credentials required.

---

## 5. Testing

### Unit tests (Karma + Jasmine)

```bash
npm test
```

- Config: `src/karma.conf.js`
- Specs: `**/*.spec.ts` (loaded via `src/test.ts`)
- Browsers: Chrome
- Coverage: `coverage/` (HTML + lcov)

**Known issue:** `angular.json` test config references `src/styles.css`, but the app uses `src/styles.scss`. If tests fail on styles:

- Ensure `src/styles.css` exists (or create a minimal one), **or**
- Update `angular.json` test `styles` to `["src/styles.scss", "src/assets/scss/argon.scss"]` to match the build.

### E2E tests (Protractor)

```bash
npm run e2e
```

- Config: `e2e/protractor.conf.js`
- Specs: `e2e/src/**/*.e2e-spec.ts`
- Base URL: `http://localhost:4200/`
- Starts the dev server automatically.

**Known issue:** `e2e/src/app.e2e-spec.ts` expects `"Welcome to argon-dashboard-angular!"` in `app-root h1`, but the app shows different content (e.g. "Mondiales. Fiables. Exploitables."). Update the spec assertion to match the actual dashboard text, or assert on another stable element.

### Testing workflows by area

| Area | How to test |
|------|-------------|
| **Dashboard** | `npm start` → open `/#/dashboard`; E2E: update spec to match visible content |
| **Filtre / data** | Needs backend at `localhost:8080` or mock; unit test `FiltreComponent` with mocked HTTP |
| **Charts / visualization** | Unit tests for chart components; E2E for smoke checks |
| **Maps** | Requires Google Maps API key; mock or skip in CI |
| **Login / Register** | Manual or E2E; no auth logic to unit test |
| **Routing** | Unit test routing config; E2E for navigation flows |

---

## 6. Lint

```bash
npm run lint
```

Uses TSLint (Angular 14). Config in `angular.json` lint options.

---

## 7. Updating this skill

When you discover new setup steps, testing tricks, or runbook knowledge:

1. **Edit** `.cursor/skills/run-test-starter/SKILL.md`
2. **Add** under the relevant section (Setup, Run, Environment, Testing, etc.)
3. **Document** known issues and workarounds in the "Known issue" style above
4. **Commit** with a message like: `docs(skill): add X for run-test-starter`

Keep the skill minimal and action-oriented so agents can execute steps without extra context.
