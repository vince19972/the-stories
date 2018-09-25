import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUnity: false,
    anger: {
      stories: [
        {
          id_href: 'captalism',
          category: 'captalism',
          story: false,
          reference: 'https://www.commondreams.org/views/2018/09/18/capitalist-manifesto-let-poor-people-die'
        },
        {
          id_href: 'injustice',
          category: 'injustice',
          story: false,
          reference: 'https://www.thisamericanlife.org/656/let-me-count-the-ways'
        },
        {
          id_href: 'ignorance',
          category: 'ignorance',
          story: false,
          reference: 'https://www.huffingtonpost.com/entry/white-people-wake-the-fuc_b_10898332.html'
        },
        {
          id_href: 'racial-injustice',
          category: 'racial-injustice',
          story: false,
          reference: 'https://www.aclu.org/blog/racial-justice/race-and-inequality-education/federal-data-shows-public-schools-nationwide-are'
        },
        {
          id_href: 'sexism',
          category: 'sexism',
          story: false,
          reference: 'http://www.inamu.go.cr/machismo-mata-dos-mujeres-esta-semana'
        },
        {
          id_href: 'new-york',
          category: 'new-york',
          story: false,
          reference: 'http://gothamist.com/2013/09/24/bushwick_native_new_yorker_has_a_fe.php'
        },
        {
          id_href: 'cheating',
          category: 'cheating',
          story: false,
          reference: 'https://www.elitedaily.com/p/why-do-people-want-to-cheat-a-psychiatrist-explains-the-urge-even-for-people-in-love-11987134'
        },
        {
          id_href: 'inefficiency',
          category: 'inefficiency',
          story: false,
          reference: 'https://www.wvgazettemail.com/life/columns/on_retirement/on-retirement-the-inefficiencies-of-the-health-care-industry/article_f7609e9b-9acd-5e63-97c7-116387a235c6.html'
        },

        {
          id_href: 'lies',
          category: 'lies',
          story: false,
          reference: 'https://www.nytimes.com/2018/09/14/opinion/letters/trump-lying.html'
        },
        {
          id_href: 'wasting-time',
          category: 'wasting-time',
          story: false,
          reference: 'https://www.forbes.com/sites/francesbridges/2018/08/29/the-top-7-ways-you-are-wasting-your-time/#3d4720dc46ae'
        },
        {
          id_href: 'climate-change-deniers',
          category: 'climate-change-deniers',
          story: false,
          reference: 'https://www.theguardian.com/environment/2018/aug/26/climate-change-is-real-we-must-not-offer-credibility-to-those-who-deny-it'
        },
        {
          id_href: 'neoliberalism',
          category: 'neoliberalism',
          story: false,
          reference: 'https://www.theguardian.com/news/2017/aug/18/neoliberalism-the-idea-that-changed-the-world'
        },
        {
          id_href: 'myself',
          category: 'myself',
          story: false,
          reference: 'https://psychcentral.com/blog/how-to-stop-punishing-yourself/'
        },
        {
          id_href: 'abusive-to-livings',
          category: 'abusive-to-livings',
          story: false,
          reference: 'https://newrepublic.com/article/116799/egypt-does-not-need-pinochet'
        },
        {
          id_href: 'lose-control-of-life',
          category: 'lose-control-of-life',
          story: false,
          reference: 'https://medium.com/@timdenning/what-to-do-when-your-life-is-completely-out-of-control-26b3c723f509'
        },
        {
          id_href: 'showing-off',
          category: 'showing-off',
          story: false,
          reference: 'https://www.psychologytoday.com/us/blog/unified-theory-happiness/201610/5-ways-deal-someone-who-never-stops-bragging'
        },
        {
          id_href: 'immature-people',
          category: 'immature-people',
          story: false,
          reference: 'https://www.salon.com/2018/09/15/john-kerry-on-bill-maher-trump-is-immature-and-ignorant-focused-on-twitter-likes/'
        },
        {
          id_href: 'insensitive-people',
          category: 'insensitive-people',
          story: false,
          reference: 'https://www.nytimes.com/2015/06/21/opinion/sunday/is-your-boss-mean.html'
        },
        {
          id_href: 'police-brutality',
          category: 'police-brutality',
          story: false,
          reference: 'https://www.theatlantic.com/health/archive/2018/05/the-57375-years-of-life-lost-to-police-violence/559835/'
        },
        {
          id_href: 'toxic-masculinity',
          category: 'toxic-masculinity',
          story: false,
          reference: 'https://www.newyorker.com/magazine/2017/11/20/the-weinstein-moment-and-the-trump-presidency'
        },
        {
          id_href: 'labeling',
          category: 'labeling',
          story: false,
          reference: 'https://www.psychologytoday.com/us/blog/ulterior-motives/201406/the-danger-labeling-others-or-yourself'
        },
        {
          id_href: 'the-president',
          category: 'the-president',
          story: false,
          reference: 'https://www.nytimes.com/2017/05/15/opinion/trump-classified-data.html'
        },
        {
          id_href: 'pharmaceutical-industry',
          category: 'pharmaceutical-industry',
          story: false,
          reference: 'https://www.nytimes.com/2018/05/14/opinion/big-pharma-drug-companies.html'
        },
        {
          id_href: 'art-for-arts-sake',
          category: 'art-for-arts-sake',
          story: false,
          reference: 'https://hyperallergic.com/462059/marina-abramovic-assaulted-arts-sake/'
        },
        {
          id_href: 'bigotry',
          category: 'bigotry',
          story: false,
          reference: 'https://www.bostonglobe.com/opinion/2018/05/18/the-president-vile-bigot/1euZENDiQbsexRdsSDnlcO/story.html'
        },
        {
          id_href: 'mass-incarceration',
          category: 'mass-incarceration',
          story: false,
          reference: 'https://www.aclu.org/issues/smart-justice/mass-incarceration/mass-incarceration-animated-series'
        },
        {
          id_href: 'criminalizing-sex-work',
          category: 'criminalizing-sex-work',
          story: false,
          reference: 'https://www.thenation.com/article/the-webhosting-service-for-sex-workers-by-sex-workers-against-sesta-fosta/ '
        },
        {
          id_href: 'selfishness',
          category: 'selfishness',
          story: false,
          reference: 'https://www.theguardian.com/commentisfree/2017/oct/29/selfishness-we-are-all-terrible-people-arwa-mahdawi'
        },
        {
          id_href: 'all-talk-no-action',
          category: 'all-talk-no-action',
          story: false,
          reference: 'https://www.reliableplant.com/Read/20958/eliminating-'all-talk,-no-action'-work-ethic'
        },
        {
          id_href: 'mta',
          category: 'mta',
          story: false,
          reference: 'https://www.nytimes.com/2018/02/20/nyregion/mta-train-delays.html'
        },
        {
          id_href: 'littering',
          category: 'littering',
          story: false,
          reference: 'https://www.nzherald.co.nz/the-country/news/article.cfm?c_id=16&objectid=12124452'
        }
      ]
    },
    care: {
      stories: [
        {
          story: '1 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '2 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '3 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '4 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '5 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '6 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '7 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '8 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        },
        {
          story: '9 ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
        }
      ]
    },
    fear: {
      phrases: [
        'alive', 'death', 'meaninglessness', 'failure', 'bugs',
        'hatred', 'unforgiveness', 'climate change', 'never finding the perfect career',
        'sexual assault', 'spiders', 'disappointing those who I respect', 'my mother dying',
        'constraint', 'being lonely', 'to hurt someone', 'loss of my precious persons',
        'loss of the voice of myself ', 'browser history becomes public',
        'failure', 'western society is losing it\'s grip on morality and reality',
        'let them disappointed', 'being useless', 'lack of freedom', 'elder people facing loneliness',
        'snake', 'violence', 'isolation', 'hurting others', 'not making a huge meaningful and positive impact on the world before I die',
        'giant squids', 'toads', 'dying too early', 'failing creatively', 'not being successful',
        'the future', 'losing my mother', 'getting ill and having the medical system fail me (again)',
        'lobbyist-controlled politics', 'water wars', 'christian fundamentalism',
        'being incomprehensible', 'not living up to my potential', 'horror movie',
        'elling out professionally', 'death of loved ones', 'nuclear and/or digital war'
      ]
    }
  },
  mutations: {

  },
  actions: {

  }
})
