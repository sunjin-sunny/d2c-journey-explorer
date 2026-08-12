/* =========================================================
   D2C Journey Explorer — app.js
   ========================================================= */


/* =========================================================
   1. DOM
   ========================================================= */

const $ = function (id) {
  return document.getElementById(id);
};


/* Views */
const landingView = $('landingView');
const journeyView = $('journeyView');
const endingView  = $('endingView');
const behindView  = $('behindView');


/* Language */
const languageSwitch = $('languageSwitch');

const heroTitle          = $('heroTitle');
const heroSubtitle       = $('heroSubtitle');
const heroHint           = $('heroHint');
const chooseCustomer     = $('chooseCustomer');

const landingBehindLabel = $('landingBehindLabel');
const endingBehindLabel  = $('endingBehindLabel');


/* Landing */
const cardGrid = $('cardGrid');


/* Persona */
const personaModal    = $('personaModal');
const personaBackdrop = $('personaBackdrop');
const personaClose    = $('personaClose');
const personaImage    = $('personaImage');
const personaEyebrow  = $('personaEyebrow');


/* Journey */
const progressBar  = $('progressBar');
const deviceScreen = $('deviceScreen');
const screenImage  = $('screenImage');
const pointerLayer = $('pointerLayer');

const navArea   = $('navArea');
const stepCount = $('stepCount');

const prevBtn = $('prevBtn');
const nextBtn = $('nextBtn');
const backBtn = $('backBtn');


/* Panel */
const panel         = $('panel');
const panelBackdrop = $('panelBackdrop');
const panelClose    = $('panelClose');

const panelEyebrow = $('panelEyebrow');
const panelHook    = $('panelHook');
const panelBody    = $('panelBody');
const panelTeams   = $('panelTeams');
const panelNote    = $('panelNote');


/* Ending */
const groupGrid      = $('groupGrid');
const endingEyebrow  = $('endingEyebrow');
const endingLead     = $('endingLead');
const endingAfter    = $('endingAfter');
const endingPlanning = $('endingPlanning');

const endingClosing = $('endingClosing');
const endingActions = $('endingActions');

const closingA = $('closingA');
const closingB = $('closingB');

const endingBackBtn = $('endingBackBtn');
const endingHomeBtn = $('endingHomeBtn');


/* Behind */
const behindBackBtn    = $('behindBackBtn');
const behindHomeBtn    = $('behindHomeBtn');
const behindBackBottom = $('behindBackBottom');

const behindEyebrow = $('behindEyebrow');
const behindTitle   = $('behindTitle');
const behindSub     = $('behindSub');

const statMarkets    = $('statMarkets');
const statPersonas   = $('statPersonas');
const statMoments    = $('statMoments');
const statCategories = $('statCategories');
const statAi         = $('statAi');
const statFrameworks = $('statFrameworks');

const behindH1 = $('behindH1');
const behindP1 = $('behindP1');

const behindH2 = $('behindH2');
const behindP2 = $('behindP2');

const behindH3 = $('behindH3');
const behindP3 = $('behindP3');

const behindH4 = $('behindH4');
const behindP4 = $('behindP4');

const behindH5 = $('behindH5');
const behindP5 = $('behindP5');

const behindH6 = $('behindH6');
const behindP6 = $('behindP6');

const behindH7 = $('behindH7');
const behindP7 = $('behindP7');

const behindH8 = $('behindH8');
const behindP8 = $('behindP8');

const behindClosing1 = $('behindClosing1');
const behindClosing2 = $('behindClosing2');
const behindClosing3 = $('behindClosing3');

const projectDisclaimer =
  $('projectDisclaimer');


/* Developer mode */
const devReadout = $('devReadout');
const devValue   = $('devValue');


/* =========================================================
   2. State
   ========================================================= */

let currentJourney = null;
let currentJourneyId = null;

let currentStep = 0;

let seenPointers = {};
let pointerHintDone = false;

let behindFrom = 'landing';

let devMode = false;

let introTimers = [];
let endingTimers = [];


let currentLang =
  localStorage.getItem('sunny-shop-lang') || 'en';


if (
  currentLang !== 'en' &&
  currentLang !== 'ko'
) {
  currentLang = 'en';
}


/* =========================================================
   3. UI Translation
   ========================================================= */

