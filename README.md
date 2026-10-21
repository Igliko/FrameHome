# samsung-home

Apple TV-style home screen for Samsung Tizen TVs, run through [TizenBrew](https://github.com/reisxd/TizenBrew).
No root; nothing is uninstalled.

## Install

In TizenBrew: Module Manager → add `gh/<your-username>/samsung-home`.

## Remote

- Left / Right: move between apps
- OK: open the app
- Red: settings: icon style, city for the weather, and which apps appear (order = the order you pick them)
- Yellow / Blue: move the selected app left / right
- Green: check screen (which icons loaded, and why not)

## Icons

The home screen shows each app's own icon from the TV, without the coloured box around it:
the box colour is detected and removed so only the logo is left. Three styles:

- `white`: every logo in white (default)
- `color`: logos keep their colours (very dark parts turn white so they stay visible)
- `original`: icons exactly as the TV has them, box included

If an icon's background is a picture rather than a plain colour, a simple symbol is shown instead.
The small `service.js` helper runs inside TizenBrew and lets the page read the icon files on the TV
(it only answers on the TV itself and only returns image files).

## Settings

The weather finds your location automatically from your internet connection, so it works anywhere with no setup.
Internet providers sometimes place you in a bigger city nearby; to fix that, open settings (Red), go up to
"city for the weather", press OK and type your city. Leave it empty to go back to automatic.
`PHOTO_SECONDS` at the top of the script in `index.html` sets how long each photo stays.

## Photo credits

Photos in `photos/` come from the [elementary OS wallpapers](https://github.com/elementary/wallpapers) collection (originally from Unsplash):
Peter Thomas, David Emrich, Ashim D'Silva, Benjamin Voros, Nattu Adnan, Aniket Deole, Ian Beckley, Paul Carmona, Brendon Porter and Ryan Gorley.

Weather: [Open-Meteo](https://open-meteo.com).
