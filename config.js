/* Paperhand runtime config.
   Sits next to index.html. Edit, commit, done: no rebuild, no bundler.
   Anything left out keeps the value baked into the app. */

window.PAPERHAND_CONFIG = {
  // deployed 20 Sep 2026 on Robinhood Chain, chain 4663
  VAULT: "0xb809C142B5c4D372D54aC928Ceb353d346C5f72F",

  // the PAPERHAND token, once it exists. Empty means vaults are free.
  PAPERHAND: "",

  // swap in a dedicated endpoint if the public one rate limits your domain
  RPC: "https://rpc.mainnet.chain.robinhood.com",
  EXPLORER: "https://robin.etherscan.io"
};

window.PAPERHAND_LINKS = {
  contract: "https://robin.etherscan.io/address/0xb809C142B5c4D372D54aC928Ceb353d346C5f72F",
  github: "https://github.com/DevPaperhand",
  paperhand: "",   // the $PAPERHAND token page, filled in once it launches
  x: "https://x.com/tradepaperhand",
  telegram: ""
};