const UI_TEXT = {

  en: {

    heroTitle:
      'Every purchase has a journey.',

    heroSubtitle:
      "Discover who's behind it.",

    heroHint:
      'Tap the glowing dot on each screen',

    chooseCustomer:
      'Choose a customer',


    startJourney:
      'Start Journey',

    meet:
      'Meet',


    previous:
      '← Previous',

    next:
      'Next →',

    wholePicture:
      'See the whole picture →',

    characters:
      '← Characters',


    endingBack:
      '← Back',

    behindBack:
      '← Back',


    pointerHint:
      'Tap here',

    panelEyebrow:
      'Behind this experience',

    personaEyebrow:
      'Customer Persona',


    behindProject:
      'Behind this Project',


    behindEyebrow:
      'Behind this Project',

    behindTitle:
      'How I built a global D2C journey explorer with AI',

    behindSub:
      'A personal experiment in product thinking, customer journey design, generative AI and vibe coding.<br />' +
      'Built from concept to working prototype without a traditional development background.',


    statMarkets:
      'Markets',

    statPersonas:
      'Personas',

    statMoments:
      'Customer Moments',

    statCategories:
      'Product Categories',

    statAi:
      'Co-built',

    statFrameworks:
      'Frameworks',


    behindH1:
      'I started with a customer journey, not an org chart.',

    behindP1:
      'The original question was simple: ' +
      '<strong>what actually happens behind a customer’s purchase journey?</strong> ' +
      'Instead of explaining teams through a traditional organization chart, ' +
      'I designed three fictional customers and let each person experience a different shopping journey.',


    behindH2:
      'One platform, three very different purchase contexts.',

    behindP2:
      'Alex shops for a Galaxy device in the United States, ' +
      'Matthew uses an AI shopping assistant to choose a TV in the United Kingdom, ' +
      'and Vanessa buys an air conditioner in Mexico. ' +
      'The journeys reveal how ' +
      '<strong>market, category and customer context change the experience.</strong>',


    behindH3:
      'Each screen became a window into a capability.',

    behindP3:
      'Instead of annotating every detail, ' +
      'I added one interactive pointer to each key moment. ' +
      'Clicking it reveals the product, experience, technology or commercial capability behind what the customer sees. ' +
      'The goal was to make a complex D2C ecosystem ' +
      '<strong>understandable through interaction rather than explanation.</strong>',


    behindH4:
      'AI became a product partner, not just a writing tool.',

    behindP4:
      'I used AI throughout the process to challenge the concept, ' +
      'structure the journey, write and refine interface copy, ' +
      'debug JavaScript, review screenshots and generate visual assets. ' +
      'The workflow felt closer to ' +
      '<strong>pairing with a designer, engineer and editor at the same time</strong> ' +
      'than simply prompting a chatbot.',


    behindH5:
      'The personas were designed as part of the product experience.',

    behindP5:
      'Alex, Matthew and Vanessa were created as pixel-art characters ' +
      'with different lifestyles, motivations and shopping needs. ' +
      'Their full persona sheets are optional, while the main experience stays lightweight: ' +
      'meet the customer, then follow the journey.',


    behindH6:
      'I deliberately kept the build simple.',

    behindP6:
      'The prototype uses ' +
      '<code>HTML</code>, <code>CSS</code> and <code>JavaScript</code> ' +
      'without a front-end framework. ' +
      'Journey content is separated into a data layer, ' +
      'so screens, copy, pointers and personas can be changed ' +
      'without rebuilding the interaction logic.',


    behindH7:
      'The hardest part was deciding what not to show.',

    behindP7:
      'The first version tried to explain too much. ' +
      'Extra screens, detailed organizational structures and supporting information ' +
      'made the journey harder to understand. ' +
      'Iteration gradually turned the project into something simpler: ' +
      '<strong>one customer moment, one insight, one clear reason to keep exploring.</strong>',


    behindH8:
      'What I learned',

    behindP8:
      'AI lowers the cost of building, ' +
      'but it does not remove the need for product judgment. ' +
      'The most important decisions were still about ' +
      'what problem to explain, what information to remove, ' +
      'how the journey should flow and what the customer should understand next.',


    behindClosing1:
      'Built as an experiment in combining product management, AI and hands-on prototyping.',

    behindClosing2:
      'Concept · Journey Design · Copy · Visual Direction · Vibe Coding · QA',

    behindClosing3:
      'Product thinking, made interactive.',


    projectDisclaimer:
      'Unofficial personal project. Product names, trademarks and screenshots belong to their respective owners.',

    backExplorer:
      '← Back to Explorer',


    panelNote:
      'No customer moment is created by a single function.<br />' +
      'These callouts highlight the capabilities that are most visible at each step.'

  },


  ko: {

    heroTitle:
      '모든 구매에는 여정이 있습니다.',

    heroSubtitle:
      '그 뒤에 누가 있는지 발견해보세요.',

    heroHint:
      '각 화면의 빛나는 점을 눌러보세요',

    chooseCustomer:
      '고객을 선택하세요',


    startJourney:
      'Journey 시작',

    meet:
      'Meet',


    previous:
      '← 이전',

    next:
      '다음 →',

    wholePicture:
      '전체 그림 보기 →',

    characters:
      '← 고객 선택',


    endingBack:
      '← 이전',

    behindBack:
      '← 이전',


    pointerHint:
      '눌러보세요',

    panelEyebrow:
      '이 경험의 뒤에서는',

    personaEyebrow:
      '고객 페르소나',


    behindProject:
      '프로젝트 제작기',


    behindEyebrow:
      '프로젝트 제작기',

    behindTitle:
      'AI와 함께 글로벌 D2C Journey Explorer를 만든 과정',

    behindSub:
      '프로덕트 사고, 고객 여정 설계, 생성형 AI, 바이브코딩을 결합한 개인 프로젝트입니다.<br />' +
      '전통적인 개발 경험 없이 아이디어부터 실제 동작하는 프로토타입까지 직접 만들었습니다.',


    statMarkets:
      '개 시장',

    statPersonas:
      '페르소나',

    statMoments:
      '고객 순간',

    statCategories:
      '제품 카테고리',

    statAi:
      '함께 제작',

    statFrameworks:
      '프레임워크',


    behindH1:
      '조직도가 아니라 고객 여정에서 시작했습니다.',

    behindP1:
      '처음 던진 질문은 단순했습니다. ' +
      '<strong>고객의 구매 여정 뒤에서는 실제로 어떤 일들이 일어나고 있을까?</strong> ' +
      '조직 구조를 설명하는 대신 세 명의 가상 고객을 만들고, ' +
      '각자가 서로 다른 구매 여정을 경험하도록 구성했습니다.',


    behindH2:
      '하나의 플랫폼에서도 구매 맥락은 완전히 달라집니다.',

    behindP2:
      'Alex는 미국에서 Galaxy를 구매하고, ' +
      'Matthew는 영국에서 AI Shopping Assistant를 이용해 TV를 고르며, ' +
      'Vanessa는 멕시코에서 에어컨을 구매합니다. ' +
      '세 여정을 통해 ' +
      '<strong>시장, 제품 카테고리, 고객 맥락에 따라 D2C 경험이 어떻게 달라지는지</strong> ' +
      '보여주고 싶었습니다.',


    behindH3:
      '각 화면을 하나의 역량을 들여다보는 창으로 만들었습니다.',

    behindP3:
      '모든 요소를 설명하는 대신 중요한 고객 순간마다 하나의 인터랙티브 포인터를 배치했습니다. ' +
      '포인터를 누르면 고객이 보는 화면 뒤에서 어떤 프로덕트, UX, 기술, 비즈니스 역량이 작동하는지 확인할 수 있습니다. ' +
      '복잡한 D2C 생태계를 ' +
      '<strong>긴 설명이 아니라 직접 탐색하는 경험으로 이해시키는 것</strong>이 목표였습니다.',


    behindH4:
      'AI를 글쓰기 도구가 아니라 프로덕트 파트너처럼 활용했습니다.',

    behindP4:
      'AI와 함께 컨셉을 검토하고, Journey를 구조화하고, ' +
      'UI 카피를 다듬고, JavaScript를 디버깅하고, ' +
      '스크린샷을 검수하고, 비주얼 에셋을 만들었습니다. ' +
      '단순히 챗봇에게 명령하는 것보다 ' +
      '<strong>디자이너·개발자·에디터와 동시에 페어링하는 작업</strong>에 더 가까웠습니다.',


    behindH5:
      '페르소나도 프로덕트 경험의 일부로 설계했습니다.',

    behindP5:
      'Alex, Matthew, Vanessa는 서로 다른 라이프스타일과 구매 동기를 가진 픽셀아트 캐릭터로 만들었습니다. ' +
      '메인 Journey는 가볍게 유지하면서, ' +
      '궁금한 사람만 전체 Persona Sheet를 볼 수 있도록 구성했습니다.',


    behindH6:
      '의도적으로 개발 구조는 단순하게 유지했습니다.',

    behindP6:
      '프로토타입은 프론트엔드 프레임워크 없이 ' +
      '<code>HTML</code>, <code>CSS</code>, <code>JavaScript</code>만 사용했습니다. ' +
      'Journey 콘텐츠는 데이터 영역으로 분리해 ' +
      '화면, 카피, 포인터, 페르소나를 바꾸더라도 ' +
      '인터랙션 로직 전체를 다시 만들 필요가 없도록 했습니다.',


    behindH7:
      '가장 어려웠던 것은 무엇을 더 넣을지가 아니라 무엇을 뺄지 결정하는 일이었습니다.',

    behindP7:
      '첫 버전은 너무 많은 것을 설명하려고 했습니다. ' +
      '화면도 많았고 조직 구조와 부가 정보도 과했습니다. ' +
      '반복해서 덜어내면서 결국 ' +
      '<strong>하나의 고객 순간, 하나의 인사이트, 그리고 다음 화면을 보고 싶게 만드는 하나의 이유</strong>만 남기는 방향으로 정리했습니다.',


    behindH8:
      '만들면서 배운 것',

    behindP8:
      'AI는 실제로 무언가를 만드는 비용을 크게 낮춰주지만, ' +
      '프로덕트 판단까지 대신해주지는 않습니다. ' +
      '결국 가장 중요한 결정은 어떤 문제를 보여줄지, ' +
      '무엇을 지울지, Journey를 어떤 순서로 연결할지, ' +
      '그리고 다음 순간 고객이 무엇을 이해해야 하는지 정하는 일이었습니다.',


    behindClosing1:
      'Product Management, AI 그리고 직접 만드는 프로토타이핑을 결합해본 실험입니다.',

    behindClosing2:
      '컨셉 · Journey Design · 카피 · Visual Direction · Vibe Coding · QA',

    behindClosing3:
      'Product thinking, made interactive.',


    projectDisclaimer:
      '비공식 개인 프로젝트입니다. 제품명, 상표 및 화면 이미지의 권리는 각 권리자에게 있습니다.',

    backExplorer:
      '← Explorer로 돌아가기',


    panelNote:
      '어떤 고객 경험도 하나의 역할만으로 만들어지지 않습니다.<br />' +
      '여기서는 각 순간에 가장 잘 드러나는 역량을 중심으로 보여줍니다.'

  }

};


