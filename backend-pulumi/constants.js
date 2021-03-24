exports.REWARD_CONTRACT = "0x5fa19f612dfd39e6754bb2e8300e681d1c589dd4";
exports.PERL_ERC20 = "0xeca82185adce47f39c684352b0439f030f860318";

exports.INFURA_KEY = "3aa2960d9ce549d6a539421c0a94fe52"; // TODO: ISSUES A NEW KEY

exports.POOLS = [
    {
        name: "PERL/WETH",
        exchangeAddress: "0x8c7769f9f1e5042c0809b8702e4b9947b1bcb3f3"
    },
    {
        name: "PERL/DAI",
        exchangeAddress: "0x0B0Dea284a07d60d026691476b130f160e48BD0A"
    },
    {
        name: "PERL/TUSD",
        exchangeAddress: "0x0bdf7efef728308b6f55b1dd8d0c714f0d5d233f"
    },
    {
        name: "PERL/BUSD",
        exchangeAddress: "0x19f4611c61e2ee6d2fadfccbde1e95cfcfd1e210"
    },
    {
        name: "PERL/BAL",
        exchangeAddress: "0x2c1cb70cccf250b35ca2cb021e2f624aba76e3e8"
    },
    {
        name: "PERL/pxUSD",
        exchangeAddress: "0xce46dd186160c81b06433f9f501b06cd36d19d50"
    },
    {
        name : "PERL/pxUSD_Mar2021",
        exchangeAddress : "0x01c1AdB4ad6678d2bf2B772301f111D257b7b109"
    },
    {
        name : "PERL/pxGOLD_MAY2021",
        exchangeAddress : "0x23ACc850b30A07dcD9fb87e36Da111B9B301B3e5"
    }
]

exports.COINGECKO_IDS = [
    {
        symbol: "PERL",
        id: "perlin"
    },
    {
        symbol: "DAI",
        id: "dai"
    },
    {
        symbol: "WETH",
        id: "weth"
    },
    {
        symbol: "BAL",
        id: "balancer"
    },
    {
        symbol: "TUSD",
        id: "true-usd"
    },
    {
        symbol: "BUSD",
        id: "binance-usd"
    }
]

exports.SYNTHS = [
    {
        name: "pxUSD-OCT2020",
        empAddress: "0x306b19502c833c1522fbc36c9dd7531eda35862b",
        erc20Address: "0xdaff85b6f5787b2d9ee11ccdf5e852816063326a"
    },
    {
        name: "pxUSD-MAR2021",
        empAddress: "0x3a93e863cb3adc5910e6cea4d51f132e8666654f",
        erc20Address: "0xf93340b1a3aDf7eedcAEc25Fae8171D4b736e89F"
    },
    {
        name : "pxGOLD-MAY2021",
        empAddress: "0xD50fbace72352C2e15E0986b8Ad2599627B5c340",
        erc20Address: "0x59fec83eC709c893aedD1A144Cf1828Eb04127Cd"
    },
    {
        name : "pxGOLD-MAR2022",
        empAddress: "0x46f5E363e69798a74c8422BFb9EDB63e3FB0f08a",
        erc20Address: "0x5247C0DB4044FB6F97f32C7E1B48758019A5A912"
    }
]

exports.COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3"

// Not used for now
exports.TWITTER_ACCESS_TOKEN = "";
exports.TWITTER_ACCESS_TOKEN_SECRET = "";
exports.TWITTER_API = "";
exports.TWITTER_API_SECRET = "";