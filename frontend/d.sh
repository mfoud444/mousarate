#!/bin/bash
pnpm run build
cp src/views/home/Steps/model.json /home/mfoud/Desktop/htdocs/htdocs/wordpress/wp-content/plugins/health-diagnosis-plugin/hd-plugin/frontend/dist/assets
cp src/views/home/Steps/weights.bin /home/mfoud/Desktop/htdocs/htdocs/wordpress/wp-content/plugins/health-diagnosis-plugin/hd-plugin/frontend/dist/assets