function ui(key) {

  return (
    UI_TEXT[currentLang][key] ||
    UI_TEXT.en[key] ||
    key
  );
}


/* =========================================================
   4. Character card translation
   ========================================================= */

const CHARACTER_TEXT = {

  en: {

    'us-galaxy': {
      country: 'United States',
      tagline: 'Looking for a new Galaxy'
    },

    'uk-tv': {
      country: 'United Kingdom',
      tagline: 'Asking AI which TV to buy'
    },

    'mx-aircon': {
      country: 'Mexico',
      tagline: 'Buying an air conditioner'
    }

  },


  ko: {

    'us-galaxy': {
      country: '미국',
      tagline: '새 Galaxy를 찾는 중'
    },

    'uk-tv': {
      country: '영국',
      tagline: 'AI에게 어떤 TV를 살지 묻는 중'
    },

    'mx-aircon': {
      country: '멕시코',
      tagline: '에어컨을 구매하는 중'
    }

  }

};


function characterCopy(character) {

  const localized =
    CHARACTER_TEXT[currentLang][character.id];


  if (localized) {
    return localized;
  }


  return {
    country: character.country,
    tagline: character.tagline
  };
}


/* =========================================================
   5. Pointer Korean translation
   ========================================================= */

const POINTER_KO = {

  'us-galaxy.home': {

    hook:
      '첫 화면은 이후 여정의 방향을 결정합니다.',

    body: [
      '홈 화면은 아주 짧은 시간 안에 한 가지 어려운 질문에 답해야 합니다. <strong>이 고객에게 지금 가장 먼저 무엇을 보여줘야 할까?</strong>',
      '캠페인 콘텐츠, 개인화 인사, 추천 상품, 최근 본 상품, 프로모션은 모두 제한된 공간을 두고 경쟁합니다. 무엇을 어떤 순서로 보여주느냐가 고객의 다음 행동을 바꿉니다.'
    ],

    teams: [

      {
        group: '마케팅',
        team: '고객 커뮤니케이션',
        role: '고객 접점에 노출되는 캠페인, 신제품 출시, 프로모션 콘텐츠를 기획하고 운영합니다.'
      },

      {
        group: 'UX',
        team: '프로덕트 경험',
        role: '정보의 우선순위를 설계하고 Alex에게 보이는 개인화 인사처럼 고객 맥락에 맞는 경험을 디자인합니다.'
      },

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '홈 화면의 구조를 정의하고 여러 요구사항을 하나의 일관된 고객 여정으로 연결합니다.'
      }

    ]

  },


  'us-galaxy.pdp': {

    hook:
      '왜 이 색상은 특정 채널에서만 구매할 수 있을까요?',

    body: [
      '상품 페이지에는 이 색상이 특정 직영 채널에서만 판매된다는 점이 강조되어 있습니다.',
      '작은 배지 하나 뒤에는 더 큰 비즈니스 결정이 있습니다. <strong>어떤 제품과 옵션, 혜택을 채널별로 차별화할 것인가?</strong> 그리고 고객이 그 차이를 쉽게 이해할 수 있도록 화면에서 표현해야 합니다.'
    ],

    teams: [

      {
        group: '영업·상품운영',
        team: '커머셜',
        role: '어떤 제품과 옵션을 어떤 채널에서 판매할지 상품 구성과 채널 전략을 설계합니다.'
      },

      {
        group: 'UX',
        team: '프로덕트 경험',
        role: '고객이 상품을 비교하는 순간 제품의 차이와 전용 혜택을 쉽게 인지할 수 있도록 설계합니다.'
      }

    ]

  },


  'us-galaxy.tradein': {

    hook:
      '기존 기기의 가치가 남아 있다면 구매 결정은 조금 쉬워집니다.',

    body: [
      'Trade-in은 사용하던 기기의 가치를 즉시 구매 혜택으로 전환해 구매 부담을 낮춥니다.',
      '보호 서비스, 리워드, 금융 혜택도 같은 원리입니다. <strong>커머스는 상품을 보여주는 것뿐 아니라 고객이 구매를 미루는 이유를 하나씩 제거하는 일이기도 합니다.</strong>'
    ],

    teams: [

      {
        group: '사업전략',
        team: '커머셜',
        role: '직접 구매의 가치를 높일 수 있는 부가 서비스와 새로운 비즈니스 모델을 발굴합니다.'
      },

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '비즈니스 아이디어를 고객이 이해할 수 있는 흐름으로 만들고 실제 구매 여정에 연결합니다.'
      }

    ]

  },


  'us-galaxy.cart': {

    hook:
      '장바구니에 도착했다고 구매가 확정된 것은 아닙니다.',

    body: [
      '이 단계의 고객은 구매 의향이 높지만 여전히 작은 불확실성 때문에 이탈할 수 있습니다. 재고, 배송일, 예상하지 못한 비용, 불명확한 총액 등이 대표적입니다.',
      '최종 결정에 필요한 정보를 한 화면에서 확인할 수 있게 하면 고객의 마지막 고민을 줄일 수 있습니다.'
    ],

    teams: [

      {
        group: 'UX',
        team: '프로덕트 경험',
        role: '구매 직전 필요한 정보를 빠르게 이해할 수 있도록 화면의 복잡도를 낮춥니다.'
      },

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '퍼널 데이터와 고객 행동을 통해 구매 의향이 어디서 사라지는지 확인하고 개선 우선순위를 정합니다.'
      },

      {
        group: '개발',
        team: '커머스 플랫폼',
        role: '재고, 가격, 배송 시스템을 화면과 연결해 고객에게 최신 정보를 제공합니다.'
      }

    ]

  },


  'us-galaxy.checkout': {

    hook:
      '하나의 Checkout 뒤에는 여러 결제 시스템이 연결되어 있습니다.',

    body: [
      '카드, 디지털 지갑, 할부 옵션은 화면에서는 단순한 버튼처럼 보이지만 각각 서로 다른 기술적·운영적 조건을 가지고 있습니다.',
      'Checkout은 전체 고객 여정이 실제 거래로 전환되는 순간입니다. <strong>결제가 실패하거나 불필요하게 어렵다면 앞의 모든 경험이 의미를 잃습니다.</strong>'
    ],

    teams: [

      {
        group: '개발',
        team: '커머스 플랫폼',
        role: '결제사와 커머스 시스템을 연결하고 안정적인 거래 흐름을 구현합니다.'
      },

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: 'Checkout 전체 흐름을 설계하고 구매 마찰을 줄이는 개선 과제를 관리합니다.'
      }

    ]

  },


  'uk-tv.ask': {

    hook:
      '"우리 집 거실은 밝아요"는 일반적인 상품 필터가 아닙니다.',

    body: [
      '기존 필터는 크기, 가격, 해상도처럼 구조화된 조건을 찾는 데는 효과적입니다. 하지만 실제 구매 결정은 생활 맥락에서 출발하는 경우가 많습니다.',
      'AI Shopping Assistant는 "거실에 햇빛이 많이 든다" 같은 자연어 조건을 상품 탐색으로 연결할 수 있습니다. <strong>중요한 것은 질문에 답하는 것이 아니라 고객의 결정을 돕는 것입니다.</strong>'
    ],

    teams: [

      {
        group: 'PM',
        team: 'AI 커머스 경험',
        role: 'AI 쇼핑 경험이 해결할 고객 문제와 제품 범위, 의사결정 지원 여정을 정의합니다.'
      },

      {
        group: 'UX',
        team: 'AI 커머스 경험',
        role: '질문 방식, 대화 흐름, 추천 이유를 고객이 이해하는 방식을 설계합니다.'
      },

      {
        group: '개발',
        team: 'AI 커머스 플랫폼',
        role: '대화 경험을 상품 정보와 실제 쇼핑 기능에 연결합니다.'
      }

    ]

  },


  'uk-tv.answer': {

    hook:
      '좋은 답변은 정보와 행동 사이의 거리를 줄여야 합니다.',

    body: [
      'AI의 답변에는 구매 가이드와 함께 관련 상품과 현재 확인 가능한 혜택이 연결되어 있습니다.',
      'Matthew가 대화를 끝내고 다시 상품을 검색하도록 만들지 않고 같은 흐름 안에서 다음 선택지를 제공합니다. <strong>의사결정 지원과 커머스가 하나의 경험으로 이어지는 것입니다.</strong>'
    ],

    teams: [

      {
        group: 'PM',
        team: 'AI 커머스 경험',
        role: '대화형 가이드가 실제 다음 구매 행동으로 자연스럽게 이어지도록 전체 흐름을 설계합니다.'
      },

      {
        group: '마케팅',
        team: '고객 커뮤니케이션',
        role: '구매 고려에 영향을 주는 프로모션과 캠페인 콘텐츠를 고객 접점에 반영합니다.'
      },

      {
        group: '지역 사업운영',
        team: '커머셜',
        role: '각 시장에 맞는 혜택과 판매 조건을 운영합니다.'
      }

    ]

  },


  'uk-tv.checkout': {

    hook:
      '고가 상품에서는 결제 방식 자체가 구매 결정에 영향을 줍니다.',

    body: [
      'TV처럼 구매 금액이 큰 상품은 일반 카드 결제 외에도 여러 금융 선택지가 중요해집니다.',
      '디지털 지갑, 할부, 금융 서비스를 통해 고객은 큰 구매 비용을 자신에게 맞는 방식으로 관리할 수 있습니다. <strong>결제 옵션 자체가 하나의 상품 가치가 되는 셈입니다.</strong>'
    ],

    teams: [

      {
        group: '사업전략',
        team: '커머셜',
        role: '고가 상품의 구매 부담을 낮출 수 있는 금융 및 부가 비즈니스 모델을 검토합니다.'
      },

      {
        group: '개발',
        team: '커머스 플랫폼',
        role: '시장별 결제 및 금융 서비스를 일관된 Checkout 경험에 연결합니다.'
      },

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '다양한 결제 옵션이 Checkout을 복잡하게 만들지 않으면서 적절한 순간에 제시되도록 설계합니다.'
      }

    ]

  },


  'mx-aircon.search': {

    hook:
      '글로벌 프로덕트도 현지 고객에게는 로컬 서비스처럼 느껴져야 합니다.',

    body: [
      '쇼핑 플랫폼의 기본 구조는 같아도 언어, 통화, 상품 구성과 고객 행동은 시장마다 달라질 수 있습니다.',
      '검색이 좋은 예입니다. 같은 상품도 국가마다 고객이 표현하는 방식이 다릅니다. <strong>Localization은 단순한 번역이 아니라 고객이 상품을 발견하는 방식을 현지화하는 일입니다.</strong>'
    ],

    teams: [

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '공통 글로벌 구조를 유지하면서 실제 고객 행동에 영향을 주는 로컬 요구사항을 우선순위화합니다.'
      },

      {
        group: 'UX',
        team: '프로덕트 경험',
        role: '추천 검색어와 검색 결과, 탐색 구조를 설계해 고객이 원하는 상품에 빠르게 도달할 수 있도록 합니다.'
      },

      {
        group: '개발',
        team: '커머스 플랫폼',
        role: '하나의 공통 플랫폼 위에서 언어, 상품 카탈로그, 지역 서비스의 차이를 지원합니다.'
      }

    ]

  },


  'mx-aircon.cart': {

    hook:
      '어떤 상품은 배송만으로 구매 경험이 끝나지 않습니다.',

    body: [
      '에어컨의 구매 여정은 스마트폰과 다릅니다. 배송뿐 아니라 설치와 사후 지원까지 구매 결정에 영향을 줄 수 있습니다.',
      'Vanessa에게 중요한 것은 가격뿐만이 아닙니다. <strong>Buy를 누른 뒤 실제로 어떤 일이 일어나는지 확신할 수 있어야 합니다.</strong>'
    ],

    teams: [

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '상품 카테고리의 실제 이용 조건을 고려해 배송과 서비스까지 포함한 구매 여정을 설계합니다.'
      },

      {
        group: 'UX',
        team: '프로덕트 경험',
        role: '고객이 구매를 확정하기 전에 복잡한 주문 정보를 쉽게 이해하도록 화면을 구성합니다.'
      },

      {
        group: '지역 사업운영',
        team: '커머셜',
        role: '각 시장의 판매 및 운영 조건을 조율해 실제 제공 가능한 고객 경험을 만듭니다.'
      }

    ]

  },


  'mx-aircon.services': {

    hook:
      '상품은 전체 구매 경험의 한 부분일 뿐입니다.',

    body: [
      '설치, 유지보수, 보증 연장은 가전제품을 실제로 사용하는 데 중요한 요소가 될 수 있습니다.',
      '이러한 서비스를 구매 흐름 안에서 함께 보여주면 단순한 상품 거래를 넘어 <strong>상품을 구매한 뒤 어떻게 사용할 것인지까지 이해할 수 있는 경험</strong>으로 확장됩니다.'
    ],

    teams: [

      {
        group: '사업전략',
        team: '커머셜',
        role: '실물 상품 이상의 고객 가치를 만들 수 있는 서비스 상품과 부가 비즈니스를 설계합니다.'
      },

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '부가 서비스가 구매 여정의 어느 시점에 어떻게 제시될지 결정합니다.'
      },

      {
        group: '개발',
        team: '커머스 플랫폼',
        role: '고객이 선택한 서비스를 장바구니, 주문, 이후 이행 프로세스와 연결합니다.'
      }

    ]

  },


  'mx-aircon.payment': {

    hook:
      '"Meses sin intereses" — 결제 역시 시장의 맥락을 따라야 합니다.',

    body: [
      '멕시코 Checkout에는 해당 시장에서 익숙한 결제 방식과 할부 옵션이 제공됩니다.',
      '글로벌 커머스라고 해서 하나의 결제 모델을 모든 국가에 적용할 수는 없습니다. <strong>고객은 자신이 사는 시장에서 익숙한 결제수단과 조건을 기대합니다.</strong>'
    ],

    teams: [

      {
        group: '개발',
        team: '커머스 플랫폼',
        role: '현지 결제사를 연동하고 각 시장에 필요한 기술적 결제 규칙을 지원합니다.'
      },

      {
        group: '지역 사업운영',
        team: '커머셜',
        role: '시장의 결제 관행과 상업 조건에 맞게 현지 운영 요건을 조율합니다.'
      },

      {
        group: 'PM',
        team: '프로덕트 경험',
        role: '시장별로 다른 결제 복잡성을 하나의 일관된 Checkout 경험 안에서 이해하기 쉽게 구성합니다.'
      }

    ]

  }

};


