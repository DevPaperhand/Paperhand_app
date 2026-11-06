# Paperhand on Elysium: the app !

- `index.html` the app, one self contained file
- `add.html` add a token: reads it and its feed from the chain, prints the config line and the `setFeed` call
- `paperhand.config.js` **the only file you edit**: network, vault, treasury, tokens, links. Same file in the landing repo.

## Add a token

One line in `TOKENS`, in `paperhand.config.js`:

    { symbol: "KNTQ", name: "Kinetiq", address: "0x...", feed: "0x...", tint: "#B9A6FF" },

Then the vault owner calls `setFeed(token, feed, 90000, true)`. No address or no
feed yet: the token shows as "soon", listed but not lockable.

## Go to mainnet

Fill `mainnet` in `NETWORKS`, set `NETWORK = "mainnet"`, put the vault address in `VAULT`.
