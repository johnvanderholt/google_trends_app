#!/usr/bin/env bash
browserify ./trends_game/libs/unbundled_browserify.js -o  ./trends_game/libs/bundle.js
node build_markdown.js
node build_templates_to_js.js
gulp dev