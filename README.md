<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>
<body style='font-family: "Inter", sans-serif;'>

# 🪔 vinayaka
`वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।`\
`अविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥`

**vinayaka** is cryptocurrency futures trading bot that uses [RSX](https://www.tradingview.com/script/20TzvKPk-Jurik-RSX/) (RSI with a smoothing function) under the hood.

## 🪙 assets
**vinayaka** focuses on BTC, ETH, BNB, XMR, DEFI, SOL and ELGD. if you want to focus on other assets, modify the `TARGET_ASSETS` constant at `src/constants/index.ts` and add your own symbols.

## ⚖️ declaration
**vinayaka** and its developers take NO responsibility over what you choose to do with it. this is merely a proof-of-concept and should not be used in practice without your own research and evaluation.

## ⚙️ installation
**vinayaka** requires a CLI that supports `node` v14+ is required to run this bot.
1. clone this repository by running ```git clone https://github.com/catusmagnus/cokebot.git``` in your preferred CLI.
2. add a `.env` file to the root of the cloned repository with your Binance `API_KEY` and `API_SECRET` (here's how to [get it](https://www.binance.com/en-IN/support/faq/360002502072)).
3. run `npm run trade` and enjoy!

## 🤳 installation (for phone users)
for phone users, [Termux](https://f-droid.org/en/packages/com.termux/) is recommended.
1. install the Termux app from [F-Droid](https://f-droid.org/en/packages/com.termux/) or [Google Play Store](https://play.google.com/store/apps/details?id=com.termux) (<a href='https://www.xda-developers.com/termux-terminal-linux-google-play-updates-stopped' style='color: indianred; font-weight: bold;'>deprecated</a>).
2. run `pkg install nodejs && pkg install npm` to install `node` and `npm`. if this command fails with a fetch look-up issue, try running `pkg upgrade` or `apt update && apt upgrade` or switching to another internet connection, then run the command again.
3. verify installation by running `node -v` and `npm -v` - these commands should print the current version of `node` and `npm`. if not, try step 3 again.
4. clone this repository by running ```git clone https://github.com/catusmagnus/cokebot.git``` in your preferred CLI.
5. run `cd vinayaka` and `touch .env && echo "API_KEY=<YOUR_API_KEY>" >> .env && echo "API_SECRET=<YOUR_API_SECRET>" >> .env` after replacing `<YOUR_API_KEY>` and `<YOUR_API_SECRET>`
6. run `cat .env` to verify your credentials.
7. run `npm run trade` and enjoy!

## ⚠️ troubleshooting
errors may originate from **Termux**, [**binance-api-node**](https://www.npmjs.com/package/binance-api-node), or from the bot itself. please [open an issue](https://github.com/catusmagnus/vinayaka/issues) with us if it's the latter.
</body>
