pnpm run build
# pnpm run build-android
# git init
cp android/app/release/app-release.apk dist/assets/mousa-rate.apk
git add .
git commit -m "second commit"
# git branch -M main
# git remote add origin https://github.com/mfoud444/mousarate.git
git push -u origin main