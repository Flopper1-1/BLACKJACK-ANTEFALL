# Changelog

## v1.0.2

- Updated loss floor to update per blind.
- Updated blind target scaling to 1.5x.
- Fixed token conversion logic (1 token per $50 overflow).
- Updated Discord Rich Presence to include Ante, Quota (Target), and Cash.
- Added GitHub download button to Discord Rich Presence.
- Added preload script for secure IPC communication.

## v1.0.1

- Updated Electron to version 42.3.0.
- Cleaned up package.json dependencies.

## v1.0.0 - Initial Electron Release

- Packaged BLACKJACK: ANTEFALL as a Windows Electron desktop app.
- Added Start Run/Menu flow and game-over choices for New Run or Menu.
- Fixed the starting target display to use the initial `$300` ante target.
- Fixed blind clearing at `>= target`.
- Converted full `$50` chunks of overflow cash into win tokens when a blind is cleared.
- Prevented starting another hand after beating a blind target.
- Reworked bet controls with clean increment/decrement buttons, Min, and Max.
- Kept the selected bet amount sticky after winning a hand.
- Added game audio for card draw, loss/bust, push, and win outcomes.