/* =========================================================
   6. Ending translation
   ========================================================= */

const ENDING_KO = {

  eyebrow:
    'Journey 뒤의 연결을 발견해보세요.',

  lead:
    '지금 {count}개의 고객 순간을 지나왔습니다.<br />' +
    '각 순간은 여러 역량이 함께 움직일 때 완성됩니다.',

  afterTiles:
    '좋은 D2C 경험은 <strong>처음부터 Cross-functional하게 만들어집니다.</strong>',

  planning:
    '프로덕트, 경험, 기술, 비즈니스의 결정이 연결될 때 개별 화면들이 하나의 고객 여정이 됩니다.',

  closingA:
    '서로 다른 시장. 서로 다른 고객의 니즈.',

  closingB:
    '하나로 연결된 D2C Journey.'

};


const ALL_GROUPS_KO = [

  {
    group: 'PM',
    team: '프로덕트 경험'
  },

  {
    group: 'UX',
    team: '프로덕트 경험'
  },

  {
    group: '개발',
    team: '커머스 플랫폼'
  },

  {
    group: '마케팅',
    team: '고객 커뮤니케이션'
  },

  {
    group: '영업·상품운영',
    team: '커머셜'
  },

  {
    group: '지역 사업운영',
    team: '커머셜'
  },

  {
    group: '사업전략',
    team: '커머셜'
  },

  {
    group: '사업기획',
    team: '비즈니스 운영'
  }

];


