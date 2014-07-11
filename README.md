## Output Log

Notice how the presence events don't always fire "in order".

```
$ node server.js
Server UUID: 21bd1fd6-8f29-4666-888a-ea7b90bc3393
http://localhost:1337
SUBSCRIBE: game-9ed6f7c0-8191-4392-a285-439db364de10
PRESENCE:  a614129d-e8c3-4006-a685-34223fce78dc
{ action: 'join',
  timestamp: 1405113101,
  uuid: 'a614129d-e8c3-4006-a685-34223fce78dc',
  occupancy: 2 }
PRESENCE:  97eb24ac-5e23-46ed-a884-c1bc999f8a6f
{ action: 'join',
  timestamp: 1405113101,
  uuid: '97eb24ac-5e23-46ed-a884-c1bc999f8a6f',
  occupancy: 3 }
INIT GAME


PRESENCE:  3f230f00-5a18-48fd-a79c-a95c91bfc435
{ action: 'join',
  timestamp: 1405113103,
  uuid: '3f230f00-5a18-48fd-a79c-a95c91bfc435',
  occupancy: 4 }
PRESENCE:  1d9d289a-e071-4291-8a7e-1f4902151e38
{ action: 'join',
  timestamp: 1405113104,
  uuid: '1d9d289a-e071-4291-8a7e-1f4902151e38',
  occupancy: 5 }
INIT GAME


PRESENCE:  1fc4d7ed-eea8-4459-a3b6-4be360d342fb
{ action: 'join',
  timestamp: 1405113106,
  uuid: '1fc4d7ed-eea8-4459-a3b6-4be360d342fb',
  occupancy: 7 }
INIT GAME


PRESENCE:  9c9a5501-947c-4650-ad03-b495a07d5711
{ action: 'join',
  timestamp: 1405113106,
  uuid: '9c9a5501-947c-4650-ad03-b495a07d5711',
  occupancy: 6 }
PRESENCE:  22ecf428-6c4c-40e9-ad6a-c382cb04a864
{ action: 'join',
  timestamp: 1405113111,
  uuid: '22ecf428-6c4c-40e9-ad6a-c382cb04a864',
  occupancy: 8 }
PRESENCE:  94a65f67-d3aa-410d-b59e-15d68a1bf489
{ action: 'join',
  timestamp: 1405113112,
  uuid: '94a65f67-d3aa-410d-b59e-15d68a1bf489',
  occupancy: 9 }
INIT GAME


PRESENCE:  6f02fe8f-e862-4478-9a82-8d6667952e1e
{ action: 'join',
  timestamp: 1405113114,
  uuid: '6f02fe8f-e862-4478-9a82-8d6667952e1e',
  occupancy: 10 }
PRESENCE:  2aebe0ea-6336-4473-a348-69b6b668d7e9
{ action: 'join',
  timestamp: 1405113115,
  uuid: '2aebe0ea-6336-4473-a348-69b6b668d7e9',
  occupancy: 11 }
INIT GAME


PRESENCE:  a3c34ae0-20cb-4839-b5d9-d936359aafcd
{ action: 'join',
  timestamp: 1405113118,
  uuid: 'a3c34ae0-20cb-4839-b5d9-d936359aafcd',
  occupancy: 13 }
INIT GAME


PRESENCE:  0d003ba3-25b1-49c4-9d1c-50cc2fe0c66e
{ action: 'join',
  timestamp: 1405113118,
  uuid: '0d003ba3-25b1-49c4-9d1c-50cc2fe0c66e',
  occupancy: 12 }
PRESENCE:  bfbc6f65-1546-4947-9f92-921f57f98981
{ action: 'join',
  timestamp: 1405113121,
  uuid: 'bfbc6f65-1546-4947-9f92-921f57f98981',
  occupancy: 14 }
PRESENCE:  cb118dbe-d3db-43b0-83c6-819c1aea993a
{ action: 'join',
  timestamp: 1405113121,
  uuid: 'cb118dbe-d3db-43b0-83c6-819c1aea993a',
  occupancy: 15 }
INIT GAME


PRESENCE:  fa45cbc2-515e-4867-9430-17ff21301d40
{ action: 'join',
  timestamp: 1405113124,
  uuid: 'fa45cbc2-515e-4867-9430-17ff21301d40',
  occupancy: 17 }
INIT GAME


PRESENCE:  eebf0877-ebff-421a-b9d9-cb1cc415a7ae
{ action: 'join',
  timestamp: 1405113124,
  uuid: 'eebf0877-ebff-421a-b9d9-cb1cc415a7ae',
  occupancy: 16 }
```
