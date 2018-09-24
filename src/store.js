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
          reference: false
        },
        {
          id_href: 'injustice',
          category: 'injustice',
          story: false,
          reference: false
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
          reference: false
        },
        {
          id_href: 'sexism',
          category: 'sexism',
          story: false,
          reference: false
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
          reference: false
        },
        {
          id_href: 'neoliberalism',
          category: 'neoliberalism',
          story: false,
          reference: false
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
          reference: false
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
          reference: false
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
          reference: false
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
          id_href: 'criminalizing sex work',
          category: 'criminalizing sex work',
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
        'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
        'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
        'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
        'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
        'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
        'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
        'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
        'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
        'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
        'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
        'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
        'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
        'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
        'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
        'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
        'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
        'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
        'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
        'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
        'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
        'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
        'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
        'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
        'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
        'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
        'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
        'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
        'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
        'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
        'elementum', 'tempor', 'risus', 'cras',
        'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
        'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
        'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
        'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
        'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
        'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
        'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
        'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
        'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
        'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam'
      ]
    }
  },
  mutations: {

  },
  actions: {

  }
})