/* =========================================================
   7. Language
   ========================================================= */

function applyLanguage() {

  document.documentElement.lang =
    currentLang === 'ko'
      ? 'ko'
      : 'en';


  /* Landing */
  heroTitle.textContent =
    ui('heroTitle');

  heroSubtitle.textContent =
    ui('heroSubtitle');

  heroHint.textContent =
    ui('heroHint');

  chooseCustomer.textContent =
    ui('chooseCustomer');

  landingBehindLabel.textContent =
    ui('behindProject');

  endingBehindLabel.textContent =
    ui('behindProject');


  /* Journey */
  backBtn.textContent =
    ui('characters');

  prevBtn.textContent =
    ui('previous');


  if (currentJourney) {

    const isLast =
      currentStep ===
      currentJourney.steps.length - 1;


    nextBtn.textContent =
      isLast
        ? ui('wholePicture')
        : ui('next');
  }


  /* Ending / Behind */
  endingBackBtn.textContent =
    ui('endingBack');

  behindBackBtn.textContent =
    ui('behindBack');


  /* Persona / Panel */
  personaEyebrow.textContent =
    ui('personaEyebrow');

  panelEyebrow.textContent =
    ui('panelEyebrow');


  /* Behind */
  behindEyebrow.textContent =
    ui('behindEyebrow');

  behindTitle.textContent =
    ui('behindTitle');

  behindSub.innerHTML =
    ui('behindSub');


  statMarkets.textContent =
    ui('statMarkets');

  statPersonas.textContent =
    ui('statPersonas');

  statMoments.textContent =
    ui('statMoments');

  statCategories.textContent =
    ui('statCategories');

  statAi.textContent =
    ui('statAi');

  statFrameworks.textContent =
    ui('statFrameworks');


  behindH1.textContent =
    ui('behindH1');

  behindP1.innerHTML =
    ui('behindP1');


  behindH2.textContent =
    ui('behindH2');

  behindP2.innerHTML =
    ui('behindP2');


  behindH3.textContent =
    ui('behindH3');

  behindP3.innerHTML =
    ui('behindP3');


  behindH4.textContent =
    ui('behindH4');

  behindP4.innerHTML =
    ui('behindP4');


  behindH5.textContent =
    ui('behindH5');

  behindP5.innerHTML =
    ui('behindP5');


  behindH6.textContent =
    ui('behindH6');

  behindP6.innerHTML =
    ui('behindP6');


  behindH7.textContent =
    ui('behindH7');

  behindP7.innerHTML =
    ui('behindP7');


  behindH8.textContent =
    ui('behindH8');

  behindP8.innerHTML =
    ui('behindP8');


  behindClosing1.textContent =
    ui('behindClosing1');

  behindClosing2.textContent =
    ui('behindClosing2');

  behindClosing3.textContent =
    ui('behindClosing3');


  projectDisclaimer.textContent =
    ui('projectDisclaimer');


  behindBackBottom.textContent =
    ui('backExplorer');


  /* Language toggle */
  document
    .querySelectorAll('.lang-btn')
    .forEach(function (button) {

      button.classList.toggle(
        'is-active',
        button.dataset.lang === currentLang
      );

    });


  /* Cards */
  cardGrid.innerHTML = '';

  renderCards();


  /* 열린 Panel도 즉시 변경 */
  if (
    isPanelOpen() &&
    currentJourney
  ) {

    const step =
      currentJourney.steps[currentStep];

    openPanel(step);
  }


  /* Ending 보고 있으면 즉시 변경 */
  if (
    !endingView.classList.contains('hidden') &&
    currentJourney
  ) {

    renderEndingContent(false);
  }

}


