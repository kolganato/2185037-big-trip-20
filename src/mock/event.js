import { getDataFromServer } from './utils.js';

const PATH = '/big-trip/points';

const getEventsFromServer = () => getDataFromServer(PATH);

const Events = [
  {
    'id': '3f6ad7df-77ec-478d-b2c5-10cf3fe02b38',
    'base_price': 265,
    'date_from': '2023-11-23T18:28:01.397Z',
    'date_to': '2023-11-24T23:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': true,
    'offers': [
      '34779cf0-2dbe-474d-b8d4-bcd006a9a04a'
    ],
    'type': 'taxi'
  },
  {
    'id': '2b02cadc-f49f-4f63-9e49-ff38e6ed845f',
    'base_price': 3044,
    'date_from': '2023-11-24T23:28:01.397Z',
    'date_to': '2023-11-25T11:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': true,
    'offers': [],
    'type': 'ship'
  },
  {
    'id': '8a9e18ac-254f-4d55-b991-7bac9a3f5ce8',
    'base_price': 1347,
    'date_from': '2023-11-25T11:28:01.397Z',
    'date_to': '2023-11-26T22:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': true,
    'offers': [
      'aa35759b-2dab-44a3-9960-aabed3f07f70'
    ],
    'type': 'train'
  },
  {
    'id': '1a26efc5-a5a1-44e8-a46a-ea5bc88af638',
    'base_price': 2935,
    'date_from': '2023-11-26T22:28:01.397Z',
    'date_to': '2023-11-27T10:28:01.397Z',
    'destination': '56af6338-66f9-4991-a066-09e1f436e069',
    'is_favorite': true,
    'offers': [
      '35f7f0bd-1341-45dd-aee9-2e7d54654f10',
      'ad2fe5ce-a8d8-4e93-b55b-eed2ed1eeb8f',
      '189e4bc0-0c95-4e72-949d-4c06a35861d2',
      '465bd8dc-0a29-457e-b16f-7f9f8fd73bf8',
      '3b8abec2-ccbd-4e74-bbae-2ff12c7cd95f',
      'a33a58ec-6006-4ac6-8e05-1352f4a6c8e2'
    ],
    'type': 'ship'
  },
  {
    'id': 'fae86174-6b0f-43e9-8dd2-8c0b8604a951',
    'base_price': 4929,
    'date_from': '2023-11-27T10:28:01.397Z',
    'date_to': '2023-11-28T01:28:01.397Z',
    'destination': '56af6338-66f9-4991-a066-09e1f436e069',
    'is_favorite': true,
    'offers': [],
    'type': 'train'
  },
  {
    'id': '5ed43e00-062d-4c8e-87e1-3dc2e7b52287',
    'base_price': 757,
    'date_from': '2023-11-28T01:28:01.397Z',
    'date_to': '2023-11-29T03:28:01.397Z',
    'destination': 'd6bf60d5-6cf8-4d23-a902-1e4088c5f97e',
    'is_favorite': false,
    'offers': [
      '39f39428-604d-44b6-87e8-5319a1d830d2'
    ],
    'type': 'bus'
  },
  {
    'id': '254bf09b-5c44-4bbd-8f37-754ecb76511d',
    'base_price': 2859,
    'date_from': '2023-11-29T03:28:01.397Z',
    'date_to': '2023-11-30T02:28:01.397Z',
    'destination': 'd6bf60d5-6cf8-4d23-a902-1e4088c5f97e',
    'is_favorite': true,
    'offers': [
      '3b8abec2-ccbd-4e74-bbae-2ff12c7cd95f',
      'a33a58ec-6006-4ac6-8e05-1352f4a6c8e2'
    ],
    'type': 'ship'
  },
  {
    'id': '417deed6-f473-466f-be56-90463f1b66bf',
    'base_price': 9244,
    'date_from': '2023-11-30T02:28:01.397Z',
    'date_to': '2023-11-30T08:28:01.397Z',
    'destination': 'd6bf60d5-6cf8-4d23-a902-1e4088c5f97e',
    'is_favorite': true,
    'offers': [],
    'type': 'train'
  },
  {
    'id': '112052e7-ce65-4cf4-873a-d599ff7d1725',
    'base_price': 3010,
    'date_from': '2023-11-30T08:28:01.397Z',
    'date_to': '2023-11-30T14:28:01.397Z',
    'destination': 'd6bf60d5-6cf8-4d23-a902-1e4088c5f97e',
    'is_favorite': false,
    'offers': [
      'a33a58ec-6006-4ac6-8e05-1352f4a6c8e2'
    ],
    'type': 'ship'
  },
  {
    'id': '0c73c328-2e4e-4ce7-b64f-27d838582431',
    'base_price': 4452,
    'date_from': '2023-11-30T14:28:01.397Z',
    'date_to': '2023-12-01T17:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '814dae57-6074-4dac-b9f0-4a09f87cde9d',
    'base_price': 26,
    'date_from': '2023-12-01T17:28:01.397Z',
    'date_to': '2023-12-02T04:28:01.397Z',
    'destination': '26377ef2-423a-420b-a926-2f6d1b63c6c3',
    'is_favorite': true,
    'offers': [
      '04dfad33-be5c-488e-809b-478536c1bf27',
      '6ad6ce90-f7f8-41de-bc2d-6f82ae31391d',
      '491200bf-9862-467f-a640-c9be64250305',
      '4dfdfd4f-2535-4e35-b7d2-229ad1c2851b',
      'e1b0f5b2-157a-4c41-bed1-7210d219db69'
    ],
    'type': 'check-in'
  },
  {
    'id': '9f2a94ac-f115-4901-a8d3-17e0edbbcdba',
    'base_price': 8419,
    'date_from': '2023-12-02T04:28:01.397Z',
    'date_to': '2023-12-03T22:28:01.397Z',
    'destination': '26377ef2-423a-420b-a926-2f6d1b63c6c3',
    'is_favorite': false,
    'offers': [
      'a3e34f4c-fc00-49b9-a918-24f81c82c0b0',
      'aa35759b-2dab-44a3-9960-aabed3f07f70'
    ],
    'type': 'train'
  },
  {
    'id': 'ee951185-6ef6-4cf3-829f-33d21aeafa1e',
    'base_price': 4481,
    'date_from': '2023-12-03T22:28:01.397Z',
    'date_to': '2023-12-05T05:28:01.397Z',
    'destination': '26377ef2-423a-420b-a926-2f6d1b63c6c3',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '1ccf6da9-bb14-446c-a0b5-cae57c183b86',
    'base_price': 6650,
    'date_from': '2023-12-05T05:28:01.397Z',
    'date_to': '2023-12-05T16:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': false,
    'offers': [
      '374019e4-4c0b-4277-a2b9-2f711fff7ab1',
      '696ecc0e-2304-4ede-875d-dafae3a60962'
    ],
    'type': 'drive'
  },
  {
    'id': 'e720447c-5ce3-496b-91db-7b1b44a7f4c8',
    'base_price': 4128,
    'date_from': '2023-12-05T16:28:01.397Z',
    'date_to': '2023-12-06T06:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': false,
    'offers': [
      '39f39428-604d-44b6-87e8-5319a1d830d2'
    ],
    'type': 'bus'
  },
  {
    'id': '7a25a7b1-bd2d-45d8-97cc-3047e801d7c6',
    'base_price': 8090,
    'date_from': '2023-12-06T06:28:01.397Z',
    'date_to': '2023-12-07T09:28:01.397Z',
    'destination': '1d5261f1-d69f-4b46-9c9f-18cd6fae13e1',
    'is_favorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '78978402-8e8d-4822-974d-588f35a826dd',
    'base_price': 4513,
    'date_from': '2023-12-07T09:28:01.397Z',
    'date_to': '2023-12-08T07:28:01.397Z',
    'destination': '26377ef2-423a-420b-a926-2f6d1b63c6c3',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'dad500fb-95af-4c0b-b7c0-bee7f9113d25',
    'base_price': 3773,
    'date_from': '2023-12-08T07:28:01.397Z',
    'date_to': '2023-12-09T02:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': true,
    'offers': [],
    'type': 'flight'
  },
  {
    'id': 'd021775f-8925-4fe5-81f3-9697a08c2c4f',
    'base_price': 4460,
    'date_from': '2023-12-09T02:28:01.397Z',
    'date_to': '2023-12-10T21:28:01.397Z',
    'destination': 'd6bf60d5-6cf8-4d23-a902-1e4088c5f97e',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'aa2821df-c79d-432e-a02f-adc58e0ccefd',
    'base_price': 6121,
    'date_from': '2023-12-10T21:28:01.397Z',
    'date_to': '2023-12-11T14:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': false,
    'offers': [
      'e1b0f5b2-157a-4c41-bed1-7210d219db69'
    ],
    'type': 'check-in'
  },
  {
    'id': 'cdb76cd4-afdf-4556-a88a-296a782546d2',
    'base_price': 3421,
    'date_from': '2023-12-11T14:28:01.397Z',
    'date_to': '2023-12-13T06:28:01.397Z',
    'destination': '26377ef2-423a-420b-a926-2f6d1b63c6c3',
    'is_favorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '48cd0535-195f-444c-ba28-5fd1dc5ba8a6',
    'base_price': 5463,
    'date_from': '2023-12-13T06:28:01.397Z',
    'date_to': '2023-12-15T02:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '7db7f306-ab6d-40b6-b4b3-57e1503bc88d',
    'base_price': 2169,
    'date_from': '2023-12-15T02:28:01.397Z',
    'date_to': '2023-12-15T23:28:01.397Z',
    'destination': '1d5261f1-d69f-4b46-9c9f-18cd6fae13e1',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '3250b86b-66f2-4bd0-a3b3-153fe8903f01',
    'base_price': 6328,
    'date_from': '2023-12-15T23:28:01.397Z',
    'date_to': '2023-12-16T15:28:01.397Z',
    'destination': '1d5261f1-d69f-4b46-9c9f-18cd6fae13e1',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '67b33cdb-d9db-4519-8c80-ddcd56e0bf46',
    'base_price': 573,
    'date_from': '2023-12-16T15:28:01.397Z',
    'date_to': '2023-12-16T23:28:01.397Z',
    'destination': 'c2fc3868-4829-4ae9-afe5-eca4c1c26b7c',
    'is_favorite': false,
    'offers': [
      'd6898efb-e318-41ba-94ba-4ce2320fbd2a'
    ],
    'type': 'restaurant'
  }
];

export { Events };
