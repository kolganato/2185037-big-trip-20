import { getDataFromServer } from './utils.js';

const PATH = '/big-trip/destinations';

const getOffersFromServer = () => getDataFromServer(PATH);

const Offers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 'f74499d4-4dbc-4131-90ba-6f9ebdb36d55',
        'title': 'Upgrade to a business class',
        'price': 80
      },
      {
        'id': '22c3ac08-5f75-4c2e-a9ac-1fe9e758d4d8',
        'title': 'Choose the radio station',
        'price': 179
      },
      {
        'id': '792b9d1f-665a-4901-9685-a59699962e3b',
        'title': 'Choose temperature',
        'price': 90
      },
      {
        'id': 'd0a01451-1786-4dbc-a1cf-77d14882f260',
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 139
      },
      {
        'id': '34779cf0-2dbe-474d-b8d4-bcd006a9a04a',
        'title': 'Drive slowly',
        'price': 123
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 'a13bde62-82af-4b9b-a107-539ab7f1cbca',
        'title': 'Infotainment system',
        'price': 160
      },
      {
        'id': 'ba7a7d10-780d-4867-b74e-026c2b44bc8c',
        'title': 'Order meal',
        'price': 77
      },
      {
        'id': '39f39428-604d-44b6-87e8-5319a1d830d2',
        'title': 'Choose seats',
        'price': 69
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': '9b2a3a2b-daa6-4ec1-b154-78bb6c7f4289',
        'title': 'Book a taxi at the arrival point',
        'price': 64
      },
      {
        'id': 'a3e34f4c-fc00-49b9-a918-24f81c82c0b0',
        'title': 'Order a breakfast',
        'price': 169
      },
      {
        'id': 'aa35759b-2dab-44a3-9960-aabed3f07f70',
        'title': 'Wake up at a certain time',
        'price': 194
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 'd5e46b29-d647-400c-8c64-11ed5e247675',
        'title': 'Choose meal',
        'price': 135
      },
      {
        'id': 'd3986f36-4ea7-4d55-994f-c11edb1c642a',
        'title': 'Choose seats',
        'price': 70
      },
      {
        'id': '02adc897-c998-4a2f-a9d1-ab59587cc70a',
        'title': 'Upgrade to comfort class',
        'price': 69
      },
      {
        'id': '1ad142e3-31e9-4e3a-9d14-544c4d07d015',
        'title': 'Upgrade to business class',
        'price': 63
      },
      {
        'id': 'd964ef29-f337-4f6a-9886-addadbb996ab',
        'title': 'Add luggage',
        'price': 173
      },
      {
        'id': '4457e6ae-8409-473f-9a51-b165f3fc6398',
        'title': 'Business lounge',
        'price': 128
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': '04dfad33-be5c-488e-809b-478536c1bf27',
        'title': 'Choose the time of check-in',
        'price': 40
      },
      {
        'id': '6ad6ce90-f7f8-41de-bc2d-6f82ae31391d',
        'title': 'Choose the time of check-out',
        'price': 99
      },
      {
        'id': '491200bf-9862-467f-a640-c9be64250305',
        'title': 'Add breakfast',
        'price': 65
      },
      {
        'id': '4dfdfd4f-2535-4e35-b7d2-229ad1c2851b',
        'title': 'Laundry',
        'price': 111
      },
      {
        'id': 'e1b0f5b2-157a-4c41-bed1-7210d219db69',
        'title': 'Order a meal from the restaurant',
        'price': 96
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': '35f7f0bd-1341-45dd-aee9-2e7d54654f10',
        'title': 'Choose meal',
        'price': 93
      },
      {
        'id': 'ad2fe5ce-a8d8-4e93-b55b-eed2ed1eeb8f',
        'title': 'Choose seats',
        'price': 150
      },
      {
        'id': '189e4bc0-0c95-4e72-949d-4c06a35861d2',
        'title': 'Upgrade to comfort class',
        'price': 64
      },
      {
        'id': '465bd8dc-0a29-457e-b16f-7f9f8fd73bf8',
        'title': 'Upgrade to business class',
        'price': 92
      },
      {
        'id': '3b8abec2-ccbd-4e74-bbae-2ff12c7cd95f',
        'title': 'Add luggage',
        'price': 51
      },
      {
        'id': 'a33a58ec-6006-4ac6-8e05-1352f4a6c8e2',
        'title': 'Business lounge',
        'price': 41
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': '374019e4-4c0b-4277-a2b9-2f711fff7ab1',
        'title': 'With automatic transmission',
        'price': 67
      },
      {
        'id': '696ecc0e-2304-4ede-875d-dafae3a60962',
        'title': 'With air conditioning',
        'price': 195
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 'fb6abe61-f73c-4fda-ab07-0b2132b23cf3',
        'title': 'Choose live music',
        'price': 66
      },
      {
        'id': 'd6898efb-e318-41ba-94ba-4ce2320fbd2a',
        'title': 'Choose VIP area',
        'price': 115
      }
    ]
  }
];

export { Offers };
