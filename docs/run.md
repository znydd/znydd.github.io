# Running the project

Run these commands from the repository root, where `index.html` lives.

## Requirements

- Python 3.
- The standalone Tailwind CSS compiler at `_dev/tailwindcss`.

No Node.js, npm, pip packages, or virtual environment is needed.

## First-time setup

Check that Python is available:

```bash
python3 --version
```

The Tailwind executable is ignored by Git, so a fresh clone needs its own copy.
If `_dev/tailwindcss` already exists, skip the download.

For Linux x86-64, download the version used by this project:

```bash
curl -L --fail \
  https://github.com/tailwindlabs/tailwindcss/releases/download/v4.3.3/tailwindcss-linux-x64 \
  -o _dev/tailwindcss
chmod +x _dev/tailwindcss
```

For another operating system or CPU, choose the matching executable from the
[official Tailwind releases](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.3)
and save it as `_dev/tailwindcss`.

## Development

```bash
python3 _dev/run.py dev
```

Open **http://127.0.0.1:8000/** in your browser.

This starts the local server and Tailwind watcher. Save your HTML, JavaScript,
or images to refresh the browser automatically. Tailwind rebuilds
`assets/styles.css` when its source or detected classes change, and the browser
refreshes after that output changes.

Press **Ctrl+C** to stop both the server and the watcher.

The reload script is injected into local HTML responses only; it is never
written into your HTML files.

## Production build

```bash
python3 _dev/run.py build
```

This compiles `_dev/input.css` into minified `assets/styles.css` and exits.

Run it before committing website changes, and include the generated
`assets/styles.css` in your commit. GitHub Pages serves the committed files;
visitors do not need Python or Tailwind.

## Files to edit

- `index.html`: portfolio content and layout.
- `_dev/input.css`: Tailwind imports, fonts, and theme settings.
- `assets/main.js`: website JavaScript.
- `assets/images/`: images.
