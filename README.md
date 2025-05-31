# Slash Search Box Extension

A lightweight browser extension that allows you to quickly focus on search boxes or textareas by pressing the `/` (slash) key. This is especially useful for users who want to navigate websites more efficiently using the keyboard.

## Features

- Instantly focuses the first visible search input or textarea when you press `/`.
- Works on most websites with search boxes or fields containing "search", "find", or "ask" in their placeholder text.
- Prevents interfering with typing in existing input fields.
- Smoothly scrolls the focused input into view.

## How It Works

When you press the `/` key (outside of an input or textarea), the extension searches for input fields or textareas with placeholders containing "search", "find", or "ask". The first matching field is focused and scrolled into view.

## Installation

1. Clone or download this repository.
2. Open your browser's extensions page (e.g., `chrome://extensions/` for Chrome).
3. Enable "Developer mode".
4. Click "Load unpacked" and select the project directory.

## Usage

- Navigate to any website.
- Press `/` (slash) on your keyboard.
- The search box or relevant input will be focused automatically.

## Development

The main logic is in `content.js`. The extension listens for the `/` key and focuses the appropriate input field.

## License

MIT License