/* =========================================================
   8. View
   ========================================================= */

function showView(name) {

  landingView.classList.toggle(
    'hidden',
    name !== 'landing'
  );

  journeyView.classList.toggle(
    'hidden',
    name !== 'journey'
  );

  endingView.classList.toggle(
    'hidden',
    name !== 'ending'
  );

  behindView.classList.toggle(
    'hidden',
    name !== 'behind'
  );


  document.body.classList.toggle(
    'lang-switch-lower',
    name === 'ending' ||
    name === 'behind'
  );

}


function clearIntroTimers() {

  introTimers.forEach(
    clearTimeout
  );

  introTimers = [];

}


function clearEndingTimers() {

  endingTimers.forEach(
    clearTimeout
  );

  endingTimers = [];

}


function goHome() {

  clearIntroTimers();
  clearEndingTimers();

  closePanel();
  closePersona();

  showView('landing');

  window.scrollTo(0, 0);

}


/* =========================================================
   9. Character cards
   ========================================================= */

function createCard(character) {

  const card =
    document.createElement('article');


  card.className =
    character.ready
      ? 'card'
      : 'card card--locked';


  const photo =
    'assets/characters/' +
    character.name.toLowerCase() +
    '.png';


  const copy =
    characterCopy(character);


  card.innerHTML =

    '<div class="card-visual">' +

      '<img ' +
        'class="card-photo" ' +
        'src="' + photo + '" ' +
        'alt="' + character.name + '" ' +
        'onerror="this.style.display=\'none\'" ' +
      '/>' +

    '</div>' +


    '<p class="card-country">' +

      '<span class="card-flag">' +
        character.flag +
      '</span>' +

      copy.country +

    '</p>' +


    '<h2 class="card-name">' +
      character.name +
    '</h2>' +


    '<p class="card-tagline">' +
      copy.tagline +
    '</p>' +


    '<button ' +
      'class="card-btn" ' +
      'type="button"' +
      (character.ready ? '' : ' disabled') +
    '>' +

      (
        character.ready
          ? ui('startJourney')
          : 'Coming Soon'
      ) +

    '</button>' +


    (
      character.ready
        ?
        '<button ' +
          'class="persona-link" ' +
          'type="button"' +
        '>' +

          ui('meet') +
          ' ' +
          character.name +
          ' ↗' +

        '</button>'
        :
        ''
    );


  if (character.ready) {

    card.addEventListener(
      'click',
      function (event) {

        if (
          event.target.closest(
            '.persona-link'
          )
        ) {
          return;
        }


        startJourney(
          character.id
        );

      }
    );


    const personaButton =
      card.querySelector(
        '.persona-link'
      );


    if (personaButton) {

      personaButton.addEventListener(
        'click',
        function (event) {

          event.stopPropagation();

          openPersona(character);

        }
      );

    }

  }


  return card;

}


function renderCards() {

  CHARACTERS.forEach(
    function (character) {

      cardGrid.appendChild(
        createCard(character)
      );

    }
  );

}


/* =========================================================
   10. Persona
   ========================================================= */

function openPersona(character) {

  const imagePath =
    'assets/personas/' +
    character.name.toLowerCase() +
    '-persona.png';


  personaImage.src =
    imagePath;


  personaImage.alt =
    character.name +
    ' customer persona';


  personaModal.classList.remove(
    'hidden'
  );

  personaBackdrop.classList.remove(
    'hidden'
  );
document.body.classList.add('overlay-open');

  document.body.style.overflow =
    'hidden';

}


function closePersona() {

  personaModal.classList.add(
    'hidden'
  );

  personaBackdrop.classList.add(
    'hidden'
  );

  document.body.classList.remove('overlay-open');
  document.body.style.overflow =
    '';

}


function isPersonaOpen() {

  return !personaModal.classList.contains(
    'hidden'
  );

}


/* =========================================================
   11. Journey
   ========================================================= */

function startJourney(characterId) {

  currentJourneyId =
    characterId;


  currentJourney =
    JOURNEYS[characterId];


  if (!currentJourney) {

    alert(
      'Journey not available.'
    );

    return;

  }


  clearIntroTimers();
  clearEndingTimers();


  currentStep = 0;

  seenPointers = {};

  pointerHintDone = false;


  preloadImages(
    currentJourney
  );


  buildProgress();


  showView(
    'journey'
  );


  playIntro();

}


