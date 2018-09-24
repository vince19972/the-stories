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
          reference: https://www.commondreams.org/views/2018/09/18/capitalist-manifesto-let-poor-people-die
        },
        {
          id_href: 'injustice',
          category: 'injustice',
          story: false,
          reference: https://www.thisamericanlife.org/656/let-me-count-the-ways
        },
        {
          id_href: 'ignorance',
          category: 'ignorance',
          story: false,
          reference: false
        },
        {
          id_href: 'racial-injustice',
          category: 'racial-injustice',
          story: false,
          reference: https://www.aclu.org/blog/racial-justice/race-and-inequality-education/federal-data-shows-public-schools-nationwide-are
        },
        {
          id_href: 'sexism',
          category: 'sexism',
          story: false,
          reference: http://www.inamu.go.cr/machismo-mata-dos-mujeres-esta-semana
        },
        {
          id_href: 'new-york',
          category: 'new-york',
          story: false,
          reference: false
        },
        {
          id_href: 'cheating',
          category: 'cheating',
          story: false,
          reference: false
        },
        {
          id_href: 'inefficiency',
          category: 'inefficiency',
          story: false,
          reference: false
        },

        {
          id_href: 'lies',
          category: 'lies',
          story: false,
          reference: false
        },
        {
          id_href: 'wasting-time',
          category: 'wasting-time',
          story: false,
          reference: false
        },
        {
          id_href: 'climate-change-deniers',
          category: 'climate-change-deniers',
          story: false,
          reference: https://www.theguardian.com/environment/2018/aug/26/climate-change-is-real-we-must-not-offer-credibility-to-those-who-deny-it
        },
        {
          id_href: 'neoliberalism',
          category: 'neoliberalism',
          story: false,
          reference: https://www.theguardian.com/news/2017/aug/18/neoliberalism-the-idea-that-changed-the-world
        },
        {
          id_href: 'myself',
          category: 'myself',
          story: false,
          reference: false
        },
        {
          id_href: 'abusive-to-livings',
          category: 'abusive-to-livings',
          story: false,
          reference: https://newrepublic.com/article/116799/egypt-does-not-need-pinochet
        },
        {
          id_href: 'lose-control-of-life',
          category: 'lose-control-of-life',
          story: false,
          reference: false
        },
        {
          id_href: 'showing-off',
          category: 'showing-off',
          story: false,
          reference: false
        },
        {
          id_href: 'immature-people',
          category: 'immature-people',
          story: false,
          reference: false
        },
        {
          id_href: 'insensitive-people',
          category: 'insensitive-people',
          story: false,
          reference: false
        },
        {
          id_href: 'police-brutality',
          category: 'police-brutality',
          story: false,
          reference: false
        },
        {
          id_href: 'toxic-masculinity',
          category: 'toxic-masculinity',
          story: false,
          reference: https://www.newyorker.com/magazine/2017/11/20/the-weinstein-moment-and-the-trump-presidency
        },
        {
          id_href: 'labeling',
          category: 'labeling',
          story: false,
          reference: false
        },
        {
          id_href: 'the-president',
          category: 'the-president',
          story: false,
          reference: false
        },
        {
          id_href: 'pharmaceutical-industry',
          category: 'pharmaceutical-industry',
          story: false,
          reference: https://www.nytimes.com/2018/05/14/opinion/big-pharma-drug-companies.html
        },
        {
          id_href: 'art-for-arts-sake',
          category: 'art-for-arts-sake',
          story: false,
          reference: false
        },
        {
          id_href: 'bigotry',
          category: 'bigotry',
          story: false,
          reference: false
        },
        {
          id_href: 'mass-incarceration',
          category: 'mass-incarceration',
          story: false,
          reference: false
        },
        {
          id_href: 'criminalizing-sex-work',
          category: 'criminalizing-sex-work',
          story: false,
          reference: false
        },
        {
          id_href: 'selfishness',
          category: 'selfishness',
          story: false,
          reference: false
        },
        {
          id_href: 'all-talk-no-action',
          category: 'all-talk-no-action',
          story: false,
          reference: false
        },
        {
          id_href: 'mta',
          category: 'mta',
          story: false,
          reference: false
        },
        {
          id_href: 'littering',
          category: 'littering',
          story: false,
          reference: false
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
