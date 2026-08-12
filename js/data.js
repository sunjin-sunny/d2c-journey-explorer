/* =========================================================
   D2C Journey Explorer — Public Portfolio Data
   English version

   Notes
   - All internal organization names have been generalized.
   - Screen paths match the cleaned assets currently used in the project.
   - The object shape is intentionally kept compatible with the current app.js.
   - Later, this file can be split into EN / KO locale files for language switching.
   ========================================================= */

const CHARACTERS = [
  {
    id: 'us-galaxy',
    flag: '🇺🇸',
    name: 'Alex',
    country: 'United States',
    tagline: 'Looking for a new Galaxy',
    ready: true
  },
  {
    id: 'uk-tv',
    flag: '🇬🇧',
    name: 'Matthew',
    country: 'United Kingdom',
    tagline: 'Asking AI which TV to buy',
    ready: true
  },
  {
    id: 'mx-aircon',
    flag: '🇲🇽',
    name: 'Vanessa',
    country: 'Mexico',
    tagline: 'Buying an air conditioner',
    ready: true
  }
];


/* Shared note shown at the bottom of every pointer panel */
const PANEL_NOTE =
  'No customer moment is created by a single function.<br />' +
  'These callouts highlight the capabilities that are most visible at each step.';


const JOURNEYS = {

  /* =========================================================
     🇺🇸 ALEX — GALAXY
     ========================================================= */
  'us-galaxy': {

    intro: [
      'assets/screens/us-galaxy/intro-01-splash.jpg',
      'assets/screens/us-galaxy/intro-02-welcome.jpg'
    ],

    steps: [

      /* ---------------- 1. HOME ---------------- */
      {
        id: 'home',
        label: 'Home',
        image: 'assets/screens/us-galaxy/home.jpg',
        pointer: {
          x: 50,
          y: 33,
          hook: 'The first screen sets the direction for everything that follows.',
          body: [
            'The home screen has to answer a difficult question quickly: <strong>what should this customer see first?</strong>',
            'Campaign content, personalized greetings, recommendations, recently viewed products and promotions all compete for limited space. Their order shapes the customer\'s next move.'
          ],
          teams: [
            {
              group: 'Marketing',
              team: 'Customer Engagement',
              role: 'Plans and operates campaign content, launches and promotional messaging across customer touchpoints.'
            },
            {
              group: 'UX',
              team: 'Product Experience',
              role: 'Designs the information hierarchy and personalized moments, such as the greeting shown to Alex.'
            },
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Defines how the home experience is structured, prioritizes customer needs and aligns the different elements into one journey.'
            }
          ]
        }
      },

      /* ---------------- 2. PRODUCT ---------------- */
      {
        id: 'pdp',
        label: 'Product',
        image: 'assets/screens/us-galaxy/product-color.jpg',
        pointer: {
          x: 50.6,
          y: 68.8,
          hook: 'Why is this color available only through selected channels?',
          body: [
            'The page highlights an exclusive color available through selected direct channels.',
            'That small badge represents a bigger commercial decision: <strong>which products, variants and offers should be differentiated by channel?</strong> The experience then has to make that exclusivity easy for customers to understand.'
          ],
          teams: [
            {
              group: 'Sales & Merchandising',
              team: 'Commercial',
              role: 'Shapes product assortment and channel strategy, including which variants or offers receive special placement.'
            },
            {
              group: 'UX',
              team: 'Product Experience',
              role: 'Makes product differences, benefits and exclusivity visible at the moment customers compare their options.'
            }
          ]
        }
      },

      /* ---------------- 3. TRADE-IN ---------------- */
      {
        id: 'tradein',
        label: 'Trade-in',
        image: 'assets/screens/us-galaxy/trade-in.jpg',
        pointer: {
          x: 52,
          y: 69,
          hook: 'A purchase decision is often easier when an old device still has value.',
          body: [
            'Trade-in turns an existing device into an immediate purchase benefit and reduces one source of hesitation.',
            'The same principle applies to protection plans, rewards and financing: <strong>commerce is not only about presenting a product, but also about removing the reasons a customer may postpone the purchase.</strong>'
          ],
          teams: [
            {
              group: 'Business Strategy',
              team: 'Commercial',
              role: 'Identifies value-added programs and business models that can strengthen the direct purchase proposition.'
            },
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Turns those programs into understandable customer flows and connects them to the core purchase journey.'
            }
          ]
        }
      },

      /* ---------------- 4. CART ---------------- */
      {
        id: 'cart',
        label: 'Cart',
        image: 'assets/screens/us-galaxy/cart.jpg',
        pointer: {
          x: 78.7,
          y: 85,
          hook: 'Reaching the cart does not guarantee a purchase.',
          body: [
            'At this point, customers are highly interested — but uncertainty can still stop them. Stock status, delivery timing, unexpected costs and unclear totals can all introduce friction.',
            'Showing essential information together helps customers answer the final practical questions before checkout.'
          ],
          teams: [
            {
              group: 'UX',
              team: 'Product Experience',
              role: 'Reduces cognitive friction by making the information needed for a final decision easy to scan and understand.'
            },
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Uses funnel behavior and customer signals to identify where purchase intent is being lost and what should be improved.'
            },
            {
              group: 'Engineering',
              team: 'Commerce Platform',
              role: 'Connects the interface with inventory, pricing and delivery services so customers see current information at the right moment.'
            }
          ]
        }
      },

      /* ---------------- 5. CHECKOUT ---------------- */
      {
        id: 'checkout',
        label: 'Checkout',
        image: 'assets/screens/us-galaxy/checkout-payment.jpg',
        pointer: {
          x: 50,
          y: 64,
          hook: 'One checkout can contain many different payment systems.',
          body: [
            'Cards, digital wallets and installment options may look like a simple list of buttons, but each option has its own technical and operational requirements.',
            'Checkout is where the entire journey becomes a transaction. <strong>If payment fails or feels unnecessarily difficult, every earlier experience loses its value.</strong>'
          ],
          teams: [
            {
              group: 'Engineering',
              team: 'Commerce Platform',
              role: 'Integrates payment providers and commerce systems while maintaining reliable transaction flows.'
            },
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Designs the end-to-end checkout flow and prioritizes improvements that reduce purchase friction.'
            }
          ]
        }
      }

    ]
  },


  /* =========================================================
     🇬🇧 MATTHEW — TV + AI SHOPPING ASSISTANT
     ========================================================= */
  'uk-tv': {

    intro: [
  'assets/screens/uk-tv/intro-01-splash.jpg',
  'assets/screens/uk-tv/intro-02-welcome.jpg'
],

    steps: [

      /* ---------------- 1. ASK AI ---------------- */
      {
        id: 'ask',
        label: 'Ask AI',
        image: 'assets/screens/uk-tv/ai-question.jpg',
        pointer: {
          x: 50,
          y: 27,
          hook: '"My living room is bright" is not a normal product filter.',
          body: [
            'Traditional filters work well for structured attributes such as size, price or resolution. Real purchase decisions, however, are often based on context.',
            'An AI shopping assistant can turn a natural-language need — such as a bright room — into a more relevant path to products. <strong>The challenge is not simply answering a question, but helping the customer make a decision.</strong>'
          ],
          teams: [
            {
              group: 'PM',
              team: 'AI Commerce Experience',
              role: 'Defines the customer problem, product scope and decision-support journey for the AI shopping experience.'
            },
            {
              group: 'UX',
              team: 'AI Commerce Experience',
              role: 'Designs prompts, conversation flow and the way recommendations are explained to customers.'
            },
            {
              group: 'Engineering',
              team: 'AI Commerce Platform',
              role: 'Connects the conversational experience with product information and shopping functionality.'
            }
          ]
        }
      },

      /* ---------------- 2. AI ANSWER ---------------- */
      {
        id: 'answer',
        label: 'AI Answer',
        image: 'assets/screens/uk-tv/ai-answer.jpg',
        pointer: {
          x: 50,
          y: 36,
          hook: 'A useful answer should shorten the distance between advice and action.',
          body: [
            'The response combines shopping guidance with product recommendations and currently visible offers.',
            'Instead of forcing Matthew to leave the conversation and start searching again, relevant products appear within the same flow. <strong>Decision support and commerce become part of one experience.</strong>'
          ],
          teams: [
            {
              group: 'PM',
              team: 'AI Commerce Experience',
              role: 'Connects conversational guidance to the next shopping action so the assistant supports progress rather than becoming a dead end.'
            },
            {
              group: 'Marketing',
              team: 'Customer Engagement',
              role: 'Maintains customer-facing campaign and promotional content that can influence purchase consideration.'
            },
            {
              group: 'Regional Operations',
              team: 'Commercial',
              role: 'Adapts offers and commercial conditions to the needs of each market.'
            }
          ]
        }
      },

      /* ---------------- 3. CHECKOUT ---------------- */
      {
        id: 'checkout',
        label: 'Checkout',
        image: 'assets/screens/uk-tv/payment.jpg',
        pointer: {
          x: 50,
          y: 75.5,
          hook: 'For a high-value purchase, how customers pay can change the decision.',
          body: [
            'A television is a considered purchase, so the payment stage often includes more than a standard card transaction.',
            'Digital wallets, installment providers and financing options give customers different ways to manage a large purchase. <strong>Payment choice becomes part of the value proposition itself.</strong>'
          ],
          teams: [
            {
              group: 'Business Strategy',
              team: 'Commercial',
              role: 'Explores financing and other value-added models that can make high-value purchases more accessible.'
            },
            {
              group: 'Engineering',
              team: 'Commerce Platform',
              role: 'Integrates market-specific payment and financing providers into a consistent checkout experience.'
            },
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Ensures payment options are presented at the right point without making checkout unnecessarily complex.'
            }
          ]
        }
      }

    ]
  },


  /* =========================================================
     🇲🇽 VANESSA — AIR CONDITIONER
     ========================================================= */
  'mx-aircon': {

    intro: [
  'assets/screens/mx-aircon/intro-01-splash.jpg',
  'assets/screens/mx-aircon/intro-02-welcome.jpg'
],

    steps: [

      /* ---------------- 1. SEARCH ---------------- */
      {
        id: 'search',
        label: 'Buscar',
        image: 'assets/screens/mx-aircon/search.jpg',
        pointer: {
          x: 55,
          y: 8,
          hook: 'A global product still has to feel local.',
          body: [
            'The underlying shopping structure can remain consistent while language, currency, assortment and customer behavior vary by market.',
            'Search is a good example. Customers in different countries may describe the same need differently, so <strong>localization is not only translation — it is adapting how people discover products.</strong>'
          ],
          teams: [
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Maintains a scalable global journey while prioritizing local requirements that materially affect customer behavior.'
            },
            {
              group: 'UX',
              team: 'Product Experience',
              role: 'Designs search suggestions, result presentation and navigation so customers can reach the right product efficiently.'
            },
            {
              group: 'Engineering',
              team: 'Commerce Platform',
              role: 'Supports multiple markets on a shared platform while handling differences in language, catalog and local services.'
            }
          ]
        }
      },

      /* ---------------- 2. CART ---------------- */
      {
        id: 'cart',
        label: 'Carrito',
        image: 'assets/screens/mx-aircon/cart.jpg',
        pointer: {
          x: 78,
          y: 68,
          hook: 'Some products require more than delivery to become usable.',
          body: [
            'An air conditioner creates a different commerce journey from a smartphone. Delivery, installation and post-purchase support can all affect the decision.',
            'For Vanessa, confidence is not only about price. <strong>She needs to understand what happens after she clicks Buy.</strong>'
          ],
          teams: [
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Designs the purchase journey around the real requirements of the product category, including delivery and service dependencies.'
            },
            {
              group: 'UX',
              team: 'Product Experience',
              role: 'Makes complex order information easier to understand before the customer commits to the purchase.'
            },
            {
              group: 'Regional Operations',
              team: 'Commercial',
              role: 'Coordinates market-specific commercial and operational requirements that affect the final offer.'
            }
          ]
        }
      },

      /* ---------------- 3. SERVICES ---------------- */
      {
        id: 'services',
        label: 'Services',
        image: 'assets/screens/mx-aircon/additional-services.jpg',
        pointer: {
          x: 50,
          y: 48,
          hook: 'The product is only one part of the purchase.',
          body: [
            'Installation, maintenance and extended protection can be essential parts of owning a home appliance.',
            'Surfacing these services inside the purchase flow turns a simple transaction into a more complete proposition: <strong>buy the product and understand how it will work in your home.</strong>'
          ],
          teams: [
            {
              group: 'Business Strategy',
              team: 'Commercial',
              role: 'Develops service propositions that extend the customer value beyond the physical product.'
            },
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Decides where additional services should appear in the journey and how customers add or decline them.'
            },
            {
              group: 'Engineering',
              team: 'Commerce Platform',
              role: 'Connects service selections with the cart, order and downstream fulfillment processes.'
            }
          ]
        }
      },

      /* ---------------- 4. PAYMENT ---------------- */
      {
        id: 'payment',
        label: 'Pago',
        image: 'assets/screens/mx-aircon/payment.jpg',
        pointer: {
          x: 55,
          y: 40,
          hook: '"Meses sin intereses" — the local payment context matters.',
          body: [
            'The checkout includes payment methods and installment options that are specific to the Mexican market.',
            'A global commerce platform cannot assume that one payment model works everywhere. <strong>Customers expect the methods, terms and providers they already know in their market.</strong>'
          ],
          teams: [
            {
              group: 'Engineering',
              team: 'Commerce Platform',
              role: 'Integrates local payment providers and supports the technical rules required by each market.'
            },
            {
              group: 'Regional Operations',
              team: 'Commercial',
              role: 'Aligns local payment conditions and commercial requirements with market expectations.'
            },
            {
              group: 'PM',
              team: 'Product Experience',
              role: 'Keeps market-specific payment complexity understandable within a consistent global checkout journey.'
            }
          ]
        }
      }

    ]
  }

};


/* =========================================================
   ENDING — capability map
   ========================================================= */

const ALL_GROUPS = [
  { group: 'PM',                    team: 'Product Experience' },
  { group: 'UX',                    team: 'Product Experience' },
  { group: 'Engineering',           team: 'Commerce Platform' },
  { group: 'Marketing',             team: 'Customer Engagement' },
  { group: 'Sales & Merchandising', team: 'Commercial' },
  { group: 'Regional Operations',   team: 'Commercial' },
  { group: 'Business Strategy',     team: 'Commercial' },
  { group: 'Business Planning',     team: 'Business Operations' }
];


const ENDING = {
  eyebrow: 'Discover what is behind the journey.',
  lead: 'You just moved through {count} customer moments.<br />Each one depends on multiple capabilities working together.',
  afterTiles: 'Great D2C experiences are <strong>cross-functional by design.</strong>',
  planning: 'Product, experience, technology and commercial decisions come together to turn individual screens into one connected customer journey.',
  closingA: 'Many markets. Many customer needs.',
  closingB: 'One connected D2C journey.'
};