/* Intro */

function playIntro() {

  progressBar.classList.add(
    'hidden'
  );

  navArea.classList.add(
    'hidden'
  );


  pointerLayer.innerHTML =
    '';


  const intro =
    currentJourney.intro;


  screenImage.src =
    intro[0];


  introTimers.push(

    setTimeout(
      function () {

        if (intro[1]) {

          screenImage.src =
            intro[1];

        }

      },
      900
    )

  );


  introTimers.push(

    setTimeout(
      function () {

        progressBar.classList.remove(
          'hidden'
        );

        navArea.classList.remove(
          'hidden'
        );


        goToStep(0);

      },
      1900
    )

  );

}


/* Step */

function goToStep(index) {

  const steps =
    currentJourney.steps;


  if (
    index < 0 ||
    index >= steps.length
  ) {
    return;
  }


  closePanel();


  currentStep =
    index;


  const step =
    steps[index];


  const isLast =
    index ===
    steps.length - 1;


  screenImage.src =
    step.image;


  screenImage.alt =
    step.label;


  stepCount.textContent =
    (index + 1) +
    ' / ' +
    steps.length;


  prevBtn.disabled =
    index === 0;


  nextBtn.textContent =
    isLast
      ? ui('wholePicture')
      : ui('next');


  updateProgress();

  renderPointer(step);

}


function goNext() {

  if (
    currentStep ===
    currentJourney.steps.length - 1
  ) {

    showEnding();

  }

  else {

    goToStep(
      currentStep + 1
    );

  }

}


/* Progress */

function buildProgress() {

  progressBar.innerHTML =
    '';


  currentJourney.steps.forEach(
    function (step, i) {

      if (i > 0) {

        const line =
          document.createElement(
            'span'
          );


        line.className =
          'progress-line';


        progressBar.appendChild(
          line
        );

      }


      const button =
        document.createElement(
          'button'
        );


      button.className =
        'progress-step';


      button.type =
        'button';


      button.textContent =
        step.label;


      button.addEventListener(
        'click',
        function () {

          goToStep(i);

        }
      );


      progressBar.appendChild(
        button
      );

    }
  );

}


function updateProgress() {

  progressBar
    .querySelectorAll(
      '.progress-step'
    )
    .forEach(
      function (button, i) {

        button.classList.toggle(
          'is-active',
          i === currentStep
        );


        button.classList.toggle(
          'is-done',
          i < currentStep
        );

      }
    );

}


/* Preload */

function preloadImages(journey) {

  journey.intro
    .concat(
      journey.steps.map(
        function (step) {
          return step.image;
        }
      )
    )
    .forEach(
      function (src) {

        const img =
          new Image();


        img.src =
          src;

      }
    );

}


/* =========================================================
   12. Pointer
   ========================================================= */

function renderPointer(step) {

  pointerLayer.innerHTML =
    '';


  if (!step.pointer) {
    return;
  }


  const dot =
    document.createElement(
      'button'
    );


  dot.type =
    'button';


  dot.className =
    'pointer' +
    (
      seenPointers[step.id]
        ? ' is-seen'
        : ''
    );


  dot.style.left =
    step.pointer.x +
    '%';


  dot.style.top =
    step.pointer.y +
    '%';


  dot.setAttribute(
    'aria-label',
    ui('panelEyebrow')
  );


  pointerLayer.appendChild(
    dot
  );


  if (!pointerHintDone) {

    const hint =
      document.createElement(
        'span'
      );


    hint.className =
      'pointer-hint' +
      (
        step.pointer.x > 58
          ? ' pointer-hint--left'
          : ''
      );


    hint.textContent =
      ui('pointerHint');


    dot.appendChild(
      hint
    );

  }


  dot.addEventListener(
    'click',
    function (event) {

      event.stopPropagation();


      pointerHintDone =
        true;


      seenPointers[step.id] =
        true;


      dot.classList.add(
        'is-seen'
      );


      const hint =
        dot.querySelector(
          '.pointer-hint'
        );


      if (hint) {
        hint.remove();
      }


      openPanel(step);

    }
  );

}


/* =========================================================
   13. Detail panel
   ========================================================= */

function getPointerContent(step) {

  if (
    currentLang === 'ko' &&
    currentJourneyId
  ) {

    const key =
      currentJourneyId +
      '.' +
      step.id;


    if (
      POINTER_KO[key]
    ) {

      return POINTER_KO[key];

    }

  }


  return step.pointer;

}


function openPanel(step) {

  if (
    !step ||
    !step.pointer
  ) {
    return;
  }


  const content =
    getPointerContent(step);


  panelHook.textContent =
    content.hook;


  panelBody.innerHTML =
    content.body
      .map(
        function (paragraph) {

          return (
            '<p>' +
              paragraph +
            '</p>'
          );

        }
      )
      .join('');


  panelTeams.innerHTML =
    content.teams
      .map(
        function (team) {

          return (

            '<div class="team">' +

              '<div class="team-group">' +
                team.group +
              '</div>' +

              '<div class="team-parent">' +
                team.team +
              '</div>' +

              '<div class="team-role">' +
                team.role +
              '</div>' +

            '</div>'

          );

        }
      )
      .join('');


  panelNote.innerHTML =
    ui('panelNote');


  panel.classList.remove(
    'hidden'
  );


  panelBackdrop.classList.remove(
    'hidden'
  );


  journeyView.classList.add(
    'is-shifted'
  );

  document.body.classList.add('overlay-open');

}


function closePanel() {

  panel.classList.add(
    'hidden'
  );


  panelBackdrop.classList.add(
    'hidden'
  );


  journeyView.classList.remove(
    'is-shifted'
  );

  document.body.classList.remove('overlay-open');

}


function isPanelOpen() {

  return !panel.classList.contains(
    'hidden'
  );

}


/* =========================================================
   14. Ending
   ========================================================= */

function getEndingData() {

  return (
    currentLang === 'ko'
      ? ENDING_KO
      : ENDING
  );

}


function getEndingGroups() {

  return (
    currentLang === 'ko'
      ? ALL_GROUPS_KO
      : ALL_GROUPS
  );

}


