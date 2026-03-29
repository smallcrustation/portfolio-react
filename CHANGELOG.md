# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-29

### Added

- Vite + TypeScript + React 19 toolchain; feature-based `src/` layout (`app/`, `features/`, `shared/`).
- Typed environment access (`src/shared/lib/env.ts`), structured logging stub, Vitest + Testing Library tests.
- GitHub Actions CI workflow; `.env.example`, `.nvmrc`, release notes (`RELEASE.md`).

### Changed

- Migrated from Create React App / React 16; navigation uses registered section refs instead of `getElementsByClassName`.
- Project portfolio content moved to `src/features/projects/data/projects.ts` with static image imports.

### Fixed

- Theme persistence: safe JSON parsing for `localStorage` day/night preference.
- Header mobile menu class uses boolean `&&` instead of bitwise `&`.
- Scroll and resize listeners cleaned up where applicable; `window.open` uses `noopener,noreferrer`.
