import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class NewsCard extends PureComponent {
  articles = [
    {
      source: { id: "wired", name: "Wired" },
      author: "Boone Ashworth",
      title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
      description:
        "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
      url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
      urlToImage:
        "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
      publishedAt: "2023-02-11T14:00:00Z",
      content:
        "Theres no shortage of tablets in the world, from the ever-dominant iPad to an assortment of Android options and Fire tabs to the niche weirdos like the E-ink and stylus Kindle Scribe. Now, OnePlus, a… [+4068 chars]",
    },
    {
      source: { id: "wired", name: "Wired" },
      author: "Joel Khalili",
      title: "Bitcoin Miners Are Playing a High-Stakes Game of Chicken",
      description:
        "In the bitter crypto winter, companies are making deep cuts to survive a new challenge.",
      url: "https://www.wired.com/story/bitcoin-mining-halving-crypto-winter/",
      urlToImage:
        "https://media.wired.com/photos/63eede2c5b4882ebafffb0e1/191:100/w_1280,c_limit/Biz-data-mining-934468788.jpg",
      publishedAt: "2023-02-17T12:00:00Z",
      content:
        "Its kind of a last-man-standing situation, says Fred Thiel, CEO of US-based Marathon Digital Holdings. His crypto-mining company, among the largest in the world, has found itselflike the rest of the … [+3142 chars]",
    },
    {
      source: { id: null, name: "Gizmodo.com" },
      author: "Mack DeGeurin",
      title:
        "El Salvador Is Planning a 'Bitcoin Embassy' in Texas After Losing Tens of Millions on Crypto",
      description:
        "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial president’s beleaguered effort to embrace cryptocurrencies, now says it plans to open a “bitcoin embassy” in Texas. The Central American country’s continu…",
      url: "https://gizmodo.com/bitcoin-price-el-salvador-embassy-texas-crypto-crash-1850118217",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ccb1cf72839bb2d47936bf0eadf47da0.jpg",
      publishedAt: "2023-02-15T18:03:53Z",
      content:
        "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial presidents beleaguered effort to embrace cryptocurrencies, now says it plans to open a bitcoin… [+2879 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Cryptoverse: Bitcoin moves towards Satoshi's payment dream - Reuters",
      description:
        "Cryptoverse: Bitcoin moves towards Satoshi's payment dream  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtYml0Y29pbi1tb3Zlcy10b3dhcmRzLXNhdG9zaGlzLXBheW1lbnQtZHJlYW0tMjAyMy0wMi0yOC_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-02-28T06:18:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Warren Buffett's business partner rips into 'cryptocrappo' - and says he's ashamed of America for embracing bitcoin and its kin",
      description:
        "Charlie Munger eviscerated the likes of bitcoin and dogecoin, dismissing them as stupid, worthless, and dangerous.",
      url: "https://markets.businessinsider.com/news/currencies/charlie-munger-warren-buffett-daily-journal-crypto-currency-bitcoin-regulation-2023-2",
      urlToImage:
        "https://i.insider.com/63edf9cb1d14070018bafbf1?width=1200&format=jpeg",
      publishedAt: "2023-02-16T11:14:48Z",
      content:
        "It's fair to say that Charlie Munger isn't the biggest fan of cryptocurrencies.\r\n\"Sometimes I call it cryptocrappo and sometimes I call it, well, cryptoshit,\" the billionaire investor said during Dai… [+2118 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "insider@insider.com (Carla Mozée)",
      title:
        "El Salvador is opening a 'bitcoin embassy' in Texas in a bid to promote more acceptance of crypto",
      description:
        "El Salvador is reaching again beyond its borders to broaden its bitcoin strategy, following a partnership it struck with Switzerland last year.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-el-salvador-cryptocurrency-embassy-texas-curreproject-adoption-bukele-2023-2",
      urlToImage:
        "https://i.insider.com/61df129d1025b20018bb5d05?width=1200&format=jpeg",
      publishedAt: "2023-02-15T20:00:16Z",
      content:
        'El Salvador is planning to open a "Bitcoin Embassy" in the US, continuing to push for wider adoption of the cryptocurrency even after losing millions of dollars on its high-profile bets on the token.… [+1572 chars]',
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "insider@insider.com (Carla Mozée)",
      title:
        "Bitcoin edges higher after dismal February for risk assets as investors assess rate outlook and new China data",
      description:
        "Bitcoin has surged by more than 40% so far in 2023 and started off March on stronger footing.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-stocks-china-manufacturing-data-risk-assets-copper-2023-3",
      urlToImage:
        "https://i.insider.com/63ff5968494c7a0019f21cb0?width=1200&format=jpeg",
      publishedAt: "2023-03-01T15:48:21Z",
      content:
        "Bitcoin pushed higher Wednesday, sustaining its advance alongside other risk assets after the strongest official  manufacturing print in a decade out of China kickstarted trading in March. \r\nThe worl… [+2631 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "bevans@insider.com (Brian Evans)",
      title:
        "Investor sentiment has become 'extremely greedy' and that makes the market fragile, says Fairlead's Katie Stockton",
      description:
        '"Sentiment has now gotten what we call sort of extremely greedy. You can see it maybe yesterday in bitcoin," according to Farilead\'s Katie Stockton.',
      url: "https://markets.businessinsider.com/news/stocks/investor-sentiment-greedy-fragile-stock-market-outlook-sp500-technical-analysis-2023-2",
      urlToImage:
        "https://i.insider.com/63c03c6033ffb700180f79e8?width=1200&format=jpeg",
      publishedAt: "2023-02-16T20:30:15Z",
      content:
        "After strong start to the year, the stock market now looks vulnerable as investors appear to be overdoing it, according to Fairlead Strategies' Katie Stockton. \r\nJanuary in particular saw some encour… [+1551 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "kduffy@insider.com (Kate Duffy)",
      title:
        "Disney drops 'Simpsons' episode in Hong Kong in which character references 'forced labor camps' in China, reports say",
      description:
        'A character in the Simpsons episode says: "Behold the wonders of China: Bitcoin mines, forced labor camps where children make smartphones."',
      url: "https://www.businessinsider.com/disney-remove-simpsons-episode-china-forced-labor-camps-hong-kong-2023-2",
      urlToImage:
        "https://i.insider.com/63e0f36fe33c4000193b08ce?width=1200&format=jpeg",
      publishedAt: "2023-02-06T14:10:39Z",
      content:
        'Disney has scrubbed from its streaming service in Hong Kong an episode of "The Simpsons" that refers to "forced labor camps" in China, the Financial Times first reported Monday.\r\nIn the episode, enti… [+1699 chars]',
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "gglover@insider.com (George Glover)",
      title:
        "Kraken will stop offering crypto 'staking' and pay a $30 million penalty after settling with the SEC",
      description:
        'Cryptos stumbled, with bitcoin and ethereum both falling as concerns built about a crackdown on income-generating technique "staking" by the regulator.',
      url: "https://markets.businessinsider.com/news/currencies/what-is-crypto-staking-kraken-sec-settlement-penalty-gary-gensler-2023-2",
      urlToImage:
        "https://i.insider.com/63e610ec27e5db0018ef0b16?width=1200&format=jpeg",
      publishedAt: "2023-02-10T10:48:39Z",
      content:
        'Kraken has agreed to stop offering crypto "staking" services and pay $30 million as part of a settlement with US regulators over charges it failed to register the yield-bearing program.\r\nThat meant t… [+2519 chars]',
    },
    {
      source: { id: null, name: "Slashdot.org" },
      author: "EditorDavid",
      title:
        "Bitcoin's 2023 Price Rise 'Very Suspicious', Says Manipulation Researcher",
      description:
        'In 2017 the New York Times covered research co-authored by John Griffin, a finance professor at the University of Texas, into Hong Kong-based Bitfinex, "one of the largest and least regulated exchanges in the industry."\n\nMr. Griffin looked at the flow of digi…',
      url: "https://slashdot.org/story/23/02/04/0443239/bitcoins-2023-price-rise-very-suspicious-says-manipulation-researcher",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2023-02-04T17:34:00Z",
      content:
        'In 2017 the New York Times covered research co-authored by John Griffin, a finance professor at the University of Texas, into Hong Kong-based Bitfinex, "one of the largest and least regulated exchang… [+3441 chars]',
    },
    {
      source: { id: null, name: "Hipertextual" },
      author: "Gabriel Erard",
      title:
        "Qué es Ordinals y cómo ha llevado la fiebre por los NFT a Bitcoin",
      description:
        "Hablar de NFTs almacenados en la blockchain de Bitcoin es algo que, hasta hace poco, parecía imposible. Para los bitcoiners más conservadores era (es) una blasfemia, lisa y llanamente. Sin embargo, un nuevo protocolo llamado Ordinals llegó para cambiar la his…",
      url: "http://hipertextual.com/2023/02/que-es-ordinals-nft-bitcoin",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/02/btc.jpg?fit=2048%2C1364&quality=55&strip=all&ssl=1",
      publishedAt: "2023-02-14T08:00:00Z",
      content:
        "Hablar de NFTs almacenados en la blockchain de Bitcoin es algo que, hasta hace poco, parecía imposible. Para los bitcoiners más conservadores era (es) una blasfemia, lisa y llanamente. Sin embargo, u… [+5358 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "Digital Currency Group is reportedly selling shares from its most prized crypto funds at a steep discount as the digital asset giant navigates financial woes",
      description:
        'Digital Currency Group told Insider that offloading assets "is simply part of our ongoing portfolio rebalancing."',
      url: "https://markets.businessinsider.com/news/currencies/dcg-digital-currency-group-sell-grayscale-assets-steep-discount-crypto-2023-2",
      urlToImage:
        "https://i.insider.com/63e252f127e5db0018ee80f6?width=1200&format=jpeg",
      publishedAt: "2023-02-07T15:33:04Z",
      content:
        "Digital Currency Group is selling shares of its prized investment vehicles to repay its bankrupt lending arm's creditors, according to a Financial Times report.\r\nDCG has started to offload holdings a… [+1180 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "rhogg@insider.com (Ryan Hogg)",
      title:
        "Drake scooped up a $512,000 profit in bitcoin after betting on the Kansas City Chiefs to win the Super Bowl",
      description:
        'The "God\'s Plan" singer placed seven bets worth a total of $965,000, but was only successful with his $700,000 punt on the Chiefs to beat the Eagles.',
      url: "https://markets.businessinsider.com/news/currencies/drake-512000-bitcoin-profit-betting-on-chiefs-super-bowl-win-2023-2",
      urlToImage:
        "https://i.insider.com/63ca6c452a1e600018b8d37f?width=1200&format=jpeg",
      publishedAt: "2023-02-14T16:26:38Z",
      content:
        "Drake scooped up $512,000 in bitcoin winnings after placing several bets on Sunday's Super Bowl, but it took a lot more of the cryptocurrency than last year to take his positions.\r\nAccording to a pos… [+1643 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "Bitcoin hits a 6-month high as the total crypto market regains $85 billion in value",
      description:
        "Crypto investors aren't in the clear yet, as macro conditions remain uncertain and risk appetite hinges on the Fed's next move.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-6-month-high-btc-analysts-2023-2",
      urlToImage:
        "https://i.insider.com/63ee2a6c1d14070018bb0159?width=1200&format=jpeg",
      publishedAt: "2023-02-16T15:20:23Z",
      content:
        "Bitcoin's price hit a six-month high on Thursday as the cryptocurrency market's total value rose by nearly $85 billion to top $1.1 trillion.\r\nThe world's largest crypto is trading around $24,376, up … [+2677 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "psyme@insider.com (Pete Syme)",
      title:
        "Super Bowl LVII won't have any crypto ads because firms pulled out of deals following FTX's bankruptcy",
      description:
        "Super Bowl LVI saw Larry David's character doubt the safety of FTX in its own commercial, adding: \"I'm never wrong about this stuff, never.\"",
      url: "https://www.businessinsider.com/super-bowl-lvii-no-crypto-ads-after-ftx-collapse-2023-2",
      urlToImage:
        "https://i.insider.com/63e23ca727e5db0018ee7f2d?width=1200&format=jpeg",
      publishedAt: "2023-02-07T16:23:33Z",
      content:
        'Fans dubbed last year\'s Super Bowl the "Crypto Bowl," after eToro, Coinbase, Crypto.com, and the now-collapsed FTX all paid for airtime. But a lot has changed since then, to the extent that there wil… [+2406 chars]',
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "FTX's collapse wiped out $200 billion in the total value of the cryptocurrency market, and it hit retail investors in emerging economies the hardest",
      description:
        'Larger crypto investors "tended to sell their coins right before steep price declines, while smaller investors were still buying," a new study found.',
      url: "https://markets.businessinsider.com/news/currencies/crypto-market-retail-investors-ftx-sbf-emerging-economies-bitcoin-ethereum-2023-2",
      urlToImage:
        "https://i.insider.com/63f4d2c25ca81e00185586e9?width=1200&format=jpeg",
      publishedAt: "2023-02-21T15:48:35Z",
      content:
        "Cryptocurrency markets lost $200 billion in value in the wake of FTX's downfall in November, a new report found, but losses weren't the same for investors across the board.\r\nRetail investors in emerg… [+1881 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "Crypto lost the battle to be an alternative to fiat money after FTX collapse, top economist says",
      description:
        '"Only the legal, historical infrastructure behind central banks can give great credibility [to money]," a top economist said.',
      url: "https://markets.businessinsider.com/news/currencies/crypto-lost-battle-alternative-fiat-money-central-banks-ftx-crash-2023-2",
      urlToImage:
        "https://i.insider.com/63f670355ca81e001855c2af?width=1200&format=jpeg",
      publishedAt: "2023-02-22T20:53:16Z",
      content:
        'Fiat money has beaten out an often-cited use case for certain cryptos an alternative to traditional currencies, according to Agustin Carstens, the head of the Bank for International Settlements.\r\n"I … [+1660 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Crypto-mining scheme run from US school crawl space",
      description:
        "Police were called after a janitor noticed electrical wires, ductwork and computers that looked amiss.",
      url: "https://www.bbc.co.uk/news/world-us-canada-64767178",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/18622/production/_128747899_crypto.jpg",
      publishedAt: "2023-02-25T00:41:31Z",
      content:
        "A town official was running an illegal cryptocurrency mining operation from a crawl space under a school in the US state of Massachusetts, police say.\r\nNadeam Nahas, 39, who was an assistant faciliti… [+1974 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Oscar Gonzalez",
      title: "PayPal Halts Plans for Stablecoin, Report Says - CNET",
      description:
        "The payments company says if it moves forward with a coin, it'll work closely with regulators.",
      url: "https://www.cnet.com/personal-finance/crypto/paypal-halts-plans-for-stablecoin-report-says/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/b129aa5e9ac83ca2f4f4fc030197296ae4b5038d/hub/2022/04/25/02ef8983-cf7b-417f-9094-b6fac848699e/paypal-logo-2022-783.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-10T22:26:24Z",
      content:
        "PayPal has hit pause on efforts to develop its own stablecoin, according to a Bloomberg report Friday. \r\nThe online payment provider reportedly halted its plans due to increased scrutiny of cryptocur… [+839 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "Guy Sheetrit",
      title: "Will Crypto Rise Again – and What to Do While Waiting",
      description:
        "Since 2020, the crypto market has experienced the most important bear season in its history (coindesk), with the toughest wave persisting throughout 2022. From an all-time high of nearly $69,000 back in November 2021, bitcoin now trades at around $20,000. And…",
      url: "https://readwrite.com/will-crypto-rise-again-and-what-to-do-while-waiting/",
      urlToImage:
        "https://images.readwrite.com/wp-content/uploads/2023/01/Will-Crypto-Rise-Again.jpg",
      publishedAt: "2023-02-09T16:01:00Z",
      content:
        "Since 2020, the crypto market has experienced the most important bear season in its history (coindesk), with the toughest wave persisting throughout 2022. From an all-time high of nearly $69,000 back… [+8055 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Marlene Lenthang",
      title:
        "N.J. man hired hitman for $20K in Bitcoin to kill a 14-year-old, prosecutors say",
      description:
        "A New Jersey man faces up to 10 years behind bars after he hired a hitman and paid $20,000 in Bitcoin to kill a 14-year-old, prosecutors said.",
      url: "https://news.yahoo.com/n-j-man-hired-hitman-163209738.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/udFOPwDKNNPK3Q_pGP_e5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/nbc_news_122/b7e5a8b8dcacaadddfd4487186caf630",
      publishedAt: "2023-02-03T16:32:09Z",
      content:
        "A New Jersey man faces up to 10 years behind bars after he hired a hitman and paid $20,000 in Bitcoin to kill a 14-year-old, prosecutors said.\r\nJohn Michael Musbach, 31, of Haddonfield, pleaded guilt… [+2549 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "gglover@insider.com (George Glover)",
      title:
        "2 former Barclays bankers just netted a 700% profit selling Bored Ape NFTs",
      description:
        "Mike Anderson and Ovie Faruq offloaded their collection of 72 NFTs for $9.25 million this week, according to OpenSea data.",
      url: "https://markets.businessinsider.com/news/currencies/crypto-investing-news-nft-barclays-bankers-junk-bonds-bored-ape-2023-2",
      urlToImage:
        "https://i.insider.com/63f882ec88f76900192d1bf5?width=1200&format=jpeg",
      publishedAt: "2023-02-24T10:31:02Z",
      content:
        "Two former Barclays junk bond traders reportedly netted a 700% profit when they offloaded their collection of Bored Ape Yacht Club NFTs earlier this week.\r\nMike Anderson and Ovie Faruq sold the 72 NF… [+1998 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "FTX's meltdown was painful but necessary for the industry to grow up, bitcoin bull and Microstrategy CEO Michael Saylor says",
      description:
        "\"What [crypto] needs is adult supervision. It needs the Goldman Sachs' and the Morgan Stanley's and the BlackRock's to come in,\" Saylor said.",
      url: "https://markets.businessinsider.com/news/currencies/ftx-meltdown-alameda-microstrategy-michael-saylor-crypto-bitcoin-market-outlook-2023-2",
      urlToImage:
        "https://i.insider.com/63dd6c8ae33c4000193ae88f?width=1200&format=jpeg",
      publishedAt: "2023-02-05T13:15:00Z",
      content:
        "The cryptocurrency industry is enduring a crisis of confidence as a slew of industry giants like FTX face scandal-ridden collapse. Sam Bankman-Fried's crypto exchange may have wiped out over $8 billi… [+1272 chars]",
    },
    {
      source: { id: null, name: "Slashdot.org" },
      author: "msmash",
      title:
        "Former Ubiquiti Employee Pleads Guilty To Attempted Extortion Scheme",
      description:
        "A former employee of network technology provider Ubiquiti pleaded guilty to multiple felony charges after posing as an anonymous hacker in an attempt to extort almost $2 million worth of cryptocurrency while employed at the company. From a report: Nickolas Sh…",
      url: "https://yro.slashdot.org/story/23/02/03/1812207/former-ubiquiti-employee-pleads-guilty-to-attempted-extortion-scheme",
      urlToImage: "https://a.fsdn.com/sd/topics/crime_64.png",
      publishedAt: "2023-02-03T20:41:00Z",
      content:
        "Nickolas Sharp, 37, worked as a senior developer for Ubiquiti between 2018 and 2021 and took advantage of his authorized access to Ubiquiti's network to steal gigabytes worth of files from the compan… [+790 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title: "US stocks trade higher a day ahead of a key inflation reading",
      description:
        "Traders will be watching for a slew of corporate earnings this week, and on Tuesday fresh consumer price index data comes out.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-trade-cpi-reading-investing-earnings-2023-2",
      urlToImage:
        "https://i.insider.com/63ea44954102a900184c8015?width=1200&format=jpeg",
      publishedAt: "2023-02-13T14:33:25Z",
      content:
        "US stocks traded slightly higher Monday as traders look ahead to a key inflation reading coming on Tuesday that could sway the Federal Reserve's policy plans. \r\nEconomists expect January's headline c… [+1164 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "bevans@insider.com (Brian Evans)",
      title:
        "US stocks end mixed after volatile session as indexes notch weekly losses",
      description:
        "The S&P 500 suffered its first weekly loss in three weeks and notched its worst one-week decline since December.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-dow-jones-nasdaq-weekly-losses-2023-2",
      urlToImage:
        "https://i.insider.com/627d639b27d5960019ee5b01?width=1200&format=jpeg",
      publishedAt: "2023-02-10T21:07:21Z",
      content:
        "US stocks were mixed at the close on Friday after a volatile session that capped off a losing week for the major indexes. \r\nThe S&amp;P 500 suffered its first weekly loss in three weeks and notched i… [+1173 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "bevans@insider.com (Brian Evans)",
      title:
        "US stocks finish higher after volatile session as S&P 500 breaks out of slump",
      description:
        "Trading was volatile as the major indexes swung between gains and losses intraday, following a big sell-off earlier in the week.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-ends-losing-streak-gdp-revision-2023-2",
      urlToImage:
        "https://i.insider.com/6352c3d7ffcac3001876bb26?width=1200&format=jpeg",
      publishedAt: "2023-02-23T21:05:21Z",
      content:
        "US stocks closed higher on Thursday, with the S&amp;P 500 breaking a streak of four consecutive losses. \r\nMarkets swung between gains and losses, following a big sell-off earlier in the week. The rel… [+1160 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "US stocks rise as investors await Fed minutes to gauge interest rate trajectory",
      description:
        "Fed presidents like James Bullard and Loretta Mester have recently advocated for a return to 50-basis-point rate hikes to combat inflation.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-interest-rate-clues-inflation-2023-2",
      urlToImage:
        "https://i.insider.com/639ccfcbb5600000185b2286?width=1200&format=jpeg",
      publishedAt: "2023-02-22T14:33:38Z",
      content:
        "US stocks edged higher on Wednesday as investors await the release of minutes from the Federal Reserve's last FOMC meeting.\r\nInvestors will look for clues on the trajectory of future interest rate hi… [+1245 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title: "The stock market has been flipped upside down",
      description:
        "JPMorgan says this risk-seeking behavior is practically taunting the Fed, which is still hiking interest rates to bring inflation down.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-trends-flipped-upside-down-investors-defy-fed-2023-2",
      urlToImage:
        "https://i.insider.com/63eea93db66c280019d77cbd?width=1200&format=jpeg",
      publishedAt: "2023-02-18T10:00:00Z",
      content:
        "The stock market has been completely flipped upside down so far in 2023 as risky assets that struggled last year stage a big comeback, even in the face of continued rate hikes from the Federal Reserv… [+4365 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Helen Davidson in Taipei",
      title:
        "Simpsons censored in Hong Kong for mentioning China ‘labour camps’",
      description:
        "Episode removed from Disney+ is the second of the cartoon to be made unavailable in Hong KongAn episode of the Simpsons that references “forced labour camps” in China has been removed from Disney+ streaming services in Hong Kong.The episode is the second in t…",
      url: "https://www.theguardian.com/world/2023/feb/07/simpsons-censored-in-hong-kong-for-mentioning-china-labour-camps",
      urlToImage:
        "https://i.guim.co.uk/img/media/52928b04f4f9912041cf187bca88b2cb41d79f09/0_78_6048_3628/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0386f335c843034a4e75560e183ba56e",
      publishedAt: "2023-02-07T05:12:31Z",
      content:
        "An episode of the Simpsons that references forced labour camps in China has been removed from Disney+ streaming services in Hong Kong.\r\nThe episode is the second in the long-running US cartoons lates… [+2124 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "bevans@insider.com (Brian Evans)",
      title:
        "US stocks sink further with S&P 500 on course for worst week since December",
      description:
        "US stocks opened lower again on Friday as firms reported disappointing quarterly earnings.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-russia-crude-oil-production-cut-2023-2",
      urlToImage:
        "https://i.insider.com/63c6b19958de070019f9f010?width=1200&format=jpeg",
      publishedAt: "2023-02-10T14:40:36Z",
      content:
        "US stocks opened lower on Friday, with major indices set to cap off a volatile week with more losses. \r\nThe S&amp;P 500 was on course for its worst week since December, and investors are seeking cove… [+1120 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "insider@insider.com (Carla Mozée)",
      title:
        "Fake ChatGPT tokens are flooding the market as crypto scammers take advantage of the AI craze",
      description:
        'Blockchain security company PeckShield alerted crypto investors that at least one issuer has created "dozens of tokens with a pump & dump scheme."',
      url: "https://markets.businessinsider.com/news/currencies/chatgpt-tokens-cryptocurrency-fake-scammers-bing-microsoft-ai-artificial-intelligence-2023-2",
      urlToImage:
        "https://i.insider.com/63db8cdee33c4000193aa1fb?width=1200&format=jpeg",
      publishedAt: "2023-02-21T17:07:12Z",
      content:
        "ChatGPT's popularity has inspired scammers to unleash a wave of unauthorized cryptocurrencies designed to appear as if they're affiliated with the chatbot that's sparked 2023's AI investing frenzy. \r… [+1335 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "US stocks fall after hot retail sales report suggests higher interest rates for longer",
      description:
        "January retail sales surged 3%, well above economist estimates of 1.8% and represented the biggest monthly gain for retail sales since March 2021.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-hot-retail-sales-report-higher-rates-2023-2",
      urlToImage:
        "https://i.insider.com/62824e98e7446d0018cc9eeb?width=1200&format=jpeg",
      publishedAt: "2023-02-15T14:36:40Z",
      content:
        "US stocks dropped on Wednesday after a hotter-than-expected retail sales report suggested to investors that interest rates might stay higher for longer.\r\nRetail sales in January surged 3%, which was … [+927 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "US stocks close lower to wrap up losing week as hot inflation data jolts markets",
      description:
        "The drop on Friday follows higher-than-expected core PCE data. The two-year Treasury yield neared its highest level since 2007.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-sp500-nasdaq-dow-bond-yields-inflation-data-2023-2",
      urlToImage:
        "https://i.insider.com/63dba59ee33c4000193aa450?width=1200&format=jpeg",
      publishedAt: "2023-02-24T21:08:32Z",
      content:
        "US stocks fell on Friday to close out a losing week, with the S&amp;P 500 notching its worst weekly performance since mid-December.\r\nThe Nasdaq Composite and Dow Jones Industrial Average also ended l… [+913 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "US stocks rally as traders digest comments from Fed officials on coming rate hikes",
      description:
        "The Dow popped more than 300 points, supported by Salesforce's gains. Meanwhile, the 2-year note yield reached levels not seen in over a decade.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-fed-rates-bostic-2023-3",
      urlToImage:
        "https://i.insider.com/63e2c1fd96242f0019e7d91e?width=1200&format=jpeg",
      publishedAt: "2023-03-02T21:05:32Z",
      content:
        "US stocks rallied Thursday as a Federal Reserve official's comments on coming interest rates hikes cheered investors.\r\nAfter opening in mixed territory, the major indexes closed in the green, even as… [+1204 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "US stocks dip to start the month as investors grapple with fears of interest rates higher for longer",
      description:
        "The Federal Reserve is expected to hike interest rates at least two more times to the 5% level, but further increases could be possible.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-fear-high-interest-rates-fed-2023-3",
      urlToImage:
        "https://i.insider.com/6360270d0b271e00186bb924?width=1200&format=jpeg",
      publishedAt: "2023-03-01T14:36:47Z",
      content:
        "US stocks started the month of March in the red as investors continue to fear the prospect of higher for longer interest rates.\r\nThe inflation rate unexpectedly accelerated in Germany last month, and… [+901 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "US stocks trade mixed as Fed minutes show central bank willing to push on with rate hikes to fight inflation",
      description:
        "The Fed minutes showed that some central bankers were supportive of a 50 basis point interest rate hike at its February FOMC meeting.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-more-interest-rate-hikes-2023-2",
      urlToImage:
        "https://i.insider.com/639b5eb2b7e0f200180939e7?width=1200&format=jpeg",
      publishedAt: "2023-02-22T21:06:27Z",
      content:
        "US stocks ended mixed on Wednesday after minutes from the Federal Reserve's last meeting showed that inflation remains a top concern for the central bank as it remains well above its long-term target… [+1279 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "bevans@insider.com (Brian Evans)",
      title:
        "US stocks rise as the S&P 500 looks to snap a 4-day losing streak",
      description:
        "The S&P 500 has notched four straight losses, which is the longest losing streak for the benchmark so far in 2023.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-losing-streak-nasdaq-dow-2023-2",
      urlToImage:
        "https://i.insider.com/63f776fb88f76900192cf333?width=1200&format=jpeg",
      publishedAt: "2023-02-23T14:47:30Z",
      content:
        "US stocks opened higher on Thursday, with major indexes set to mark a turnaround from a disappointing week. \r\nThe S&amp;P 500 has notched four straight losses, which is the longest losing streak for … [+1131 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Charlie Munger torched crypto and touted BYD over Tesla. Cathie Wood, Robert Kiyosaki, and Patrick Byrne just called him out.",
      description:
        "Warren Buffett's business partner and Berkshire Hathaway's 99-year-old vice-chairman fails to grasp the power of Tesla's innovation, Wood said.",
      url: "https://markets.businessinsider.com/news/currencies/wood-kiyosaki-byrne-munger-musk-tesla-byd-ev-crypto-bitcoin-2023-2",
      urlToImage:
        "https://i.insider.com/63f3505e7b15f100194d28b3?width=1200&format=jpeg",
      publishedAt: "2023-02-20T11:39:00Z",
      content:
        "Charlie Munger panned bitcoin and other cryptocurrencies as stupid, worthless, and dangerous during Daily Journal's recent annual meeting.\r\nThe 99-year-old billionaire and vice-chairman of Warren Buf… [+3458 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "A top exec at the world's largest crypto exchange breaks down the single-biggest risk for the market in 2023",
      description:
        "Binance Chief Strategy Officer Patrick Hillmann explained how poor regulation will lead to increased crypto market volatility.",
      url: "https://markets.businessinsider.com/news/currencies/crypto-market-outlook-binance-exec-exchange-sec-regulation-stablecoin-2023-2023-2",
      urlToImage:
        "https://i.insider.com/63ed3b49dd6fcf00194a8a3e?width=1200&format=jpeg",
      publishedAt: "2023-02-20T13:15:00Z",
      content:
        "Cryptocurrency markets have made significant strides to recover from 2022' crises, with bitcoin soaring about 50% since the start of the year and the total crypto market value edging back above $1 tr… [+3595 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "Russia's largest bank is about to debut an Ethereum-based DeFi platform",
      description:
        "As the war in Ukraine and financial sanctions continue to weigh on the country, Sberbank is eyeing a new foray into crypto.",
      url: "https://markets.businessinsider.com/news/currencies/russia-bank-ethereum-crypto-defi-platform-sanctions-war-ukraine-putin-2023-2",
      urlToImage:
        "https://i.insider.com/63e117aac6bb0f0019bfc93b?width=1200&format=jpeg",
      publishedAt: "2023-02-06T16:04:11Z",
      content:
        "Sberbank, Russia's largest bank, is set to launch an ethereum-based decentralized finance platform by May, Russian news outlet Interfax reported last week. \r\nSberbank's platform will allow users acce… [+1173 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "US stocks slip as investors brace for Fed Chair Jerome Powell's speech",
      description:
        "Powell is slated to give comments at the Economic Club of Washington, and onlookers will watch for insight into the Fed's inflation battle.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-new-today-investors-fed-chair-powell-oil-commodities-2023-2",
      urlToImage:
        "https://i.insider.com/63e2583596242f0019e7b994?width=1200&format=jpeg",
      publishedAt: "2023-02-07T14:36:04Z",
      content:
        "US stocks moved lower Tuesday ahead of Federal Reserve Chairman Jerome Powell's speech at the Economic Club of Washington at 12:40 pm ET. \r\nAfter Powell's disinflation comment following the Fed's 25-… [+1048 chars]",
    },
    {
      source: { id: null, name: "Lwn.net" },
      author: null,
      title: "Free Software and Fiduciary Duty",
      description:
        "Serial litigant Craig Wright recently won\na procedural ruling in a London court that allows a\nmulti-billion-dollar Bitcoin-related lawsuit to proceed.  This case has\nraised a fair amount of concern within the free-software community, where\nit is seen as threa…",
      url: "https://lwn.net/SubscriberLink/922545/ea7cde57282a2db0/",
      urlToImage: null,
      publishedAt: "2023-02-09T17:20:31Z",
      content:
        "<table><tr><td>Welcome to LWN.net\r\nThe following subscription-only content has been made available to you \r\nby an LWN subscriber. Thousands of subscribers depend on LWN for the \r\nbest news from the L… [+6749 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Mario Oettler",
      title:
        "heise+ | Lightning-Netzwerke: Wie der Bitcoin doch noch Zahlungsmittel werden soll",
      description:
        "An sich ist der Bitcoin zu langsam und zu teuer für alltagstaugliches Bezahlen. Die Lightning-Netzwerke sollen da Abhilfe schaffen.",
      url: "https://www.heise.de/hintergrund/Lightning-Netzwerke-Wie-der-Bitcoin-doch-noch-Zahlungsmittel-werden-soll-7490252.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/9/6/0/4/5/shutterstock_1225883905-2f91fa97beb5ca60.jpg",
      publishedAt: "2023-02-13T07:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nBitcoin ist eine dezentrale und interessante Alternative, um Werte digital zu versenden. Jedoch hat das Netzwerk, wie die meisten anderen Blockchains auch, mit Skalierungsprobleme… [+1331 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "gglover@insider.com (George Glover)",
      title:
        "Binance secretly moved $400 million from its US partner to a trading firm managed by the crypto giant's boss CZ, report says",
      description:
        "The supposedly independent Binance.US secretly sent large sums of money to Changpeng Zhao's trading firm, according to Reuters.",
      url: "https://markets.businessinsider.com/news/currencies/binance-crypto-exchange-secret-transfer-changpeng-zhao-cz-ftx-alameda-2023-2",
      urlToImage:
        "https://i.insider.com/63ef47fbf24f34001864bc4c?width=1200&format=jpeg",
      publishedAt: "2023-02-17T10:49:32Z",
      content:
        "Binance secretly moved large sums of money from its supposedly independent US partner to a company managed by the crypto giant's boss Changpeng Zhao, according to Reuters.\r\nThe publication said Thurs… [+1718 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "ztayeb@businessinsider.com (Zahra Tayeb)",
      title:
        "Elon Musk jokes at the Super Bowl that he's talking to Rupert Murdoch about Dogecoin - and the meme coin immediately jumps 5%",
      description:
        'In a tweet that posted a picture of the pair seated next to each other, with a caption asking what they were discussing, Musk simply said: "Dogecoin."',
      url: "https://markets.businessinsider.com/news/currencies/elon-musk-dogecoin-crypto-market-rupert-murdoch-super-bowl-2023-2",
      urlToImage:
        "https://i.insider.com/6274e00194a2c10018ee3bc4?width=1200&format=jpeg",
      publishedAt: "2023-02-13T11:05:07Z",
      content:
        "Tech guru Elon Musk joked he was talking to Rupert Murdoch about meme-inspired cryptocurrency Dogecoin at Sunday's Super Bowl.  \r\nThe two billionaires were watching the Philadelphia Eagles and Kansas… [+1452 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Reddit cofounder Alexis Ohanian paid only $15,000 for ether worth $80 million today - and has made $50 million on the crypto and Coinbase stock",
      description:
        "Ohanian bought 50,000 ether for about 30 cents a coin in 2014. The cryptocurrency has surged in price by about 5,600 times to $1,600 since then.",
      url: "https://markets.businessinsider.com/news/currencies/reddit-alexis-ohanian-crypto-ether-coinbase-stock-blockchain-nft-metaverse-2023-2",
      urlToImage:
        "https://i.insider.com/5f29b20c4e52b750cc095bcf?width=1200&format=jpeg",
      publishedAt: "2023-02-22T17:05:05Z",
      content:
        "Alexis Ohanian bought 50,000 ether for only $15,000 in 2014 and has made a combined $50 million from early bets on the cryptocurrency and Coinbase stock, he told Forbes in a recent interview.\r\nWhen h… [+1692 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "US stocks trade mixed as inflation concerns keep traders on edge over higher rates",
      description:
        "The S&P 500 and the tech-heavy Nasdaq Composite were both on track for their second consecutive losing week.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-fed-outlook-interest-rates-2023-3",
      urlToImage:
        "https://i.insider.com/63f8c9934ca0e30019ba4b45?width=1200&format=jpeg",
      publishedAt: "2023-03-02T14:45:17Z",
      content:
        "US stocks stocks were mixed on Thursday as traders continue to mull the prospect of higher interest rates amid signs the economy remains in high gear. \r\nAll three major indexes were on track for a lo… [+1519 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "gglover@insider.com (George Glover)",
      title:
        "Binance boss CZ distances his exchange from the dollar-pegged token under fire from the SEC: 'That's not something we created'",
      description:
        "The SEC has ordered Paxos to stop minting a Binance-branded token pegged to $1 as part of its ongoing crypto crackdown.",
      url: "https://markets.businessinsider.com/news/currencies/binance-cz-changpeng-zhao-paxos-busd-stablecoin-sec-crypto-crackdown-2023-2",
      urlToImage:
        "https://i.insider.com/63ecba2aeeb52e001886928d?width=1200&format=jpeg",
      publishedAt: "2023-02-15T12:11:10Z",
      content:
        "Binance chief Changpeng Zhao has downplayed the link between his exchange and a token carrying its branding that's currently under fire from the Securities and Exchange Commission.\r\nZhao, who's frequ… [+1740 chars]",
    },
    {
      source: { id: null, name: "VentureBeat" },
      author: "Jenelle Fulton-Brown",
      title: "Using the blockchain to prevent data breaches",
      description:
        "How blockchain works, and why it shows promise for preventing data breaches and greatly improving cybersecurity:",
      url: "https://venturebeat.com/security/using-the-blockchain-to-prevent-data-breaches/",
      urlToImage:
        "https://venturebeat.com/wp-content/uploads/2022/08/GettyImages-1344724504-dem10.jpg?w=1200&strip=all",
      publishedAt: "2023-02-12T18:10:00Z",
      content:
        "Check out all the on-demand sessions from the Intelligent Security Summit here.\r\nData breaches have, unfortunately, become an all-too-common reality. The Varonis 2021 Data Risk Report indicates that … [+1149 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Axel Kannenberg",
      title: "Mediamarkt und Saturn stellen weitere Bitcoin-Automaten auf",
      description:
        "Nach einer Pilotphase im vergangenen Sommer bringt die Mediamarkt-Saturn-Gruppe in acht weitere Filiale Automaten zum Kauf von Bitcoin & Co.",
      url: "https://www.heise.de/news/Mediamarkt-und-Saturn-stellen-weitere-Bitcoin-Automaten-auf-7490865.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/9/6/3/8/2/kurant-154b427517927795.jpg",
      publishedAt: "2023-02-09T15:22:00Z",
      content:
        "Die Mediamarkt-Saturn-Gruppe will in acht ihrer Standorte Automaten zum Kauf von Kryptowährungen wie dem Bitcoin aufstellen. Die Bitcoin-Automaten sollen in Saturn- oder Mediamarkt-Filialen in Münche… [+2002 chars]",
    },
    {
      source: { id: null, name: "Golem.de" },
      author: "Tobias Költzsch",
      title: "Kryptowährungen: Bitcoin auf höchstem Stand seit sechs Monaten",
      description:
        "Der Bitcoin ist so viel wert wie seit Monaten nicht mehr. Grund könnten positive Inflationszahlen sein. (Bitcoin, Wirtschaft)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptowaehrungen-bitcoin-auf-hoechstem-stand-seit-sechs-monaten-2302-171961.html&referer=https%3A%2F%2Ft.co%2Fa66d924c8d",
      urlToImage: null,
      publishedAt: "2023-02-16T12:00:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "John Naughton",
      title:
        "Crypto is intended to be hard to regulate, but at least the Treasury wants to have a go | John Naughton",
      description:
        "The government’s consultation document on cryptocurrency highlights the challenges that must be faced in the regulatory processFor my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage …",
      url: "https://www.theguardian.com/commentisfree/2023/feb/25/crypto-is-intended-to-be-hard-to-regulate-but-at-least-the-treasury-wants-to-have-a-go",
      urlToImage:
        "https://i.guim.co.uk/img/media/61b8dba17ab10f586222f5c41d20bcf48c460e42/0_213_4734_2841/master/4734.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=448de8728906b8d47d286ec5c6a7f188",
      publishedAt: "2023-02-25T16:00:05Z",
      content:
        "For my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage that was published recently, setting out HM Treasurys plans to gove… [+5792 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "US stocks fall as bond yields jump to their highest level since November",
      description:
        "So far, 63% of S&P 500 companies have reported fourth-quarter earnings results. Of those companies, 68% have beaten profit estimates by a median of 6%.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-rising-interest-rates-highest-level-november-2023-2",
      urlToImage:
        "https://i.insider.com/63c9abf2eee94d001a79055c?width=1200&format=jpeg",
      publishedAt: "2023-02-09T21:05:53Z",
      content:
        "US stocks fell about 1% on Thursday as bond yields rose to their highest level in months on expectations that the Federal Reserve will keep rates higher for longer.\r\nStocks were initially higher in e… [+1439 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "US stocks fall after blockbuster January jobs report suggests more hawkish Fed moves ahead",
      description:
        "Bond yields soared on Friday after the January jobs report showed payroll gains of 517,000 and the unemployment rate at a 53-year low.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-january-jobs-report-fed-rate-hike-2023-2",
      urlToImage:
        "https://i.insider.com/6287e360b0a8be00185fd329?width=1200&format=jpeg",
      publishedAt: "2023-02-03T14:34:15Z",
      content:
        "US stocks fell on Friday after a blockbuster January jobs report suggested the Federal Reserve will continue to be hawkish with more interest rate hikes.\r\nThe US economy added 517,000 jobs in January… [+1454 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "bevans@insider.com (Brian Evans)",
      title:
        "Crypto industry will 'come up with new things' and national digital currencies are moving ahead despite recent turmoil, BIS says",
      description:
        '"I would assume that the industry will learn from these failures and they will come up with new things," head of the BIS Innovation Hub told Reuters.',
      url: "https://markets.businessinsider.com/news/currencies/crypto-outlook-tokens-cbdcs-central-bank-fed-bitcoin-trading-investing-2023-2",
      urlToImage:
        "https://i.insider.com/63e119b3c6bb0f0019bfc9e5?width=1200&format=jpeg",
      publishedAt: "2023-02-06T15:48:49Z",
      content:
        "Cryptocurrencies will likely re-emerge from last year's turmoil, according to the Bank for International Settlements' head of innovation Cecilia Skingsley. \r\nThe BIS, the finance body that essentiall… [+1522 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "US stocks drop but end the week with strong gains after latest Fed move and mega-cap earnings",
      description:
        "With about half of S&P 500 companies having reported fourth-quarter earnings, 70% of those companies beat profit estimates by a median of 6%.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-rate-hike-earnings-jobs-report-2023-2",
      urlToImage:
        "https://i.insider.com/628f7dc965b90e0019ab77b8?width=1200&format=jpeg",
      publishedAt: "2023-02-03T21:06:22Z",
      content:
        "US stocks fell on Friday but finished the week higher after a slew of market-shaking news, with the S&amp;P 500 and Nasdaq 100 gaining about 2% and 3%, respectively. \r\nOn Wednesday, the Federal Reser… [+1548 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Axel Kannenberg",
      title:
        "Bundesfinanzhof: Gewinne aus Kryptowährungen sind steuerpflichtig",
      description:
        "Ein Kryptowährungsanleger wollte auf Millionengewinne keine Steuern zahlen und ist schließlich vorm Bundesfinanzhof damit gescheitert.",
      url: "https://www.heise.de/news/Bundesfinanzhof-Gewinne-aus-Kryptowaehrungen-sind-steuerpflichtig-7531920.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/0/4/9/9/shutterstock_1937129161-91f75b37827ffe38.jpg",
      publishedAt: "2023-03-01T13:48:00Z",
      content:
        "Gewinne aus Kauf- und Tauschgeschäften mit Kryptowährungen unterliegen als private Veräußerungsgeschäfte der Einkommenssteuer, hat der Bundesfinanzhof geurteilt (BFH, Az.: IX R 3/22). Steuerfrei sind… [+2276 chars]",
    },
    {
      source: { id: null, name: "Localbitcoins.com" },
      author: null,
      title: "Localbitcoins Is Shutting Down",
      description: "Buy and sell bitcoins near you. Fast, easy and private.",
      url: "https://localbitcoins.com/service_closure/",
      urlToImage: null,
      publishedAt: "2023-02-09T10:46:01Z",
      content:
        "Dear Valued Customers, \r\n Originally LocalBitcoins was established to Bring Bitcoin Everywhere and drive global financial inclusion. We have honored that mission for over 10 years and we are proud of… [+1271 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Peter Charalambous",
      title:
        "Man arrested after hiding cryptocurrency miner in school crawl space",
      description:
        "A small Massachusetts town enlisted the help of the Department of Homeland Security to track down the person who illegally installed a cryptocurrency mining operation.",
      url: "https://abcnews.go.com/US/massachusetts-man-charged-after-hiding-cryptocurrency-mining-rig/story?id=97440173",
      urlToImage:
        "https://s.abcnews.com/images/US/cryptocurrency-mine-ht-thg-230224_1677245117035_hpMain_16x9_992.jpg",
      publishedAt: "2023-02-24T17:02:35Z",
      content:
        "A small Massachusetts town enlisted the help of the Department of Homeland Security to track down the person who illegally installed a cryptocurrency mining operation in a crawl space of a middle sch… [+1648 chars]",
    },
    {
      source: { id: null, name: "Golem.de" },
      author: "Andreas Donath",
      title: "Krypto-Winter: Bitcoin-Kurs wächst im Januar stark",
      description:
        "Im Januar ist der Kurs des Bitcoin um etwa 40 Prozent gestiegen. Von seinem Höchststand ist er aber weit entfernt. (Bitcoin, Börse)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkrypto-winter-bitcoin-kurs-waechst-im-januar-stark-2302-171636.html&referer=https%3A%2F%2Ft.co%2F083cebb7d8",
      urlToImage: null,
      publishedAt: "2023-02-03T07:30:03Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "The chief executive of an AI-driven markets analytics company breaks down how to invest in the craze sparked by ChatGPT",
      description:
        "Insider's Phil Rosen sits down with Jan Szilagyi, the CEO of Toggle AI, to discuss how markets are handling the artificial intelligence boom.",
      url: "https://www.businessinsider.com/investing-ai-exec-markets-toggle-microsoft-google-amazon-tech-economy-2023-2",
      urlToImage:
        "https://i.insider.com/63ef792fe083d60018efbeb2?width=1200&format=jpeg",
      publishedAt: "2023-02-18T12:00:00Z",
      content:
        "Happy Saturday readers. I'm senior reporter Phil Rosen.\r\nAs a journalist, I'm always keen on interesting conversations especially when I get the chance to share them in this newsletter. \r\nHave a sugg… [+5402 chars]",
    },
    {
      source: { id: null, name: "Slashdot.org" },
      author: "msmash",
      title: "Zombie Newspaper Sites Rise from the Grave",
      description:
        "What happens when a newspaper dies? Apparently, in some cases, its digital ghost lives on in mysterious, unrecognizable forms. From a report: Minneapolis neighborhood newspaper the Southwest Journal shuttered at the end of 2020, but its web domain continues t…",
      url: "https://tech.slashdot.org/story/23/03/01/189239/zombie-newspaper-sites-rise-from-the-grave",
      urlToImage: "https://a.fsdn.com/sd/topics/internet_64.png",
      publishedAt: "2023-03-01T18:09:00Z",
      content:
        'Minneapolis neighborhood newspaper the Southwest Journal shuttered at the end of 2020, but its web domain continues to post fresh content under the auspices of a Delaware "SEO company" whose leader l… [+2226 chars]',
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "tmaxwell@insider.com (Thomas Maxwell)",
      title:
        "Inside the self-proclaimed first generative AI conference, executives explain why the hot new technology behind ChatGPT is 'not just hype, but something real'",
      description:
        "Move aside, crypto: a new conference in San Francisco put a spotlight on the tech industry's new love: generative AI.",
      url: "https://www.businessinsider.com/chatgpt-generative-ai-genai-jasper-conference-crypto-san-francisco-2023-2",
      urlToImage:
        "https://i.insider.com/63f0287c5ca81e00185567d4?width=1200&format=jpeg",
      publishedAt: "2023-02-18T11:50:00Z",
      content:
        '"It\'s a step forward in humanity," one VC said of generative AI. An executive compared it to the Gutenberg press. A CEO called the technology  "not just hype, but something real." \r\nThat\'s how attend… [+5997 chars]',
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "US stocks fall after new inflation data boosts outlook the Fed will stay aggressive",
      description:
        "Stocks fell after hot PCE data. The two-year Treasury yield was nearing its highest level since 2007, ticking up to 4.8%.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-data-pce-fed-interest-rates-economy-2023-2",
      urlToImage:
        "https://i.insider.com/62cdd6b3114c1e00187342da?width=1200&format=jpeg",
      publishedAt: "2023-02-24T14:45:16Z",
      content:
        "US stocks dipped on Friday as investors brace for a more hawkish Federal Reserve after key inflation data for January came in hotter than expected. \r\nCore Personal Consumption Expenditure data, the c… [+1921 chars]",
    },
    {
      source: { id: null, name: "PSFK" },
      author: "PSFK",
      title:
        "Lolli Users Can Now Earn Bitcoin Rewards At Every Burger King In America",
      description:
        "Using US mobile app rewards provider Lolli's new Card Boosts, customers may earn 5% in bitcoin rewards when dining at Burger King. Before going shopping, customers only need to activate a Burger King Card Boost and attach any debit or credit card to the Lolli…",
      url: "https://www.psfk.com/2023/02/lolli-users-can-now-earn-bitcoin-rewards-at-every-burger-king-in-america.html",
      urlToImage: null,
      publishedAt: "2023-02-14T07:33:55Z",
      content:
        "If you are new to iQ you can schedule a demo and learn more about this opportunity. \r\n PSFK iQ - Where Innovators Turn for Research. Our professional-grade research platform is designed specifically … [+223 chars]",
    },
    {
      source: { id: null, name: "Theregister.com" },
      author: "Liam Proven",
      title:
        "Craig Wright's crypto wallet claim against Bitcoin SV devs back before judges",
      description:
        "Another of the self-proclaimed BTC inventor's lawsuits rumbles onward\nA company owned by the man who claims to have invented Bitcoin is suing the developers of a fork of Bitcoin. Although the case was dismissed once already, it is being reopened, and a UK cou…",
      url: "https://www.theregister.com/2023/02/15/craig_wright_vs_bitcoin_sv/",
      urlToImage: "https://regmedia.co.uk/2023/02/14/shutterstock_bitcoin.jpg",
      publishedAt: "2023-02-15T09:30:07Z",
      content:
        "A company owned by the man who claims to have invented Bitcoin is suing the developers of a fork of Bitcoin. Although the case was dismissed once already, it is being reopened, and a UK court will he… [+3507 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Paul R. La Monica",
      title: "Did investors learn nothing from last year's market meltdown?",
      description:
        "Meme stock mania was supposed to be over, right? Guess what: It's not.",
      url: "https://www.cnn.com/2023/02/05/investing/stocks-week-ahead/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230202112337-01-bed-bath-beyond-0904-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-05T12:25:50Z",
      content:
        "A version of this story first appeared in CNN Business Before the Bell newsletter. Not a subscriber? You can sign up right here.\r\nMeme stock mania was supposed to be over, right? Guess what: Its not.… [+5865 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "gglover@insider.com (George Glover)",
      title:
        "Hackers tied to North Korea stole $630 million in crypto last year in their biggest haul ever, UN reportedly finds",
      description:
        "\"It isn't a stretch to say that cryptocurrency hacking is a sizable chunk of the nation's economy,\" blockchain data firm Chainalysis said last week.",
      url: "https://markets.businessinsider.com/news/currencies/crypto-analysis-north-korea-hackers-nuclear-missiles-kim-jong-un-2023-2",
      urlToImage:
        "https://i.insider.com/63e219f096242f0019e7b3fa?width=1200&format=jpeg",
      publishedAt: "2023-02-07T10:25:54Z",
      content:
        "Hackers with ties to North Korea stole more crypto than ever before last year in dollar terms, the United Nations has reportedly found.\r\nThe hackers brought in a record digital asset haul worth at le… [+2219 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "psyme@insider.com (Pete Syme)",
      title:
        "Twitter founder Jack Dorsey mocked new owner Elon Musk's company over a major outage, saying it used to be where people talked 'when anything went down'",
      description:
        '"When anything went down, people went to Twitter to talk about it. Now look," Dorsey said in a post on Nostr, a new platform he helped fund.',
      url: "https://www.businessinsider.com/elon-musks-twitter-mocked-by-jack-dorsey-over-major-outage-2023-2",
      urlToImage:
        "https://i.insider.com/63e61c2d96242f0019e846b8?width=1200&format=jpeg",
      publishedAt: "2023-02-10T11:19:54Z",
      content:
        "Jack Dorsey, Twitter's cofounder and former CEO, mocked Elon Musk's company over its major outage on Wednesday.\r\n\"Used to be when anything went down, people went to Twitter to talk about it. Now look… [+2022 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Alex Hern Technology editor",
      title:
        "Near 50% fall in Silvergate’s shares over FTX exposure prompts survival doubts",
      description:
        "Stock price of crypto-focused US bank plummeted in Thursday trading and it is assessing its ability to keep goingThe share price of cryptocurrency-focused US bank Silvergate plummeted by nearly 50% in early trading on Thursday after fresh revelations about th…",
      url: "https://www.theguardian.com/technology/2023/mar/02/near-50-per-cent-fall-in-silvergate-shares-over-ftx-exposure-prompts-survival-doubts",
      urlToImage:
        "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_52_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d655d90f79dbd960c66ce45a2b4d4646",
      publishedAt: "2023-03-02T17:10:12Z",
      content:
        "The share price of cryptocurrency-focused US bank Silvergate plummeted by nearly 50% in early trading on Thursday after fresh revelations about the extent of its exposure to the collapse of crypto ex… [+3079 chars]",
    },
    {
      source: { id: null, name: "Golem.de" },
      author: "Friedhelm Greis",
      title:
        "Gerichtsurteil: Gewinne aus Bitcoin-Verkäufen sind steuerpflichtig",
      description:
        "Der Bundesfinanzhof hat ein Grundsatzurteil zur Besteuerung von Kryptowährungsgeschäften gefällt. (Kryptowährung, Wirtschaft)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fgerichtsurteil-gewinne-aus-bitcoin-verkaeufen-sind-steuerpflichtig-2303-172304.html&referer=https%3A%2F%2Ft.co%2F1fca440b0b",
      urlToImage: null,
      publishedAt: "2023-03-02T09:21:03Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: { id: null, name: "Iwillteachyoutoberich.com" },
      author: "Steven Young",
      title: "We messed up. An apology from Ramit",
      description:
        "I want to apologize for yesterday’s email. If you’re subscribed to I Will Teach You To Be Rich, you received this email yesterday. I see a lot of things wrong in that email. “Guaranteed to beat.” (no, nothing is guaranteed in investing) “People have always be…",
      url: "https://www.iwillteachyoutoberich.com/we-messed-up-an-apology-from-ramit/",
      urlToImage:
        "https://iwtoldproddev.wpengine.com/wp-content/uploads/Screen-Shot-2017-11-13-at-8.40.34-PM-e1510691998560.png",
      publishedAt: "2023-02-27T10:41:55Z",
      content:
        "I want to apologize for yesterdays email.\r\nIf youre subscribed to I Will Teach You To Be Rich\r\n, you received this email\r\n yesterday.\r\nI see a lot of things wrong in that email.\r\n<ul><li>Guaranteed t… [+8788 chars]",
    },
    {
      source: { id: null, name: "Kotaku" },
      author: "Levi Winslow",
      title:
        "Twitch, YouTube Streamers Raise Big Funds For Syria-Turkey Earthquake Relief",
      description:
        "Twitch isn’t just a place where artificial intelligence festers and drama proliferates. It’s also a useful organizational platform for raising awareness around and funds for various global causes, which is exactly what a handful of big-name streamers, like Be…",
      url: "https://kotaku.com/twitch-streamers-youtube-syria-turkey-earthquake-hasan-1850084424",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f381043365873cba42f825c7441c0845.jpg",
      publishedAt: "2023-02-07T20:35:00Z",
      content:
        "Twitch isnt just a place where artificial intelligence festers and drama proliferates. Its also a useful organizational platform for raising awareness around and funds for various global causes, whic… [+2523 chars]",
    },
    {
      source: { id: null, name: "Core77.com" },
      author: "Rain Noe",
      title: "Industrial Designer Offers to Sell Concept for Bitcoin",
      description:
        "We've covered the work of Minsk-based industrial designer Andrey Avgust before. Notably, he did a comprehensive redesign of U.S. currency:See more here Another concept project he did was a redesign of Minsk's Nyamiga Station, including the subway cars:See mor…",
      url: "https://www.core77.com/posts/119587/Industrial-Designer-Offers-to-Sell-Concept-for-Bitcoin",
      urlToImage:
        "https://s3files.core77.com/blog/images/lead_n_spotlight/1349737_lead_400_119587_.jpg",
      publishedAt: "2023-02-13T17:00:00Z",
      content:
        "We've covered the work of Minsk-based industrial designer Andrey Avgust before. Notably, he did a comprehensive redesign of U.S. currency:\r\nSee more here\r\nAnother concept project he did was a redesig… [+721 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Mark Sweney and Jasper Jolly",
      title:
        "Scams: FCA blocks more than 10,000 ads from Instagram, Facebook and YouTube",
      description:
        "Financial watchdog warns over rise of ‘fin-fluencers’ targeting younger people on social mediaMore than 10,000 misleading financial promotions and scams aimed at consumers via social media sites such as Instagram, Facebook, YouTube and TikTok have been identi…",
      url: "https://www.theguardian.com/money/2023/feb/03/scams-fca-blocks-more-than-10000-ads-from-instagram-facebook-and-youtube",
      urlToImage:
        "https://i.guim.co.uk/img/media/2064d9a60892db6f2418716f0ccc1429217aa327/0_141_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bddb92645ff6c747ebdf4914e8bd01ed",
      publishedAt: "2023-02-03T17:55:51Z",
      content:
        "More than 10,000 misleading financial promotions and scams aimed at consumers via social media sites such as Instagram, Facebook, YouTube and TikTok have been identified and targeted by the financial… [+3630 chars]",
    },
    {
      source: { id: null, name: "Insiderintelligence.com" },
      author: "insider@insider.com (Jenna McNamee)",
      title:
        "US regulators say crypto is risky but not banned—behind the scenes, though, it's a different story",
      description:
        "US regulators are allegedly discouraging banks from working with crypto firms. That could leave them with no option but to fold.",
      url: "https://www.insiderintelligence.com/content/crypto-risky-not-banned-behind-scenes-different-story",
      urlToImage:
        "https://www.insiderintelligence.com/content/storage/socialsharingdefault/default-image-share.png?im=FitAndFill,width=1200,height=630",
      publishedAt: "2023-02-13T19:11:15Z",
      content:
        "The news:Crypto firms are getting squeezed out as US regulators are allegedly putting pressure on US banks to cut ties with digital asset firms, per\r\n Cointelegraph.\r\nWhats happening?Various US regul… [+3347 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Billionaire investor Ray Dalio says portfolios are like casinos - and crypto hype is overblown. Here are his 7 best quotes from a new interview.",
      description:
        "The Bridgewater Associates founder said investing is a zero-sum game like poker, and compared life to a video game and lessons to precious gems.",
      url: "https://markets.businessinsider.com/news/stocks/ray-dalio-bridgewater-bitcoin-crypto-markets-portfolios-principles-billionaires-lessons-2023-2",
      urlToImage:
        "https://i.insider.com/632084c689d2b3001894ce34?width=1200&format=jpeg",
      publishedAt: "2023-02-20T16:05:06Z",
      content:
        "Ray Dalio compared markets to poker and portfolios to casinos in a recent episode of the Richer, Wiser, Happier podcast.\r\nThe billionaire investor and Bridgewater Associates founder questioned crypto… [+2531 chars]",
    },
    {
      source: { id: null, name: "MakeUseOf" },
      author: "Elvis Gwaro",
      title: "What Are Crypto ETNs and How Do They Work?",
      description: "Should you invest with a crypto ETN?",
      url: "https://www.makeuseof.com/what-are-crypto-etns-how-do-they-work/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/cryptocurrecny-etns.jpg",
      publishedAt: "2023-02-15T22:45:16Z",
      content:
        "With cryptocurrencies making their way into the mainstream, more investors are using them to diversify their portfolios. Yet the high volatility of cryptocurrencies has made many investors skeptical,… [+7710 chars]",
    },
    {
      source: { id: null, name: "Presse-citron" },
      author: "Jean-Yves Alric",
      title: "L’un des plus gros mineurs de Bitcoin vend 1500 BTC, il explique",
      description:
        "Le deuxième plus gros détenteur de bitcoin côté en Bourse, Marathon Digital, vient de vendre une partie de ses bitcoins.",
      url: "https://www.presse-citron.net/?p=537736",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/02/bitcoin-1.jpg",
      publishedAt: "2023-02-03T11:45:34Z",
      content:
        "Loccasion était trop belle. Marathon Digital, une des principales sociétés de minage, vient de revendre 1500 bitcoins. Au cours actuel, qui se situe autour de 21 500 euros, cela représente une somme … [+2395 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "The S&P 500 could nosedive 30% this year as a painful recession takes hold, top economist David Rosenberg says",
      description:
        "The Rosenberg Research chief warned rising interest rates could hammer stocks and the economy, and also dismissed crypto as a compelling investment.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-recession-rosenberg-fed-interest-rates-tech-gold-2023-2",
      urlToImage:
        "https://i.insider.com/61571d59b414c10018634ea3?width=1200&format=jpeg",
      publishedAt: "2023-02-07T10:07:39Z",
      content:
        "Prepare for US stocks to plunge, unemployment to jump, and the economy to slump this year, David Rosenberg has warned.\r\nInvestors can weather the approaching storm by betting on gold, bonds, and trie… [+2773 chars]",
    },
    {
      source: { id: null, name: "Presse-citron" },
      author: "Setra",
      title: "Et si le Bitcoin nous aidait à avoir plus d’énergie verte ?",
      description:
        'Dans son rapport annuel "Big Idea", Ark Invest explique comment le minage de Bitcoin pourrait être utilisé pour soutenir la production d\'énergie solaire.',
      url: "https://www.presse-citron.net/?p=538449",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2021/10/Bitcoin-1.jpg",
      publishedAt: "2023-02-08T14:00:23Z",
      content:
        "<ul><li><ul><li>Le Bitcoin est une cryptomonnaie énergivore</li><li>Mais un rapport d’Ark Invest indique comment on pourrait utiliser celle-ci pour doper l’énergie solaire</li><li>Le rapport explique… [+4284 chars]",
    },
    {
      source: { id: null, name: "Journal du geek" },
      author: "Gregori Pujol",
      title:
        "Une culture de CBD française chauffée au Bitcoin grâce au chauffe-eau Tresorio MinIT !",
      description:
        "La startup Tresorio et White Label Industry & Co viennent d'annoncer un partenariat visant à révolutionner la culture en intérieur grâce à MinIT, une solution de chauffage innovant, performante et efficiente qui s'intègre chez les particuliers comme en entrep…",
      url: "https://www.journaldugeek.com/2023/02/03/une-culture-de-cbd-francaise-chauffee-au-bitcoin-grace-au-chauffe-eau-tresorio-minit/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2023/02/mint802.jpg",
      publishedAt: "2023-02-03T15:17:56Z",
      content:
        "La startup Tresorio et White Label Industry &amp; Co viennent d'annoncer un partenariat visant à révolutionner la culture en intérieur grâce à MinIT, une solution de chauffage innovant, performante e… [+3402 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Frank Schräer",
      title:
        "Montag: NATO-Websites von Cyberattacken gestört, Blockchain-Änderungen gefordert",
      description:
        "NATO im Visier pro-russischer Hacker + Klage für Blockchain-Änderungen + Ortung bei 112-Notruf + Kommentar zu US-Kündigungen + VW-Betriebssystem 2.0 gesichtet",
      url: "https://www.heise.de/news/Montag-NATO-Websites-von-Cyberattacken-gestoert-Blockchain-Aenderungen-gefordert-7493568.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/9/7/8/1/0/monday-e1ec5331d37f991f.webp",
      publishedAt: "2023-02-13T05:30:00Z",
      content:
        "Einige Webseiten der NATO wurden durch Cyberattacken beeinträchtigt, wie das Verteidigungsbündnis bestätigt. Als Urheber werden pro-russische Hacker vermutet. Unter anderem Druck steht auch die Block… [+5201 chars]",
    },
    {
      source: { id: null, name: "HuffPost" },
      author: "AP",
      title:
        "Disney Removes ‘Simpsons’ Episode With ‘Forced Labor’ Dig In Hong Kong",
      description:
        "In “One Angry Lisa,” Marge Simpson’s virtual spin class instructor makes the comment in front of a Great Wall of China background.",
      url: "https://www.huffpost.com/entry/simpsons-episode-hong-kong_n_63e3a7b2e4b01a4363987df0",
      urlToImage:
        "https://img.huffingtonpost.com/asset/63e3a7b321000060005783f3.jpeg?cache=gHPbENjzk7&ops=1200_630",
      publishedAt: "2023-02-08T13:54:27Z",
      content:
        "HONG KONG (AP) Walt Disney Co. has removed an episode from cartoon series The Simpsons that included a reference to forced labor camps in China from its streaming service in Hong Kong.\r\nThe company d… [+2365 chars]",
    },
    {
      source: { id: null, name: "Theregister.com" },
      author: "Jeff Burt",
      title:
        "Crypto mixer Sinbad looks uncannily like a remix of North Korea's notorious Blender",
      description:
        "Lazarus Group’s favorite digi-dollar launderer may have risen again\nNotorious cryptocurrency anonymization service Blender, which the US Department of the Treasury last year sanctioned for helping to launder hundreds of millions of dollars in digital assets s…",
      url: "https://www.theregister.com/2023/02/14/blender_crypto_mixer_sinbad/",
      urlToImage:
        "https://regmedia.co.uk/2023/02/13/shutterstock_cryptocurrency_laundering.jpg",
      publishedAt: "2023-02-14T06:30:10Z",
      content:
        "Notorious cryptocurrency anonymization service Blender, which the US Department of the Treasury last year sanctioned for helping to launder hundreds of millions of dollars in digital assets stolen by… [+4292 chars]",
    },
    {
      source: { id: null, name: "Caschys Blog" },
      author: "caschy",
      title: "Noch mehr Bitcoin-Automaten bei Saturn und Media Markt",
      description:
        "Seit Anfang Mai 2022 stehen in den Märkten Saturn Köln Hohe Straße, Saturn Frankfurt Zeil und Saturn Dortmund City Bitcoin-Automaten (wir berichteten). Im Rahmen eines sechsmonatigen Pilotprojekts können Kundinnen und Kunden ganz einfach Euro-Scheine in Bitco…",
      url: "https://stadt-bremerhaven.de/noch-mehr-bitcoin-automaten-bei-saturn-und-media-markt/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/06/Pressebild_MMSD_Bitc_-Automat_Saturn_.jpg",
      publishedAt: "2023-02-09T16:41:31Z",
      content:
        "Seit Anfang Mai 2022 stehen in den Märkten Saturn Köln Hohe Straße, Saturn Frankfurt Zeil und Saturn Dortmund City Bitcoin-Automaten (wir berichteten). Im Rahmen eines sechsmonatigen Pilotprojekts kö… [+1439 chars]",
    },
    {
      source: { id: null, name: "MIT Technology Review" },
      author: "Amy Castor",
      title: "Ethereum moved to proof of stake. Why can’t Bitcoin?",
      description:
        "Tech Review Explains: Let our writers untangle the complex, messy world of technology to help you understand what’s coming next. You can read more here. Last year, Ethereum went green. The second-most popular crypto platform transitioned to proof of stake, an…",
      url: "https://www.technologyreview.com/2023/02/28/1069190/ethereum-moved-to-proof-of-stake-why-cant-bitcoin/",
      urlToImage:
        "https://wp.technologyreview.com/wp-content/uploads/2023/02/bitcoin-mining1b.jpeg?resize=1200,600",
      publishedAt: "2023-02-28T09:30:00Z",
      content:
        "Bitcoin mining, the computationally intensive process by which bitcoin is created and accounted for, has become a global concern. After China cracked down on bitcoin mining in mid-2021, miners sought… [+3387 chars]",
    },
    {
      source: { id: null, name: "Theregister.com" },
      author: "Tobias Mann",
      title:
        "US environment agency says it can regulate crypto farms - are datacenters next?",
      description:
        "First Bitcoin, next bit barns? Unlikely\nIn a letter to the US Environmental Protection Agency (EPA) Monday a small group of Democrats called on the agency to enact policies designed to force US crypto-mining operations to report their annual energy consumptio…",
      url: "https://www.theregister.com/2023/02/07/epa_bitcoin_energy/",
      urlToImage: "https://regmedia.co.uk/2021/05/18/ethereum.jpg",
      publishedAt: "2023-02-07T22:30:10Z",
      content:
        "In a letter to the US Environmental Protection Agency (EPA) Monday a small group of Democrats called on the agency to enact policies designed to force US crypto-mining operations to report their annu… [+4529 chars]",
    },
    {
      source: { id: null, name: "Motley Fool" },
      author: "newsfeedback@fool.com (Dominic Basulto)",
      title:
        "Cathie Wood Thinks Bitcoin Is Going to $1.48 Million. Is She Right?",
      description:
        "Cathie Wood of Ark Invest has updated her Bitcoin price prediction. She now thinks Bitcoin is going to $1.5 million.",
      url: "https://www.fool.com/investing/2023/02/11/cathie-wood-thinks-bitcoin-going-over-1-million/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/720141/gold-coin-with-bitcoin-symbol-on-it-cryptocurrency-btc.jpg",
      publishedAt: "2023-02-11T13:00:00Z",
      content:
        "With Bitcoin(BTC -0.27%) turning in its best January performance since 2013, it's no surprise that analysts are ratcheting up their price targets for this suddenly hot crypto. Bitcoin was up nearly 4… [+4476 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "Reddit-loving retail investors are making their chaotic presence felt again - and their risky behavior is fueling a stock rally that doesn't look sustainable",
      description:
        "Day traders are reviving the meme-stock playbook with big bets on speculative names.",
      url: "https://markets.businessinsider.com/news/stocks/next-stock-market-crash-reddit-day-trader-risky-retail-investing-2023-2",
      urlToImage:
        "https://i.insider.com/63f61a425ca81e001855afce?width=1200&format=jpeg",
      publishedAt: "2023-02-23T10:00:00Z",
      content:
        "Retail investors are partying like it's 2021. \r\nThe everyday traders that powered the meme-stock frenzy of two years ago are back, rebuffing Fed Chair Jerome Powell's hawkishness and helping push equ… [+4991 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "FTX might not have been the only crypto exchange using customer money for other things",
      description:
        "Insider's Phil Rosen explains how Binance is coming under scrutiny for its shuffling of customer funds in a way that's strikingly Sam Bankman-Fried's failed exchange.",
      url: "https://www.businessinsider.com/ftx-shady-crypto-binance-customer-funds-investors-markets-tokens-busd-2023-3",
      urlToImage:
        "https://i.insider.com/63ffaae7bb1d0b0018876e87?width=1200&format=jpeg",
      publishedAt: "2023-03-02T11:05:00Z",
      content:
        "Happy Friday eve, Opening Bell crew. Senior reporter Phil Rosen here. \r\nAs if the universe knew that I hadn't written a crypto newsletter in some time, here we go: Binance, the world's largest crypto… [+5366 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "Europe’s now dealing with an oversupply of natural gas after hoarding it for months before winter",
      description:
        "Insider's Phil Rosen breaks down what's happening with natural gas and energy across Europe and Russia.",
      url: "https://www.businessinsider.com/europe-natural-gas-energy-crisis-russia-crude-oil-markets-ukraine-2023-2",
      urlToImage:
        "https://i.insider.com/63039d37c2794d00197efe5b?width=1200&format=jpeg",
      publishedAt: "2023-02-16T11:25:00Z",
      content:
        "Good morning, Opening Bell readers. Phil Rosen here. \r\nIt's not because I'm vegan, but I haven't bought eggs in months now. Thanks to inflation, a dozen eggs now costs more than a pound of beef. \r\nPr… [+5207 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "The good news is markets look resilient — but the bad news is just about everything else",
      description:
        "Insider's Phil Rosen breaks down why bad economic news hasn't dragged markets lower — and the key trade keeping markets afloat.",
      url: "https://www.businessinsider.com/markets-economy-inflation-recession-magic-gathering-stocks-fed-investing-2023-2",
      urlToImage:
        "https://i.insider.com/63ee9089b66c280019d773ee?width=1200&format=jpeg",
      publishedAt: "2023-02-17T11:00:00Z",
      content:
        "TGIF. Phil Rosen here, reporting from New York City. \r\nI'm happy to see that, finally, the rest of the world seems to be catching on to the magic that is Magic: The Gathering. \r\nHaven't heard of it? … [+4798 chars]",
    },
    {
      source: { id: null, name: "Motley Fool" },
      author: "newsfeedback@fool.com (Neil Patel)",
      title: "Can Bitcoin Reach $100,000?",
      description:
        "The world's top cryptocurrency is off to a hot start this year.",
      url: "https://www.fool.com/investing/2023/02/04/can-bitcoin-reach-100000/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/719009/bitcoin-wallet.jpg",
      publishedAt: "2023-02-04T13:15:00Z",
      content:
        "Last year was characterized by tightening monetary policy as higher interest rates were put in place to fight soaring inflation. As a result, investors soured on risky assets, including growth stocks… [+3830 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Megan Myers",
      title: "A PayPal ban 'ruined' Freedom Phone founder's life for a year",
      description:
        "Freedom Phone Founder Erik Finman shared how PayPal's decision to ban his account four days after his startup launched destroyed the company's future success.",
      url: "https://www.foxnews.com/tech/paypal-ban-ruined-freedom-phone-founders-life-year",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/GettyImages-1329601541.jpg",
      publishedAt: "2023-02-05T15:00:43Z",
      content:
        "Erik Finman thought his latest venture was an instant success: the tech entrepreneur's Freedom Phones raked in $3.5 million in sales in just the first week.\r\n\"When I saw the money come in, I'm like o… [+5358 chars]",
    },
    {
      source: { id: null, name: "MIT Technology Review" },
      author: "Rhiannon Williams",
      title:
        "The Download: making Bitcoin greener, and Elon Musk’s chatbot plans",
      description:
        "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Ethereum moved to proof of stake. Why can’t Bitcoin?  Last year, Ethereum went green. The second-most popular crypto plat…",
      url: "https://www.technologyreview.com/2023/02/28/1069215/download-making-bitcoin-greener-elon-musk-chatbot-plans/",
      urlToImage:
        "https://wp.technologyreview.com/wp-content/uploads/2023/02/bitcoin-mining1b.jpeg?resize=1200,600",
      publishedAt: "2023-02-28T13:10:00Z",
      content:
        "Last year, Ethereum went green. The second-most popular crypto platform transitioned to proof of stake, an energy-efficient framework for adding new blocks of transactions, NFTs, and other informatio… [+1044 chars]",
    },
  ];

  render() {
    return (
      <div className="container my-5 d-flex  flex-wrap justify-content-evenly gap-4">
        {this.articles.map((e) => {
          return (
            <Card style={{ width: "18rem", overflow: "hidden" }} key={e.url}>
              <Card.Img
                style={{ width: "18rem", height: "10rem", objectFit: "cover" }}
                variant="top"
                loading="lazy"
                src={e.urlToImage}
              />
              <Card.Body>
                <Card.Title>
                  {e.title.length < 50 ? e.title : e.title.slice(0, 50)}...
                </Card.Title>
                <Card.Text>
                  {e.description.length < 100
                    ? e.description
                    : e.description.slice(0, 100)}
                  ...
                </Card.Text>
                <Button
                  variant="primary"
                  className="btn-sm"
                  href={e.url}
                  target="_blank"
                >
                  read more
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default NewsCard;
