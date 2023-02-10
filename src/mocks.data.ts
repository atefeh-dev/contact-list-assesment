import { IContact } from "./redux/types";


export const mockClients = [
  {
      "name": {
          "title": "Mr",
          "first": "Jesse",
          "last": "Alexander"
      },
      "location": {
          "street": {
              "number": 3741,
              "name": "Pockrus Page Rd"
          },
          "city": "Princeton",
          "state": "Oregon",
          "country": "United States",
          "postcode": 80863,
          "coordinates": {
              "latitude": "-58.3612",
              "longitude": "-116.6311"
          },
          "timezone": {
              "offset": "+11:00",
              "description": "Magadan, Solomon Islands, New Caledonia"
          }
      },
      "email": "jesse.alexander@example.com",
      "login": {
          "uuid": "bc3e170e-2c5b-4bf1-8fe5-7c8cf2dfa758",
          "username": "purpleostrich183",
          "password": "owen",
          "salt": "NFXgmjXC",
          "md5": "5b2dd722781ed3b2752a1c1f91299d74",
          "sha1": "c6c47c317f11131b13cdbb8d833691645ec318ca",
          "sha256": "a0b479fb0a9d73e084ede582579768d4b549a99e0057732d3a11218adf47c974"
      },
      "phone": "(685) 816-2166",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/32.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "Sofia",
          "last": "Anderson"
      },
      "location": {
          "street": {
              "number": 4905,
              "name": "W Dallas St"
          },
          "city": "St. Louis",
          "state": "Iowa",
          "country": "United States",
          "postcode": 95000,
          "coordinates": {
              "latitude": "78.2116",
              "longitude": "148.5961"
          },
          "timezone": {
              "offset": "+5:30",
              "description": "Bombay, Calcutta, Madras, New Delhi"
          }
      },
      "email": "sofia.anderson@example.com",
      "login": {
          "uuid": "67d2d42a-4837-4161-8b82-d4d9d6c3c53d",
          "username": "goldensnake119",
          "password": "imagine",
          "salt": "ySnqsbYl",
          "md5": "7a639064db6c0222f0ae12a613f44900",
          "sha1": "7b0feda36de92fb3cbc661e7b430e6a45b904951",
          "sha256": "25450bfd2d4c55fed171e2ac9da9a6190a33fd50cc4c8f3ba2a3739e7569b493"
      },
      "phone": "(498) 745-1479",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/53.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Dan",
          "last": "Brown"
      },
      "location": {
          "street": {
              "number": 1595,
              "name": "Spring Hill Rd"
          },
          "city": "Cary",
          "state": "Oregon",
          "country": "United States",
          "postcode": 13975,
          "coordinates": {
              "latitude": "-76.3680",
              "longitude": "10.6702"
          },
          "timezone": {
              "offset": "+10:00",
              "description": "Eastern Australia, Guam, Vladivostok"
          }
      },
      "email": "dan.brown@example.com",
      "login": {
          "uuid": "8e9da87c-eb6b-4ac7-8ff0-5c3cb431f2c2",
          "username": "bigdog237",
          "password": "neutron",
          "salt": "Gnkt3Hd0",
          "md5": "1cf56725e0eca1a7805a02de27ee7841",
          "sha1": "477510295e8e975d8b5ce51c029a47a30a3a78c8",
          "sha256": "4ad6ac0e25c4e2f0315cc33613843c0cbba8b72fd89bfddfe7153e016fed9be8"
      },
      "phone": "(527) 649-3610",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/5.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Hazel",
          "last": "Banks"
      },
      "location": {
          "street": {
              "number": 2209,
              "name": "W Gray St"
          },
          "city": "Fullerton",
          "state": "Wisconsin",
          "country": "United States",
          "postcode": 73253,
          "coordinates": {
              "latitude": "11.0352",
              "longitude": "79.2905"
          },
          "timezone": {
              "offset": "+10:00",
              "description": "Eastern Australia, Guam, Vladivostok"
          }
      },
      "email": "hazel.banks@example.com",
      "login": {
          "uuid": "181b075e-2462-4fbe-98cb-67de769a4dd4",
          "username": "silverswan140",
          "password": "chance",
          "salt": "1fiPSfEJ",
          "md5": "8829f9c177e6b910a9a575d91ee9441b",
          "sha1": "10d693e813d6ea6984c327905df506c6b7a9a141",
          "sha256": "67d468ec42b6ac410865c7da400dffca46443fcfe5ad7e236debc858826aa7e2"
      },
      "phone": "(762) 340-1210",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/75.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "Lucille",
          "last": "Cooper"
      },
      "location": {
          "street": {
              "number": 2683,
              "name": "Westheimer Rd"
          },
          "city": "Fort Wayne",
          "state": "Missouri",
          "country": "United States",
          "postcode": 20246,
          "coordinates": {
              "latitude": "-2.7916",
              "longitude": "-82.8239"
          },
          "timezone": {
              "offset": "+10:00",
              "description": "Eastern Australia, Guam, Vladivostok"
          }
      },
      "email": "lucille.cooper@example.com",
      "login": {
          "uuid": "5783658e-ce9c-4926-815e-57d29588e3eb",
          "username": "orangeduck911",
          "password": "1111",
          "salt": "3zscW8D2",
          "md5": "026971f2cec32a46202db8d475b197c1",
          "sha1": "1cb488183aaa42dbd28212d4fb30baa43ea1c669",
          "sha256": "d7aa9c5e817fdc69baf61e7b98f46001f3e503edf2f72b0c59dd4f905af8b729"
      },
      "phone": "(449) 953-9806",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/58.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Rose",
          "last": "Clark"
      },
      "location": {
          "street": {
              "number": 4429,
              "name": "Ash Dr"
          },
          "city": "Fremont",
          "state": "Massachusetts",
          "country": "United States",
          "postcode": 83955,
          "coordinates": {
              "latitude": "-50.8315",
              "longitude": "106.8367"
          },
          "timezone": {
              "offset": "-4:00",
              "description": "Atlantic Time (Canada), Caracas, La Paz"
          }
      },
      "email": "rose.clark@example.com",
      "login": {
          "uuid": "b5191c37-0699-4296-abef-3006665babf0",
          "username": "sadkoala306",
          "password": "coolness",
          "salt": "G2Z3TsVL",
          "md5": "88c6aa4a7ac0c67c7648d4b129123687",
          "sha1": "3b6d1f46a757e1bdafd6eb4a7a96a3a87bb98b94",
          "sha256": "c0cae6d15537676cbb3daf63395054456c2f8710117f30781053176931512e17"
      },
      "phone": "(508) 395-8815",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/16.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "Priscilla",
          "last": "Dixon"
      },
      "location": {
          "street": {
              "number": 3181,
              "name": "N Stelling Rd"
          },
          "city": "Red Oak",
          "state": "Virginia",
          "country": "United States",
          "postcode": 69102,
          "coordinates": {
              "latitude": "-4.8357",
              "longitude": "38.5193"
          },
          "timezone": {
              "offset": "+5:30",
              "description": "Bombay, Calcutta, Madras, New Delhi"
          }
      },
      "email": "priscilla.dixon@example.com",
      "login": {
          "uuid": "6baf6ffd-ca80-4491-b26a-b5e2481d479e",
          "username": "lazygoose257",
          "password": "blonde",
          "salt": "ojExMsOl",
          "md5": "d9871925bc80787838a381d3faf229b2",
          "sha1": "4305210361b3f689708f4ca56f0e19396d7feb11",
          "sha256": "5f5b41d2562554e7a3f28639d1271bc9d12df8056f3e161c896ac96b538aab62"
      },
      "phone": "(263) 510-4827",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/71.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Kristen",
          "last": "Davis"
      },
      "location": {
          "street": {
              "number": 2537,
              "name": "Northaven Rd"
          },
          "city": "Birmingham",
          "state": "Wyoming",
          "country": "United States",
          "postcode": 50525,
          "coordinates": {
              "latitude": "31.3273",
              "longitude": "-73.6539"
          },
          "timezone": {
              "offset": "-4:00",
              "description": "Atlantic Time (Canada), Caracas, La Paz"
          }
      },
      "email": "kristen.davis@example.com",
      "login": {
          "uuid": "3fb9c1ac-56a5-4a33-9569-070567425c62",
          "username": "blueostrich398",
          "password": "recon",
          "salt": "Xi2hCx4o",
          "md5": "6755dbeab09c9a47a0833f93431400d0",
          "sha1": "1530dc308f7d01134507b193c362e3fe6294a676",
          "sha256": "d49eb0092a08435efd0c066ca3723eb5c6d6cbd22c4ee350e95225d26c5ce7de"
      },
      "phone": "(587) 683-9987",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/5.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Eileen",
          "last": "Evans"
      },
      "location": {
          "street": {
              "number": 409,
              "name": "Dogwood Ave"
          },
          "city": "West Covina",
          "state": "Wyoming",
          "country": "United States",
          "postcode": 40011,
          "coordinates": {
              "latitude": "-77.4252",
              "longitude": "-79.8915"
          },
          "timezone": {
              "offset": "+8:00",
              "description": "Beijing, Perth, Singapore, Hong Kong"
          }
      },
      "email": "eileen.evans@example.com",
      "login": {
          "uuid": "48001c7b-d60d-4d8b-a067-7f4d8b299821",
          "username": "yellowmouse177",
          "password": "biggie",
          "salt": "EM1SytIB",
          "md5": "41936999346f225e53f74f9ca42870c3",
          "sha1": "4a0a6b9033c11f43c32c4e5219e04369b945cc1d",
          "sha256": "54acc51985081eac1654d39ccf22698ee4c5f8cb6a131df198a015149303d32a"
      },
      "phone": "(203) 206-2774",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/3.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Jayden",
          "last": "Frazier"
      },
      "location": {
          "street": {
              "number": 3699,
              "name": "Smokey Ln"
          },
          "city": "Green Bay",
          "state": "Florida",
          "country": "United States",
          "postcode": 98972,
          "coordinates": {
              "latitude": "-13.0533",
              "longitude": "88.0982"
          },
          "timezone": {
              "offset": "-8:00",
              "description": "Pacific Time (US & Canada)"
          }
      },
      "email": "jayden.frazier@example.com",
      "login": {
          "uuid": "9bac2c65-164e-44e7-b640-c514cf20d942",
          "username": "redpeacock664",
          "password": "adam12",
          "salt": "S4AyZWT2",
          "md5": "1dc1a6ec28d5cc173b612e77cd78281e",
          "sha1": "7a36d165700be638eef39f4988ec0e9d330fd445",
          "sha256": "e096327a6e309f7ab7236361d551f5d4518fc5bfbb92a1447516a327b4b24301"
      },
      "phone": "(444) 930-6190",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/72.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Landon",
          "last": "Foster"
      },
      "location": {
          "street": {
              "number": 273,
              "name": "Poplar Dr"
          },
          "city": "Boise",
          "state": "Missouri",
          "country": "United States",
          "postcode": 88990,
          "coordinates": {
              "latitude": "-47.6856",
              "longitude": "92.0807"
          },
          "timezone": {
              "offset": "-3:00",
              "description": "Brazil, Buenos Aires, Georgetown"
          }
      },
      "email": "landon.foster@example.com",
      "login": {
          "uuid": "dc896602-176a-4c9a-b4d6-28fd31a8f528",
          "username": "browncat960",
          "password": "opendoor",
          "salt": "sKR6mrtw",
          "md5": "54089bd35b15075972d60514762ce824",
          "sha1": "3cd7729d96b804492f6418e195ee32d23c28da37",
          "sha256": "6d254e4a51d10a0190ec77d36bfac4fec67745e986be45e2033792e2739b3e6a"
      },
      "phone": "(968) 963-9640",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/57.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Mildred",
          "last": "Green"
      },
      "location": {
          "street": {
              "number": 3507,
              "name": "Thornridge Cir"
          },
          "city": "Roanoke",
          "state": "New Mexico",
          "country": "United States",
          "postcode": 53950,
          "coordinates": {
              "latitude": "38.3684",
              "longitude": "131.5351"
          },
          "timezone": {
              "offset": "-8:00",
              "description": "Pacific Time (US & Canada)"
          }
      },
      "email": "mildred.green@example.com",
      "login": {
          "uuid": "601347fd-9dd7-4e1b-924f-4f571e640cf7",
          "username": "whiteladybug121",
          "password": "niao",
          "salt": "QRzjI4nL",
          "md5": "663c2020b16f0d22ea0bf637cfd6baa0",
          "sha1": "3c3810d512339e9d44488ec766f3f85ce0b02188",
          "sha256": "95be3e619763d777080d10abcdd33ff048dd82b993b2e946b1e75d85bdea00ec"
      },
      "phone": "(935) 721-5088",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/62.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Katrina",
          "last": "Gonzalez"
      },
      "location": {
          "street": {
              "number": 48,
              "name": "Walnut Hill Ln"
          },
          "city": "Fort Wayne",
          "state": "Pennsylvania",
          "country": "United States",
          "postcode": 22807,
          "coordinates": {
              "latitude": "-47.8331",
              "longitude": "127.3052"
          },
          "timezone": {
              "offset": "-5:00",
              "description": "Eastern Time (US & Canada), Bogota, Lima"
          }
      },
      "email": "katrina.gonzalez@example.com",
      "login": {
          "uuid": "618d584c-ef44-4c22-a21a-96cbfd1deb79",
          "username": "bigbutterfly834",
          "password": "groups",
          "salt": "k89Z2W04",
          "md5": "78c18cc5506af12430438c23098ecb00",
          "sha1": "1f1781e0fa0151c4a3811ba75c5d6883eace29c4",
          "sha256": "15c06701b1b6377d40c492cbc71294b1f692e5ff800abc0e1fff80369a9b95b3"
      },
      "phone": "(486) 656-1181",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/8.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Evelyn",
          "last": "Hughes"
      },
      "location": {
          "street": {
              "number": 8339,
              "name": "Prospect Rd"
          },
          "city": "Redding",
          "state": "Illinois",
          "country": "United States",
          "postcode": 39405,
          "coordinates": {
              "latitude": "-37.2836",
              "longitude": "55.9972"
          },
          "timezone": {
              "offset": "+4:00",
              "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
          }
      },
      "email": "evelyn.hughes@example.com",
      "login": {
          "uuid": "32752afb-1a57-4206-a3bd-d5fc30521232",
          "username": "redrabbit403",
          "password": "stocks",
          "salt": "QYzuRjgj",
          "md5": "70547219175559fa8c5156d22e09dd23",
          "sha1": "a52a6d76d5035546de5a4737233650b75763ec6c",
          "sha256": "4adb4117727246e4c613f9efb7fa45e41a28c39fe4af6c511422a1cd134d67b8"
      },
      "phone": "(445) 343-5978",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/26.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Tracey",
          "last": "Hunter"
      },
      "location": {
          "street": {
              "number": 1159,
              "name": "Parker Rd"
          },
          "city": "Garden Grove",
          "state": "Illinois",
          "country": "United States",
          "postcode": 47471,
          "coordinates": {
              "latitude": "77.4104",
              "longitude": "26.2122"
          },
          "timezone": {
              "offset": "+5:30",
              "description": "Bombay, Calcutta, Madras, New Delhi"
          }
      },
      "email": "tracey.hunter@example.com",
      "login": {
          "uuid": "5047f8a4-d57a-4ada-b35b-d65b212dac5e",
          "username": "happyleopard324",
          "password": "geng",
          "salt": "EajYP2WM",
          "md5": "c8b421db140de56f8192938bd843ee5c",
          "sha1": "4b5771b1d8a0b7adef48bdc865d1e4b58bd281e1",
          "sha256": "46e1f7357d3f67949e7450005ce61d96705a503be7aa3469124b432347d91e9a"
      },
      "phone": "(399) 557-8401",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/95.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/95.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/95.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Andrea",
          "last": "Jimenez"
      },
      "location": {
          "street": {
              "number": 6958,
              "name": "Country Club Rd"
          },
          "city": "Cary",
          "state": "Massachusetts",
          "country": "United States",
          "postcode": 98755,
          "coordinates": {
              "latitude": "-33.3276",
              "longitude": "157.1895"
          },
          "timezone": {
              "offset": "+1:00",
              "description": "Brussels, Copenhagen, Madrid, Paris"
          }
      },
      "email": "andrea.jimenez@example.com",
      "login": {
          "uuid": "4bdd8333-e625-4276-a335-33a0b717f799",
          "username": "crazyzebra545",
          "password": "mybaby",
          "salt": "h845XeYl",
          "md5": "544fc4da881b9b5a06e765b73e223fb3",
          "sha1": "e38accac8000375eed0793970bb7bc7202ab1d3c",
          "sha256": "5c38b54a2b401b4a5fd13a1c6e18fd2653fb5562777b09570a026551cc93ffce"
      },
      "phone": "(777) 729-1693",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/56.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/56.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/56.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "Gail",
          "last": "Jones"
      },
      "location": {
          "street": {
              "number": 5123,
              "name": "Rolling Green Rd"
          },
          "city": "Lewisville",
          "state": "Delaware",
          "country": "United States",
          "postcode": 54157,
          "coordinates": {
              "latitude": "56.6361",
              "longitude": "54.4732"
          },
          "timezone": {
              "offset": "+5:00",
              "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
          }
      },
      "email": "gail.jones@example.com",
      "login": {
          "uuid": "177d9aa0-03e2-4f40-ba22-c76270254f0b",
          "username": "smallsnake107",
          "password": "enrico",
          "salt": "9KGpqi27",
          "md5": "24ef4d5493c7f098121d5534992953a8",
          "sha1": "46d53cffaea7c8ed3d0cb6e3a7cd62e42cb0f48f",
          "sha256": "2892d304d13ba1ff01e8efbe00898f7903060b4a29aeff461bb8609de9c7b2b8"
      },
      "phone": "(755) 979-5645",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/44.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Barry",
          "last": "Kuhn"
      },
      "location": {
          "street": {
              "number": 3521,
              "name": "N Stelling Rd"
          },
          "city": "Edgewood",
          "state": "Rhode Island",
          "country": "United States",
          "postcode": 93704,
          "coordinates": {
              "latitude": "64.0414",
              "longitude": "-176.9581"
          },
          "timezone": {
              "offset": "+8:00",
              "description": "Beijing, Perth, Singapore, Hong Kong"
          }
      },
      "email": "barry.kuhn@example.com",
      "login": {
          "uuid": "83ebd957-fe85-4ed0-a72e-c6b30536b373",
          "username": "purplemeercat475",
          "password": "ashley1",
          "salt": "8qsXjk4i",
          "md5": "018a413ac6339b4da9f90ab7bebdbbde",
          "sha1": "8350cbed455ddeac86045deffdd4b489cd357c4a",
          "sha256": "d5b789ed0babed8ce9e9a0bacb80e42c5618093e16d029efb164dcd98bbcb6c9"
      },
      "phone": "(808) 974-5373",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/95.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "June",
          "last": "Kuhn"
      },
      "location": {
          "street": {
              "number": 1465,
              "name": "Poplar Dr"
          },
          "city": "Eugene",
          "state": "Nebraska",
          "country": "United States",
          "postcode": 29049,
          "coordinates": {
              "latitude": "3.0826",
              "longitude": "-66.0863"
          },
          "timezone": {
              "offset": "-5:00",
              "description": "Eastern Time (US & Canada), Bogota, Lima"
          }
      },
      "email": "june.kuhn@example.com",
      "login": {
          "uuid": "a40f5c22-ffdd-4cfe-a11d-fd15da99a23d",
          "username": "brownduck262",
          "password": "graham",
          "salt": "aiFtsDSd",
          "md5": "0ed02a0f1c98910cac6a0fef453268ae",
          "sha1": "9f6dac35868ce2a0ecef22a501ae31b01a76c4e4",
          "sha256": "3153923d3ebec11f96a8ccf65ac5ad49bde1c56db21d33052e7c87b3a52644e5"
      },
      "phone": "(887) 269-4630",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/91.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Kyle",
          "last": "Lopez"
      },
      "location": {
          "street": {
              "number": 8580,
              "name": "Hunters Creek Dr"
          },
          "city": "Glendale",
          "state": "Maine",
          "country": "United States",
          "postcode": 86367,
          "coordinates": {
              "latitude": "44.9925",
              "longitude": "131.6497"
          },
          "timezone": {
              "offset": "+4:30",
              "description": "Kabul"
          }
      },
      "email": "kyle.lopez@example.com",
      "login": {
          "uuid": "9655a5ff-d20a-4740-a8c4-ccf948ef9c67",
          "username": "sadmeercat273",
          "password": "horizon",
          "salt": "BWxWglj9",
          "md5": "80c54e8a0acce704831a74f1ed01e4a5",
          "sha1": "5bf8f8d776eed9fb79a9fdb420915150d981c29e",
          "sha256": "3581e1f8dd717571fadb6132aa99c4deaa753d6e2f4ddd086a2119aeeb03a9c4"
      },
      "phone": "(276) 968-3178",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/96.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Serenity",
          "last": "Lowe"
      },
      "location": {
          "street": {
              "number": 2439,
              "name": "Woodland St"
          },
          "city": "Clarksville",
          "state": "Vermont",
          "country": "United States",
          "postcode": 89643,
          "coordinates": {
              "latitude": "-49.8129",
              "longitude": "113.7675"
          },
          "timezone": {
              "offset": "+11:00",
              "description": "Magadan, Solomon Islands, New Caledonia"
          }
      },
      "email": "serenity.lowe@example.com",
      "login": {
          "uuid": "1fca3502-6225-4e17-8274-0ff61c7a8928",
          "username": "angrydog720",
          "password": "oceans",
          "salt": "x2EHAJke",
          "md5": "8364535ffa9d38c707a172a0c1e8cd62",
          "sha1": "22d2246e98e80a3217d4b35ec14a305cdd921381",
          "sha256": "1f4131f4c797512cc4d461a8b44ab1f2c48fc1cc349d11841426e77121e593ea"
      },
      "phone": "(482) 210-2513",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/34.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Brittany",
          "last": "Medina"
      },
      "location": {
          "street": {
              "number": 5072,
              "name": "W Pecan St"
          },
          "city": "Davenport",
          "state": "Virginia",
          "country": "United States",
          "postcode": 73422,
          "coordinates": {
              "latitude": "49.9156",
              "longitude": "115.1691"
          },
          "timezone": {
              "offset": "+3:00",
              "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
          }
      },
      "email": "brittany.medina@example.com",
      "login": {
          "uuid": "597973be-dd63-45d4-bd61-37d38d181778",
          "username": "organicleopard928",
          "password": "fishy",
          "salt": "emznqDmR",
          "md5": "0579054cf054bf493b07b1c34db817ad",
          "sha1": "2806df71f4b265efebbaf969776990d92318213d",
          "sha256": "6bc35919fbde44c7219537bbb9a3070c9baa44c88f349a9f95c84ce447ad20af"
      },
      "phone": "(215) 596-7729",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/34.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Ramon",
          "last": "May"
      },
      "location": {
          "street": {
              "number": 3516,
              "name": "E Center St"
          },
          "city": "Rancho Cucamonga",
          "state": "New Jersey",
          "country": "United States",
          "postcode": 95115,
          "coordinates": {
              "latitude": "43.7127",
              "longitude": "128.1675"
          },
          "timezone": {
              "offset": "-1:00",
              "description": "Azores, Cape Verde Islands"
          }
      },
      "email": "ramon.may@example.com",
      "login": {
          "uuid": "0accaa33-6023-4212-ab53-ff11ebd2c8ac",
          "username": "orangecat323",
          "password": "test",
          "salt": "6knimovb",
          "md5": "ab2fe6217d2c5df494e7b262eadd3b5a",
          "sha1": "d45bd56d437bee69362ea0d7292a4cb187618b3e",
          "sha256": "a9ae1b901dee11428b81eff2042ad729bbe6af3f85c00ca6bd77ce4088da6990"
      },
      "phone": "(980) 367-0740",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/78.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Neil",
          "last": "Nelson"
      },
      "location": {
          "street": {
              "number": 2438,
              "name": "Paddock Way"
          },
          "city": "Allentown",
          "state": "North Carolina",
          "country": "United States",
          "postcode": 94392,
          "coordinates": {
              "latitude": "-44.5315",
              "longitude": "-74.7210"
          },
          "timezone": {
              "offset": "-10:00",
              "description": "Hawaii"
          }
      },
      "email": "neil.nelson@example.com",
      "login": {
          "uuid": "316d3fb5-695a-4125-b8ae-ef537b9eb327",
          "username": "ticklishwolf437",
          "password": "downer",
          "salt": "nkXyibpR",
          "md5": "3fc23ccb36aa0d19316bcbbf94d9cefe",
          "sha1": "f0b80fc1920e8709ce250647544b8b730e0af6b0",
          "sha256": "a438ca84a347a90c6cf73c67fc112a638cb29b2e041261921549c097f6e8ada8"
      },
      "phone": "(706) 728-7039",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/44.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Mario",
          "last": "Neal"
      },
      "location": {
          "street": {
              "number": 9853,
              "name": "Fincher Rd"
          },
          "city": "Lewisville",
          "state": "Nevada",
          "country": "United States",
          "postcode": 99914,
          "coordinates": {
              "latitude": "22.3047",
              "longitude": "-113.6696"
          },
          "timezone": {
              "offset": "+5:00",
              "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
          }
      },
      "email": "mario.neal@example.com",
      "login": {
          "uuid": "286fbe51-0fe4-4e82-8dc7-7a087c4435da",
          "username": "brownpeacock250",
          "password": "keegan",
          "salt": "bqRAw7l6",
          "md5": "30a151a9a6a0f6dfb8bcbfaa40843d46",
          "sha1": "0759442266b1423d361e80ff567e5f5a1026a6b1",
          "sha256": "2fede2557c414075cea73d756434942cef823cb618090be64639d360b5b1aa6b"
      },
      "phone": "(920) 681-6799",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/47.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Eduardo",
          "last": "Ortiz"
      },
      "location": {
          "street": {
              "number": 8667,
              "name": "Hickory Creek Dr"
          },
          "city": "Colorado Springs",
          "state": "Georgia",
          "country": "United States",
          "postcode": 35283,
          "coordinates": {
              "latitude": "-85.3322",
              "longitude": "-110.2581"
          },
          "timezone": {
              "offset": "-2:00",
              "description": "Mid-Atlantic"
          }
      },
      "email": "eduardo.ortiz@example.com",
      "login": {
          "uuid": "6a000c3c-b50b-4bab-a26e-af14b2b6a11d",
          "username": "whitepanda512",
          "password": "dabomb",
          "salt": "17XYNNg9",
          "md5": "e82801eb1c0abb7e393b08cfa23885cb",
          "sha1": "89f14834f1dc86526bec4591a88d38839dec823f",
          "sha256": "dcfb0ffe2099ef9be2d201c10817a826a155d295fad62fc1c6b521be4ac177f9"
      },
      "phone": "(720) 310-7911",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/8.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Tiffany",
          "last": "Ortiz"
      },
      "location": {
          "street": {
              "number": 5313,
              "name": "Marsh Ln"
          },
          "city": "Mesquite",
          "state": "Ohio",
          "country": "United States",
          "postcode": 51133,
          "coordinates": {
              "latitude": "59.4190",
              "longitude": "32.3227"
          },
          "timezone": {
              "offset": "+2:00",
              "description": "Kaliningrad, South Africa"
          }
      },
      "email": "tiffany.ortiz@example.com",
      "login": {
          "uuid": "d3a419a3-1965-4261-b152-4a6d5324dfcd",
          "username": "bigladybug120",
          "password": "burton",
          "salt": "2lG4cjSX",
          "md5": "c32b6b9566274e28928477668799c1f3",
          "sha1": "7166128db3e8c23ff12fed982f68a3f13b5821d0",
          "sha256": "d99f25d342f028c160b1e93d61fa43fb1c9615893f5f2bd0caa2d6d50789b79a"
      },
      "phone": "(430) 977-1920",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/36.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Jill",
          "last": "Pena"
      },
      "location": {
          "street": {
              "number": 8306,
              "name": "Sunset St"
          },
          "city": "Eugene",
          "state": "Georgia",
          "country": "United States",
          "postcode": 32399,
          "coordinates": {
              "latitude": "57.6025",
              "longitude": "-167.4887"
          },
          "timezone": {
              "offset": "-5:00",
              "description": "Eastern Time (US & Canada), Bogota, Lima"
          }
      },
      "email": "jill.pena@example.com",
      "login": {
          "uuid": "882e6df5-1a79-47aa-8dc4-235735957042",
          "username": "blackbird576",
          "password": "daman",
          "salt": "vBntJvDc",
          "md5": "38698633804c6ac415e76b9f73e2dd11",
          "sha1": "6f9158be97bc4a5b98b81f3f1e8556c69da70bc2",
          "sha256": "382e02e3c40ced507aa53fa43e6b22b746788d935eefeed61e48b4e9d37ef69b"
      },
      "phone": "(865) 578-6366",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/57.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "Jacqueline",
          "last": "Palmer"
      },
      "location": {
          "street": {
              "number": 8452,
              "name": "Harrison Ct"
          },
          "city": "Frisco",
          "state": "Michigan",
          "country": "United States",
          "postcode": 25967,
          "coordinates": {
              "latitude": "75.5812",
              "longitude": "-119.9069"
          },
          "timezone": {
              "offset": "-9:00",
              "description": "Alaska"
          }
      },
      "email": "jacqueline.palmer@example.com",
      "login": {
          "uuid": "323350e8-2378-4ced-83ab-0c603c9b2a9b",
          "username": "greenpeacock508",
          "password": "snowflak",
          "salt": "fClStgtW",
          "md5": "1232b8756d8846a0f41fc05e3896fc04",
          "sha1": "4b778a3bb26969ca799177b13993d114288f4512",
          "sha256": "f2a9a4a4a9488e55c88903ef81a653276db4527c56b96c04a31132babbab2915"
      },
      "phone": "(608) 922-3037",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/88.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Wade",
          "last": "Riley"
      },
      "location": {
          "street": {
              "number": 7032,
              "name": "Pockrus Page Rd"
          },
          "city": "Norman",
          "state": "Louisiana",
          "country": "United States",
          "postcode": 88874,
          "coordinates": {
              "latitude": "-77.9440",
              "longitude": "-104.3385"
          },
          "timezone": {
              "offset": "-10:00",
              "description": "Hawaii"
          }
      },
      "email": "wade.riley@example.com",
      "login": {
          "uuid": "fc1ba95e-bf63-48e0-a117-3f54515770f2",
          "username": "beautifulkoala288",
          "password": "athlon",
          "salt": "R7xpG4di",
          "md5": "c4201388b343da40c26aeada8a3b35b2",
          "sha1": "81383c50f91b5a7c27fa01d73df90da3d12ba130",
          "sha256": "3c3efda6a2a1af5c132757c532c897ff40bc9fe82376b8d747c9b65ca43a741e"
      },
      "phone": "(403) 540-9180",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/27.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Bryan",
          "last": "Robinson"
      },
      "location": {
          "street": {
              "number": 3732,
              "name": "Plum St"
          },
          "city": "Irvine",
          "state": "New Mexico",
          "country": "United States",
          "postcode": 50294,
          "coordinates": {
              "latitude": "-21.1811",
              "longitude": "33.0767"
          },
          "timezone": {
              "offset": "+7:00",
              "description": "Bangkok, Hanoi, Jakarta"
          }
      },
      "email": "bryan.robinson@example.com",
      "login": {
          "uuid": "6c44e89e-8ec2-471e-aec3-5b58bea32769",
          "username": "crazypanda838",
          "password": "slipknot",
          "salt": "nU63Zyou",
          "md5": "e3260c940bbdadd475a8266b1e544acb",
          "sha1": "2e69392a537f498587782a820c039fd8095e7b29",
          "sha256": "b870188f4ac30a385070a55493257aa2161a2cb567ffd17589c4fd36510d165b"
      },
      "phone": "(581) 680-5144",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/18.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Alan",
          "last": "Schmidt"
      },
      "location": {
          "street": {
              "number": 2342,
              "name": "Spring St"
          },
          "city": "Jersey City",
          "state": "Virginia",
          "country": "United States",
          "postcode": 71495,
          "coordinates": {
              "latitude": "37.6037",
              "longitude": "-31.1473"
          },
          "timezone": {
              "offset": "+2:00",
              "description": "Kaliningrad, South Africa"
          }
      },
      "email": "alan.schmidt@example.com",
      "login": {
          "uuid": "29e39af7-069a-4e58-b319-1edf7e1bb3e8",
          "username": "happybutterfly818",
          "password": "tech",
          "salt": "Ie0nbWIx",
          "md5": "a3aa4e1f447197ad6dc44af4bd473a1c",
          "sha1": "aea2ff7152038282bdbda6e60e9112a247a24b25",
          "sha256": "a7f69a7a94683c06cc6c25bdd07b2f875b27ffa62e1e1714e5f857986d72cd00"
      },
      "phone": "(472) 456-8850",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/35.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Tony",
          "last": "Sutton"
      },
      "location": {
          "street": {
              "number": 2381,
              "name": "Walnut Hill Ln"
          },
          "city": "Tulsa",
          "state": "Minnesota",
          "country": "United States",
          "postcode": 82288,
          "coordinates": {
              "latitude": "-25.3560",
              "longitude": "97.6783"
          },
          "timezone": {
              "offset": "+7:00",
              "description": "Bangkok, Hanoi, Jakarta"
          }
      },
      "email": "tony.sutton@example.com",
      "login": {
          "uuid": "6c3aa101-7392-4860-bf3e-5fbd12ab1793",
          "username": "orangefish282",
          "password": "bian",
          "salt": "LxJ0Wmm3",
          "md5": "bfa94067a2ad2f4f13693b26089a98ce",
          "sha1": "4ca95a8ee86dd10459bd0eff3916eb925938960e",
          "sha256": "ddb1fea11560a1e194e29f2a46975bc7dfeb5fcc2cafccfcc03060d2ec8df1d2"
      },
      "phone": "(997) 323-6101",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/42.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "Ellen",
          "last": "Taylor"
      },
      "location": {
          "street": {
              "number": 6971,
              "name": "Royal Ln"
          },
          "city": "Addison",
          "state": "Oklahoma",
          "country": "United States",
          "postcode": 91441,
          "coordinates": {
              "latitude": "11.8726",
              "longitude": "68.0049"
          },
          "timezone": {
              "offset": "-1:00",
              "description": "Azores, Cape Verde Islands"
          }
      },
      "email": "ellen.taylor@example.com",
      "login": {
          "uuid": "739be4df-c9f0-4573-9288-7d5f900daabc",
          "username": "lazyswan282",
          "password": "dome",
          "salt": "hrDIUGxI",
          "md5": "dcc8ec2827eb925f867dfc41e25b8768",
          "sha1": "f1618158340b8a75ef20e135e1768cbd8cd765f4",
          "sha256": "ea446437005aca66b2da5d10c839ff323d9d5ba9c9d3b111d29aa0e2e69e24ef"
      },
      "phone": "(500) 552-8097",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/25.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
      }
  },
  {
      "name": {
          "title": "Miss",
          "first": "Dolores",
          "last": "Taylor"
      },
      "location": {
          "street": {
              "number": 5166,
              "name": "Hamilton Ave"
          },
          "city": "Helena",
          "state": "Iowa",
          "country": "United States",
          "postcode": 10460,
          "coordinates": {
              "latitude": "-20.3050",
              "longitude": "-130.6007"
          },
          "timezone": {
              "offset": "-12:00",
              "description": "Eniwetok, Kwajalein"
          }
      },
      "email": "dolores.taylor@example.com",
      "login": {
          "uuid": "ecd73281-0144-473d-b12d-e5f7b967a006",
          "username": "blackpanda565",
          "password": "elliot",
          "salt": "HBWwTLKm",
          "md5": "9b7cbc39919caf906923ec926bf0156f",
          "sha1": "9fec529cb4a42c71b001857619ab68ef22378414",
          "sha256": "178f06a8300f229cbdf5d0b5557d9b2c747d6d90ce4e08d9a60f73aa0b4c30fe"
      },
      "phone": "(410) 979-7325",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/69.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
      }
  },
  {
      "name": {
          "title": "Mr",
          "first": "Tony",
          "last": "Vasquez"
      },
      "location": {
          "street": {
              "number": 4473,
              "name": "Valwood Pkwy"
          },
          "city": "College Station",
          "state": "Tennessee",
          "country": "United States",
          "postcode": 37951,
          "coordinates": {
              "latitude": "-27.1489",
              "longitude": "-55.4893"
          },
          "timezone": {
              "offset": "-1:00",
              "description": "Azores, Cape Verde Islands"
          }
      },
      "email": "tony.vasquez@example.com",
      "login": {
          "uuid": "62173b51-4cd6-4b79-9e90-df34515b7abb",
          "username": "lazypanda574",
          "password": "audrey",
          "salt": "iQqGnDex",
          "md5": "46d46d5a250a558a465c8a78e229e287",
          "sha1": "7290a3c03e9d906aa1287ee7f99eaa7d5e4c524f",
          "sha256": "cf7113874b21133aa40097b473d2f6d7e5fcfe31a9e2fcf05530686def2c9c7e"
      },
      "phone": "(868) 582-8318",
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/27.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Marie",
          "last": "Vargas"
      },
      "location": {
          "street": {
              "number": 2753,
              "name": "Karen Dr"
          },
          "city": "Wichita",
          "state": "Delaware",
          "country": "United States",
          "postcode": 14824,
          "coordinates": {
              "latitude": "42.8856",
              "longitude": "77.1943"
          },
          "timezone": {
              "offset": "+1:00",
              "description": "Brussels, Copenhagen, Madrid, Paris"
          }
      },
      "email": "marie.vargas@example.com",
      "login": {
          "uuid": "2e575336-caa5-4404-86e8-a7984a9a5f40",
          "username": "beautifulpanda532",
          "password": "1023",
          "salt": "RxEV0gQT",
          "md5": "ff38b1d62e4aafa74f70d64ba4e1bd10",
          "sha1": "3d6b341789152d2ccafb3e59b5eb29298f1b7144",
          "sha256": "f4a1fb450bc2d02b9c1e43e610af020a451f054f45ea04d53a35f08f1caad3da"
      },
      "phone": "(735) 507-3787",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/73.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Heidi",
          "last": "Webb"
      },
      "location": {
          "street": {
              "number": 7612,
              "name": "Pockrus Page Rd"
          },
          "city": "Lousville",
          "state": "Arkansas",
          "country": "United States",
          "postcode": 35898,
          "coordinates": {
              "latitude": "42.0016",
              "longitude": "-164.0961"
          },
          "timezone": {
              "offset": "+8:00",
              "description": "Beijing, Perth, Singapore, Hong Kong"
          }
      },
      "email": "heidi.webb@example.com",
      "login": {
          "uuid": "8325e80f-a122-4b40-b3c8-7f5a3065ec33",
          "username": "bluefish593",
          "password": "tongue",
          "salt": "MgmlANTw",
          "md5": "a3919a8d190257dbf975f93c3c9e0564",
          "sha1": "7fb783eb3602facc6937b4cdd97183f4360bcfc7",
          "sha256": "36cb3b674184a343708f7a5c3e9fcd251e67ff04953a421d7b701b0a2e9f3035"
      },
      "phone": "(569) 553-7228",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/29.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
      }
  },
  {
      "name": {
          "title": "Mrs",
          "first": "Gail",
          "last": "Williams"
      },
      "location": {
          "street": {
              "number": 552,
              "name": "W Pecan St"
          },
          "city": "Jersey City",
          "state": "Montana",
          "country": "United States",
          "postcode": 79451,
          "coordinates": {
              "latitude": "67.3544",
              "longitude": "81.9067"
          },
          "timezone": {
              "offset": "+1:00",
              "description": "Brussels, Copenhagen, Madrid, Paris"
          }
      },
      "email": "gail.williams@example.com",
      "login": {
          "uuid": "8ef76b19-5467-402c-adc9-6683cff3ee68",
          "username": "heavyfrog395",
          "password": "chemical",
          "salt": "Xt79ilrG",
          "md5": "ac6e2de1b7b2b9b3364d0f2990b2c56d",
          "sha1": "d2fc529022dfe1d428fe4be63eca3c92730ebe4c",
          "sha256": "103ee7c03704d2bd255bc1826842eac90eed31fe1a01833e92a12af3d66cfe9f"
      },
      "phone": "(908) 316-7903",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/65.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
      }
  },
  {
      "name": {
          "title": "Ms",
          "first": "Sally",
          "last": "Young"
      },
      "location": {
          "street": {
              "number": 4429,
              "name": "Locust Rd"
          },
          "city": "Chesapeake",
          "state": "Hawaii",
          "country": "United States",
          "postcode": 41338,
          "coordinates": {
              "latitude": "-65.8388",
              "longitude": "57.7216"
          },
          "timezone": {
              "offset": "-11:00",
              "description": "Midway Island, Samoa"
          }
      },
      "email": "sally.young@example.com",
      "login": {
          "uuid": "99215af9-4c46-43df-bbdf-641869c888e2",
          "username": "happypanda285",
          "password": "mckenzie",
          "salt": "5LWrlnAo",
          "md5": "9cdd0d8ed5faf4e99be2cc6c86586579",
          "sha1": "77a1b500aef428fc5f5529bcb9604a41d81e0a42",
          "sha256": "87c6b25ec954aaaa4cf915fc41b201a293764b557839704d24d0551569af193e"
      },
      "phone": "(879) 884-5839",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/70.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/70.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/70.jpg"
      }
  }
] satisfies IContact[]