function renderEndingContent(playAnimation) {

  const endingData =
    getEndingData();


  const groups =
    getEndingGroups();


  endingEyebrow.textContent =
    endingData.eyebrow;


  endingLead.innerHTML =
    endingData.lead.replace(
      '{count}',
      currentJourney.steps.length
    );


  endingAfter.innerHTML =
    endingData.afterTiles;


  endingPlanning.innerHTML =
    endingData.planning;


  closingA.textContent =
    endingData.closingA;


  closingB.textContent =
    endingData.closingB;


  groupGrid.innerHTML =
    groups
      .map(
        function (group) {

          return (

            '<div class="group-tile">' +

              '<div class="tile-team">' +
                group.team +
              '</div>' +

              '<div class="tile-group">' +
                group.group +
              '</div>' +

            '</div>'

          );

        }
      )
      .join('');


  const laterItems = [
    endingAfter,
    endingPlanning,
    endingClosing,
    endingActions
  ];


  laterItems.forEach(
    function (element) {

      element.classList.remove(
        'is-revealed'
      );

    }
  );


  const tiles =
    groupGrid.querySelectorAll(
      '.group-tile'
    );


  if (!playAnimation) {

    tiles.forEach(
      function (tile) {

        tile.classList.add(
          'is-revealed'
        );

      }
    );


    laterItems.forEach(
      function (element) {

        element.classList.add(
          'is-revealed'
        );

      }
    );


    return;

  }


  clearEndingTimers();


  tiles.forEach(
    function (tile, i) {

      endingTimers.push(

        setTimeout(
          function () {

            tile.classList.add(
              'is-revealed'
            );

          },
          260 + i * 95
        )

      );

    }
  );


  const afterTiles =
    260 +
    tiles.length * 95;


  [
    260,
    620,
    980,
    1240
  ].forEach(
    function (delay, i) {

      endingTimers.push(

        setTimeout(
          function () {

            laterItems[i]
              .classList.add(
                'is-revealed'
              );

          },
          afterTiles + delay
        )

      );

    }
  );

}


function showEnding() {

  closePanel();


  showView(
    'ending'
  );


  renderEndingContent(
    true
  );

}


function backToJourney() {

  clearEndingTimers();


  showView(
    'journey'
  );


  goToStep(
    currentJourney.steps.length - 1
  );

}


/* =========================================================
   15. Behind
   ========================================================= */

function openBehind() {

  behindFrom =
    endingView.classList.contains(
      'hidden'
    )
      ? 'landing'
      : 'ending';


  clearEndingTimers();

  closePanel();

  closePersona();


  showView(
    'behind'
  );


  window.scrollTo(
    0,
    0
  );

}


function closeBehind() {

  if (
    behindFrom === 'ending'
  ) {

    showEnding();

  }

  else {

    showView(
      'landing'
    );

  }


  window.scrollTo(
    0,
    0
  );

}


function isBehindOpen() {

  return !behindView.classList.contains(
    'hidden'
  );

}


/* =========================================================
   16. Dev mode
   ========================================================= */

function toggleDevMode() {

  devMode =
    !devMode;


  document.body.classList.toggle(
    'is-devmode',
    devMode
  );


  devReadout.classList.toggle(
    'hidden',
    !devMode
  );


  devValue.textContent =
    currentLang === 'ko'
      ? '폰 화면을 클릭하세요'
      : 'Click the phone screen';

}


deviceScreen.addEventListener(
  'click',
  function (event) {

    if (!devMode) {
      return;
    }


    const box =
      deviceScreen.getBoundingClientRect();


    const x =
      Math.round(
        (
          (
            event.clientX -
            box.left
          )
          /
          box.width
        )
        *
        1000
      )
      /
      10;


    const y =
      Math.round(
        (
          (
            event.clientY -
            box.top
          )
          /
          box.height
        )
        *
        1000
      )
      /
      10;


    const text =
      'x: ' +
      x +
      ', y: ' +
      y;


    devValue.textContent =
      text +
      (
        currentLang === 'ko'
          ? '   (복사됨)'
          : '   (copied)'
      );


    try {

      navigator.clipboard.writeText(
        text
      );

    }

    catch (error) {

      /* ignore */

    }

  }
);


/* =========================================================
   17. Events
   ========================================================= */


/* Journey */
prevBtn.addEventListener(
  'click',
  function () {

    goToStep(
      currentStep - 1
    );

  }
);


nextBtn.addEventListener(
  'click',
  goNext
);


backBtn.addEventListener(
  'click',
  goHome
);


/* Persona */
personaClose.addEventListener(
  'click',
  closePersona
);


personaBackdrop.addEventListener(
  'click',
  closePersona
);


/* Panel */
panelClose.addEventListener(
  'click',
  closePanel
);


panelBackdrop.addEventListener(
  'click',
  closePanel
);


/* Ending */
endingBackBtn.addEventListener(
  'click',
  backToJourney
);


endingHomeBtn.addEventListener(
  'click',
  goHome
);


/* Behind */
document
  .querySelectorAll(
    '.behind-cta'
  )
  .forEach(
    function (button) {

      button.addEventListener(
        'click',
        openBehind
      );

    }
  );


behindBackBtn.addEventListener(
  'click',
  closeBehind
);


behindBackBottom.addEventListener(
  'click',
  closeBehind
);


behindHomeBtn.addEventListener(
  'click',
  goHome
);


/* Language */
languageSwitch.addEventListener(
  'click',
  function (event) {

    const button =
      event.target.closest(
        '.lang-btn'
      );


    if (!button) {
      return;
    }


    currentLang =
      button.dataset.lang;


    localStorage.setItem(
      'sunny-shop-lang',
      currentLang
    );


    applyLanguage();

  }
);


/* Keyboard */
document.addEventListener(
  'keydown',
  function (event) {


    if (isPersonaOpen()) {

      if (
        event.key === 'Escape'
      ) {

        closePersona();

      }

      return;

    }


    if (
      event.key === 'd' ||
      event.key === 'D'
    ) {

      toggleDevMode();

      return;

    }


    if (isBehindOpen()) {

      if (
        event.key === 'Escape'
      ) {

        closeBehind();

      }

      return;

    }


    if (
      !endingView.classList.contains(
        'hidden'
      )
    ) {

      if (
        event.key === 'Escape' ||
        event.key === 'ArrowLeft'
      ) {

        backToJourney();

      }

      return;

    }


    if (
      journeyView.classList.contains(
        'hidden'
      )
    ) {

      return;

    }


    if (
      event.key === 'Escape'
    ) {

      if (isPanelOpen()) {

        closePanel();

      }

      else {

        goHome();

      }


      return;

    }


    if (isPanelOpen()) {
      return;
    }


    if (
      event.key === 'ArrowRight'
    ) {

      goNext();

    }


    if (
      event.key === 'ArrowLeft'
    ) {

      goToStep(
        currentStep - 1
      );

    }

  }
);


/* =========================================================
   18. Start
   ========================================================= */

applyLanguage();