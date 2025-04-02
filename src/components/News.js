import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News    extends Component {
  constructor(){
    super();
    let articles = [
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Urooba Jamal",
        "title": "Donald Trump live news: Countries, markets on edge as tariff deadline looms",
        "description": "US president says the reciprocal tariffs to be announced on April 2 will be lower than what other countries charge.",
        "url": "https://www.aljazeera.com/news/liveblog/2025/4/1/donald-trump-live-news-countries-markets-on-edge-as-tariff-deadline-looms",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/04/2025-04-01T000851Z_443260097_RC2FODA2AIAJ_RTRMADP_3_USA-TRUMP-1743497812.jpg?resize=1920%2C1440",
        "publishedAt": "2025-04-01T09:07:29Z",
        "content": "blinking-dot\r\nLive updatesLive updates, \r\nUS president says the reciprocal tariffs to be announced on April 2 will be lower than what other countries charge."
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": "Dana Hull, Bill Allison, Phil Kuntz",
        "title": "Elon Musk’s Wisconsin Supreme Court Fight Is All About Power",
        "description": "Elon Musk is seeking a repeat of the political victory he scored with President Donald Trump by deploying millions of dollars into what has become the most expensive judicial race in US history.",
        "url": "https://www.bloomberg.com/news/articles/2025-04-01/elon-musk-s-wisconsin-supreme-court-fight-is-all-about-power",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8mvvpD2MLVs/v8/1200x800.jpg",
        "publishedAt": "2025-04-01T09:00:00+00:00",
        "content": "Elon Musk is seeking a repeat of the political victory he scored with President Donald Trump by deploying millions of dollars into what has become the most expensive judicial race in US history.\r\nMus… [+339 chars]"
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": "Maya Averbuch, Derek Decloet, Sabrina Willmer",
        "title": "Trump’s Tariff Upheaval Sparks Frenzy of Work for Trade Lawyers",
        "description": "Manufacturers and suppliers are bound by more than simple supply and demand. There are contracts, rules, laws, arbitration clauses and myriad other legal stipulations that smooth the flow of commerce.",
        "url": "https://www.bloomberg.com/news/articles/2025-04-01/trump-s-tariff-upheaval-sparks-frenzy-of-work-for-trade-lawyers",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i30NMuDSy7lk/v0/1200x774.jpg",
        "publishedAt": "2025-04-01T09:00:00+00:00",
        "content": "Manufacturers and suppliers are bound by more than simple supply and demand. There are contracts, rules, laws, arbitration clauses and myriad other legal stipulations that smooth the flow of commerce… [+205 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Melanie Zanona",
        "title": "Treasury secretary to meet with House Republicans as Trump eyes new tariffs",
        "description": "It's the latest meeting House GOP conference chair Lisa McClain has set up with members of Trump's Cabinet in an effort to keep lawmakers in the loop on White House plans.",
        "url": "https://www.nbcnews.com/politics/congress/treasury-secretary-meet-house-republicans-trump-eyes-new-tariffs-rcna198912",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-03/250331-treasury-secreatary-Scott-Bessent-ac-737p-1cbc38.jpg",
        "publishedAt": "2025-04-01T09:00:00Z",
        "content": "Treasury Secretary Scott Bessent will visit Capitol Hill on Tuesday afternoon for a meet-and-greet session with House Republicans, according to Rep. Lisa McClain, R-Mich., the chair of the House GOP … [+4156 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Adam Edelman, Bridget Bowman, Ben Kamisar, Kailani Koenig",
        "title": "Key races in Wisconsin and Florida: What to watch for and know in today’s elections",
        "description": "Get the latest on today's Wisconsin Supreme Court and other races, as well as Florida special elections. Find out how these races impact the Trump administration and what to watch for.",
        "url": "https://www.nbcnews.com/politics/elections/key-races-wisconsin-florida-what-to-know-elections-rcna198082",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-03/250325-Susan-Crawford-Brad-Schimel-ew-548p-a4499b.jpg",
        "publishedAt": "2025-04-01T09:00:00Z",
        "content": "The first major elections of President Doanld Trumps second term will take place on Tuesday, as voters head to the polls in Wisconsin, a perennial battleground, and in Trump-friendly territory in Flo… [+9333 chars]"
      },
      {
        "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
        },
        "author": "John McCormick",
        "title": "Voters to Give Trump and Musk Early Marks Tuesday in Wisconsin and Florida",
        "description": "The Badger State’s Supreme Court race will be especially watched for how swing voters are responding to Trump’s first two months",
        "url": "https://www.wsj.com/politics/elections/florida-wisconsin-special-elections-86d9b457?mod=hp_lead_pos6",
        "urlToImage": "https://images.wsj.net/im-80519915/social",
        "publishedAt": "2025-04-01T09:00:00Z",
        "content": "Donald Trumps second presidency faces its first major electoral test on Tuesday as Wisconsin and Florida voters cast ballots in races that will also assess whether Elon Musk is a political asset or l… [+1410 chars]"
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": "Olesia Safronova, Aliaksandr Kudrytski",
        "title": "Ukraine Pushing Ahead on US Deal After Trump Renews Criticism",
        "description": "Ukraine’s top diplomat said officials are pressing ahead with the US toward an “acceptable” economic accord hours after President Donald Trump accused Kyiv of trying to renegotiate the deal.",
        "url": "https://www.bloomberg.com/news/articles/2025-04-01/ukraine-pushing-ahead-on-us-deal-after-trump-renews-criticism",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioduwp1eTf5g/v1/1200x801.jpg",
        "publishedAt": "2025-04-01T08:50:23+00:00",
        "content": "Ukraines top diplomat said officials are pressing ahead with the US toward an acceptable economic accord hours after President Donald Trump accused Kyiv of trying to renegotiate the deal. \r\nForeign M… [+231 chars]"
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": "Levin Stamm",
        "title": "Goldman’s Bell Cuts European Stock Targets on US Tariff Threat",
        "description": "Goldman Sachs Group Inc. strategists cut their targets on European stocks due to the expected hit from President Donald Trump’s tariffs, making a contrarian bet at a time when the region has beaten US peers by a record.",
        "url": "https://www.bloomberg.com/news/articles/2025-04-01/goldman-s-bell-cuts-european-stock-targets-on-us-tariff-threat",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.K19OgRl5H0/v0/1200x800.jpg",
        "publishedAt": "2025-04-01T08:42:12+00:00",
        "content": "Goldman Sachs Group Inc. strategists cut their targets on European stocks due to the expected hit from President Donald Trumps tariffs, making a contrarian bet at a time when the region has beaten US… [+289 chars]"
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": "Tom Rees",
        "title": "UK Factory Exports Drop Ahead of Trump’s Wave of Global Tariffs",
        "description": "Demand for UK factory exports tumbled at the fastest pace in over 1 ½ years, as orders dried up and confidence wilted under the threat of a tit-for-tat tariffs skirmish between Donald Trump’s US administration and major trading partners.",
        "url": "https://www.bloomberg.com/news/articles/2025-04-01/uk-factory-exports-tumble-ahead-of-trump-s-tariffs",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iT3FKE5tx.TM/v1/1200x800.jpg",
        "publishedAt": "2025-04-01T08:30:00+00:00",
        "content": "Demand for UK factory exports tumbled at the fastest pace in over 1 ½ years, as orders dried up and confidence wilted under the threat of a tit-for-tat tariffs skirmish between Donald Trumps US admin… [+209 chars]"
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "CBS News",
        "title": "3/31: America Decides",
        "description": "Is Trump serious about considering a third term?; Why the Trump administration wants to defund public media",
        "url": "https://www.cbsnews.com/video/033125-america-decides/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2025/04/01/dd6a5610-0236-4280-8764-97365098edf1/thumbnail/1200x630/1700c7da0fe0570efa62677faa107d12/0331-ad-full-3646935-640x360.jpg?v=8bc7d3d6fae86780125d801cb89af1af",
        "publishedAt": "2025-04-01T08:25:40+00:00",
        "content": "Copyright ©2025 CBS Interactive Inc. All rights reserved."
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Fresh US strikes extend air campaign targeting Yemen’s Houthis",
        "description": "Houthis claim to down US drone. President Donald Trump declares Yemeni rebel group ‘decimated’ by air strike campaign.",
        "url": "https://www.aljazeera.com/news/2025/4/1/fresh-us-strikes-extend-air-campaign-targeting-yemens-houthis",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/03/AFP__20250324__37MT9NQ__v2__HighRes__TopshotYemenUsIsraelPalestinianConflict-1742870070.jpg?resize=1920%2C1440",
        "publishedAt": "2025-04-01T08:24:29Z",
        "content": "The United States military launched a series of air attacks on Yemen overnight, targeting Houthi rebels.\r\nStrikes hit an area near the capital, Sanaa, as well as the northern province of Saada early … [+2296 chars]"
      },
      {
        "source": {
          "id": "cbc-news",
          "name": "CBC News"
        },
        "author": "CBC News",
        "title": "Trump voters brush off threats to Canadian sovereignty as a joke and a distraction | CBC News",
        "description": "Despite the rollout of his tariffs causing major backlash abroad — particularly in Canada, a repeated target of the U.S. president’s ire — several Trump voters who spoke with CBC News said they still support him, or even outright dismissed his recent rhetoric…",
        "url": "http://www.cbc.ca/news/world/trump-voters-annexation-1.7498298",
        "urlToImage": "https://i.cbc.ca/1.7498344.1743452052!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/joseph-redmon-doug-cornett.jpg?im=Resize%3D620",
        "publishedAt": "2025-04-01T08:07:36.6511262Z",
        "content": "The smile begins to form on Joseph Redmon's face, and there's even a little chuckle, at the first mention of Canada becoming the 51st state.\r\n\"It's a joke,\" he says over and over. \r\n\"It would never h… [+5860 chars]"
      },
      {
        "source": {
          "id": "newsweek",
          "name": "Newsweek"
        },
        "author": "Tom Rogers",
        "title": "A Better DOGE: Downsize Optimally/Gore's Example | Opinion",
        "description": "Trump's drive to scale down the federal government by unleashing and empowering Elon Musk to indiscriminately fire thousands of federal employees, has wreaked chaos.",
        "url": "https://www.newsweek.com/better-doge-downsize-optimally-gores-example-opinion-2053343",
        "urlToImage": "https://d.newsweek.com/en/full/2618293/doge-disrespected.jpg",
        "publishedAt": "2025-04-01T08:01:01Z",
        "content": "President Donald Trump's drive to scale down the federal government by unleashing and empowering Elon Musk to indiscriminately fire thousands of federal employees, has wreaked chaos.\r\nAnd while there… [+9307 chars]"
      },
      {
        "source": {
          "id": "la-repubblica",
          "name": "La Repubblica"
        },
        "author": "La Repubblica",
        "title": "Dazi, von der Leyen risponde a Trump: “L’Europa non ha iniziato questo scontro, pronti a vendicarci”",
        "description": "La presidente della Commissione europea: “Troppi ostacoli nel mercato unico”",
        "url": "https://www.repubblica.it/economia/2025/04/01/news/dazi_von_der_leyen_risponde_a_trump-424098633/",
        "urlToImage": "https://www.repstatic.it/content/nazionale/img/2025/04/01/095557680-45213be6-4d40-41f8-aeae-c53ce39ed46c.jpg",
        "publishedAt": "2025-04-01T07:55:59Z",
        "content": "MILANO LEuropa non è responsabile dello scontro Usa- Ue sui dazi. È il messaggio lanciato oggi dalla presidente della Commissione europea Ursula von der Leyen, intervenendo alla plenaria del parlamen… [+1913 chars]"
      },
      {
        "source": {
          "id": "australian-financial-review",
          "name": "Australian Financial Review"
        },
        "author": "Jennifer Hewett",
        "title": "RBA interest rates: Why Michele Bullock thinks inflation could go either way",
        "description": "Central banks are as much on edge as markets, as the world waits to learn the impact and extent of Donald Trump’s tariffs. Caution reigns at the Reserve Bank.",
        "url": "http://www.afr.com/companies/financial-services/rba-won-t-join-desperate-guessing-game-20250401-p5lo9i",
        "urlToImage": "https://static.ffx.io/images/$zoom_0.6737%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_416%2C$y_231/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_opinion_no_age_social_wm/1f4a9de8706df8b636928cff846df82412435a0a",
        "publishedAt": "2025-04-01T07:29:19Z",
        "content": "Pity any central bank governor trying to make sense of what Donald Trumps tariffs mean for the world economy. Add in a fractious domestic election campaign where the cost of living forms the key poli… [+270 chars]"
      },
      {
        "source": {
          "id": "la-repubblica",
          "name": "La Repubblica"
        },
        "author": "La Repubblica",
        "title": "Le Borse di oggi, 1 aprile. Tregua sui mercati, mini rimbalzo dopo il tonfo per i dazi",
        "description": "Recuperano i listini in Asia, Europa in cauto rialzo. Attesa per le decisioni di Trump di domani. Nuovo record per l’oro",
        "url": "https://www.repubblica.it/economia/2025/04/01/diretta/le_borse_di_oggi_1_aprile-424098435/",
        "urlToImage": "https://www.repstatic.it/content/nazionale/img/2025/04/01/084714827-9fd53b99-e59a-42d5-8601-7390ad14bb7f.jpg",
        "publishedAt": "2025-04-01T07:18:51Z",
        "content": "Le Borse europee e tentano il rimbalzo in apertura dopo le perdite di ieri legate al timori sui nuovi dazi in arrivo dagli Usa. A Francoforte il Dax avanza dello 0,84% a 22.348,05 punti, a Londra l'F… [+190 chars]"
      },
      {
        "source": {
          "id": "rte",
          "name": "RTE"
        },
        "author": "RTÉ News",
        "title": "Far-right leaders rally around Le Pen after poll ban",
        "description": "Prominent European far-right and nationalist figures as well as Donald Trump and Elon Musk rallied around Marine Le Pen after a French court sentenced her to a five-year ban on running for office.",
        "url": "https://www.rte.ie/news/europe/2025/0401/1505156-marine-le-pen/",
        "urlToImage": "https://img.rasset.ie/00222ebe-1600.jpg",
        "publishedAt": "2025-04-01T07:03:32Z",
        "content": "Prominent European far-right and nationalist figures as well as Donald Trump and Elon Musk rallied around Marine Le Pen after a French court sentenced her to a five-year ban on running for office.\r\nL… [+3937 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Camilla Fuhr",
        "title": "After Canada, Denmark joins boycotts of American products in protest of Trump's Greenland ownership claim",
        "description": "Widespread anger over the Trump administration’s push for U.S. ownership of Greenland is prompting shoppers in Denmark to boycott American products and services.",
        "url": "https://www.nbcnews.com/news/world/denmark-joins-boycott-american-products-trump-greenland-canada-rcna198918",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-03/250331-denmark-mb-1244-18925a.jpg",
        "publishedAt": "2025-04-01T07:00:00Z",
        "content": "COPENHAGEN, Denmark Widespread anger over the Trump administrations push for U.S. ownership of Greenland is prompting shoppers in Denmark to boycott American products and services such as Tesla, Netf… [+5332 chars]"
      }
    ]
    console.log("Hello I am Constructor from news component")
    this.state ={
      articles: this.articles,
      loading: false 
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey - Top Headlines</h2>
        <div className='row'>
          <div className='col-md-4'>
            <NewsItem title="myTitle" description="myDescription" imageurl='https://www.aljazeera.com/wp-content/uploads/2025/04/2025-04-01T000851Z_443260097_RC2FODA2AIAJ_RTRMADP_3_USA-TRUMP-1743497812.jpg?resize=1920%2C1440' newsUrl='todo'></NewsItem>
          </div>
          <div className='col-md-4'>
            <NewsItem title="myTitle" description="myDescription"></NewsItem>
          </div>
          <div className='col-md-4'>
            <NewsItem title="myTitle" description="myDescription"></NewsItem>
          </div>
       </div>
      </div>
      
    )
  }
}

export default News