export const mockAlphabeticOrderedClients = {
  a: [
    {
      name: {
        title: "Mr",
        first: "Jesse",
        last: "Alexander",
      },
      location: {
        street: {
          number: 3741,
          name: "Pockrus Page Rd",
        },
        city: "Princeton",
        state: "Oregon",
        country: "United States",
        postcode: 80863,
        coordinates: {
          latitude: "-58.3612",
          longitude: "-116.6311",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "jesse.alexander@example.com",
      login: {
        uuid: "bc3e170e-2c5b-4bf1-8fe5-7c8cf2dfa758",
        username: "purpleostrich183",
        password: "owen",
        salt: "NFXgmjXC",
        md5: "5b2dd722781ed3b2752a1c1f91299d74",
        sha1: "c6c47c317f11131b13cdbb8d833691645ec318ca",
        sha256:
          "a0b479fb0a9d73e084ede582579768d4b549a99e0057732d3a11218adf47c974",
      },
      phone: "(685) 816-2166",
      picture: {
        large: "https://randomuser.me/api/portraits/men/32.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Sofia",
        last: "Anderson",
      },
      location: {
        street: {
          number: 4905,
          name: "W Dallas St",
        },
        city: "St. Louis",
        state: "Iowa",
        country: "United States",
        postcode: 95000,
        coordinates: {
          latitude: "78.2116",
          longitude: "148.5961",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "sofia.anderson@example.com",
      login: {
        uuid: "67d2d42a-4837-4161-8b82-d4d9d6c3c53d",
        username: "goldensnake119",
        password: "imagine",
        salt: "ySnqsbYl",
        md5: "7a639064db6c0222f0ae12a613f44900",
        sha1: "7b0feda36de92fb3cbc661e7b430e6a45b904951",
        sha256:
          "25450bfd2d4c55fed171e2ac9da9a6190a33fd50cc4c8f3ba2a3739e7569b493",
      },
      phone: "(498) 745-1479",
      picture: {
        large: "https://randomuser.me/api/portraits/women/53.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg",
      },
    },
  ],
  b: [
    {
      name: {
        title: "Mr",
        first: "Dan",
        last: "Brown",
      },
      location: {
        street: {
          number: 1595,
          name: "Spring Hill Rd",
        },
        city: "Cary",
        state: "Oregon",
        country: "United States",
        postcode: 13975,
        coordinates: {
          latitude: "-76.3680",
          longitude: "10.6702",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "dan.brown@example.com",
      login: {
        uuid: "8e9da87c-eb6b-4ac7-8ff0-5c3cb431f2c2",
        username: "bigdog237",
        password: "neutron",
        salt: "Gnkt3Hd0",
        md5: "1cf56725e0eca1a7805a02de27ee7841",
        sha1: "477510295e8e975d8b5ce51c029a47a30a3a78c8",
        sha256:
          "4ad6ac0e25c4e2f0315cc33613843c0cbba8b72fd89bfddfe7153e016fed9be8",
      },
      phone: "(527) 649-3610",
      picture: {
        large: "https://randomuser.me/api/portraits/men/5.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Hazel",
        last: "Banks",
      },
      location: {
        street: {
          number: 2209,
          name: "W Gray St",
        },
        city: "Fullerton",
        state: "Wisconsin",
        country: "United States",
        postcode: 73253,
        coordinates: {
          latitude: "11.0352",
          longitude: "79.2905",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "hazel.banks@example.com",
      login: {
        uuid: "181b075e-2462-4fbe-98cb-67de769a4dd4",
        username: "silverswan140",
        password: "chance",
        salt: "1fiPSfEJ",
        md5: "8829f9c177e6b910a9a575d91ee9441b",
        sha1: "10d693e813d6ea6984c327905df506c6b7a9a141",
        sha256:
          "67d468ec42b6ac410865c7da400dffca46443fcfe5ad7e236debc858826aa7e2",
      },
      phone: "(762) 340-1210",
      picture: {
        large: "https://randomuser.me/api/portraits/women/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      },
    },
  ],
  c: [
    {
      name: {
        title: "Miss",
        first: "Lucille",
        last: "Cooper",
      },
      location: {
        street: {
          number: 2683,
          name: "Westheimer Rd",
        },
        city: "Fort Wayne",
        state: "Missouri",
        country: "United States",
        postcode: 20246,
        coordinates: {
          latitude: "-2.7916",
          longitude: "-82.8239",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "lucille.cooper@example.com",
      login: {
        uuid: "5783658e-ce9c-4926-815e-57d29588e3eb",
        username: "orangeduck911",
        password: "1111",
        salt: "3zscW8D2",
        md5: "026971f2cec32a46202db8d475b197c1",
        sha1: "1cb488183aaa42dbd28212d4fb30baa43ea1c669",
        sha256:
          "d7aa9c5e817fdc69baf61e7b98f46001f3e503edf2f72b0c59dd4f905af8b729",
      },
      phone: "(449) 953-9806",
      picture: {
        large: "https://randomuser.me/api/portraits/women/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Rose",
        last: "Clark",
      },
      location: {
        street: {
          number: 4429,
          name: "Ash Dr",
        },
        city: "Fremont",
        state: "Massachusetts",
        country: "United States",
        postcode: 83955,
        coordinates: {
          latitude: "-50.8315",
          longitude: "106.8367",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "rose.clark@example.com",
      login: {
        uuid: "b5191c37-0699-4296-abef-3006665babf0",
        username: "sadkoala306",
        password: "coolness",
        salt: "G2Z3TsVL",
        md5: "88c6aa4a7ac0c67c7648d4b129123687",
        sha1: "3b6d1f46a757e1bdafd6eb4a7a96a3a87bb98b94",
        sha256:
          "c0cae6d15537676cbb3daf63395054456c2f8710117f30781053176931512e17",
      },
      phone: "(508) 395-8815",
      picture: {
        large: "https://randomuser.me/api/portraits/women/16.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg",
      },
    },
  ],
  d: [
    {
      name: {
        title: "Miss",
        first: "Priscilla",
        last: "Dixon",
      },
      location: {
        street: {
          number: 3181,
          name: "N Stelling Rd",
        },
        city: "Red Oak",
        state: "Virginia",
        country: "United States",
        postcode: 69102,
        coordinates: {
          latitude: "-4.8357",
          longitude: "38.5193",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "priscilla.dixon@example.com",
      login: {
        uuid: "6baf6ffd-ca80-4491-b26a-b5e2481d479e",
        username: "lazygoose257",
        password: "blonde",
        salt: "ojExMsOl",
        md5: "d9871925bc80787838a381d3faf229b2",
        sha1: "4305210361b3f689708f4ca56f0e19396d7feb11",
        sha256:
          "5f5b41d2562554e7a3f28639d1271bc9d12df8056f3e161c896ac96b538aab62",
      },
      phone: "(263) 510-4827",
      picture: {
        large: "https://randomuser.me/api/portraits/women/71.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Kristen",
        last: "Davis",
      },
      location: {
        street: {
          number: 2537,
          name: "Northaven Rd",
        },
        city: "Birmingham",
        state: "Wyoming",
        country: "United States",
        postcode: 50525,
        coordinates: {
          latitude: "31.3273",
          longitude: "-73.6539",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "kristen.davis@example.com",
      login: {
        uuid: "3fb9c1ac-56a5-4a33-9569-070567425c62",
        username: "blueostrich398",
        password: "recon",
        salt: "Xi2hCx4o",
        md5: "6755dbeab09c9a47a0833f93431400d0",
        sha1: "1530dc308f7d01134507b193c362e3fe6294a676",
        sha256:
          "d49eb0092a08435efd0c066ca3723eb5c6d6cbd22c4ee350e95225d26c5ce7de",
      },
      phone: "(587) 683-9987",
      picture: {
        large: "https://randomuser.me/api/portraits/women/5.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
      },
    },
  ],
  e: [
    {
      name: {
        title: "Mrs",
        first: "Eileen",
        last: "Evans",
      },
      location: {
        street: {
          number: 409,
          name: "Dogwood Ave",
        },
        city: "West Covina",
        state: "Wyoming",
        country: "United States",
        postcode: 40011,
        coordinates: {
          latitude: "-77.4252",
          longitude: "-79.8915",
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong",
        },
      },
      email: "eileen.evans@example.com",
      login: {
        uuid: "48001c7b-d60d-4d8b-a067-7f4d8b299821",
        username: "yellowmouse177",
        password: "biggie",
        salt: "EM1SytIB",
        md5: "41936999346f225e53f74f9ca42870c3",
        sha1: "4a0a6b9033c11f43c32c4e5219e04369b945cc1d",
        sha256:
          "54acc51985081eac1654d39ccf22698ee4c5f8cb6a131df198a015149303d32a",
      },
      phone: "(203) 206-2774",
      picture: {
        large: "https://randomuser.me/api/portraits/women/3.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
      },
    },
  ],
  f: [
    {
      name: {
        title: "Mr",
        first: "Jayden",
        last: "Frazier",
      },
      location: {
        street: {
          number: 3699,
          name: "Smokey Ln",
        },
        city: "Green Bay",
        state: "Florida",
        country: "United States",
        postcode: 98972,
        coordinates: {
          latitude: "-13.0533",
          longitude: "88.0982",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "jayden.frazier@example.com",
      login: {
        uuid: "9bac2c65-164e-44e7-b640-c514cf20d942",
        username: "redpeacock664",
        password: "adam12",
        salt: "S4AyZWT2",
        md5: "1dc1a6ec28d5cc173b612e77cd78281e",
        sha1: "7a36d165700be638eef39f4988ec0e9d330fd445",
        sha256:
          "e096327a6e309f7ab7236361d551f5d4518fc5bfbb92a1447516a327b4b24301",
      },
      phone: "(444) 930-6190",
      picture: {
        large: "https://randomuser.me/api/portraits/men/72.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Landon",
        last: "Foster",
      },
      location: {
        street: {
          number: 273,
          name: "Poplar Dr",
        },
        city: "Boise",
        state: "Missouri",
        country: "United States",
        postcode: 88990,
        coordinates: {
          latitude: "-47.6856",
          longitude: "92.0807",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "landon.foster@example.com",
      login: {
        uuid: "dc896602-176a-4c9a-b4d6-28fd31a8f528",
        username: "browncat960",
        password: "opendoor",
        salt: "sKR6mrtw",
        md5: "54089bd35b15075972d60514762ce824",
        sha1: "3cd7729d96b804492f6418e195ee32d23c28da37",
        sha256:
          "6d254e4a51d10a0190ec77d36bfac4fec67745e986be45e2033792e2739b3e6a",
      },
      phone: "(968) 963-9640",
      picture: {
        large: "https://randomuser.me/api/portraits/men/57.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
      },
    },
  ],
  g: [
    {
      name: {
        title: "Ms",
        first: "Mildred",
        last: "Green",
      },
      location: {
        street: {
          number: 3507,
          name: "Thornridge Cir",
        },
        city: "Roanoke",
        state: "New Mexico",
        country: "United States",
        postcode: 53950,
        coordinates: {
          latitude: "38.3684",
          longitude: "131.5351",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "mildred.green@example.com",
      login: {
        uuid: "601347fd-9dd7-4e1b-924f-4f571e640cf7",
        username: "whiteladybug121",
        password: "niao",
        salt: "QRzjI4nL",
        md5: "663c2020b16f0d22ea0bf637cfd6baa0",
        sha1: "3c3810d512339e9d44488ec766f3f85ce0b02188",
        sha256:
          "95be3e619763d777080d10abcdd33ff048dd82b993b2e946b1e75d85bdea00ec",
      },
      phone: "(935) 721-5088",
      picture: {
        large: "https://randomuser.me/api/portraits/women/62.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Katrina",
        last: "Gonzalez",
      },
      location: {
        street: {
          number: 48,
          name: "Walnut Hill Ln",
        },
        city: "Fort Wayne",
        state: "Pennsylvania",
        country: "United States",
        postcode: 22807,
        coordinates: {
          latitude: "-47.8331",
          longitude: "127.3052",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "katrina.gonzalez@example.com",
      login: {
        uuid: "618d584c-ef44-4c22-a21a-96cbfd1deb79",
        username: "bigbutterfly834",
        password: "groups",
        salt: "k89Z2W04",
        md5: "78c18cc5506af12430438c23098ecb00",
        sha1: "1f1781e0fa0151c4a3811ba75c5d6883eace29c4",
        sha256:
          "15c06701b1b6377d40c492cbc71294b1f692e5ff800abc0e1fff80369a9b95b3",
      },
      phone: "(486) 656-1181",
      picture: {
        large: "https://randomuser.me/api/portraits/women/8.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
      },
    },
  ],
  h: [
    {
      name: {
        title: "Ms",
        first: "Evelyn",
        last: "Hughes",
      },
      location: {
        street: {
          number: 8339,
          name: "Prospect Rd",
        },
        city: "Redding",
        state: "Illinois",
        country: "United States",
        postcode: 39405,
        coordinates: {
          latitude: "-37.2836",
          longitude: "55.9972",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "evelyn.hughes@example.com",
      login: {
        uuid: "32752afb-1a57-4206-a3bd-d5fc30521232",
        username: "redrabbit403",
        password: "stocks",
        salt: "QYzuRjgj",
        md5: "70547219175559fa8c5156d22e09dd23",
        sha1: "a52a6d76d5035546de5a4737233650b75763ec6c",
        sha256:
          "4adb4117727246e4c613f9efb7fa45e41a28c39fe4af6c511422a1cd134d67b8",
      },
      phone: "(445) 343-5978",
      picture: {
        large: "https://randomuser.me/api/portraits/women/26.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Tracey",
        last: "Hunter",
      },
      location: {
        street: {
          number: 1159,
          name: "Parker Rd",
        },
        city: "Garden Grove",
        state: "Illinois",
        country: "United States",
        postcode: 47471,
        coordinates: {
          latitude: "77.4104",
          longitude: "26.2122",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "tracey.hunter@example.com",
      login: {
        uuid: "5047f8a4-d57a-4ada-b35b-d65b212dac5e",
        username: "happyleopard324",
        password: "geng",
        salt: "EajYP2WM",
        md5: "c8b421db140de56f8192938bd843ee5c",
        sha1: "4b5771b1d8a0b7adef48bdc865d1e4b58bd281e1",
        sha256:
          "46e1f7357d3f67949e7450005ce61d96705a503be7aa3469124b432347d91e9a",
      },
      phone: "(399) 557-8401",
      picture: {
        large: "https://randomuser.me/api/portraits/women/95.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/95.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/95.jpg",
      },
    },
  ],
  i: [],
  j: [
    {
      name: {
        title: "Ms",
        first: "Andrea",
        last: "Jimenez",
      },
      location: {
        street: {
          number: 6958,
          name: "Country Club Rd",
        },
        city: "Cary",
        state: "Massachusetts",
        country: "United States",
        postcode: 98755,
        coordinates: {
          latitude: "-33.3276",
          longitude: "157.1895",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "andrea.jimenez@example.com",
      login: {
        uuid: "4bdd8333-e625-4276-a335-33a0b717f799",
        username: "crazyzebra545",
        password: "mybaby",
        salt: "h845XeYl",
        md5: "544fc4da881b9b5a06e765b73e223fb3",
        sha1: "e38accac8000375eed0793970bb7bc7202ab1d3c",
        sha256:
          "5c38b54a2b401b4a5fd13a1c6e18fd2653fb5562777b09570a026551cc93ffce",
      },
      phone: "(777) 729-1693",
      picture: {
        large: "https://randomuser.me/api/portraits/women/56.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/56.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/56.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Gail",
        last: "Jones",
      },
      location: {
        street: {
          number: 5123,
          name: "Rolling Green Rd",
        },
        city: "Lewisville",
        state: "Delaware",
        country: "United States",
        postcode: 54157,
        coordinates: {
          latitude: "56.6361",
          longitude: "54.4732",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "gail.jones@example.com",
      login: {
        uuid: "177d9aa0-03e2-4f40-ba22-c76270254f0b",
        username: "smallsnake107",
        password: "enrico",
        salt: "9KGpqi27",
        md5: "24ef4d5493c7f098121d5534992953a8",
        sha1: "46d53cffaea7c8ed3d0cb6e3a7cd62e42cb0f48f",
        sha256:
          "2892d304d13ba1ff01e8efbe00898f7903060b4a29aeff461bb8609de9c7b2b8",
      },
      phone: "(755) 979-5645",
      picture: {
        large: "https://randomuser.me/api/portraits/women/44.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
      },
    },
  ],
  k: [
    {
      name: {
        title: "Mr",
        first: "Barry",
        last: "Kuhn",
      },
      location: {
        street: {
          number: 3521,
          name: "N Stelling Rd",
        },
        city: "Edgewood",
        state: "Rhode Island",
        country: "United States",
        postcode: 93704,
        coordinates: {
          latitude: "64.0414",
          longitude: "-176.9581",
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong",
        },
      },
      email: "barry.kuhn@example.com",
      login: {
        uuid: "83ebd957-fe85-4ed0-a72e-c6b30536b373",
        username: "purplemeercat475",
        password: "ashley1",
        salt: "8qsXjk4i",
        md5: "018a413ac6339b4da9f90ab7bebdbbde",
        sha1: "8350cbed455ddeac86045deffdd4b489cd357c4a",
        sha256:
          "d5b789ed0babed8ce9e9a0bacb80e42c5618093e16d029efb164dcd98bbcb6c9",
      },
      phone: "(808) 974-5373",
      picture: {
        large: "https://randomuser.me/api/portraits/men/95.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "June",
        last: "Kuhn",
      },
      location: {
        street: {
          number: 1465,
          name: "Poplar Dr",
        },
        city: "Eugene",
        state: "Nebraska",
        country: "United States",
        postcode: 29049,
        coordinates: {
          latitude: "3.0826",
          longitude: "-66.0863",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "june.kuhn@example.com",
      login: {
        uuid: "a40f5c22-ffdd-4cfe-a11d-fd15da99a23d",
        username: "brownduck262",
        password: "graham",
        salt: "aiFtsDSd",
        md5: "0ed02a0f1c98910cac6a0fef453268ae",
        sha1: "9f6dac35868ce2a0ecef22a501ae31b01a76c4e4",
        sha256:
          "3153923d3ebec11f96a8ccf65ac5ad49bde1c56db21d33052e7c87b3a52644e5",
      },
      phone: "(887) 269-4630",
      picture: {
        large: "https://randomuser.me/api/portraits/women/91.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/91.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/91.jpg",
      },
    },
  ],
  l: [
    {
      name: {
        title: "Mr",
        first: "Kyle",
        last: "Lopez",
      },
      location: {
        street: {
          number: 8580,
          name: "Hunters Creek Dr",
        },
        city: "Glendale",
        state: "Maine",
        country: "United States",
        postcode: 86367,
        coordinates: {
          latitude: "44.9925",
          longitude: "131.6497",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "kyle.lopez@example.com",
      login: {
        uuid: "9655a5ff-d20a-4740-a8c4-ccf948ef9c67",
        username: "sadmeercat273",
        password: "horizon",
        salt: "BWxWglj9",
        md5: "80c54e8a0acce704831a74f1ed01e4a5",
        sha1: "5bf8f8d776eed9fb79a9fdb420915150d981c29e",
        sha256:
          "3581e1f8dd717571fadb6132aa99c4deaa753d6e2f4ddd086a2119aeeb03a9c4",
      },
      phone: "(276) 968-3178",
      picture: {
        large: "https://randomuser.me/api/portraits/men/96.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/96.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/96.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Serenity",
        last: "Lowe",
      },
      location: {
        street: {
          number: 2439,
          name: "Woodland St",
        },
        city: "Clarksville",
        state: "Vermont",
        country: "United States",
        postcode: 89643,
        coordinates: {
          latitude: "-49.8129",
          longitude: "113.7675",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "serenity.lowe@example.com",
      login: {
        uuid: "1fca3502-6225-4e17-8274-0ff61c7a8928",
        username: "angrydog720",
        password: "oceans",
        salt: "x2EHAJke",
        md5: "8364535ffa9d38c707a172a0c1e8cd62",
        sha1: "22d2246e98e80a3217d4b35ec14a305cdd921381",
        sha256:
          "1f4131f4c797512cc4d461a8b44ab1f2c48fc1cc349d11841426e77121e593ea",
      },
      phone: "(482) 210-2513",
      picture: {
        large: "https://randomuser.me/api/portraits/women/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg",
      },
    },
  ],
  m: [
    {
      name: {
        title: "Mrs",
        first: "Brittany",
        last: "Medina",
      },
      location: {
        street: {
          number: 5072,
          name: "W Pecan St",
        },
        city: "Davenport",
        state: "Virginia",
        country: "United States",
        postcode: 73422,
        coordinates: {
          latitude: "49.9156",
          longitude: "115.1691",
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "brittany.medina@example.com",
      login: {
        uuid: "597973be-dd63-45d4-bd61-37d38d181778",
        username: "organicleopard928",
        password: "fishy",
        salt: "emznqDmR",
        md5: "0579054cf054bf493b07b1c34db817ad",
        sha1: "2806df71f4b265efebbaf969776990d92318213d",
        sha256:
          "6bc35919fbde44c7219537bbb9a3070c9baa44c88f349a9f95c84ce447ad20af",
      },
      phone: "(215) 596-7729",
      picture: {
        large: "https://randomuser.me/api/portraits/women/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Ramon",
        last: "May",
      },
      location: {
        street: {
          number: 3516,
          name: "E Center St",
        },
        city: "Rancho Cucamonga",
        state: "New Jersey",
        country: "United States",
        postcode: 95115,
        coordinates: {
          latitude: "43.7127",
          longitude: "128.1675",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "ramon.may@example.com",
      login: {
        uuid: "0accaa33-6023-4212-ab53-ff11ebd2c8ac",
        username: "orangecat323",
        password: "test",
        salt: "6knimovb",
        md5: "ab2fe6217d2c5df494e7b262eadd3b5a",
        sha1: "d45bd56d437bee69362ea0d7292a4cb187618b3e",
        sha256:
          "a9ae1b901dee11428b81eff2042ad729bbe6af3f85c00ca6bd77ce4088da6990",
      },
      phone: "(980) 367-0740",
      picture: {
        large: "https://randomuser.me/api/portraits/men/78.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
      },
    },
  ],
  n: [
    {
      name: {
        title: "Mr",
        first: "Neil",
        last: "Nelson",
      },
      location: {
        street: {
          number: 2438,
          name: "Paddock Way",
        },
        city: "Allentown",
        state: "North Carolina",
        country: "United States",
        postcode: 94392,
        coordinates: {
          latitude: "-44.5315",
          longitude: "-74.7210",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "neil.nelson@example.com",
      login: {
        uuid: "316d3fb5-695a-4125-b8ae-ef537b9eb327",
        username: "ticklishwolf437",
        password: "downer",
        salt: "nkXyibpR",
        md5: "3fc23ccb36aa0d19316bcbbf94d9cefe",
        sha1: "f0b80fc1920e8709ce250647544b8b730e0af6b0",
        sha256:
          "a438ca84a347a90c6cf73c67fc112a638cb29b2e041261921549c097f6e8ada8",
      },
      phone: "(706) 728-7039",
      picture: {
        large: "https://randomuser.me/api/portraits/men/44.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Mario",
        last: "Neal",
      },
      location: {
        street: {
          number: 9853,
          name: "Fincher Rd",
        },
        city: "Lewisville",
        state: "Nevada",
        country: "United States",
        postcode: 99914,
        coordinates: {
          latitude: "22.3047",
          longitude: "-113.6696",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "mario.neal@example.com",
      login: {
        uuid: "286fbe51-0fe4-4e82-8dc7-7a087c4435da",
        username: "brownpeacock250",
        password: "keegan",
        salt: "bqRAw7l6",
        md5: "30a151a9a6a0f6dfb8bcbfaa40843d46",
        sha1: "0759442266b1423d361e80ff567e5f5a1026a6b1",
        sha256:
          "2fede2557c414075cea73d756434942cef823cb618090be64639d360b5b1aa6b",
      },
      phone: "(920) 681-6799",
      picture: {
        large: "https://randomuser.me/api/portraits/men/47.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
      },
    },
  ],
  o: [
    {
      name: {
        title: "Mr",
        first: "Eduardo",
        last: "Ortiz",
      },
      location: {
        street: {
          number: 8667,
          name: "Hickory Creek Dr",
        },
        city: "Colorado Springs",
        state: "Georgia",
        country: "United States",
        postcode: 35283,
        coordinates: {
          latitude: "-85.3322",
          longitude: "-110.2581",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "eduardo.ortiz@example.com",
      login: {
        uuid: "6a000c3c-b50b-4bab-a26e-af14b2b6a11d",
        username: "whitepanda512",
        password: "dabomb",
        salt: "17XYNNg9",
        md5: "e82801eb1c0abb7e393b08cfa23885cb",
        sha1: "89f14834f1dc86526bec4591a88d38839dec823f",
        sha256:
          "dcfb0ffe2099ef9be2d201c10817a826a155d295fad62fc1c6b521be4ac177f9",
      },
      phone: "(720) 310-7911",
      picture: {
        large: "https://randomuser.me/api/portraits/men/8.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Tiffany",
        last: "Ortiz",
      },
      location: {
        street: {
          number: 5313,
          name: "Marsh Ln",
        },
        city: "Mesquite",
        state: "Ohio",
        country: "United States",
        postcode: 51133,
        coordinates: {
          latitude: "59.4190",
          longitude: "32.3227",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "tiffany.ortiz@example.com",
      login: {
        uuid: "d3a419a3-1965-4261-b152-4a6d5324dfcd",
        username: "bigladybug120",
        password: "burton",
        salt: "2lG4cjSX",
        md5: "c32b6b9566274e28928477668799c1f3",
        sha1: "7166128db3e8c23ff12fed982f68a3f13b5821d0",
        sha256:
          "d99f25d342f028c160b1e93d61fa43fb1c9615893f5f2bd0caa2d6d50789b79a",
      },
      phone: "(430) 977-1920",
      picture: {
        large: "https://randomuser.me/api/portraits/women/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
      },
    },
  ],
  p: [
    {
      name: {
        title: "Mrs",
        first: "Jill",
        last: "Pena",
      },
      location: {
        street: {
          number: 8306,
          name: "Sunset St",
        },
        city: "Eugene",
        state: "Georgia",
        country: "United States",
        postcode: 32399,
        coordinates: {
          latitude: "57.6025",
          longitude: "-167.4887",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "jill.pena@example.com",
      login: {
        uuid: "882e6df5-1a79-47aa-8dc4-235735957042",
        username: "blackbird576",
        password: "daman",
        salt: "vBntJvDc",
        md5: "38698633804c6ac415e76b9f73e2dd11",
        sha1: "6f9158be97bc4a5b98b81f3f1e8556c69da70bc2",
        sha256:
          "382e02e3c40ced507aa53fa43e6b22b746788d935eefeed61e48b4e9d37ef69b",
      },
      phone: "(865) 578-6366",
      picture: {
        large: "https://randomuser.me/api/portraits/women/57.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Jacqueline",
        last: "Palmer",
      },
      location: {
        street: {
          number: 8452,
          name: "Harrison Ct",
        },
        city: "Frisco",
        state: "Michigan",
        country: "United States",
        postcode: 25967,
        coordinates: {
          latitude: "75.5812",
          longitude: "-119.9069",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "jacqueline.palmer@example.com",
      login: {
        uuid: "323350e8-2378-4ced-83ab-0c603c9b2a9b",
        username: "greenpeacock508",
        password: "snowflak",
        salt: "fClStgtW",
        md5: "1232b8756d8846a0f41fc05e3896fc04",
        sha1: "4b778a3bb26969ca799177b13993d114288f4512",
        sha256:
          "f2a9a4a4a9488e55c88903ef81a653276db4527c56b96c04a31132babbab2915",
      },
      phone: "(608) 922-3037",
      picture: {
        large: "https://randomuser.me/api/portraits/women/88.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
      },
    },
  ],
  q: [],
  r: [
    {
      name: {
        title: "Mr",
        first: "Wade",
        last: "Riley",
      },
      location: {
        street: {
          number: 7032,
          name: "Pockrus Page Rd",
        },
        city: "Norman",
        state: "Louisiana",
        country: "United States",
        postcode: 88874,
        coordinates: {
          latitude: "-77.9440",
          longitude: "-104.3385",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "wade.riley@example.com",
      login: {
        uuid: "fc1ba95e-bf63-48e0-a117-3f54515770f2",
        username: "beautifulkoala288",
        password: "athlon",
        salt: "R7xpG4di",
        md5: "c4201388b343da40c26aeada8a3b35b2",
        sha1: "81383c50f91b5a7c27fa01d73df90da3d12ba130",
        sha256:
          "3c3efda6a2a1af5c132757c532c897ff40bc9fe82376b8d747c9b65ca43a741e",
      },
      phone: "(403) 540-9180",
      picture: {
        large: "https://randomuser.me/api/portraits/men/27.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Bryan",
        last: "Robinson",
      },
      location: {
        street: {
          number: 3732,
          name: "Plum St",
        },
        city: "Irvine",
        state: "New Mexico",
        country: "United States",
        postcode: 50294,
        coordinates: {
          latitude: "-21.1811",
          longitude: "33.0767",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "bryan.robinson@example.com",
      login: {
        uuid: "6c44e89e-8ec2-471e-aec3-5b58bea32769",
        username: "crazypanda838",
        password: "slipknot",
        salt: "nU63Zyou",
        md5: "e3260c940bbdadd475a8266b1e544acb",
        sha1: "2e69392a537f498587782a820c039fd8095e7b29",
        sha256:
          "b870188f4ac30a385070a55493257aa2161a2cb567ffd17589c4fd36510d165b",
      },
      phone: "(581) 680-5144",
      picture: {
        large: "https://randomuser.me/api/portraits/men/18.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
      },
    },
  ],
  s: [
    {
      name: {
        title: "Mr",
        first: "Alan",
        last: "Schmidt",
      },
      location: {
        street: {
          number: 2342,
          name: "Spring St",
        },
        city: "Jersey City",
        state: "Virginia",
        country: "United States",
        postcode: 71495,
        coordinates: {
          latitude: "37.6037",
          longitude: "-31.1473",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "alan.schmidt@example.com",
      login: {
        uuid: "29e39af7-069a-4e58-b319-1edf7e1bb3e8",
        username: "happybutterfly818",
        password: "tech",
        salt: "Ie0nbWIx",
        md5: "a3aa4e1f447197ad6dc44af4bd473a1c",
        sha1: "aea2ff7152038282bdbda6e60e9112a247a24b25",
        sha256:
          "a7f69a7a94683c06cc6c25bdd07b2f875b27ffa62e1e1714e5f857986d72cd00",
      },
      phone: "(472) 456-8850",
      picture: {
        large: "https://randomuser.me/api/portraits/men/35.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Tony",
        last: "Sutton",
      },
      location: {
        street: {
          number: 2381,
          name: "Walnut Hill Ln",
        },
        city: "Tulsa",
        state: "Minnesota",
        country: "United States",
        postcode: 82288,
        coordinates: {
          latitude: "-25.3560",
          longitude: "97.6783",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "tony.sutton@example.com",
      login: {
        uuid: "6c3aa101-7392-4860-bf3e-5fbd12ab1793",
        username: "orangefish282",
        password: "bian",
        salt: "LxJ0Wmm3",
        md5: "bfa94067a2ad2f4f13693b26089a98ce",
        sha1: "4ca95a8ee86dd10459bd0eff3916eb925938960e",
        sha256:
          "ddb1fea11560a1e194e29f2a46975bc7dfeb5fcc2cafccfcc03060d2ec8df1d2",
      },
      phone: "(997) 323-6101",
      picture: {
        large: "https://randomuser.me/api/portraits/men/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
      },
    },
  ],
  t: [
    {
      name: {
        title: "Miss",
        first: "Ellen",
        last: "Taylor",
      },
      location: {
        street: {
          number: 6971,
          name: "Royal Ln",
        },
        city: "Addison",
        state: "Oklahoma",
        country: "United States",
        postcode: 91441,
        coordinates: {
          latitude: "11.8726",
          longitude: "68.0049",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "ellen.taylor@example.com",
      login: {
        uuid: "739be4df-c9f0-4573-9288-7d5f900daabc",
        username: "lazyswan282",
        password: "dome",
        salt: "hrDIUGxI",
        md5: "dcc8ec2827eb925f867dfc41e25b8768",
        sha1: "f1618158340b8a75ef20e135e1768cbd8cd765f4",
        sha256:
          "ea446437005aca66b2da5d10c839ff323d9d5ba9c9d3b111d29aa0e2e69e24ef",
      },
      phone: "(500) 552-8097",
      picture: {
        large: "https://randomuser.me/api/portraits/women/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Dolores",
        last: "Taylor",
      },
      location: {
        street: {
          number: 5166,
          name: "Hamilton Ave",
        },
        city: "Helena",
        state: "Iowa",
        country: "United States",
        postcode: 10460,
        coordinates: {
          latitude: "-20.3050",
          longitude: "-130.6007",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "dolores.taylor@example.com",
      login: {
        uuid: "ecd73281-0144-473d-b12d-e5f7b967a006",
        username: "blackpanda565",
        password: "elliot",
        salt: "HBWwTLKm",
        md5: "9b7cbc39919caf906923ec926bf0156f",
        sha1: "9fec529cb4a42c71b001857619ab68ef22378414",
        sha256:
          "178f06a8300f229cbdf5d0b5557d9b2c747d6d90ce4e08d9a60f73aa0b4c30fe",
      },
      phone: "(410) 979-7325",
      picture: {
        large: "https://randomuser.me/api/portraits/women/69.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
      },
    },
  ],
  u: [],
  v: [
    {
      name: {
        title: "Mr",
        first: "Tony",
        last: "Vasquez",
      },
      location: {
        street: {
          number: 4473,
          name: "Valwood Pkwy",
        },
        city: "College Station",
        state: "Tennessee",
        country: "United States",
        postcode: 37951,
        coordinates: {
          latitude: "-27.1489",
          longitude: "-55.4893",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "tony.vasquez@example.com",
      login: {
        uuid: "62173b51-4cd6-4b79-9e90-df34515b7abb",
        username: "lazypanda574",
        password: "audrey",
        salt: "iQqGnDex",
        md5: "46d46d5a250a558a465c8a78e229e287",
        sha1: "7290a3c03e9d906aa1287ee7f99eaa7d5e4c524f",
        sha256:
          "cf7113874b21133aa40097b473d2f6d7e5fcfe31a9e2fcf05530686def2c9c7e",
      },
      phone: "(868) 582-8318",
      picture: {
        large: "https://randomuser.me/api/portraits/men/27.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Marie",
        last: "Vargas",
      },
      location: {
        street: {
          number: 2753,
          name: "Karen Dr",
        },
        city: "Wichita",
        state: "Delaware",
        country: "United States",
        postcode: 14824,
        coordinates: {
          latitude: "42.8856",
          longitude: "77.1943",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "marie.vargas@example.com",
      login: {
        uuid: "2e575336-caa5-4404-86e8-a7984a9a5f40",
        username: "beautifulpanda532",
        password: "1023",
        salt: "RxEV0gQT",
        md5: "ff38b1d62e4aafa74f70d64ba4e1bd10",
        sha1: "3d6b341789152d2ccafb3e59b5eb29298f1b7144",
        sha256:
          "f4a1fb450bc2d02b9c1e43e610af020a451f054f45ea04d53a35f08f1caad3da",
      },
      phone: "(735) 507-3787",
      picture: {
        large: "https://randomuser.me/api/portraits/women/73.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
      },
    },
  ],
  w: [
    {
      name: {
        title: "Ms",
        first: "Heidi",
        last: "Webb",
      },
      location: {
        street: {
          number: 7612,
          name: "Pockrus Page Rd",
        },
        city: "Lousville",
        state: "Arkansas",
        country: "United States",
        postcode: 35898,
        coordinates: {
          latitude: "42.0016",
          longitude: "-164.0961",
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong",
        },
      },
      email: "heidi.webb@example.com",
      login: {
        uuid: "8325e80f-a122-4b40-b3c8-7f5a3065ec33",
        username: "bluefish593",
        password: "tongue",
        salt: "MgmlANTw",
        md5: "a3919a8d190257dbf975f93c3c9e0564",
        sha1: "7fb783eb3602facc6937b4cdd97183f4360bcfc7",
        sha256:
          "36cb3b674184a343708f7a5c3e9fcd251e67ff04953a421d7b701b0a2e9f3035",
      },
      phone: "(569) 553-7228",
      picture: {
        large: "https://randomuser.me/api/portraits/women/29.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Gail",
        last: "Williams",
      },
      location: {
        street: {
          number: 552,
          name: "W Pecan St",
        },
        city: "Jersey City",
        state: "Montana",
        country: "United States",
        postcode: 79451,
        coordinates: {
          latitude: "67.3544",
          longitude: "81.9067",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "gail.williams@example.com",
      login: {
        uuid: "8ef76b19-5467-402c-adc9-6683cff3ee68",
        username: "heavyfrog395",
        password: "chemical",
        salt: "Xt79ilrG",
        md5: "ac6e2de1b7b2b9b3364d0f2990b2c56d",
        sha1: "d2fc529022dfe1d428fe4be63eca3c92730ebe4c",
        sha256:
          "103ee7c03704d2bd255bc1826842eac90eed31fe1a01833e92a12af3d66cfe9f",
      },
      phone: "(908) 316-7903",
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
      },
    },
  ],
  x: [],
  y: [
    {
      name: {
        title: "Ms",
        first: "Sally",
        last: "Young",
      },
      location: {
        street: {
          number: 4429,
          name: "Locust Rd",
        },
        city: "Chesapeake",
        state: "Hawaii",
        country: "United States",
        postcode: 41338,
        coordinates: {
          latitude: "-65.8388",
          longitude: "57.7216",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "sally.young@example.com",
      login: {
        uuid: "99215af9-4c46-43df-bbdf-641869c888e2",
        username: "happypanda285",
        password: "mckenzie",
        salt: "5LWrlnAo",
        md5: "9cdd0d8ed5faf4e99be2cc6c86586579",
        sha1: "77a1b500aef428fc5f5529bcb9604a41d81e0a42",
        sha256:
          "87c6b25ec954aaaa4cf915fc41b201a293764b557839704d24d0551569af193e",
      },
      phone: "(879) 884-5839",
      picture: {
        large: "https://randomuser.me/api/portraits/women/70.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
      },
    },
  ],
  z: [],
} ;

