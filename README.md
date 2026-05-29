# BLACKJACK: ANTEFALL

BLACKJACK: ANTEFALL is a beta blackjack roguelite where you climb through escalating antes, clear Small Blind, Big Blind, and Boss Blind rounds, and spend win tokens on jokers and permanent upgrades. Each blind has a profit target, overflow cash converts into win tokens, and dropping below the run loss floor ends the run.

## Play

Download the Windows release zip from the GitHub Releases page, extract it, and run `BLACKJACK ANTEFALL.exe`.

## Development

Install dependencies:

```powershell
npm.cmd install
```

Run the Electron app locally:

```powershell
npm.cmd start
```

Build the Windows Electron folder:

```powershell
npm.cmd run dist
```

The built app is created in `dist/win-unpacked`.

## Version

Current version: `v1.0.0`
