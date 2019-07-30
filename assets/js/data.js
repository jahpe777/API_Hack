const cities = [
    {
      "id": 345,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.16412,
          39.50956
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Aberdeen",
        "admin": "MD",
        "population": 14959,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 521,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.54366,
          33.82511
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Aberdeen",
        "admin": "MS",
        "population": 5612,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 329,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.81572,
          46.97537
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Aberdeen",
        "admin": "WA",
        "population": 16896,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 692,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -101.84295,
          33.8323
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Abernathy",
        "admin": "TX",
        "population": 2805,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1240,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.73314,
          32.44874
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Abilene",
        "admin": "TX",
        "population": 121721,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 648,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.4018,
          40.80448
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Abingdon",
        "admin": "IL",
        "population": 3319,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 438,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.49571,
          39.42845
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Absecon",
        "admin": "NJ",
        "population": 8411,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 880,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.17284,
          33.31012
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ackerman",
        "admin": "MS",
        "population": 1510,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1346,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.43284,
          42.48509
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Acton",
        "admin": "MA",
        "population": 20897,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1049,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.24109,
          43.45112
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ada County",
        "admin": "ID",
        "population": 392365,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1456,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.82917,
          32.96179
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Addison",
        "admin": "TX",
        "population": 15518,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 344,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.97192,
          39.00317
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Adelphi",
        "admin": "MD",
        "population": 15086,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 503,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.59327,
          47.64461
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Airway Heights",
        "admin": "WA",
        "population": 6114,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 121,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.51901,
          41.08144
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Akron",
        "admin": "OH",
        "population": 199110,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1587,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.3577,
          29.67476
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Alachua County",
        "admin": "FL",
        "population": 247336,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1010,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.24164,
          37.76521
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Alameda",
        "admin": "CA",
        "population": 78630,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1026,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.91789,
          37.65055
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Alameda County",
        "admin": "CA",
        "population": 1510271,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1622,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.96027,
          32.89953
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Alamogordo",
        "admin": "NM",
        "population": 30753,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1133,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.29775,
          37.88687
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Albany",
        "admin": "CA",
        "population": 19735,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1303,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.97356,
          42.60018
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Albany County",
        "admin": "NY",
        "population": 304204,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1363,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.55654,
          38.02289
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Albemarle County",
        "admin": "VA",
        "population": 98970,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 879,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.36645,
          41.89061
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Albion",
        "admin": "PA",
        "population": 1516,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 36,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.65114,
          35.08449
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Albuquerque",
        "admin": "NM",
        "population": 559121,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1610,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.44514,
          31.31129
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Alexandria",
        "admin": "LA",
        "population": 47889,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 198,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.04692,
          38.80484
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Alexandria",
        "admin": "VA",
        "population": 153511,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1001,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.67055,
          33.10317
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Allen",
        "admin": "TX",
        "population": 98143,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1072,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.49018,
          40.60843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Allentown",
        "admin": "PA",
        "population": 120207,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1179,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.10593,
          40.91534
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Alliance",
        "admin": "OH",
        "population": 22055,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 233,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.86705,
          45.49428
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Aloha",
        "admin": "OR",
        "population": 49425,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 312,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.73866,
          41.66892
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Alsip",
        "admin": "IL",
        "population": 19277,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 993,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.29719,
          37.19034
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Altamont",
        "admin": "KS",
        "population": 1080,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 243,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.36562,
          28.66111
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Altamonte Springs",
        "admin": "FL",
        "population": 41496,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1677,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.28558,
          37.11181
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Altavista",
        "admin": "VA",
        "population": 3474,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1643,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.18428,
          38.8906
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Alton",
        "admin": "IL",
        "population": 27003,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1552,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.65112,
          38.44639
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Amador County",
        "admin": "CA",
        "population": 38091,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 968,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.14369,
          40.97371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Amagansett",
        "admin": "NY",
        "population": 1165,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 131,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -101.8313,
          35.222
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Amarillo",
        "admin": "TX",
        "population": 198645,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1371,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2608,
          38.17492
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "American Canyon",
        "admin": "CA",
        "population": 20554,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 279,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.79576,
          40.3769
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "American Fork",
        "admin": "UT",
        "population": 26263,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 885,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.96623,
          47.63288
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ames Lake",
        "admin": "WA",
        "population": 1486,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1277,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.61267,
          48.5126
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Anacortes",
        "admin": "WA",
        "population": 16403,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 61,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.9145,
          33.83529
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Anaheim",
        "admin": "CA",
        "population": 350742,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1545,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.63624,
          42.05065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ancram",
        "admin": "NY",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1130,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.68025,
          40.10532
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Anderson",
        "admin": "IN",
        "population": 55305,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 974,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.5723,
          41.60672
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Andover",
        "admin": "OH",
        "population": 1145,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1650,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.99941,
          41.63477
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Angola",
        "admin": "IN",
        "population": 8644,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 238,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.60577,
          41.72971
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ankeny",
        "admin": "IA",
        "population": 45582,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 443,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.5486,
          33.349
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Anna",
        "admin": "TX",
        "population": 8249,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 846,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.88128,
          40.64093
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Annandale",
        "admin": "NJ",
        "population": 1695,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1721,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.49218,
          38.97845
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Annapolis",
        "admin": "MD",
        "population": 39474,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1531,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.74088,
          42.27756
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ann Arbor",
        "admin": "MI",
        "population": 117070,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1383,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.5676,
          38.99416
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Anne Arundel County",
        "admin": "MD",
        "population": 537656,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1398,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.80579,
          38.00492
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Antioch",
        "admin": "CA",
        "population": 110542,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 966,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8393,
          40.75172
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Apple Creek",
        "admin": "OH",
        "population": 1173,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 904,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.01977,
          45.19691
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Appleton",
        "admin": "MN",
        "population": 1412,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1241,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.18588,
          34.50083
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Apple Valley",
        "admin": "CA",
        "population": 72174,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 57,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.10807,
          32.73569
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Arlington",
        "admin": "TX",
        "population": 388125,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 113,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.10428,
          38.88101
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Arlington",
        "admin": "VA",
        "population": 207627,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1261,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.10096,
          38.87862
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Arlington County",
        "admin": "VA",
        "population": 207627,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 214,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.98063,
          42.08836
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Arlington Heights",
        "admin": "IL",
        "population": 75101,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 611,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.35103,
          38.25547
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Arnold",
        "admin": "CA",
        "population": 3843,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1326,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.59073,
          35.11859
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Arroyo Grande",
        "admin": "CA",
        "population": 18108,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 829,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.56918,
          36.51669
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Arroyo Seco",
        "admin": "NM",
        "population": 1785,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 203,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.08748,
          39.80276
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Arvada",
        "admin": "CO",
        "population": 115368,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 431,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82149,
          30.04913
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Asbury Lake",
        "admin": "FL",
        "population": 8700,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1674,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.55402,
          35.60095
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Asheville",
        "admin": "NC",
        "population": 88512,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1714,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.70948,
          42.19458
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ashland",
        "admin": "OR",
        "population": 20861,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1186,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.8838,
          46.59244
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ashland",
        "admin": "WI",
        "population": 8040,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 1467,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.81754,
          39.1911
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Aspen",
        "admin": "CO",
        "population": 6882,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 272,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.67073,
          35.48942
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Atascadero",
        "admin": "CA",
        "population": 29819,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1495,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.10126,
          39.32924
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Athens",
        "admin": "OH",
        "population": 25044,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1404,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.19774,
          37.46133
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Atherton",
        "admin": "CA",
        "population": 7167,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 46,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.38798,
          33.749
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Atlanta",
        "admin": "GA",
        "population": 463878,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1090,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.42293,
          39.36428
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Atlantic City",
        "admin": "NJ",
        "population": 39260,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 240,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.28561,
          41.94454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Attleboro",
        "admin": "MA",
        "population": 43593,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 557,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.74649,
          39.59172
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Auburn",
        "admin": "IL",
        "population": 4771,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1576,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.23117,
          44.09785
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Auburn",
        "admin": "ME",
        "population": 22871,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 216,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.22845,
          47.30732
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Auburn",
        "admin": "WA",
        "population": 77006,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1580,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.97484,
          33.47097
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Augusta",
        "admin": "GA",
        "population": 43459,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1232,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.77949,
          44.31062
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Augusta",
        "admin": "ME",
        "population": 18471,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1474,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.13383,
          38.16452
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Augusta County",
        "admin": "VA",
        "population": 73750,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 63,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.83192,
          39.72943
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Aurora",
        "admin": "CO",
        "population": 359407,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 123,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.32007,
          41.76058
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Aurora",
        "admin": "IL",
        "population": 200661,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 18,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.74306,
          30.26715
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Austin",
        "admin": "TX",
        "population": 931830,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 560,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.06756,
          40.5009
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Avalon",
        "admin": "PA",
        "population": 4705,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1466,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.12903,
          36.00412
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Avenal",
        "admin": "CA",
        "population": 13301,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 338,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.01959,
          41.45976
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Avon Center",
        "admin": "OH",
        "population": 15724,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 940,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.78327,
          39.82344
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Avondale",
        "admin": "PA",
        "population": 1265,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 957,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.26979,
          42.04561
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Avonia",
        "admin": "PA",
        "population": 1205,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 428,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50619,
          27.59587
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Avon Park",
        "admin": "FL",
        "population": 8836,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1519,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.58979,
          42.5612
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ayer",
        "admin": "MA",
        "population": 2868,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 616,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.03223,
          30.5988
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bagdad",
        "admin": "FL",
        "population": 3761,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1109,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.52124,
          47.62621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bainbridge Island",
        "admin": "WA",
        "population": 23840,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 856,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.74427,
          40.95621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Baiting Hollow",
        "admin": "NY",
        "population": 1642,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 58,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.01871,
          35.37329
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bakersfield",
        "admin": "CA",
        "population": 373640,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 419,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.23407,
          40.00761
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bala-Cynwyd",
        "admin": "PA",
        "population": 9299,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 26,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.61219,
          39.29038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Baltimore",
        "admin": "MD",
        "population": 621849,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1685,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.61632,
          39.44307
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Baltimore County",
        "admin": "MD",
        "population": 805029,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 278,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60512,
          41.01283
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Barberton",
        "admin": "OH",
        "population": 26550,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 381,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.4669,
          37.80923
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bardstown",
        "admin": "KY",
        "population": 11700,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1600,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.29947,
          41.70011
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Barnstable",
        "admin": "MA",
        "population": 47821,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 860,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.42556,
          30.79491
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bartlett",
        "admin": "TX",
        "population": 1623,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1385,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.8405,
          34.23786
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bartow County",
        "admin": "GA",
        "population": 100157,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 565,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.93858,
          39.14167
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Basehor",
        "admin": "KS",
        "population": 4613,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 280,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.31257,
          41.85003
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Batavia",
        "admin": "IL",
        "population": 26045,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1221,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.64097,
          35.7698
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Batesville",
        "admin": "AR",
        "population": 10668,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1259,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.8206,
          43.91064
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bath",
        "admin": "ME",
        "population": 8305,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 95,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.15455,
          30.45075
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Baton Rouge",
        "admin": "LA",
        "population": 228590,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1489,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.17816,
          42.3173
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Battle Creek",
        "admin": "MI",
        "population": 51589,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 573,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.02507,
          39.44137
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Battlement Mesa",
        "admin": "CO",
        "population": 4471,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 628,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.16736,
          32.47042
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bawcomville",
        "admin": "LA",
        "population": 3588,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 324,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.9694,
          28.98276
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bay City",
        "admin": "TX",
        "population": 17598,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 875,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.93853,
          29.32635
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bayou Vista",
        "admin": "TX",
        "population": 1537,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 333,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.59038,
          27.42532
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bayshore Gardens",
        "admin": "FL",
        "population": 16323,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1719,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.97743,
          29.7355
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Baytown",
        "admin": "TX",
        "population": 76335,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 466,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.29123,
          40.7501
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bay Wood",
        "admin": "NY",
        "population": 7350,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 359,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.8573,
          42.42224
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Beach Park",
        "admin": "IL",
        "population": 13638,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1330,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.69217,
          32.35706
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Beaufort County",
        "admin": "SC",
        "population": 162233,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 201,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.10185,
          30.08605
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Beaumont",
        "admin": "TX",
        "population": 118129,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1481,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80371,
          45.48706
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Beaverton",
        "admin": "OR",
        "population": 96577,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 372,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.27617,
          42.49065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bedford",
        "admin": "MA",
        "population": 12502,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 819,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.64374,
          41.20426
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bedford",
        "admin": "NY",
        "population": 1834,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 467,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.87959,
          35.07064
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Beebe",
        "admin": "AR",
        "population": 7315,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 640,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.82677,
          32.32765
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Beechwood",
        "admin": "MS",
        "population": 3426,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 757,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.85037,
          43.49972
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Belgium",
        "admin": "WI",
        "population": 2245,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1185,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.45883,
          29.70579
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bellaire",
        "admin": "TX",
        "population": 18518,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 370,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.99063,
          29.85493
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Belle Chasse",
        "admin": "LA",
        "population": 12679,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 960,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.50936,
          39.76622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bellefonte",
        "admin": "DE",
        "population": 1193,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 808,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.04149,
          30.05048
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Belle Rose",
        "admin": "LA",
        "population": 1902,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1301,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.98399,
          38.52005
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Belleville",
        "admin": "IL",
        "population": 42034,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 250,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.15014,
          40.79371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Belleville",
        "admin": "NJ",
        "population": 36878,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1573,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.20068,
          47.61038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bellevue",
        "admin": "WA",
        "population": 139820,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1025,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.48822,
          48.75955
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bellingham",
        "admin": "WA",
        "population": 85146,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1102,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2758,
          37.52021
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Belmont",
        "admin": "CA",
        "population": 27218,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 698,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.32539,
          38.7095
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bel-Ridge",
        "admin": "MO",
        "population": 2737,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 784,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.46442,
          37.8727
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Belvedere",
        "admin": "CA",
        "population": 2068,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 213,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.31531,
          44.05817
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bend",
        "admin": "OR",
        "population": 87014,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1138,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.15858,
          38.04937
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Benicia",
        "admin": "CA",
        "population": 28167,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 499,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.08635,
          37.08911
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ben Lomond",
        "admin": "CA",
        "population": 6234,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1319,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.58683,
          34.56454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Benton",
        "admin": "AR",
        "population": 34177,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 360,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.29632,
          37.56869
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Berea",
        "admin": "KY",
        "population": 14882,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1309,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.27275,
          37.87159
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Berkeley",
        "admin": "CA",
        "population": 120972,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 538,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.9034,
          41.88892
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Berkeley",
        "admin": "IL",
        "population": 5209,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1688,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.926,
          40.4163
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Berks County",
        "admin": "PA",
        "population": 411442,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1627,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.51569,
          41.52448
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bettendorf",
        "admin": "IA",
        "population": 35505,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1312,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.88005,
          42.55843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Beverly",
        "admin": "MA",
        "population": 41186,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1730,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.45338,
          43.49258
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Biddeford",
        "admin": "ME",
        "population": 21282,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 980,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.54702,
          41.76392
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Big Rock",
        "admin": "IL",
        "population": 1126,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1043,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.7471,
          36.88176
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Big Stone Gap",
        "admin": "VA",
        "population": 5614,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1500,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.50069,
          45.78329
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Billings",
        "admin": "MT",
        "population": 110263,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 108,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.80249,
          33.52066
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Birmingham",
        "admin": "AL",
        "population": 212461,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 927,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.45066,
          44.47749
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Black Creek",
        "admin": "WI",
        "population": 1316,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1144,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.3192,
          37.81874
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Blacksburg",
        "admin": "VA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 835,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.78752,
          34.53878
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bladenboro",
        "admin": "NC",
        "population": 1750,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 915,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.23516,
          44.2944
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Blair",
        "admin": "WI",
        "population": 1366,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 730,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.89249,
          28.64777
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bloomington",
        "admin": "TX",
        "population": 2459,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1189,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.98395,
          40.88291
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Blue Lake",
        "admin": "CA",
        "population": 1252,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1462,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.59635,
          33.6103
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Blythe",
        "admin": "CA",
        "population": 19208,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 287,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.14671,
          26.34508
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Boca Del Mar",
        "admin": "FL",
        "population": 24244,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 184,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.20345,
          43.6135
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Boise",
        "admin": "ID",
        "population": 145987,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 830,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.15898,
          26.70563
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bokeelia",
        "admin": "FL",
        "population": 1780,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 735,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.57991,
          29.47829
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bolivar Peninsula",
        "admin": "TX",
        "population": 2417,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 991,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.6281,
          43.8523
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Boothbay Harbor",
        "admin": "ME",
        "population": 1086,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1752,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.83652,
          40.68149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Borough of Queens",
        "admin": "NY",
        "population": 2272771,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1626,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.73212,
          32.51599
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bossier City",
        "admin": "LA",
        "population": 68094,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 27,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.05977,
          42.35843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Boston",
        "admin": "MA",
        "population": 667137,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1686,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.27055,
          40.01499
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Boulder",
        "admin": "CO",
        "population": 107349,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 902,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.59892,
          41.74122
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bourne",
        "admin": "MA",
        "population": 1418,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1106,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.73028,
          38.94278
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bowie",
        "admin": "MD",
        "population": 58025,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1045,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.4436,
          36.99032
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bowling Green",
        "admin": "KY",
        "population": 63616,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1033,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.06643,
          26.52535
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Boynton Beach",
        "admin": "FL",
        "population": 73966,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1729,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.03856,
          45.67965
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bozeman",
        "admin": "MT",
        "population": 43405,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 872,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.14305,
          36.59959
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bracey",
        "admin": "VA",
        "population": 1554,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 712,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.5036,
          39.41871
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Braddock Heights",
        "admin": "MD",
        "population": 2608,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 827,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.17078,
          45.72274
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Braham",
        "admin": "MN",
        "population": 1793,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 410,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.5386,
          38.98205
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brambleton",
        "admin": "VA",
        "population": 9845,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 429,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.57199,
          43.5947
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brandon",
        "admin": "SD",
        "population": 8785,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1122,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.8151,
          41.27954
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Branford",
        "admin": "CT",
        "population": 29438,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1304,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.43426,
          29.16783
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brazoria County",
        "admin": "TX",
        "population": 313166,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1749,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.03835,
          39.48165
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Breckenridge",
        "admin": "CO",
        "population": 4896,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 558,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.36734,
          38.7145
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Breckenridge Hills",
        "admin": "MO",
        "population": 4746,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1291,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.69579,
          37.93187
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brentwood",
        "admin": "CA",
        "population": 58968,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1742,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.34928,
          38.61755
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brentwood",
        "admin": "MO",
        "population": 8057,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 794,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.0828,
          41.76011
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Brewster",
        "admin": "MA",
        "population": 2000,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 188,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.20483,
          41.16704
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bridgeport",
        "admin": "CT",
        "population": 147629,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 768,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.76003,
          38.70588
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bridgeport",
        "admin": "IL",
        "population": 2168,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 568,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.34518,
          40.10511
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bridgeport",
        "admin": "PA",
        "population": 4554,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1290,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.97504,
          41.99038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bridgewater",
        "admin": "MA",
        "population": 7841,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1039,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.82053,
          39.98526
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brighton",
        "admin": "CO",
        "population": 37585,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 584,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.39997,
          37.68077
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Brisbane",
        "admin": "CA",
        "population": 4717,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 790,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.07901,
          44.13339
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bristol",
        "admin": "VT",
        "population": 2030,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 328,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.14165,
          39.86671
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Broad Ripple",
        "admin": "IN",
        "population": 17041,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 414,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.76108,
          38.85011
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Brock Hall",
        "admin": "MD",
        "population": 9552,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1053,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.79082,
          36.0526
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Broken Arrow",
        "admin": "OK",
        "population": 106563,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 10,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.86641,
          40.84985
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Bronx",
        "admin": "NY",
        "population": 1385108,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 224,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.12116,
          42.33176
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Brookline",
        "admin": "MA",
        "population": 58732,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 4,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.94958,
          40.6501
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Brooklyn",
        "admin": "NY",
        "population": 2300664,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 390,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.73541,
          41.43977
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brooklyn",
        "admin": "OH",
        "population": 10899,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 266,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.33273,
          45.07608
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brooklyn Center",
        "admin": "MN",
        "population": 30104,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1701,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.45589,
          26.15186
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Broward County",
        "admin": "FL",
        "population": 1748066,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 147,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.49748,
          25.90175
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Brownsville",
        "admin": "TX",
        "population": 183887,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 803,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.34896,
          33.99206
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bruce",
        "admin": "MS",
        "population": 1939,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1396,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.96533,
          43.91452
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Brunswick",
        "admin": "ME",
        "population": 15175,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 714,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.25372,
          30.39436
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Brusly",
        "admin": "LA",
        "population": 2589,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1551,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.41835,
          33.09873
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bryan",
        "admin": "TX",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1427,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.58378,
          33.37032
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Buckeye",
        "admin": "AZ",
        "population": 50876,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 520,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.23203,
          38.99399
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Buckhannon",
        "admin": "WV",
        "population": 5639,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 767,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.51714,
          32.31904
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Buena Vista",
        "admin": "GA",
        "population": 2173,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 939,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.72347,
          41.45642
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Buffalo",
        "admin": "IA",
        "population": 1270,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 79,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.87837,
          42.88645
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Buffalo",
        "admin": "NY",
        "population": 258071,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 594,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.75949,
          42.59907
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Buhl",
        "admin": "ID",
        "population": 4122,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 246,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.5683,
          35.14778
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bullhead City",
        "admin": "AZ",
        "population": 39540,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1615,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.5301,
          35.61122
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Buncombe County",
        "admin": "NC",
        "population": 238318,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 704,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.25784,
          29.46609
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Bunnell",
        "admin": "FL",
        "population": 2676,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1069,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.30897,
          34.18084
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Burbank",
        "admin": "CA",
        "population": 105319,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 270,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.7795,
          41.73392
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Burbank",
        "admin": "IL",
        "population": 28925,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1359,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.34679,
          47.47038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Burien",
        "admin": "WA",
        "population": 50467,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1027,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.62888,
          39.39371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Burkittsville",
        "admin": "MD",
        "population": 155,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1002,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.21207,
          44.47588
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Burlington",
        "admin": "VT",
        "population": 42452,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 962,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.42755,
          44.69284
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Burnham",
        "admin": "ME",
        "population": 1187,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 798,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.23825,
          32.55709
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Butler",
        "admin": "GA",
        "population": 1972,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 256,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.53474,
          46.00382
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Butte",
        "admin": "MT",
        "population": 34190,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 996,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.60699,
          37.03225
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Caldwell",
        "admin": "KS",
        "population": 1068,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 595,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.69303,
          30.53132
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Caldwell",
        "admin": "TX",
        "population": 4104,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1578,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.82603,
          33.77143
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Calhoun County",
        "admin": "AL",
        "population": 118572,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1581,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.57971,
          38.5788
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Calistoga",
        "admin": "CA",
        "population": 5330,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 941,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.59628,
          35.05303
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Callender",
        "admin": "CA",
        "population": 1262,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1728,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.10561,
          42.3751
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cambridge",
        "admin": "MA",
        "population": 110402,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1321,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.11962,
          39.92595
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Camden",
        "admin": "NJ",
        "population": 76119,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 759,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.74796,
          43.33451
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Camden",
        "admin": "NY",
        "population": 2231,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1378,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.94996,
          37.28717
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Campbell",
        "admin": "CA",
        "population": 41117,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 983,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.20986,
          48.48667
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cando",
        "admin": "ND",
        "population": 1115,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1554,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.03675,
          32.61264
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Canton",
        "admin": "MS",
        "population": 13676,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 407,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.82188,
          40.70661
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Canyon Rim",
        "admin": "UT",
        "population": 10062,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 168,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94953,
          26.56285
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cape Coral",
        "admin": "FL",
        "population": 175229,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1139,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.95329,
          36.97523
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Capitola",
        "admin": "CA",
        "population": 10189,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 494,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.21116,
          39.40221
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carbondale",
        "admin": "CO",
        "population": 6670,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1349,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.11804,
          39.97837
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carmel",
        "admin": "IN",
        "population": 88713,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1407,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.92329,
          36.55524
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Carmel-by-the-Sea",
        "admin": "CA",
        "population": 3897,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 949,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.45725,
          35.06394
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carnuel",
        "admin": "NM",
        "population": 1232,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 37
      }
    },
    {
      "id": 1328,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.39966,
          42.37118
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Caroline",
        "admin": "NY",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1540,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.13479,
          41.91253
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carol Stream",
        "admin": "IL",
        "population": 40356,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1520,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.51846,
          34.39888
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Carpinteria",
        "admin": "CA",
        "population": 13727,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1690,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.07529,
          35.91014
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carrboro",
        "admin": "NC",
        "population": 21156,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 364,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.65256,
          30.61686
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carriere",
        "admin": "MS",
        "population": 13198,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1637,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.02252,
          39.56286
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carroll County",
        "admin": "MD",
        "population": 167134,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 654,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.08565,
          40.57284
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carrollton",
        "admin": "OH",
        "population": 3241,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1526,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.89028,
          32.95373
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carrollton",
        "admin": "TX",
        "population": 133168,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1197,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.28202,
          33.83141
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Carson",
        "admin": "CA",
        "population": 93281,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 750,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.95165,
          36.25228
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Carthage",
        "admin": "TN",
        "population": 2306,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1732,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.76254,
          41.88344
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Carver",
        "admin": "MA",
        "population": 11718,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1614,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.78112,
          35.79154
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cary",
        "admin": "NC",
        "population": 159769,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 853,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.00237,
          38.94354
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cascade-Chipita Park",
        "admin": "CO",
        "population": 1655,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 586,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.02566,
          38.63672
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Caseyville",
        "admin": "IL",
        "population": 4245,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1575,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.14087,
          40.90972
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cass County",
        "admin": "NE",
        "population": 25241,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 441,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.02228,
          40.36479
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Castle Shannon",
        "admin": "PA",
        "population": 8316,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1568,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.46529,
          33.77974
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cathedral City",
        "admin": "CA",
        "population": 53826,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1595,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.57436,
          43.01033
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cayuga County",
        "admin": "NY",
        "population": 80026,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 618,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.48776,
          42.4601
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cayuga Heights",
        "admin": "NY",
        "population": 3729,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1377,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.44547,
          42.52776
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cedar Falls",
        "admin": "IA",
        "population": 41255,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 901,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.39987,
          39.95234
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cedar Glen Lakes",
        "admin": "NJ",
        "population": 1421,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 652,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.97561,
          40.04535
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Centerville",
        "admin": "PA",
        "population": 3263,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 824,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.12098,
          41.33176
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Central Valley",
        "admin": "NY",
        "population": 1810,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1546,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.29881,
          33.89205
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chamblee",
        "admin": "GA",
        "population": 28244,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 90,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.84125,
          33.30616
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chandler",
        "admin": "AZ",
        "population": 260828,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 911,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.86982,
          42.62786
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Charlemont",
        "admin": "MA",
        "population": 1382,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1769,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.93333333,
          32.78333333
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Charleston",
        "admin": "SC",
        "population": 120083,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 21,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.84313,
          35.22709
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Charlotte",
        "admin": "NC",
        "population": 731424,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1335,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.47668,
          38.02931
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Charlottesville",
        "admin": "VA",
        "population": 46597,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1255,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.59484,
          42.36425
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chatham",
        "admin": "NY",
        "population": 1696,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1382,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.09243,
          31.97402
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Chatham County",
        "admin": "GA",
        "population": 265128,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1691,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.25535,
          35.70258
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chatham County",
        "admin": "NC",
        "population": 63505,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 153,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.30968,
          35.04563
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chattanooga",
        "admin": "TN",
        "population": 176588,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 469,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.96402,
          46.66205
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chehalis",
        "admin": "WA",
        "population": 7259,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 659,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.94899,
          42.23474
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cherry Valley",
        "admin": "IL",
        "population": 3162,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 103,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.27494,
          36.81904
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Chesapeake",
        "admin": "VA",
        "population": 235429,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 603,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.27126,
          41.36259
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chester",
        "admin": "NY",
        "population": 3969,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 722,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.33789,
          41.52227
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chesterland",
        "admin": "OH",
        "population": 2521,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1152,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.06661,
          39.209
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Chestertown",
        "admin": "MD",
        "population": 5093,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 501,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.91581,
          38.92817
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cheverly",
        "admin": "MD",
        "population": 6173,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1042,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.07115,
          39.00287
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chevy Chase",
        "admin": "MD",
        "population": 9545,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 3,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.65005,
          41.85003
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chicago",
        "admin": "IL",
        "population": 2720546,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1163,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.83748,
          39.72849
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chico",
        "admin": "CA",
        "population": 90316,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 316,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.26018,
          37.123
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Chowchilla",
        "admin": "CA",
        "population": 18720,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 86,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.0842,
          32.64005
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Chula Vista",
        "admin": "CA",
        "population": 265757,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 69,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.51439,
          39.12711
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cincinnati",
        "admin": "OH",
        "population": 296943,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1000,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.59222,
          47.41667
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Circle",
        "admin": "MT",
        "population": 615,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 1364,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.22094,
          45.18816
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clackamas County",
        "admin": "OR",
        "population": 375992,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1365,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.93432,
          48.11044
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Clallam County",
        "admin": "WA",
        "population": 71404,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1352,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.71978,
          34.09668
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Claremont",
        "admin": "CA",
        "population": 36283,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 851,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.31374,
          34.69315
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clarendon",
        "admin": "AR",
        "population": 1664,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 322,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.57093,
          34.20011
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clarksdale",
        "admin": "MS",
        "population": 17962,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 299,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.75996,
          38.29674
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clarksville",
        "admin": "IN",
        "population": 21724,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 583,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.77114,
          37.51946
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clay Center",
        "admin": "KS",
        "population": 4300,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1341,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.62637,
          38.95823
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clearlake",
        "admin": "CA",
        "population": 15182,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1553,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.8001,
          27.96585
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Clearwater",
        "admin": "FL",
        "population": 113003,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1432,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.82707,
          42.08509
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clermont",
        "admin": "NY",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 51,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.69541,
          41.4995
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cleveland",
        "admin": "OH",
        "population": 388072,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 457,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.08549,
          30.34132
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cleveland",
        "admin": "TX",
        "population": 7675,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 210,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.16376,
          40.85843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clifton",
        "admin": "NJ",
        "population": 84136,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 252,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.89831,
          38.76511
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Clinton",
        "admin": "MD",
        "population": 35970,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1140,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.60152,
          42.94365
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clinton County",
        "admin": "MI",
        "population": 75382,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 543,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.22646,
          35.11125
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Clover",
        "admin": "SC",
        "population": 5094,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1504,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.17894,
          26.25175
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Coconut Creek",
        "admin": "FL",
        "population": 59302,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 701,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.62022,
          47.26356
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cohasset",
        "admin": "MN",
        "population": 2698,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 987,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.52385,
          38.31479
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Coldstream",
        "admin": "KY",
        "population": 1100,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 799,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.95328,
          39.10073
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Colfax",
        "admin": "CA",
        "population": 1963,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 780,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.2452,
          41.67777
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Colfax",
        "admin": "IA",
        "population": 2093,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1599,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.93692,
          38.98067
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "College Park",
        "admin": "MD",
        "population": 32301,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1289,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.33441,
          30.62798
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "College Station",
        "admin": "TX",
        "population": 107889,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1067,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.38097,
          26.09924
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Collier County",
        "admin": "FL",
        "population": 321520,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 356,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.07128,
          39.91817
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Collingswood",
        "admin": "NJ",
        "population": 13926,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1237,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.45969,
          37.67688
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Colma",
        "admin": "CA",
        "population": 1520,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 47,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.82136,
          38.83388
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Colorado Springs",
        "admin": "CO",
        "population": 456568,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 412,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.20122,
          38.44366
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Columbia",
        "admin": "IL",
        "population": 9707,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 489,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.83758,
          31.25184
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Columbia",
        "admin": "MS",
        "population": 6582,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 255,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.03528,
          35.61507
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Columbia",
        "admin": "TN",
        "population": 34681,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 943,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.03221,
          39.6011
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Columbine Valley",
        "admin": "CO",
        "population": 1256,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 133,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.98771,
          32.46098
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Columbus",
        "admin": "GA",
        "population": 200579,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 19,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.99879,
          39.96118
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Columbus",
        "admin": "OH",
        "population": 850106,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 447,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.89997,
          33.24706
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Commerce",
        "admin": "TX",
        "population": 8078,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 937,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.93981,
          34.51066
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Como",
        "admin": "MS",
        "population": 1279,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 206,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.22007,
          33.89585
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Compton",
        "admin": "CA",
        "population": 96455,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1596,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.34895,
          42.46037
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Concord",
        "admin": "MA",
        "population": 16810,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1084,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.53757,
          43.20814
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Concord",
        "admin": "NH",
        "population": 42620,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1112,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.95121,
          37.92342
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Contra Costa County",
        "admin": "CA",
        "population": 1049025,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1394,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.4421,
          35.0887
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Conway",
        "admin": "AR",
        "population": 64980,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1248,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.50164,
          36.16284
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cookeville",
        "admin": "TN",
        "population": 32113,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 739,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.39046,
          40.51149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Coopersburg",
        "admin": "PA",
        "population": 2386,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1441,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.26838,
          25.72149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Coral Gables",
        "admin": "FL",
        "population": 51117,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 176,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.56644,
          33.87529
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Corona",
        "admin": "CA",
        "population": 164226,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1153,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.18309,
          32.68589
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Coronado",
        "admin": "CA",
        "population": 24812,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 67,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.39638,
          27.80058
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Corpus Christi",
        "admin": "TX",
        "population": 324074,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1239,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.46887,
          32.09543
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Corsicana",
        "admin": "TX",
        "population": 23952,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 420,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.52748,
          37.92548
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Corte Madera",
        "admin": "CA",
        "population": 9901,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 228,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.26204,
          44.56457
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Corvallis",
        "admin": "OR",
        "population": 55780,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1684,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.68628,
          48.21982
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Coupeville",
        "admin": "WA",
        "population": 1887,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 416,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.54645,
          40.51525
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Craig",
        "admin": "CO",
        "population": 9464,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1602,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.10714,
          40.68496
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cranberry Township",
        "admin": "PA",
        "population": 28098,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1390,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.43728,
          41.77982
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cranston",
        "admin": "RI",
        "population": 81073,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 453,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.36135,
          41.0586
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Creston",
        "admin": "IA",
        "population": 7834,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 546,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.02453,
          43.9179
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Creswell",
        "admin": "OR",
        "population": 5031,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1727,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.42262,
          38.66089
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Creve Coeur",
        "admin": "MO",
        "population": 18276,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 842,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.69611,
          36.54866
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cross Plains",
        "admin": "TN",
        "population": 1714,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1256,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.89125,
          41.20843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Croton-on-Hudson",
        "admin": "NY",
        "population": 8269,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 472,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.82811,
          28.67748
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Crystal City",
        "admin": "TX",
        "population": 7138,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 35
      }
    },
    {
      "id": 833,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49842,
          24.67153
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cudjoe Key",
        "admin": "FL",
        "population": 1763,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 347,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.84361,
          34.17482
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cullman",
        "admin": "AL",
        "population": 14775,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 303,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.76252,
          39.65287
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cumberland",
        "admin": "MD",
        "population": 20859,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1657,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.43284,
          41.96677
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cumberland",
        "admin": "RI",
        "population": 34843,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1680,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.25894,
          43.79647
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cumberland Center",
        "admin": "ME",
        "population": 2499,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1075,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.3302,
          43.80608
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cumberland County",
        "admin": "ME",
        "population": 281674,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1009,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.03218,
          37.323
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cupertino",
        "admin": "CA",
        "population": 60572,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 913,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.23977,
          44.01925
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cushing",
        "admin": "ME",
        "population": 1374,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 388,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.7727,
          32.30543
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cusseta",
        "admin": "GA",
        "population": 11267,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 321,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.31061,
          25.6151
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cutler",
        "admin": "FL",
        "population": 18117,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1681,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.3377,
          25.5783
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cutler Bay",
        "admin": "FL",
        "population": 44865,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 277,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.34672,
          25.58066
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Cutler Ridge",
        "admin": "FL",
        "population": 26831,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1418,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.67786,
          41.47875
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Cuyahoga County",
        "admin": "OH",
        "population": 1280122,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1405,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.06544,
          44.67189
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dakota County",
        "admin": "MN",
        "population": 398552,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 13,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.80667,
          32.78306
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dallas",
        "admin": "TX",
        "population": 1300092,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1694,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.46192,
          37.70577
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Daly City",
        "admin": "CA",
        "population": 106562,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1631,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.48077,
          42.3523
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Danby",
        "admin": "NY",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1561,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.41832,
          43.06735
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dane County",
        "admin": "WI",
        "population": 488073,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1279,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.14393,
          26.05231
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Dania Beach",
        "admin": "FL",
        "population": 31446,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1178,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.99996,
          37.82159
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Danville",
        "admin": "CA",
        "population": 44400,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1347,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.2331,
          26.06287
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Davie",
        "admin": "FL",
        "population": 100882,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1618,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.74052,
          38.54491
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Davis",
        "admin": "CA",
        "population": 67666,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 703,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.11946,
          34.50453
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Davis",
        "admin": "OK",
        "population": 2683,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 741,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.09316,
          42.10169
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Davis Junction",
        "admin": "IL",
        "population": 2373,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 720,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.11908,
          34.42121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dawsonville",
        "admin": "GA",
        "population": 2536,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1620,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.51496,
          45.24385
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dayton",
        "admin": "MN",
        "population": 5096,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 195,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.19161,
          39.75895
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dayton",
        "admin": "OH",
        "population": 140599,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 876,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.93864,
          38.41485
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dayton",
        "admin": "VA",
        "population": 1530,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1726,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.29631,
          33.77483
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Decatur",
        "admin": "GA",
        "population": 21957,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1096,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.09977,
          26.31841
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Deerfield Beach",
        "admin": "FL",
        "population": 79768,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1150,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.12382,
          29.70523
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Deer Park",
        "admin": "TX",
        "population": 33806,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 845,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.61632,
          33.50873
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "De Kalb",
        "admin": "TX",
        "population": 1699,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 656,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.9535,
          40.05067
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Delanco",
        "admin": "NJ",
        "population": 3211,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 276,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.30312,
          29.02832
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "DeLand",
        "admin": "FL",
        "population": 27031,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1087,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.26531,
          32.95949
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Del Mar",
        "admin": "CA",
        "population": 4351,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1682,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.07282,
          26.46146
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Delray Beach",
        "admin": "FL",
        "population": 66255,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1132,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.83495,
          36.59329
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Del Rey Oaks",
        "admin": "CA",
        "population": 1688,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 346,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.75864,
          32.2687
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Deming",
        "admin": "NM",
        "population": 14855,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 462,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.8364,
          32.51764
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Demopolis",
        "admin": "AL",
        "population": 7483,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1632,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.19391,
          41.73539
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Dennis",
        "admin": "MA",
        "population": 2407,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1222,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.13307,
          33.21484
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Denton",
        "admin": "TX",
        "population": 131044,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 30,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.9847,
          39.73915
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Denver",
        "admin": "CO",
        "population": 682545,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1313,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.06038,
          44.44888
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "De Pere",
        "admin": "WI",
        "population": 24724,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 297,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.26893,
          37.54557
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Derby",
        "admin": "KS",
        "population": 22158,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 740,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.16109,
          39.11733
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Derwood",
        "admin": "MD",
        "population": 2381,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1362,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.50353,
          33.96173
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Desert Hot Springs",
        "admin": "CA",
        "population": 28335,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 116,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.60911,
          41.60054
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Des Moines",
        "admin": "IA",
        "population": 210330,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 22,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.04575,
          42.33143
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Detroit",
        "admin": "MI",
        "population": 677116,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1582,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.06548,
          43.03507
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "DeWitt",
        "admin": "NY",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 452,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.95787,
          36.79589
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dexter",
        "admin": "MO",
        "population": 7864,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 323,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.78962,
          46.87918
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dickinson",
        "admin": "ND",
        "population": 17787,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 1476,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.05132,
          29.46079
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Dickinson",
        "admin": "TX",
        "population": 19895,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 578,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.31186,
          34.5509
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dimmitt",
        "admin": "TX",
        "population": 4393,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1758,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.8139,
          32.38954
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Do√å¬±a Ana",
        "admin": "NM",
        "population": 1211,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 275,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.01708,
          37.7528
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dodge City",
        "admin": "KS",
        "population": 27340,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1693,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.89544,
          40.26511
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dolington",
        "admin": "PA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 955,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.8139,
          32.38954
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Doña Ana",
        "admin": "NM",
        "population": 1211,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 924,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.85752,
          38.10902
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dooms",
        "admin": "VA",
        "population": 1327,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 471,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.73951,
          42.05426
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Douglas",
        "admin": "MA",
        "population": 7168,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1395,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.52437,
          39.15817
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Dover",
        "admin": "DE",
        "population": 37522,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1074,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.87367,
          43.19786
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Dover",
        "admin": "NH",
        "population": 30880,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 898,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.80399,
          42.94369
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dover",
        "admin": "VT",
        "population": 1437,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 638,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.48393,
          39.11763
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Dover Base Housing",
        "admin": "DE",
        "population": 3450,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 451,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.70327,
          40.0065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Downingtown",
        "admin": "PA",
        "population": 7891,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 673,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.70811,
          36.29145
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dresden",
        "admin": "TN",
        "population": 3005,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1478,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.29716,
          42.49091
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dryden",
        "admin": "NY",
        "population": 2094,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 468,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.33049,
          39.10423
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dry Run",
        "admin": "OH",
        "population": 7281,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1636,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.97729,
          34.13945
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Duarte",
        "admin": "CA",
        "population": 21990,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1387,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.93579,
          37.70215
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dublin",
        "admin": "CA",
        "population": 57721,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 334,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.90375,
          32.54044
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dublin",
        "admin": "GA",
        "population": 16201,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 225,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.66457,
          42.50056
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dubuque",
        "admin": "IA",
        "population": 58799,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1663,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.10658,
          46.78327
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Duluth",
        "admin": "MN",
        "population": 86110,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 1008,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.90834,
          32.6518
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Duncanville",
        "admin": "TX",
        "population": 39826,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 854,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.27195,
          41.20821
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dunsmuir",
        "admin": "CA",
        "population": 1650,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1392,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.33465,
          33.94621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dunwoody",
        "admin": "GA",
        "population": 48733,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 700,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.74547,
          41.32508
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dupont",
        "admin": "PA",
        "population": 2711,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 444,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.63124,
          47.09676
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "DuPont",
        "admin": "WA",
        "population": 8199,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 523,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.85977,
          40.38146
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Duquesne",
        "admin": "PA",
        "population": 5565,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1423,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.88007,
          37.27528
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Durango",
        "admin": "CO",
        "population": 18006,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 96,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.89862,
          35.99403
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Durham",
        "admin": "NC",
        "population": 257636,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1446,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.87632,
          36.036
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Durham County",
        "admin": "NC",
        "population": 267587,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1234,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.74286,
          41.76515
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Dutchess County",
        "admin": "NY",
        "population": 297488,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 436,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80282,
          42.47263
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eagle Point",
        "admin": "OR",
        "population": 8469,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1300,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.09562,
          30.53824
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Baton Rouge Parish",
        "admin": "LA",
        "population": 440171,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 857,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.89729,
          41.79677
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Brooklyn",
        "admin": "CT",
        "population": 1638,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 170,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.24912,
          35.06535
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Chattanooga",
        "admin": "TN",
        "population": 154024,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1036,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.45476,
          41.6392
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Chicago",
        "admin": "IN",
        "population": 28699,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 331,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.66898,
          42.26676
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Easthampton",
        "admin": "MA",
        "population": 16611,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1621,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.1848,
          40.96343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "East Hampton",
        "admin": "NY",
        "population": 1122,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 181,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.33161,
          37.03737
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "East Hampton",
        "admin": "VA",
        "population": 147993,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 269,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.86843,
          41.27621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "East Haven",
        "admin": "CT",
        "population": 29257,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 796,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.91555,
          46.58966
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Helena",
        "admin": "MT",
        "population": 1984,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1097,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.48387,
          42.73698
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Lansing",
        "admin": "MI",
        "population": 48471,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 891,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.42532,
          37.79291
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Lexington",
        "admin": "VA",
        "population": 1463,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 391,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.02163,
          30.61519
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "East Milton",
        "admin": "FL",
        "population": 11074,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 150,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.88236,
          40.66677
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "East New York",
        "admin": "NY",
        "population": 173198,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 336,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.07633,
          38.77428
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Easton",
        "admin": "MD",
        "population": 15945,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 625,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.8,
          35.1
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eastover",
        "admin": "NC",
        "population": 3628,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 296,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.99622,
          40.76704
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "East Patchogue",
        "admin": "NY",
        "population": 22469,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1708,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.43937,
          33.67955
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "East Point",
        "admin": "GA",
        "population": 35467,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1018,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.05097,
          40.29622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Eatontown",
        "admin": "NJ",
        "population": 12301,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1345,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.49849,
          44.81135
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eau Claire",
        "admin": "WI",
        "population": 67778,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 222,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.47079,
          44.85469
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eden Prairie",
        "admin": "MN",
        "population": 60797,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 887,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.96346,
          44.92719
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Edgar",
        "admin": "WI",
        "population": 1479,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1471,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.16334,
          26.30174
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Edinburg",
        "admin": "TX",
        "population": 84497,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1331,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.4781,
          35.65283
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Edmond",
        "admin": "OK",
        "population": 90092,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1723,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.37736,
          47.81065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Edmonds",
        "admin": "WA",
        "population": 41375,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 958,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.03863,
          43.40809
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Edmore",
        "admin": "MI",
        "population": 1201,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 426,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.48702,
          28.6772
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eidson Road",
        "admin": "TX",
        "population": 8960,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 35
      }
    },
    {
      "id": 382,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.26969,
          29.19664
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "El Campo",
        "admin": "TX",
        "population": 11602,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 315,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.66627,
          33.20763
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "El Dorado",
        "admin": "AR",
        "population": 18884,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1525,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.52465,
          38.77874
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "El Dorado County",
        "admin": "CA",
        "population": 181058,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 693,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.91896,
          34.02926
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Electra",
        "admin": "TX",
        "population": 2791,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 355,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.72232,
          28.21668
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Elfers",
        "admin": "FL",
        "population": 13986,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 770,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.29227,
          34.78035
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Elgin",
        "admin": "OK",
        "population": 2156,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 928,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.79425,
          34.17098
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Elgin",
        "admin": "SC",
        "population": 1311,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1625,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.2107,
          40.66399
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Elizabeth",
        "admin": "NJ",
        "population": 129007,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 614,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.09033,
          39.39498
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "El Jebel",
        "admin": "CO",
        "population": 3801,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 173,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.37162,
          38.4088
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Elk Grove",
        "admin": "CA",
        "population": 166913,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 259,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.97035,
          42.00392
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Elk Grove Village",
        "admin": "IL",
        "population": 33127,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1148,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.94034,
          41.89947
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Elmhurst",
        "admin": "IL",
        "population": 45957,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 23,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.48693,
          31.75872
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "El Paso",
        "admin": "TX",
        "population": 681124,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1227,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.41647,
          33.91918
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "El Segundo",
        "admin": "CA",
        "population": 17037,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1767,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.28527778,
          37.83138889
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Emeryville",
        "admin": "CA",
        "population": 10080,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 691,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.32693,
          39.70454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Emmitsburg",
        "admin": "MD",
        "population": 2814,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1517,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.29198,
          33.03699
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Encinitas",
        "admin": "CA",
        "population": 62930,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 385,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.02103,
          42.11285
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Endwell",
        "admin": "NY",
        "population": 11446,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 849,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.56836,
          45.24894
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Enfield",
        "admin": "ME",
        "population": 1680,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1264,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.07423,
          43.03342
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Epping",
        "admin": "NH",
        "population": 1681,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 972,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.24331,
          37.56811
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Erie",
        "admin": "KS",
        "population": 1150,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1118,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.08506,
          42.12922
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Erie",
        "admin": "PA",
        "population": 99475,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1006,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.77966,
          42.75824
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Erie County",
        "admin": "NY",
        "population": 919040,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1019,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.09811,
          42.11748
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Erie County",
        "admin": "PA",
        "population": 280566,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 925,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.69474,
          36.31839
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Erin",
        "admin": "TN",
        "population": 1324,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 191,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.08642,
          33.11921
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Escondido",
        "admin": "CA",
        "population": 151451,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 969,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.49874,
          37.85033
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Esther",
        "admin": "MO",
        "population": 1161,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 502,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.09858,
          38.94334
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eudora",
        "admin": "KS",
        "population": 6136,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 365,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.14549,
          31.89127
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eufaula",
        "admin": "AL",
        "population": 13137,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 165,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.08675,
          44.05207
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eugene",
        "admin": "OR",
        "population": 163460,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1733,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.08195,
          32.83707
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Euless",
        "admin": "TX",
        "population": 54219,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1066,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.16367,
          40.80207
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Eureka",
        "admin": "CA",
        "population": 27017,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1668,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.73797,
          36.40118
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eureka Springs",
        "admin": "AR",
        "population": 2083,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 619,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.53991,
          47.46243
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Eveleth",
        "admin": "MN",
        "population": 3718,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 1655,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.05366,
          42.40843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Everett",
        "admin": "MA",
        "population": 46050,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1310,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.20208,
          47.97898
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Everett",
        "admin": "WA",
        "population": 108010,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 727,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.34266,
          48.92012
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Everson",
        "admin": "WA",
        "population": 2481,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1017,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.30637,
          38.84622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fairfax",
        "admin": "VA",
        "population": 24013,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1293,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.27622,
          38.83469
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Fairfax County",
        "admin": "VA",
        "population": 1081726,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1116,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.26373,
          41.14121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Fairfield",
        "admin": "CT",
        "population": 59052,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 713,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.17097,
          36.58511
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fairmount",
        "admin": "TN",
        "population": 2600,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 404,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.39424,
          28.59111
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fairview Shores",
        "admin": "FL",
        "population": 10239,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1269,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.17109,
          38.88233
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Falls Church",
        "admin": "VA",
        "population": 13892,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1750,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.24199,
          43.72953
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Falmouth",
        "admin": "ME",
        "population": 1855,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 304,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.15353,
          35.88452
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Farragut",
        "admin": "TN",
        "population": 20676,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 908,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.97719,
          41.24841
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Faxon",
        "admin": "PA",
        "population": 1395,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 119,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.87836,
          35.05266
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fayetteville",
        "admin": "NC",
        "population": 201963,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1393,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.26394,
          40.57624
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ferndale",
        "admin": "CA",
        "population": 1369,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1611,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.13465,
          42.46059
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ferndale",
        "admin": "MI",
        "population": 20177,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1086,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.59101,
          48.8465
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ferndale",
        "admin": "WA",
        "population": 13010,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 788,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.01337,
          36.92292
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ferrum",
        "admin": "VA",
        "population": 2043,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 733,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.32355,
          38.96885
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fillmore",
        "admin": "UT",
        "population": 2435,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 811,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.35005,
          40.31476
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fisher",
        "admin": "IL",
        "population": 1881,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 715,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.11341,
          42.11621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fiskdale",
        "admin": "MA",
        "population": 2583,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1252,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.65127,
          35.19807
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Flagstaff",
        "admin": "AZ",
        "population": 70320,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 37
      }
    },
    {
      "id": 1521,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.09696,
          33.01457
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Flower Mound",
        "admin": "TX",
        "population": 71253,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 724,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.01131,
          30.83095
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Folkston",
        "admin": "GA",
        "population": 2502,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 215,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.17606,
          38.67796
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Folsom",
        "admin": "CA",
        "population": 72203,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 125,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.43505,
          34.09223
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fontana",
        "admin": "CA",
        "population": 196069,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 518,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.47423,
          32.36459
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Forest",
        "admin": "MS",
        "population": 5684,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1735,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.11066,
          45.51984
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Forest Grove",
        "admin": "OR",
        "population": 23897,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1253,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.81802,
          33.65121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Forest Hill",
        "admin": "TX",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1737,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.59969,
          39.88704
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Forest Hills",
        "admin": "PA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 357,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.78886,
          38.73749
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Carson",
        "admin": "CO",
        "population": 13813,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 190,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.08442,
          40.58526
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Collins",
        "admin": "CO",
        "population": 161175,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 283,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.16802,
          42.49747
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Dodge",
        "admin": "IA",
        "population": 25206,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 821,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -67.83391,
          46.77227
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Fairfield",
        "admin": "ME",
        "population": 1825,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 415,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.78914,
          39.12594
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Fort George G Mead Junction",
        "admin": "MD",
        "population": 9505,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 406,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.96363,
          37.89113
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Knox",
        "admin": "KY",
        "population": 10124,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 156,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.14338,
          26.12231
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Fort Lauderdale",
        "admin": "FL",
        "population": 178590,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 643,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.33442,
          37.24694
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Lee",
        "admin": "VA",
        "population": 3393,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1077,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84059,
          26.62168
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Fort Myers",
        "admin": "FL",
        "population": 74013,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1030,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.39855,
          35.38592
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Smith",
        "admin": "AR",
        "population": 88194,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 946,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.9929,
          47.98
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Totten",
        "admin": "ND",
        "population": 1243,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1562,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.15728,
          40.59819
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fortuna",
        "admin": "CA",
        "population": 12000,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 83,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.12886,
          41.1306
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Wayne",
        "admin": "IN",
        "population": 260326,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 20,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.32085,
          32.72541
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fort Worth",
        "admin": "TX",
        "population": 833319,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1651,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.27108,
          37.55855
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Foster City",
        "admin": "CA",
        "population": 33477,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 373,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.65772,
          29.66857
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Four Corners",
        "admin": "TX",
        "population": 12382,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 761,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.71102,
          38.19809
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Four Seasons",
        "admin": "MO",
        "population": 2217,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 332,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.51084,
          40.27948
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frankfort",
        "admin": "IN",
        "population": 16422,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1356,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.87328,
          38.20091
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frankfort",
        "admin": "KY",
        "population": 27830,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1244,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.86889,
          35.92506
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Franklin",
        "admin": "TN",
        "population": 72639,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1475,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.81723,
          39.94499
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fraser",
        "admin": "CO",
        "population": 1213,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1325,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.41054,
          39.41427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frederick",
        "admin": "MD",
        "population": 69479,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1373,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.39799,
          39.47222
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frederick County",
        "admin": "MD",
        "population": 233385,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1134,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.26258,
          39.20456
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frederick County",
        "admin": "VA",
        "population": 78305,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1250,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.46054,
          38.30318
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fredericksburg",
        "admin": "VA",
        "population": 28118,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 377,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.27376,
          40.26011
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Freehold",
        "admin": "NJ",
        "population": 12052,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 107,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.98857,
          37.54827
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Fremont",
        "admin": "CA",
        "population": 232206,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 39,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.77237,
          36.74773
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fresno",
        "admin": "CA",
        "population": 520052,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 769,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.01712,
          48.53427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Friday Harbor",
        "admin": "WA",
        "population": 2162,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 953,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.13751,
          42.20646
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Friendship",
        "admin": "NY",
        "population": 1218,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1715,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.09752,
          39.57443
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frisco",
        "admin": "CO",
        "population": 3035,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1522,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.82361,
          33.15067
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frisco",
        "admin": "TX",
        "population": 154407,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 425,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.92836,
          39.65814
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Frostburg",
        "admin": "MD",
        "population": 9002,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 561,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.91655,
          44.00766
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fruitland",
        "admin": "ID",
        "population": 4684,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 787,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.92303,
          39.15094
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Fulton",
        "admin": "MD",
        "population": 2049,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1339,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.80001,
          35.58432
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Fuquay-Varina",
        "admin": "NC",
        "population": 23907,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1491,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.32483,
          29.65163
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gainesville",
        "admin": "FL",
        "population": 130128,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1020,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.20137,
          39.14344
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gaithersburg",
        "admin": "MD",
        "population": 67456,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1480,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.47598,
          39.48788
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Galloway",
        "admin": "NJ",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1601,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.7977,
          29.30135
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Galveston",
        "admin": "TX",
        "population": 50180,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 352,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.42429,
          34.80012
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gantt",
        "admin": "SC",
        "population": 14229,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1642,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.30896,
          33.88835
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gardena",
        "admin": "CA",
        "population": 60447,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1054,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.154,
          32.11437
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Garden City",
        "admin": "GA",
        "population": 8999,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 151,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.94145,
          33.77391
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Garden Grove",
        "admin": "CA",
        "population": 175393,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1080,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.90395,
          39.59931
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Garfield County",
        "admin": "CO",
        "population": 56389,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1558,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60596,
          41.417
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Garfield Heights",
        "admin": "OH",
        "population": 28097,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 97,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.66938,
          33.5165
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Garland",
        "admin": "TX",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 641,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.24192,
          38.28058
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Garnett",
        "admin": "KS",
        "population": 3415,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 498,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.13553,
          41.34949
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Garrett",
        "admin": "IN",
        "population": 6286,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 945,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.57614,
          43.19922
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gasport",
        "admin": "NY",
        "population": 1248,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 855,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.10093,
          33.8171
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gaston",
        "admin": "SC",
        "population": 1645,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1388,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.51189,
          35.71453
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gatlinburg",
        "admin": "TN",
        "population": 4184,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 300,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.30535,
          41.88753
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Geneva",
        "admin": "IL",
        "population": 21495,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 746,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.35909,
          41.51811
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Genoa",
        "admin": "OH",
        "population": 2336,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1641,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.67723,
          30.63269
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Georgetown",
        "admin": "TX",
        "population": 63716,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 998,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.15027,
          40.05627
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gerber",
        "admin": "CA",
        "population": 1060,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 209,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.27165,
          39.17316
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Germantown",
        "admin": "MD",
        "population": 86395,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 112,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.78903,
          33.35283
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gilbert",
        "admin": "AZ",
        "population": 247542,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1318,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.40674,
          43.54758
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gilford",
        "admin": "NH",
        "population": 7849,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 552,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.94244,
          32.72875
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gilmer",
        "admin": "TX",
        "population": 4905,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1037,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.56828,
          37.00578
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gilroy",
        "admin": "CA",
        "population": 53231,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 893,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77123,
          36.79122
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glade Spring",
        "admin": "VA",
        "population": 1456,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 317,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.11184,
          39.70289
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glassboro",
        "admin": "NJ",
        "population": 18579,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 465,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.59953,
          41.70093
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glastonbury Center",
        "admin": "CT",
        "population": 7387,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 98,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.18599,
          33.53865
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glendale",
        "admin": "AZ",
        "population": 240126,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 130,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.25508,
          34.14251
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glendale",
        "admin": "CA",
        "population": 191719,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 368,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.93564,
          43.13529
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glendale",
        "admin": "WI",
        "population": 12872,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1007,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.86534,
          34.13612
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glendora",
        "admin": "CA",
        "population": 52009,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 461,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.20376,
          40.80538
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glen Ridge",
        "admin": "NJ",
        "population": 7527,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 413,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.32478,
          39.55054
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Glenwood Springs",
        "admin": "CO",
        "population": 9614,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1164,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.66199,
          42.61593
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Gloucester",
        "admin": "MA",
        "population": 29781,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1652,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.52297,
          37.40121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Gloucester County",
        "admin": "VA",
        "population": 36858,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1136,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.18678,
          38.9556
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Godfrey",
        "admin": "IL",
        "population": 17759,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 783,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.69706,
          47.85677
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gold Bar",
        "admin": "WA",
        "population": 2075,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 756,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.42177,
          42.40733
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Gold Beach",
        "admin": "OR",
        "population": 2253,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 642,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.82173,
          45.82068
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Goldendale",
        "admin": "WA",
        "population": 3407,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 251,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.99277,
          35.38488
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Goldsboro",
        "admin": "NC",
        "population": 35826,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1408,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.44438,
          36.50663
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gonzales",
        "admin": "CA",
        "population": 8473,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 219,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.35821,
          33.43532
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Goodyear",
        "admin": "AZ",
        "population": 79003,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 992,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.67061,
          32.21375
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gorman",
        "admin": "TX",
        "population": 1083,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 528,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.32432,
          41.40204
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Goshen",
        "admin": "NY",
        "population": 5454,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 753,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.5166,
          30.95685
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Graceville",
        "admin": "FL",
        "population": 2278,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 814,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.93946,
          40.0861
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Granby",
        "admin": "CO",
        "population": 1864,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 892,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.13934,
          36.05443
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grand Canyon",
        "admin": "AZ",
        "population": 1460,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1233,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.04651,
          30.41992
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grand Coteau",
        "admin": "LA",
        "population": 938,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1417,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.03285,
          47.92526
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grand Forks",
        "admin": "ND",
        "population": 57011,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 742,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.38664,
          47.95493
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grand Forks Air Force Base",
        "admin": "ND",
        "population": 2367,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 728,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.75343,
          30.06131
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Grand Point",
        "admin": "LA",
        "population": 2473,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 146,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.99778,
          32.74596
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grand Prairie",
        "admin": "TX",
        "population": 187809,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 135,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.66809,
          42.96336
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grand Rapids",
        "admin": "MI",
        "population": 195097,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1285,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.5522,
          44.71624
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grand Traverse County",
        "admin": "MI",
        "population": 86986,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1146,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.14872,
          38.70144
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Granite City",
        "admin": "IL",
        "population": 29054,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 559,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43065,
          35.79652
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Granite Falls",
        "admin": "NC",
        "population": 4722,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1710,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.07807,
          32.93429
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Grapevine",
        "admin": "TX",
        "population": 51404,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 293,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.87553,
          39.00455
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenbelt",
        "admin": "MD",
        "population": 24272,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1584,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.86473,
          39.64449
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greencastle",
        "admin": "IN",
        "population": 10401,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 601,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.72777,
          39.79037
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greencastle",
        "admin": "PA",
        "population": 3996,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1401,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.00288,
          35.26885
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenfield",
        "admin": "CA",
        "population": 3991,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 309,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.59953,
          42.58759
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenfield",
        "admin": "MA",
        "population": 19753,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 766,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.80062,
          36.1534
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenfield",
        "admin": "TN",
        "population": 2182,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 626,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.523,
          39.26811
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenhills",
        "admin": "OH",
        "population": 3615,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 804,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.80493,
          38.97372
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greensboro",
        "admin": "MD",
        "population": 1931,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 78,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.79198,
          36.07264
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greensboro",
        "admin": "NC",
        "population": 285342,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1676,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.29261,
          37.6028
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greensburg",
        "admin": "KS",
        "population": 798,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1746,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.06177,
          33.41012
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenville",
        "admin": "MS",
        "population": 32156,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1315,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.36635,
          35.61266
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenville",
        "admin": "NC",
        "population": 90597,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 985,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.8123,
          42.76731
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Greenville",
        "admin": "NH",
        "population": 1108,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1167,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.53387,
          31.52434
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Groesbeck",
        "admin": "TX",
        "population": 4304,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 532,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.88379,
          39.8784
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Groveport",
        "admin": "OH",
        "population": 5363,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1426,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.62128,
          35.12164
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Grover Beach",
        "admin": "CA",
        "population": 13600,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 474,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.57184,
          34.97164
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Guadalupe",
        "admin": "CA",
        "population": 7318,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 569,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.99611,
          38.50186
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Guerneville",
        "admin": "CA",
        "population": 4534,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 973,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.74163,
          42.26969
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Guernsey",
        "admin": "WY",
        "population": 1147,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 405,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.42532,
          35.87894
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Guthrie",
        "admin": "OK",
        "population": 10191,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 806,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.44097,
          46.28106
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Gwinn",
        "admin": "MI",
        "population": 1917,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 387,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.42859,
          37.46355
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Half Moon Bay",
        "admin": "CA",
        "population": 12657,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1482,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.92834,
          36.76597
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Halifax",
        "admin": "VA",
        "population": 1249,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1220,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.14838,
          25.9812
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hallandale Beach",
        "admin": "FL",
        "population": 39488,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 417,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.82948,
          42.71589
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hamburg",
        "admin": "NY",
        "population": 9409,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1413,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.89677,
          41.39593
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hamden",
        "admin": "CT",
        "population": 59847,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1666,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.54462,
          42.82701
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hamilton",
        "admin": "NY",
        "population": 4176,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1536,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.56134,
          39.3995
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hamilton",
        "admin": "OH",
        "population": 62407,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 775,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.12649,
          32.88483
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hamlin",
        "admin": "TX",
        "population": 2124,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1068,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.34522,
          37.02987
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hampton",
        "admin": "VA",
        "population": 136454,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 248,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.72414,
          39.19289
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hanover",
        "admin": "MD",
        "population": 38088,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 844,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.65132,
          43.84474
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Harbor Beach",
        "admin": "MI",
        "population": 1703,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 745,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.46053,
          37.78006
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hardinsburg",
        "admin": "KY",
        "population": 2343,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 836,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.32185,
          36.84314
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Harlan",
        "admin": "KY",
        "population": 1745,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 986,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.97131,
          40.98064
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Harleigh",
        "admin": "PA",
        "population": 1104,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1543,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.6961,
          26.19063
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Harlingen",
        "admin": "TX",
        "population": 65774,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 535,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.98421,
          43.80175
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Harpswell Center",
        "admin": "ME",
        "population": 5281,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 630,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.5777,
          38.92372
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Harrington",
        "admin": "DE",
        "population": 3562,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 596,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.69727,
          43.43137
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Harrisburg",
        "admin": "SD",
        "population": 4089,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1372,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.86892,
          38.44957
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Harrisonburg",
        "admin": "VA",
        "population": 52538,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1653,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.68509,
          41.76371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hartford",
        "admin": "CT",
        "population": 124006,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 723,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.94691,
          38.41713
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hartley",
        "admin": "CA",
        "population": 2510,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 793,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.67415,
          35.82038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Haskell",
        "admin": "OK",
        "population": 2007,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1566,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.38839,
          40.58612
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hastings",
        "admin": "NE",
        "population": 24924,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1617,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.87875,
          40.99454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hastings-on-Hudson",
        "admin": "NY",
        "population": 8014,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1548,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.29034,
          31.32712
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hattiesburg",
        "admin": "MS",
        "population": 46805,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1661,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.35257,
          33.9164
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hawthorne",
        "admin": "CA",
        "population": 88451,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 921,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.84769,
          43.89052
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hayfield",
        "admin": "MN",
        "population": 1340,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 747,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.14016,
          32.96208
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Haynesville",
        "admin": "LA",
        "population": 2327,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 189,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0808,
          37.66882
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hayward",
        "admin": "CA",
        "population": 158289,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 311,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.66288,
          45.67151
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hazel Dell",
        "admin": "WA",
        "population": 19435,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 281,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.37095,
          38.77144
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hazelwood",
        "admin": "MO",
        "population": 25703,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1630,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.86916,
          38.61047
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Healdsburg",
        "admin": "CA",
        "population": 11742,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1756,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.41324,
          40.5069
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Heber",
        "admin": "UT",
        "population": 9198,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 421,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.41324,
          40.5069
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Heber City",
        "admin": "UT",
        "population": 9198,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 690,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.56956,
          34.41414
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Heber-Overgaard",
        "admin": "AZ",
        "population": 2822,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 37
      }
    },
    {
      "id": 1083,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.03611,
          46.59271
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Helena",
        "admin": "MT",
        "population": 30581,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 906,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.27007,
          36.54614
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Helena",
        "admin": "OK",
        "population": 1403,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1056,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.59,
          34.5291
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Helena-West Helena",
        "admin": "AR",
        "population": 11109,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1058,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.68975,
          29.57801
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Helotes",
        "admin": "TX",
        "population": 8591,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 763,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.85461,
          39.68413
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Helper",
        "admin": "UT",
        "population": 2201,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 212,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.97307,
          33.74761
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hemet",
        "admin": "CA",
        "population": 78657,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1547,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.61874,
          40.70621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hempstead",
        "admin": "NY",
        "population": 55547,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1082,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.07829,
          30.09744
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hempstead",
        "admin": "TX",
        "population": 7110,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 82,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.98194,
          36.0397
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Henderson",
        "admin": "NV",
        "population": 257729,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 231,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.62,
          36.30477
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hendersonville",
        "admin": "TN",
        "population": 51372,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1513,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.47688,
          45.00458
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hennepin County",
        "admin": "MN",
        "population": 1152425,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1071,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.29646,
          37.45771
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Henrico County",
        "admin": "VA",
        "population": 306935,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 948,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.87031,
          36.96625
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Henry Fork",
        "admin": "VA",
        "population": 1234,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 934,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.5578,
          45.35318
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Heppner",
        "admin": "OR",
        "population": 1291,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1217,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.28858,
          38.01714
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hercules",
        "admin": "CA",
        "population": 25314,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1745,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.3861,
          38.96955
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Herndon",
        "admin": "VA",
        "population": 24568,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 101,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.27811,
          25.8576
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hialeah",
        "admin": "FL",
        "population": 237069,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 666,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.45746,
          32.49042
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hideaway",
        "admin": "TX",
        "population": 3083,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1647,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.71716,
          39.07251
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Higginsville",
        "admin": "MO",
        "population": 4662,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1245,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.10795,
          39.88872
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Highland Park",
        "admin": "NJ",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 434,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.79195,
          32.83346
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Highland Park",
        "admin": "TX",
        "population": 8564,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 621,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.52468,
          28.54687
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "High Point",
        "admin": "FL",
        "population": 3686,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 978,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.16399,
          44.14027
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hilbert",
        "admin": "WI",
        "population": 1132,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 674,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.20447,
          38.35196
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hillsboro",
        "admin": "KS",
        "population": 2993,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 488,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.61159,
          39.20229
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hillsboro",
        "admin": "OH",
        "population": 6605,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1429,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.98983,
          45.52289
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hillsboro",
        "admin": "OR",
        "population": 102347,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1174,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.37942,
          37.5741
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hillsborough",
        "admin": "CA",
        "population": 11451,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1590,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.09973,
          36.07542
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hillsborough",
        "admin": "NC",
        "population": 6415,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1190,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.73816,
          32.19382
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hilton Head Island",
        "admin": "SC",
        "population": 40512,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1242,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.0798,
          42.04281
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hoffman Estates",
        "admin": "IL",
        "population": 52138,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1433,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.10893,
          42.78752
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Holland",
        "admin": "MI",
        "population": 33742,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1556,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.4016,
          36.85245
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hollister",
        "admin": "CA",
        "population": 37462,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 154,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.32674,
          34.09834
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hollywood",
        "admin": "CA",
        "population": 167664,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 196,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.14949,
          26.0112
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hollywood",
        "admin": "FL",
        "population": 149728,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 647,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.73637,
          39.46527
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Holton",
        "admin": "KS",
        "population": 3329,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 508,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.1092,
          33.74308
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Homeland",
        "admin": "CA",
        "population": 5969,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 897,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.07939,
          41.63854
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Honeyville",
        "admin": "UT",
        "population": 1441,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 330,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.20748,
          31.69261
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Horizon City",
        "admin": "TX",
        "population": 16735,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 482,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.58333,
          30.24743
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hornsby Bend",
        "admin": "TX",
        "population": 6791,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 688,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.80782,
          42.19278
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Horseheads North",
        "admin": "NY",
        "population": 2843,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 254,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.05518,
          34.5037
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hot Springs",
        "admin": "AR",
        "population": 35635,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1771,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.5625,
          47.117222
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Houghton",
        "admin": "MI",
        "population": 7708,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 6,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.36327,
          29.76328
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Houston",
        "admin": "TX",
        "population": 2099451,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1559,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.79096,
          42.25286
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hudson",
        "admin": "NY",
        "population": 6436,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1604,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.07594,
          40.73094
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hudson County",
        "admin": "NJ",
        "population": 634266,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1143,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.90782,
          42.30204
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Hull",
        "admin": "MA",
        "population": 10293,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1099,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.91582,
          40.70501
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Humboldt County",
        "admin": "CA",
        "population": 134623,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1692,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.42568,
          40.86815
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Huntington",
        "admin": "NY",
        "population": 18046,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 132,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.99923,
          33.6603
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Huntington Beach",
        "admin": "CA",
        "population": 201899,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 141,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.58594,
          34.7304
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Huntsville",
        "admin": "AL",
        "population": 190582,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1031,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.17057,
          32.82346
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hurst",
        "admin": "TX",
        "population": 39016,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1514,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.54667,
          30.5427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hutto",
        "admin": "TX",
        "population": 22722,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 807,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.93319,
          41.78482
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Hyde Park",
        "admin": "NY",
        "population": 1908,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 291,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.76469,
          39.25094
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ilchester",
        "admin": "MD",
        "population": 23476,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 464,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.43776,
          38.63595
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Independent Hill",
        "admin": "VA",
        "population": 7419,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 15,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.15804,
          39.76838
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Indianapolis",
        "admin": "IN",
        "population": 829718,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 686,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.66274,
          38.27257
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Indian Hills",
        "admin": "KY",
        "population": 2868,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1411,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.87312,
          35.66523
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Indian Wells",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 217,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.53017,
          41.66113
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Iowa City",
        "admin": "IA",
        "population": 67862,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 967,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.4155,
          29.48246
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Iowa Colony",
        "admin": "TX",
        "population": 1170,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 496,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.66867,
          33.95148
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Iowa Park",
        "admin": "TX",
        "population": 6355,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 73,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.69238,
          38.45647
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ironville",
        "admin": "KY",
        "population": 288649,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1107,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.82311,
          33.66946
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Irvine",
        "admin": "CA",
        "population": 256927,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1188,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.97224,
          32.89869
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Irving",
        "admin": "TX",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1280,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.66922,
          48.2082
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Island County",
        "admin": "WA",
        "population": 78506,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1374,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.49661,
          42.44063
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ithaca",
        "admin": "NY",
        "population": 30788,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1539,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.23382,
          29.76745
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Jacinto City",
        "admin": "TX",
        "population": 10782,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 148,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.18481,
          32.29876
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jackson",
        "admin": "MS",
        "population": 170674,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1355,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.76243,
          43.47993
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jackson",
        "admin": "WY",
        "population": 10523,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 16,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.65565,
          30.33218
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Jacksonville",
        "admin": "FL",
        "population": 868031,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 349,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.2705,
          31.96378
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jacksonville",
        "admin": "TX",
        "population": 14544,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 106,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.80569,
          40.69149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Jamaica",
        "admin": "NY",
        "population": 216866,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 249,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.12033,
          42.30982
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Jamaica Plain",
        "admin": "MA",
        "population": 37468,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1638,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.77376,
          37.31332
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "James City County",
        "admin": "VA",
        "population": 67009,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 905,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.52411,
          40.29656
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Janesville",
        "admin": "CA",
        "population": 1408,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1510,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.57431,
          47.77655
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Jefferson County",
        "admin": "WA",
        "population": 29872,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1535,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.73718,
          38.27757
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jeffersonville",
        "admin": "IN",
        "population": 46960,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 828,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.72832,
          35.61422
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jemez Pueblo",
        "admin": "NM",
        "population": 1788,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 84,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.07764,
          40.72816
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Jersey City",
        "admin": "NJ",
        "population": 264290,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1448,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.563,
          29.88772
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jersey Village",
        "admin": "TX",
        "population": 7900,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 343,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.95881,
          42.11563
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Johnson City",
        "admin": "NY",
        "population": 15174,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1065,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.58808,
          41.67155
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Johnson County",
        "admin": "IA",
        "population": 130882,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 182,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.0834,
          41.52519
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Joliet",
        "admin": "IL",
        "population": 147861,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1209,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.70428,
          35.8423
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jonesboro",
        "admin": "AR",
        "population": 73907,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 755,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.6619,
          41.98421
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Jonesville",
        "admin": "MI",
        "population": 2258,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    
    {
      "id": 658,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.05337,
          26.87978
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Juno Beach",
        "admin": "FL",
        "population": 3176,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1192,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.58723,
          42.29171
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kalamazoo",
        "admin": "MI",
        "population": 76041,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 185,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.62746,
          39.11417
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kansas City",
        "admin": "KS",
        "population": 151306,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 43,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.57857,
          39.09973
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kansas City",
        "admin": "MO",
        "population": 475378,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1579,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.14542,
          40.76843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Kearny",
        "admin": "NJ",
        "population": 42137,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1673,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.27814,
          42.93369
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Keene",
        "admin": "NH",
        "population": 23265,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 305,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.24401,
          47.75732
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Kenmore",
        "admin": "WA",
        "population": 20460,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 483,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.22585,
          32.6468
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kennedale",
        "admin": "TX",
        "population": 6763,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1283,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.24174,
          29.99409
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Kenner",
        "admin": "LA",
        "population": 67091,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1100,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.50461,
          39.09595
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kent County",
        "admin": "DE",
        "population": 162310,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 951,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.98579,
          36.31453
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kenwood",
        "admin": "OK",
        "population": 1224,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 868,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.22775,
          32.13321
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kerens",
        "admin": "TX",
        "population": 1573,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1386,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.36366,
          43.68074
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ketchum",
        "admin": "ID",
        "population": 2728,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1292,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.16883,
          39.6895
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kettering",
        "admin": "OH",
        "population": 55525,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1211,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.16282,
          25.69371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Key Biscayne",
        "admin": "FL",
        "population": 12990,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1094,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78163,
          24.55524
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Key West",
        "admin": "FL",
        "population": 25755,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1763,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.7278,
          31.11712
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Killeen",
        "admin": "TX",
        "population": 140806,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1555,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.12603,
          36.21274
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "King City",
        "admin": "CA",
        "population": 13902,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1142,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.83583,
          47.49084
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "King County",
        "admin": "WA",
        "population": 1931249,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 926,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.24855,
          39.35561
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kings Mills",
        "admin": "OH",
        "population": 1319,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 477,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.52256,
          41.48038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Kingston",
        "admin": "RI",
        "population": 6974,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1436,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.20874,
          47.68149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Kirkland",
        "admin": "WA",
        "population": 87281,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1744,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.40678,
          38.58339
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kirkwood",
        "admin": "MO",
        "population": 27750,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 930,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.29971,
          39.65471
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Kittredge",
        "admin": "CO",
        "population": 1304,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1316,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.78167,
          42.22487
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Klamath Falls",
        "admin": "OR",
        "population": 21399,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 142,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.92074,
          35.96064
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Knoxville",
        "admin": "TN",
        "population": 185291,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 555,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.30403,
          43.82802
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "La Crescent",
        "admin": "MN",
        "population": 4830,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1516,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.23958,
          43.80136
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "La Crosse",
        "admin": "WI",
        "population": 52306,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 286,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.08971,
          39.9936
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lafayette",
        "admin": "CO",
        "population": 27729,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1470,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.01984,
          30.22409
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lafayette",
        "admin": "LA",
        "population": 127657,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 339,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.86923,
          41.80503
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "La Grange",
        "admin": "IL",
        "population": 15550,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1266,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.86173,
          41.83475
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "La Grange Park",
        "admin": "IL",
        "population": 13608,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1659,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.29025,
          26.10091
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Laguna Vista",
        "admin": "TX",
        "population": 3212,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 936,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.35136,
          42.89031
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Laingsburg",
        "admin": "MI",
        "population": 1283,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1457,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.2044,
          30.21309
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Lake Charles",
        "admin": "LA",
        "population": 76070,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 782,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.43427,
          35.81619
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake City",
        "admin": "AR",
        "population": 2082,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1435,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.2682,
          44.44968
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake City",
        "admin": "MN",
        "population": 5027,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1420,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.75318,
          39.09965
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake County",
        "admin": "CA",
        "population": 64665,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1278,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7113,
          28.76147
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake County",
        "admin": "FL",
        "population": 297052,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1725,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.32726,
          33.66808
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Elsinore",
        "admin": "CA",
        "population": 61981,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 609,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.06698,
          42.62423
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Erie Beach",
        "admin": "NY",
        "population": 3872,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 525,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.1831,
          25.97759
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Forest",
        "admin": "FL",
        "population": 5522,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1354,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.28096,
          47.75676
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Lake Forest Park",
        "admin": "WA",
        "population": 13243,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1194,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.43439,
          29.03386
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Lake Jackson",
        "admin": "TX",
        "population": 27533,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 374,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.82812,
          34.61249
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Los Angeles",
        "admin": "CA",
        "population": 12328,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 424,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.24144,
          25.96509
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Lucerne",
        "admin": "FL",
        "population": 9044,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 527,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.2645,
          34.12048
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Murray of Richland",
        "admin": "SC",
        "population": 5484,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 792,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.13834,
          42.78476
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Odessa",
        "admin": "MI",
        "population": 2018,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1212,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.67065,
          45.42067
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Oswego",
        "admin": "OR",
        "population": 38496,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 866,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.6388,
          38.19864
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Ozark",
        "admin": "MO",
        "population": 1586,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 760,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.36285,
          27.2931
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Placid",
        "admin": "FL",
        "population": 2223,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1490,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.98198,
          44.27962
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lake Placid",
        "admin": "NY",
        "population": 2465,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1079,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.91583,
          39.04295
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lakeport",
        "admin": "CA",
        "population": 4807,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 929,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.49335,
          32.82235
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lakeside",
        "admin": "TX",
        "population": 1307,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 778,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.11809,
          33.83863
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lakeview",
        "admin": "CA",
        "population": 2104,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 751,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.34579,
          42.18877
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lakeview",
        "admin": "OR",
        "population": 2294,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 192,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.08137,
          39.70471
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lakewood",
        "admin": "CO",
        "population": 152597,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 671,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.35008,
          33.84683
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lakewood",
        "admin": "SC",
        "population": 3032,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1422,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.07231,
          26.61708
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Lake Worth",
        "admin": "FL",
        "population": 37498,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 164,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.13674,
          34.69804
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lancaster",
        "admin": "CA",
        "population": 156633,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1381,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.67312,
          42.45565
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lancaster",
        "admin": "MA",
        "population": 7509,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 840,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.56925,
          44.48895
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lancaster",
        "admin": "NH",
        "population": 1725,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1160,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.67031,
          42.90061
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lancaster",
        "admin": "NY",
        "population": 10258,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1416,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.30551,
          40.03788
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lancaster",
        "admin": "PA",
        "population": 59339,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 797,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.79479,
          34.70931
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lancaster Mill",
        "admin": "SC",
        "population": 1978,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1469,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.40626,
          48.04009
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Langley",
        "admin": "WA",
        "population": 1077,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1235,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.27185,
          39.93817
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lansdowne",
        "admin": "PA",
        "population": 10639,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1612,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.55553,
          42.73253
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lansing",
        "admin": "MI",
        "population": 115056,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1231,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.48147,
          30.06698
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Laplace",
        "admin": "LA",
        "population": 29872,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 512,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.7518,
          40.92788
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Larchmont",
        "admin": "NY",
        "population": 6132,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 91,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.50754,
          27.50641
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Laredo",
        "admin": "TX",
        "population": 255473,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 35
      }
    },
    {
      "id": 1191,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.78842,
          27.90979
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Largo",
        "admin": "FL",
        "population": 81000,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 395,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.3569,
          38.56685
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "La Riviera",
        "admin": "CA",
        "population": 10802,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1201,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.53525,
          37.93409
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Larkspur",
        "admin": "CA",
        "population": 12417,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 736,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -103.22271,
          38.06667
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Las Animas",
        "admin": "CO",
        "population": 2410,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 506,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.63592,
          34.03723
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Las Flores",
        "admin": "CA",
        "population": 6037,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 33,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.13722,
          36.17497
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Las Vegas",
        "admin": "NV",
        "population": 583756,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 445,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.46158,
          27.14378
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Laurel",
        "admin": "FL",
        "population": 8171,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1665,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.35257,
          33.88724
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lawndale",
        "admin": "CA",
        "population": 33430,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1454,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.23525,
          38.97167
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lawrence",
        "admin": "KS",
        "population": 93917,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1492,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.16311,
          42.70704
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lawrence",
        "admin": "MA",
        "population": 80231,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 606,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.8008,
          40.34564
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lawrence Park",
        "admin": "PA",
        "population": 3915,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1302,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.39033,
          34.60869
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lawton",
        "admin": "OK",
        "population": 96655,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 540,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.04442,
          39.09233
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Layhill",
        "admin": "MD",
        "population": 5169,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1499,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.09493,
          29.50745
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "League City",
        "admin": "TX",
        "population": 98312,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1103,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.25176,
          43.64229
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lebanon",
        "admin": "NH",
        "population": 13579,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 754,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.40644,
          40.32804
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lebanon South",
        "admin": "PA",
        "population": 2270,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 950,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.40041,
          31.09463
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lecompte",
        "admin": "LA",
        "population": 1227,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1468,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.81635,
          38.96584
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lenexa",
        "admin": "KS",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 432,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.25603,
          35.7973
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lenoir City",
        "admin": "TN",
        "population": 8642,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1012,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.75979,
          42.52509
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Leominster",
        "admin": "MA",
        "population": 41569,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1226,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.27788,
          30.45804
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Leon County",
        "admin": "FL",
        "population": 275487,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 663,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.95647,
          34.8907
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lesslie",
        "admin": "SC",
        "population": 3112,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 839,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.04164,
          44.88385
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lester Prairie",
        "admin": "MN",
        "population": 1730,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1368,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.21478,
          44.10035
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lewiston",
        "admin": "ME",
        "population": 36202,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 909,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.30557,
          44.8839
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lewiston",
        "admin": "MI",
        "population": 1392,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 1391,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.99417,
          33.04623
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lewisville",
        "admin": "TX",
        "population": 104039,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 99,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.47772,
          37.98869
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lexington",
        "admin": "KY",
        "population": 225366,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1055,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.2245,
          42.44732
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Lexington",
        "admin": "MA",
        "population": 31394,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 475,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.44282,
          37.78402
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lexington",
        "admin": "VA",
        "population": 7042,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 70,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.45855,
          38.0498
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lexington-Fayette",
        "admin": "KY",
        "population": 314488,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 744,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.94855,
          32.44543
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Liberty City",
        "admin": "TX",
        "population": 2351,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 241,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.29301,
          38.89156
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lincoln",
        "admin": "CA",
        "population": 42819,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1357,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.30395,
          42.42593
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Lincoln",
        "admin": "MA",
        "population": 8197,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 961,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.33465,
          38.39086
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lincoln",
        "admin": "MO",
        "population": 1190,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 81,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.66696,
          40.8
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lincoln",
        "admin": "NE",
        "population": 277348,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 450,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.01789,
          44.95816
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Lincoln City",
        "admin": "OR",
        "population": 7930,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 294,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.14331,
          38.81845
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lincolnia",
        "admin": "VA",
        "population": 22855,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 350,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.02619,
          42.41058
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lindenhurst",
        "admin": "IL",
        "population": 14462,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 128,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.28959,
          34.74648
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Little Rock",
        "admin": "AR",
        "population": 197992,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1717,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.76801,
          37.68187
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Livermore",
        "admin": "CA",
        "population": 88126,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 832,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.74787,
          30.50213
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Livingston",
        "admin": "LA",
        "population": 1769,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 533,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.93299,
          30.71103
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Livingston",
        "admin": "TX",
        "population": 5335,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 620,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.47804,
          38.78623
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Loch Lomond",
        "admin": "VA",
        "population": 3701,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 366,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44257,
          28.61944
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lockhart",
        "admin": "FL",
        "population": 13060,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 818,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -101.44155,
          34.12452
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lockney",
        "admin": "TX",
        "population": 1842,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 669,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.52651,
          43.31388
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lodi",
        "admin": "WI",
        "population": 3050,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 235,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.83439,
          41.73549
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Logan",
        "admin": "UT",
        "population": 48174,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 401,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.90074,
          33.839
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Loganville",
        "admin": "GA",
        "population": 10458,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1507,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.31507,
          33.79224
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lomita",
        "admin": "CA",
        "population": 20785,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 409,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.44825,
          39.88645
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "London",
        "admin": "OH",
        "population": 9904,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 858,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.38773,
          33.78566
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lone Star",
        "admin": "TX",
        "population": 1631,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 42,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.18923,
          33.76696
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Long Beach",
        "admin": "CA",
        "population": 474140,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 589,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.0523,
          41.35399
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Long Hill",
        "admin": "CT",
        "population": 4205,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1570,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.74049,
          32.5007
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Longview",
        "admin": "TX",
        "population": 82287,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1135,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.13746,
          37.37966
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Los Altos Hills",
        "admin": "CA",
        "population": 8419,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 2,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.24368,
          34.05223
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Los Angeles",
        "admin": "CA",
        "population": 3971883,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1035,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.26102,
          34.19801
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Los Angeles County",
        "admin": "CA",
        "population": 9818605,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 87,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.75941,
          38.25424
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Louisville",
        "admin": "KY",
        "population": 243639,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 487,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.05506,
          33.12374
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Louisville",
        "admin": "MS",
        "population": 6631,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1445,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.31617,
          42.63342
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lowell",
        "admin": "MA",
        "population": 110699,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 615,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.34196,
          42.93364
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lowell",
        "admin": "MI",
        "population": 3783,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 636,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.49185,
          43.78674
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lowville",
        "admin": "NY",
        "population": 3470,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 94,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -101.85517,
          33.57786
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lubbock",
        "admin": "TX",
        "population": 249042,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1270,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.46826,
          41.68419
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lucas County",
        "admin": "OH",
        "population": 441815,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 577,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.54744,
          39.09256
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ludlow",
        "admin": "KY",
        "population": 4407,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1258,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.69354,
          40.11566
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ludwigs Corner",
        "admin": "PA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1679,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.7291,
          31.33824
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lufkin",
        "admin": "TX",
        "population": 36333,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 696,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.66629,
          34.3876
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lula",
        "admin": "GA",
        "population": 2758,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1028,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.14225,
          37.41375
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lynchburg",
        "admin": "VA",
        "population": 79812,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 392,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.60163,
          38.25674
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Lyndon",
        "admin": "KY",
        "population": 11002,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 752,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.99671,
          46.21485
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mabton",
        "admin": "WA",
        "population": 2286,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 882,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.2126,
          37.75845
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "MacArthur",
        "admin": "WV",
        "population": 1500,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 667,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.55519,
          40.51593
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Macungie",
        "admin": "PA",
        "population": 3074,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1419,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.06072,
          36.96134
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Madera",
        "admin": "CA",
        "population": 64208,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 337,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.4171,
          40.75982
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Madison",
        "admin": "NJ",
        "population": 15845,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 92,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.40123,
          43.07305
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Madison",
        "admin": "WI",
        "population": 248951,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 627,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -109.58681,
          40.47718
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Maeser",
        "admin": "UT",
        "population": 3601,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1061,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.9516,
          45.06969
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mahtomedi",
        "admin": "MN",
        "population": 8116,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1484,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.06616,
          42.4251
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Malden",
        "admin": "MA",
        "population": 61068,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1110,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.73263,
          40.94871
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Mamaroneck",
        "admin": "NY",
        "population": 19375,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": null
      }
    },
    {
      "id": 1046,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.45479,
          42.99564
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Manchester",
        "admin": "NH",
        "population": 110229,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 843,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.23026,
          42.96979
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Manchester",
        "admin": "NY",
        "population": 1709,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 791,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.60936,
          38.68813
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Manchester",
        "admin": "OH",
        "population": 2023,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 319,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.88958,
          46.82666
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mandan",
        "admin": "ND",
        "population": 18331,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 230,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.57167,
          39.18361
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Manhattan",
        "admin": "KS",
        "population": 52281,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 8,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.96625,
          40.78343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Manhattan",
        "admin": "NY",
        "population": 1487536,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1361,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.41091,
          33.88474
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Manhattan Beach",
        "admin": "CA",
        "population": 35818,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 554,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.39496,
          40.16343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Manheim",
        "admin": "PA",
        "population": 4858,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1014,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.00915,
          44.15906
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mankato",
        "admin": "MN",
        "population": 41044,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 847,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.53414,
          42.52914
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Manson",
        "admin": "IA",
        "population": 1690,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 890,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.15841,
          47.88486
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Manson",
        "admin": "WA",
        "population": 1468,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 959,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.75575,
          44.06913
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mantorville",
        "admin": "MN",
        "population": 1197,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 687,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.48406,
          31.56878
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Many",
        "admin": "LA",
        "population": 2853,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 449,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.57853,
          40.13023
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mapleton",
        "admin": "UT",
        "population": 7979,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1120,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.27348,
          40.73121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Maplewood",
        "admin": "NJ",
        "population": 25008,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 877,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.8404,
          44.92913
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Marathon",
        "admin": "WI",
        "population": 1524,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1064,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.85783,
          42.5001
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Marblehead",
        "admin": "MA",
        "population": 19808,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1119,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.75761,
          34.77371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Marianna",
        "admin": "AR",
        "population": 3766,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1360,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.49123,
          33.34883
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Maricopa County",
        "admin": "AZ",
        "population": 3817117,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1452,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45484,
          39.41535
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Marietta",
        "admin": "OH",
        "population": 13900,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1671,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.80217,
          36.6844
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Marina",
        "admin": "CA",
        "population": 21229,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 706,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.50914,
          37.86854
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Marin City",
        "admin": "CA",
        "population": 2666,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1515,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.74886,
          38.05518
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Marin County",
        "admin": "CA",
        "population": 252409,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1585,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.51955,
          30.4913
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Maringouin",
        "admin": "LA",
        "population": 1061,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 888,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.99011,
          43.7072
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Markesan",
        "admin": "WI",
        "population": 1476,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 622,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.71497,
          38.83622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Marlboro Meadows",
        "admin": "MD",
        "population": 3672,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 984,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.38316,
          36.18701
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Marmaduke",
        "admin": "AR",
        "population": 1111,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 605,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.69364,
          39.39143
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Marshall",
        "admin": "IL",
        "population": 3933,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 737,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.36701,
          34.98849
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Marshville",
        "admin": "NC",
        "population": 2402,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1137,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.13413,
          38.01937
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Martinez",
        "admin": "CA",
        "population": 38137,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 800,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.32418,
          40.31119
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Martinsburg",
        "admin": "PA",
        "population": 1958,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1430,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.87254,
          36.69153
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Martinsville",
        "admin": "VA",
        "population": 13645,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 378,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.87247,
          40.3461
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Maryville",
        "admin": "MO",
        "population": 11972,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 762,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.54675,
          29.68632
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Mathews",
        "admin": "LA",
        "population": 2209,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 681,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.8072,
          41.66595
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Mattapoisett Center",
        "admin": "MA",
        "population": 2915,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 848,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.58608,
          35.48211
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Maury",
        "admin": "NC",
        "population": 1685,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 576,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.07735,
          43.79719
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mauston",
        "admin": "WI",
        "population": 4423,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 637,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.37272,
          39.49478
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mayfield",
        "admin": "OH",
        "population": 3294,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 773,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.72766,
          39.45234
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mays Landing",
        "admin": "NJ",
        "population": 2135,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1048,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.23001,
          26.20341
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "McAllen",
        "admin": "TX",
        "population": 140269,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 771,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.23478,
          40.3709
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "McDonald",
        "admin": "PA",
        "population": 2149,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1541,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.61527,
          33.19762
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "McKinney",
        "admin": "TX",
        "population": 162898,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 261,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.19872,
          45.21012
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "McMinnville",
        "admin": "OR",
        "population": 32187,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1537,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.588,
          29.65134
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Meadows Place",
        "admin": "TX",
        "population": 4759,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 74,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.70905,
          38.41258
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Meads",
        "admin": "KY",
        "population": 288649,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 386,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.26696,
          36.09597
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mebane",
        "admin": "NC",
        "population": 11393,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 947,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.24632,
          44.17413
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Medford",
        "admin": "MN",
        "population": 1239,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 963,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.76881,
          42.89642
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Memphis",
        "admin": "MI",
        "population": 1183,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 24,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.04898,
          35.14953
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Memphis",
        "admin": "TN",
        "population": 655770,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 889,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.78646,
          30.91767
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Menard",
        "admin": "TX",
        "population": 1471,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1524,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.43155,
          39.43362
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Mendocino County",
        "admin": "CA",
        "population": 87841,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1400,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.18219,
          37.45383
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Menlo Park",
        "admin": "CA",
        "population": 33449,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1567,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.22207,
          47.57065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Mercer Island",
        "admin": "WA",
        "population": 25042,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 676,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.84528,
          39.53957
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Meridian",
        "admin": "CO",
        "population": 2970,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1247,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.36358,
          42.68976
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Meridian",
        "admin": "MI",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1509,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.70366,
          32.36431
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Meridian",
        "admin": "MS",
        "population": 39661,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 44,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.82264,
          33.42227
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mesa",
        "admin": "AZ",
        "population": 471825,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1022,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.59916,
          32.7668
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mesquite",
        "admin": "TX",
        "population": 144788,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 193,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.16396,
          29.97854
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Metairie Terrace",
        "admin": "LA",
        "population": 142489,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 490,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.732,
          37.15117
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Metropolis",
        "admin": "IL",
        "population": 6537,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 50,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.19366,
          25.77427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Miami",
        "admin": "FL",
        "population": 441003,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1151,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.13005,
          25.79065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Miami Beach",
        "admin": "FL",
        "population": 92312,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1634,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.49867,
          25.60897
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Miami-Dade County",
        "admin": "FL",
        "population": 2496435,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1461,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.20255,
          25.97981
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Miami Gardens",
        "admin": "FL",
        "population": 2706,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1063,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.89503,
          41.70754
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Michigan City",
        "admin": "IN",
        "population": 31459,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 721,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.04875,
          39.00175
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Middleport",
        "admin": "OH",
        "population": 2530,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 396,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.71658,
          36.60842
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Middlesboro",
        "admin": "KY",
        "population": 10730,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 236,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.65065,
          41.56232
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Middletown",
        "admin": "CT",
        "population": 46756,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 593,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.54471,
          39.44371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Middletown",
        "admin": "MD",
        "population": 4136,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 427,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.73108,
          40.19981
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Middletown",
        "admin": "PA",
        "population": 8901,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 916,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.5641,
          35.87952
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Midtown",
        "admin": "TN",
        "population": 1360,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1437,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.3967,
          35.44951
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Midwest City",
        "admin": "OK",
        "population": 57249,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 678,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.65441,
          45.7558
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Milaca",
        "admin": "MN",
        "population": 2946,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 981,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.785,
          40.94173
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Milesburg",
        "admin": "PA",
        "population": 1123,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1298,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.38719,
          37.59855
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Millbrae",
        "admin": "CA",
        "population": 22795,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 662,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94928,
          32.80405
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Millen",
        "admin": "GA",
        "population": 3120,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 777,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.23759,
          36.1893
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Millers Creek",
        "admin": "NC",
        "population": 2112,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 862,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.48443,
          41.10729
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mill Hall",
        "admin": "PA",
        "population": 1613,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 995,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.52968,
          43.28141
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Millington",
        "admin": "MI",
        "population": 1072,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1273,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.30382,
          36.07135
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Milpitas",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 524,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.944,
          42.77556
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Milton",
        "admin": "WI",
        "population": 5546,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 31,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.90647,
          43.0389
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Milwaukee",
        "admin": "WI",
        "population": 600155,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 726,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.17985,
          42.86
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mineral Point",
        "admin": "WI",
        "population": 2487,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 54,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.26384,
          44.97997
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Minneapolis",
        "admin": "MN",
        "population": 410939,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 411,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.64871,
          45.65901
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Minnehaha",
        "admin": "WA",
        "population": 9771,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1183,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.23227,
          25.98731
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Miramar",
        "admin": "FL",
        "population": 137132,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1412,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.65579,
          39.02778
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mission",
        "admin": "KS",
        "population": 9491,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1389,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.32529,
          26.21591
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mission",
        "admin": "TX",
        "population": 83298,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 634,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.6169,
          39.01778
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mission Hills",
        "admin": "KS",
        "population": 3498,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1639,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.994,
          46.87215
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Missoula",
        "admin": "MT",
        "population": 71022,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1569,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.92371,
          47.03649
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Missoula County",
        "admin": "MT",
        "population": 109299,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1367,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.53772,
          29.61857
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Missouri City",
        "admin": "TX",
        "population": 74139,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 342,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.0298,
          43.70943
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mitchell",
        "admin": "SD",
        "population": 15254,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 127,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.04305,
          30.69436
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Mobile",
        "admin": "AL",
        "population": 194288,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 118,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.99688,
          37.6391
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Modesto",
        "admin": "CA",
        "population": 201165,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 732,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.24011,
          38.74699
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Moline Acres",
        "admin": "MO",
        "population": 2442,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1442,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.15815,
          40.28755
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Monmouth County",
        "admin": "NJ",
        "population": 630380,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 234,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.1193,
          32.50931
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Monroe",
        "admin": "LA",
        "population": 49598,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1230,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.54951,
          34.98543
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Monroe",
        "admin": "NC",
        "population": 34623,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1465,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.91705,
          25.55731
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Monroe County",
        "admin": "FL",
        "population": 73090,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1736,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.49426,
          41.9214
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Monroe County",
        "admin": "MI",
        "population": 152021,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1574,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.63626,
          43.16512
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Monroe County",
        "admin": "NY",
        "population": 744344,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 896,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.5278,
          41.7282
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montague",
        "admin": "CA",
        "population": 1443,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 743,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.35701,
          43.41668
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montague",
        "admin": "MI",
        "population": 2361,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 310,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.33971,
          38.61095
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Montclair",
        "admin": "VA",
        "population": 19570,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1706,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.89468,
          36.60024
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Monterey",
        "admin": "CA",
        "population": 28338,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1198,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.12285,
          34.06251
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Monterey Park",
        "admin": "CA",
        "population": 61468,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1699,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.99246,
          37.23633
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Monte Sereno",
        "admin": "CA",
        "population": 3556,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 114,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.29997,
          32.36681
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montgomery",
        "admin": "AL",
        "population": 205764,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1425,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.75377,
          40.47844
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montgomery",
        "admin": "NJ",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1333,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.69634,
          30.38826
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montgomery",
        "admin": "TX",
        "population": 806,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1415,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.20424,
          39.13638
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montgomery County",
        "admin": "MD",
        "population": 971777,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1498,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.3673,
          40.21083
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montgomery County",
        "admin": "PA",
        "population": 799874,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1656,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.50301,
          30.30021
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montgomery County",
        "admin": "TX",
        "population": 455746,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1629,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.57539,
          44.26006
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Montpelier",
        "admin": "VT",
        "population": 7592,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1564,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.4867,
          35.33951
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Moore",
        "admin": "OK",
        "population": 60451,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1337,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.88204,
          34.28556
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Moorpark",
        "admin": "CA",
        "population": 36104,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 655,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.88091,
          41.71288
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Moosup",
        "admin": "CT",
        "population": 3231,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 129,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.23059,
          33.93752
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Moreno Valley",
        "admin": "CA",
        "population": 193365,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1284,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.65439,
          37.1305
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Morgan Hill",
        "admin": "CA",
        "population": 42948,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 738,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.6836,
          37.2256
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Morgantown",
        "admin": "KY",
        "population": 2394,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 815,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.8086,
          33.74816
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Morris",
        "admin": "AL",
        "population": 1859,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 999,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.45565,
          39.42005
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Morrisonville",
        "admin": "IL",
        "population": 1056,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1129,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.82556,
          35.82348
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Morrisville",
        "admin": "NC",
        "population": 23820,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1246,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.8499,
          35.36581
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Morro Bay",
        "admin": "CA",
        "population": 10639,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 292,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.78256,
          42.04059
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Morton Grove",
        "admin": "IL",
        "population": 23270,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1013,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.00017,
          46.73239
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Moscow",
        "admin": "ID",
        "population": 25060,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 982,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.66599,
          35.08529
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mountainaire",
        "admin": "AZ",
        "population": 1119,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 37
      }
    },
    {
      "id": 383,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.12936,
          33.84427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mountain Park",
        "admin": "GA",
        "population": 11554,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 697,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.11765,
          35.86841
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mountain View",
        "admin": "AR",
        "population": 2748,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 650,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80009,
          45.0679
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Angel",
        "admin": "OR",
        "population": 3286,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 260,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.0495,
          40.35535
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Lebanon",
        "admin": "PA",
        "population": 32730,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 574,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.54115,
          40.14896
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Pleasant",
        "admin": "PA",
        "population": 4454,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 600,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53313,
          28.80805
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Plymouth",
        "admin": "FL",
        "population": 4011,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1366,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.96498,
          38.9415
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Mount Rainier",
        "admin": "MD",
        "population": 8475,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1175,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.31225,
          41.31024
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Shasta",
        "admin": "CA",
        "population": 3296,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 571,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.41684,
          41.92195
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Vernon",
        "admin": "IA",
        "population": 4506,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 567,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.81854,
          37.10367
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Vernon",
        "admin": "MO",
        "population": 4575,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1669,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.22133,
          33.18873
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Mount Vernon",
        "admin": "TX",
        "population": 2753,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 931,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.62286,
          33.44926
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Munday",
        "admin": "TX",
        "population": 1300,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 914,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.08945,
          26.25646
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Muniz",
        "admin": "TX",
        "population": 1370,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 859,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.03463,
          35.08758
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Murphy",
        "admin": "NC",
        "population": 1627,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1687,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.21753,
          33.55003
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Murrieta",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1563,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.24839,
          43.23418
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Muskegon",
        "admin": "MI",
        "population": 38401,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 463,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.09946,
          41.28346
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Nantucket",
        "admin": "MA",
        "population": 7446,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 194,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.14729,
          41.78586
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Naperville",
        "admin": "IL",
        "population": 147100,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1528,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79596,
          26.14234
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Naples",
        "admin": "FL",
        "population": 21512,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 430,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.12522,
          41.39227
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Napoleon",
        "admin": "OH",
        "population": 8749,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1376,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.26046,
          40.00845
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Narberth",
        "admin": "PA",
        "population": 4309,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1438,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.46757,
          42.76537
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nashua",
        "admin": "NH",
        "population": 87970,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 37,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.78444,
          36.16589
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nashville",
        "admin": "TN",
        "population": 530852,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1257,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.61012,
          42.51591
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nassau",
        "admin": "NY",
        "population": 1124,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1047,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.58545,
          40.73217
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Nassau County",
        "admin": "NY",
        "population": 1339532,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 675,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.48619,
          30.54622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Natalbany",
        "admin": "LA",
        "population": 2984,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1044,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.40317,
          31.56044
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Natchez",
        "admin": "MS",
        "population": 15128,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1032,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.3495,
          42.28343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Natick",
        "admin": "MA",
        "population": 32276,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1628,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.0992,
          32.67811
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "National City",
        "admin": "CA",
        "population": 61060,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 263,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.86357,
          30.40159
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Navarre",
        "admin": "FL",
        "population": 31378,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1173,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.23283,
          42.28343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Needham",
        "admin": "MA",
        "population": 28886,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 282,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.46261,
          44.18582
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Neenah",
        "admin": "WI",
        "population": 25501,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 903,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.77727,
          32.40681
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nellieburg",
        "admin": "MS",
        "population": 1414,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 795,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.62227,
          34.089
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nettleton",
        "admin": "MS",
        "population": 1992,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1496,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.01779,
          39.26173
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nevada City",
        "admin": "CA",
        "population": 3152,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 448,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.00784,
          34.49427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Albany",
        "admin": "MS",
        "population": 8034,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 965,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.44152,
          35.70174
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Newark",
        "admin": "AR",
        "population": 1176,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1029,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.04024,
          37.52966
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newark",
        "admin": "CA",
        "population": 45336,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 77,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.17237,
          40.73566
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newark",
        "admin": "NJ",
        "population": 277140,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 422,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.09525,
          43.04673
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Newark",
        "admin": "NY",
        "population": 9145,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 446,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.72833,
          38.76734
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Baltimore",
        "admin": "VA",
        "population": 8119,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1351,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.93421,
          41.63622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New Bedford",
        "admin": "MA",
        "population": 94958,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1011,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.12445,
          29.703
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Braunfels",
        "admin": "TX",
        "population": 70543,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1711,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.45182,
          40.48622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Brunswick",
        "admin": "NJ",
        "population": 57035,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1501,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.87728,
          42.81259
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newburyport",
        "admin": "MA",
        "population": 17982,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 402,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.15568,
          47.53899
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newcastle",
        "admin": "WA",
        "population": 10380,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1286,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.63898,
          39.57833
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New Castle County",
        "admin": "DE",
        "population": 538479,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 789,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.27448,
          41.55837
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Chicago",
        "admin": "IN",
        "population": 2035,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1440,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.86561,
          34.18141
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New Hanover County",
        "admin": "NC",
        "population": 202667,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1772,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.923611,
          41.31
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New Haven",
        "admin": "CT",
        "population": 129779,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1050,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.99713,
          37.50514
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Kent County",
        "admin": "VA",
        "population": 18429,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 718,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.16541,
          43.87914
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Lisbon",
        "admin": "WI",
        "population": 2554,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 977,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.06705,
          39.52452
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Matamoras",
        "admin": "OH",
        "population": 1135,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 59,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.07507,
          29.95465
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New Orleans",
        "admin": "LA",
        "population": 389617,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 786,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.88915,
          39.72199
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Palestine",
        "admin": "IN",
        "population": 2055,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1713,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.08681,
          41.74759
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Paltz",
        "admin": "NY",
        "population": 7070,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 831,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.27394,
          44.83534
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newport",
        "admin": "ME",
        "population": 1776,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 639,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.00049,
          44.86636
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Newport",
        "admin": "MN",
        "population": 3435,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 408,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.05345,
          44.63678
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newport",
        "admin": "OR",
        "population": 9989,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1350,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.31283,
          41.4901
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newport",
        "admin": "RI",
        "population": 24232,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 140,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.46965,
          37.08339
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Newport News",
        "admin": "VA",
        "population": 182385,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1187,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.78235,
          40.91149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New Rochelle",
        "admin": "NY",
        "population": 79846,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 25,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.05676,
          35.08676
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New South Memphis",
        "admin": "TN",
        "population": 641608,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 478,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.02942,
          41.13956
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Square",
        "admin": "NY",
        "population": 6944,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 313,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.34504,
          38.04668
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Newton",
        "admin": "KS",
        "population": 19132,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 805,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.49018,
          47.98085
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "New Town",
        "admin": "ND",
        "population": 1925,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 1,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.4999,
          43.00035
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New York",
        "admin": "NY",
        "population": 19274244,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1751,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.00597,
          40.71427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "New York City",
        "admin": "NY",
        "population": 8175133,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1443,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.05671,
          43.0945
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Niagara Falls",
        "admin": "NY",
        "population": 48916,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 273,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.573,
          37.88063
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nicholasville",
        "admin": "KY",
        "population": 28015,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 267,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.80284,
          42.01892
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Niles",
        "admin": "IL",
        "population": 29803,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1169,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.93425,
          31.34038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nogales",
        "admin": "AZ",
        "population": 20252,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 1
      }
    },
    {
      "id": 88,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.28522,
          36.84681
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Norfolk",
        "admin": "VA",
        "population": 242803,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1594,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.43948,
          35.22257
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Norman",
        "admin": "OK",
        "population": 120284,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1297,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.13506,
          42.6987
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "North Andover",
        "admin": "MA",
        "population": 28222,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 932,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.5556,
          40.59618
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Apollo",
        "admin": "PA",
        "population": 1297,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 301,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96512,
          33.5018
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Augusta",
        "admin": "SC",
        "population": 21348,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 308,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.53346,
          40.69149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "North Bellmore",
        "admin": "NY",
        "population": 19941,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1105,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.482,
          40.454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "North Brunswick",
        "admin": "NJ",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 529,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.7809,
          42.09975
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Northfield",
        "admin": "IL",
        "population": 5420,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1124,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.1616,
          44.4583
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Northfield",
        "admin": "MN",
        "population": 20380,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 117,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.26452,
          34.16056
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Glendale",
        "admin": "CA",
        "population": 203201,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1089,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.9872,
          39.88554
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Northglenn",
        "admin": "CO",
        "population": 39197,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 105,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.1175,
          36.19886
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Las Vegas",
        "admin": "NV",
        "population": 216961,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1041,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.18671,
          25.89009
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "North Miami",
        "admin": "FL",
        "population": 62435,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1091,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.23593,
          27.04422
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "North Port",
        "admin": "FL",
        "population": 62345,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 772,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.40537,
          42.93446
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Prairie",
        "admin": "WI",
        "population": 2141,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 257,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.46617,
          41.8501
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Providence",
        "admin": "RI",
        "population": 33835,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1081,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.2289,
          32.8343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Richland Hills",
        "admin": "TX",
        "population": 69204,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 486,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.82311,
          41.84281
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Riverside",
        "admin": "IL",
        "population": 6672,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 265,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.72457,
          41.31366
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Royalton",
        "admin": "OH",
        "population": 30444,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1502,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.57124,
          41.33482
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "North Salem",
        "admin": "NY",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 665,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.65836,
          37.08209
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "North Shore",
        "admin": "VA",
        "population": 3094,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 653,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.07922,
          41.77685
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Northwest Harwinton",
        "admin": "CT",
        "population": 3252,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 587,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28345,
          38.70422
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Northwoods",
        "admin": "MO",
        "population": 4227,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 682,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.6029,
          46.96315
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "North Yelm",
        "admin": "WA",
        "population": 2906,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 680,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.89151,
          39.83389
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Norton",
        "admin": "KS",
        "population": 2928,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1108,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.07591,
          41.52426
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Norwich",
        "admin": "CT",
        "population": 39899,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 271,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.1995,
          42.19454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Norwood",
        "admin": "MA",
        "population": 28602,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 881,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.92747,
          44.76802
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Norwood (historical)",
        "admin": "MN",
        "population": 1506,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 631,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.92163,
          44.77357
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Norwood Young America",
        "admin": "MN",
        "population": 3549,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 493,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.14587,
          33.80141
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nuevo",
        "admin": "CA",
        "population": 6447,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1272,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.91791,
          41.09065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Nyack",
        "admin": "NY",
        "population": 7004,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 826,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.62672,
          29.92712
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Oak Cliff Place",
        "admin": "TX",
        "population": 1800,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1606,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.96494,
          44.96302
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oakdale",
        "admin": "MN",
        "population": 28080,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 53,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2708,
          37.80437
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Oakland",
        "admin": "CA",
        "population": 419267,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 910,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.77897,
          46.93191
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oakport",
        "admin": "MN",
        "population": 1387,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1705,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.26964,
          36.01036
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oak Ridge",
        "admin": "TN",
        "population": 29302,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 635,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.1624,
          39.80122
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oak Valley",
        "admin": "NJ",
        "population": 3483,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1460,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.77882,
          39.96728
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oakwood Village",
        "admin": "OH",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1117,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.21738,
          41.29394
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oberlin",
        "admin": "OH",
        "population": 8350,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 155,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.37948,
          33.19587
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Oceanside",
        "admin": "CA",
        "population": 175691,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 253,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54396,
          28.56917
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ocoee",
        "admin": "FL",
        "population": 35579,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1332,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.36764,
          31.84568
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Odessa",
        "admin": "TX",
        "population": 118968,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 994,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.05229,
          38.61727
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Odin",
        "admin": "IL",
        "population": 1076,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 938,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.59922,
          43.24898
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ogunquit",
        "admin": "ME",
        "population": 1275,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 34,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.51643,
          35.46756
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oklahoma City",
        "admin": "OK",
        "population": 631346,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 817,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.98229,
          38.60499
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Olathe",
        "admin": "CO",
        "population": 1849,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 200,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.81913,
          38.8814
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Olathe",
        "admin": "KS",
        "population": 125872,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 258,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.82953,
          34.96176
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Olive Branch",
        "admin": "MS",
        "population": 33484,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1428,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.37595,
          38.66533
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Olivette",
        "admin": "MO",
        "population": 7870,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 758,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.48752,
          29.47884
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Olmos Park",
        "admin": "TX",
        "population": 2237,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1493,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.9007,
          47.03787
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Olympia",
        "admin": "WA",
        "population": 50302,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 48,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.93779,
          41.25861
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Omaha",
        "admin": "NE",
        "population": 408958,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1057,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.06377,
          42.45286
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oneonta",
        "admin": "NY",
        "population": 13862,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1210,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.19464,
          43.0058
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Onondaga County",
        "admin": "NY",
        "population": 467026,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 159,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.65089,
          34.06334
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ontario",
        "admin": "CA",
        "population": 171214,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1314,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.32348,
          28.51442
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Orange County",
        "admin": "FL",
        "population": 1145956,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1170,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.30557,
          41.40214
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Orange County",
        "admin": "NY",
        "population": 372813,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 801,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.53143,
          40.58618
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Orchard Hills",
        "admin": "PA",
        "population": 1952,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 89,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.37924,
          28.53834
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Orlando",
        "admin": "FL",
        "population": 270934,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 244,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.96649,
          32.39091
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oro Valley",
        "admin": "AZ",
        "population": 41011,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 442,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.47519,
          39.51126
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oroville East",
        "admin": "CA",
        "population": 8280,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 439,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76402,
          40.84367
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Orrville",
        "admin": "OH",
        "population": 8380,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 580,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.65277,
          38.12956
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Osage Beach",
        "admin": "MO",
        "population": 4351,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1215,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.54261,
          44.02471
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oshkosh",
        "admin": "WI",
        "population": 66555,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 149,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.67079,
          38.98223
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Overland Park",
        "admin": "KS",
        "population": 173372,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1263,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.11333,
          37.77422
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Owensboro",
        "admin": "KY",
        "population": 59042,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1093,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.74523,
          39.507
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Oxford",
        "admin": "OH",
        "population": 22104,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 124,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.17705,
          34.1975
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Oxnard",
        "admin": "CA",
        "population": 197899,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 136,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.2415,
          34.19084
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Oxnard Shores",
        "admin": "CA",
        "population": 187235,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 476,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.74152,
          38.482
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pacific",
        "admin": "MO",
        "population": 7002,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1182,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.91662,
          36.61774
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pacific Grove",
        "admin": "CA",
        "population": 15674,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 531,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.53802,
          39.43544
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Palermo",
        "admin": "CA",
        "population": 5382,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 702,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.35092,
          39.11026
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Palisade",
        "admin": "CO",
        "population": 2692,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 204,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.58866,
          28.03446
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Palm Bay",
        "admin": "FL",
        "population": 107888,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 440,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.03643,
          26.70562
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Palm Beach",
        "admin": "FL",
        "population": 8348,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1586,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.43651,
          26.64757
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Palm Beach County",
        "admin": "FL",
        "population": 1320134,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 175,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.11646,
          34.57943
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Palmdale",
        "admin": "CA",
        "population": 158351,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1154,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.37697,
          33.72255
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Palm Desert",
        "admin": "CA",
        "population": 51869,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 371,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.57232,
          27.52143
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Palmetto",
        "admin": "FL",
        "population": 12606,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 239,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.54529,
          33.8303
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Palm Springs",
        "admin": "CA",
        "population": 47371,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1088,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.14302,
          37.44188
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Palo Alto",
        "admin": "CA",
        "population": 66853,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1358,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.39245,
          33.80105
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Palos Verdes Estates",
        "admin": "CA",
        "population": 13682,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 102,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.14666,
          36.09719
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Paradise",
        "admin": "NV",
        "population": 223167,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 979,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.12857,
          40.00982
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Paradise",
        "admin": "PA",
        "population": 1129,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 460,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.88424,
          42.34836
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Park City",
        "admin": "IL",
        "population": 7570,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1062,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.49797,
          40.64606
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Park City",
        "admin": "UT",
        "population": 8128,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 813,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.78686,
          42.57748
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Parkersburg",
        "admin": "IA",
        "population": 1870,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 711,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.02294,
          36.94717
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Parksdale",
        "admin": "CA",
        "population": 2621,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1402,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.52707,
          36.61162
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Parlier",
        "admin": "CA",
        "population": 15138,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1764,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.42599,
          40.85788
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Parsippany",
        "admin": "NJ",
        "population": 51144,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 199,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.14452,
          34.14778
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pasadena",
        "admin": "CA",
        "population": 137122,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 179,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.2091,
          29.69106
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pasadena",
        "admin": "TX",
        "population": 153784,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1747,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.43887,
          28.30674
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pasco County",
        "admin": "FL",
        "population": 464697,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1592,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.691,
          35.62664
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Paso Robles",
        "admin": "CA",
        "population": 27157,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1538,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.30032,
          41.0337
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Passaic County",
        "admin": "NJ",
        "population": 501226,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 183,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.17181,
          40.91677
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Paterson",
        "admin": "NJ",
        "population": 147754,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 504,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.24046,
          39.83039
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Paulsboro",
        "admin": "NJ",
        "population": 6097,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 990,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.42549,
          35.52916
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Peach Springs",
        "admin": "AZ",
        "population": 1090,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1200,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.33679,
          33.92066
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pea Ridge",
        "admin": "AR",
        "population": 2879,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1479,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.28605,
          29.56357
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pearland",
        "admin": "TX",
        "population": 108821,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 922,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.79841,
          32.31292
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pelahatchie",
        "admin": "MS",
        "population": 1334,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 166,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.22394,
          26.00315
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pembroke Pines",
        "admin": "FL",
        "population": 166611,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1486,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.44474,
          26.23063
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Penitas",
        "admin": "TX",
        "population": 4715,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 35
      }
    },
    {
      "id": 1762,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.91656,
          40.15205
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Penndel",
        "admin": "PA",
        "population": 2221,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 379,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.51659,
          39.65345
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pennsville",
        "admin": "NJ",
        "population": 11888,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 169,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.23738,
          33.5806
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Peoria",
        "admin": "AZ",
        "population": 171237,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1171,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.63665,
          38.23242
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Petaluma",
        "admin": "CA",
        "population": 60438,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1340,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.62,
          30.43937
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pflugerville",
        "admin": "TX",
        "population": 57122,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 7,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16379,
          39.95233
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Philadelphia",
        "admin": "PA",
        "population": 1567442,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 695,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.22057,
          40.89645
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Philipsburg",
        "admin": "PA",
        "population": 2770,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 912,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.65318,
          42.24842
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Philmont",
        "admin": "NY",
        "population": 1379,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 9,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.07404,
          33.44838
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Phoenix",
        "admin": "AZ",
        "population": 1445632,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 553,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.61135,
          33.92455
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Piedmont",
        "admin": "AL",
        "population": 4878,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1038,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.23163,
          37.82437
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Piedmont",
        "admin": "CA",
        "population": 11376,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 517,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.74643,
          35.642
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Piedmont",
        "admin": "OK",
        "population": 5720,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1024,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.13735,
          47.03764
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pierce County",
        "admin": "WA",
        "population": 795225,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 956,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.26996,
          43.83002
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pigeon",
        "admin": "MI",
        "population": 1208,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 264,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.72247,
          39.37427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pikesville",
        "admin": "MD",
        "population": 30764,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 610,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.96056,
          33.3965
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pilot Point",
        "admin": "TX",
        "population": 3856,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1572,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.0032,
          34.22843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pine Bluff",
        "admin": "AR",
        "population": 44772,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1530,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.14564,
          27.85003
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pinecrest",
        "admin": "FL",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 661,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.15228,
          40.73318
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pine Hills",
        "admin": "CA",
        "population": 3131,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1369,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.73955,
          27.90268
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pinellas County",
        "admin": "FL",
        "population": 916542,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 649,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.55627,
          43.02554
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pine Ridge",
        "admin": "SD",
        "population": 3308,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 1640,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2333,
          37.99048
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pinole",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 785,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.79398,
          34.41527
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Piru",
        "admin": "CA",
        "population": 2063,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1557,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.64128,
          35.14275
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pismo Beach",
        "admin": "CA",
        "population": 8162,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1616,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.88468,
          38.02798
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pittsburg",
        "admin": "CA",
        "population": 69424,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 66,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.99589,
          40.44062
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pittsburgh",
        "admin": "PA",
        "population": 304391,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1458,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.24538,
          42.45008
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pittsfield",
        "admin": "MA",
        "population": 43303,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 455,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.78936,
          41.32591
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pittston",
        "admin": "PA",
        "population": 7739,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1664,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.13532,
          39.10365
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Plainfield",
        "admin": "IL",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 394,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.53702,
          41.66281
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Plano",
        "admin": "IL",
        "population": 10856,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 80,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.69889,
          33.01984
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Plano",
        "admin": "TX",
        "population": 283558,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1473,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.23184,
          26.13421
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Plantation",
        "admin": "FL",
        "population": 92560,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 491,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.88223,
          41.01139
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Plattsmouth",
        "admin": "NE",
        "population": 6502,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1483,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.87468,
          37.66243
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pleasanton",
        "admin": "CA",
        "population": 79510,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1527,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.52404,
          39.38984
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pleasantville",
        "admin": "NJ",
        "population": 20755,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1334,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.68813,
          43.75702
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Plymouth",
        "admin": "NH",
        "population": 4456,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 437,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.97704,
          43.74861
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Plymouth",
        "admin": "WI",
        "population": 8445,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 598,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.478,
          35.23121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pocola",
        "admin": "OK",
        "population": 4056,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1508,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.69307,
          38.9088
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Point Arena",
        "admin": "CA",
        "population": 453,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 562,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.04791,
          40.09123
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Point Pleasant Beach",
        "admin": "NJ",
        "population": 4665,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 644,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.20089,
          35.00765
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Polkton",
        "admin": "NC",
        "population": 3375,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 178,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.75228,
          34.05529
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pomona",
        "admin": "CA",
        "population": 153266,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 664,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.0432,
          41.16704
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pomona",
        "admin": "NY",
        "population": 3103,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1260,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.12477,
          26.23786
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Pompano Beach",
        "admin": "FL",
        "population": 107762,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 513,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.08038,
          38.73172
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pontoon Beach",
        "admin": "IL",
        "population": 5836,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 376,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.34578,
          37.12237
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Poquoson",
        "admin": "VA",
        "population": 12150,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 709,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.67224,
          40.38868
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Portage",
        "admin": "PA",
        "population": 2638,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1126,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.94233,
          29.88519
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Port Arthur",
        "admin": "TX",
        "population": 55340,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 883,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.93256,
          43.79591
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Porter",
        "admin": "ME",
        "population": 1495,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1131,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.20858,
          26.07341
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Port Isabel",
        "admin": "TX",
        "population": 5016,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 608,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.90305,
          42.8692
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Portland",
        "admin": "MI",
        "population": 3883,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 32,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.67621,
          45.52345
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Portland",
        "admin": "OR",
        "population": 632309,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 705,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.71955,
          28.27168
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Port Richey",
        "admin": "FL",
        "population": 2671,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 158,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.35033,
          27.29393
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Port Saint Lucie",
        "admin": "FL",
        "population": 164603,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1016,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.76255,
          43.07176
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Portsmouth",
        "admin": "NH",
        "population": 21530,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1307,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.25033,
          41.60232
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Portsmouth",
        "admin": "RI",
        "population": 17756,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1115,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.29827,
          36.83543
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Portsmouth",
        "admin": "VA",
        "population": 96201,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 351,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.1955,
          40.68565
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pottsville",
        "admin": "PA",
        "population": 14324,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 384,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.07519,
          40.15784
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Powell",
        "admin": "OH",
        "population": 11500,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1654,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.1381,
          37.69946
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Prairie Village",
        "admin": "KS",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1494,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.01586,
          46.68115
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Presque Isle",
        "admin": "ME",
        "population": 9171,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1268,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.84729,
          38.82952
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Prince George's County",
        "admin": "MD",
        "population": 863420,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1370,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.65905,
          40.34872
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Princeton",
        "admin": "NJ",
        "population": 29603,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1196,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.47766,
          38.70167
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Prince William County",
        "admin": "VA",
        "population": 402002,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 144,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.41283,
          41.82399
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Providence",
        "admin": "RI",
        "population": 179207,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1534,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.1864,
          42.05295
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Provincetown",
        "admin": "MA",
        "population": 2642,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 202,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.65853,
          40.23384
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Provo",
        "admin": "UT",
        "population": 112488,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1023,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.1277,
          43.56701
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pulaski",
        "admin": "NY",
        "population": 2310,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 632,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.2426,
          44.67222
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pulaski",
        "admin": "WI",
        "population": 3539,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1121,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.3118,
          34.76993
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Pulaski County",
        "admin": "AR",
        "population": 382748,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1709,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.08504,
          39.03763
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Queen Anne's County",
        "admin": "MD",
        "population": 47798,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 5,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.83652,
          40.68149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Queens",
        "admin": "NY",
        "population": 2272771,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 207,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.00227,
          42.25288
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Quincy",
        "admin": "MA",
        "population": 92271,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 734,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.7285,
          38.54008
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Raceland",
        "admin": "KY",
        "population": 2424,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1073,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.78285,
          42.72613
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Racine",
        "admin": "WI",
        "population": 77742,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1439,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.35991,
          40.04622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Radnor",
        "admin": "PA",
        "population": 30878,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 809,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.93594,
          46.089
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rainier",
        "admin": "OR",
        "population": 1895,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 550,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.84775,
          34.49425
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rainsville",
        "admin": "AL",
        "population": 4948,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 49,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.63861,
          35.7721
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Raleigh",
        "admin": "NC",
        "population": 403892,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 511,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.76204,
          45.48067
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Raleigh Hills",
        "admin": "OR",
        "population": 5896,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 306,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.86808,
          33.04171
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ramona",
        "admin": "CA",
        "population": 20292,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 290,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.45,
          45.2611
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ramsey",
        "admin": "MN",
        "population": 23668,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1644,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.30273,
          38.58907
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rancho Cordova",
        "admin": "CA",
        "population": 71017,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 157,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.59311,
          34.1064
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rancho Cucamonga",
        "admin": "CA",
        "population": 175236,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1658,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.41279,
          33.73974
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rancho Mirage",
        "admin": "CA",
        "population": 18083,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1449,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.38702,
          33.74446
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Rancho Palos Verdes",
        "admin": "CA",
        "population": 42732,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 918,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.28256,
          44.83445
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rapid City",
        "admin": "MI",
        "population": 1352,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 481,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.89659,
          47.8124
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rathdrum",
        "admin": "ID",
        "population": 6826,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 729,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.22054,
          38.804
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ravensworth",
        "admin": "VA",
        "population": 2466,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 268,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.46356,
          39.00862
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Raytown",
        "admin": "MO",
        "population": 29526,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1379,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.09533,
          42.52565
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Reading",
        "admin": "MA",
        "population": 24747,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1518,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.92687,
          40.33565
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Reading",
        "admin": "PA",
        "population": 87879,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1375,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.87541,
          41.99509
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Red Hook",
        "admin": "NY",
        "population": 1990,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1172,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -109.24682,
          45.18578
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Red Lodge",
        "admin": "MT",
        "population": 2222,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 1689,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.12151,
          47.67399
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Redmond",
        "admin": "WA",
        "population": 60598,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1624,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.38841,
          33.84918
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Redondo Beach",
        "admin": "CA",
        "population": 68166,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 802,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.64764,
          34.68387
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Redstone Arsenal",
        "admin": "AL",
        "population": 1946,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1560,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.23635,
          37.48522
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Redwood City",
        "admin": "CA",
        "population": 85288,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 100,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.8138,
          39.52963
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Reno",
        "admin": "NV",
        "population": 241445,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 725,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.57725,
          32.94429
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Reno",
        "admin": "TX",
        "population": 2494,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1275,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.21707,
          47.48288
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Renton",
        "admin": "WA",
        "population": 100242,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 707,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.91264,
          41.92676
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rhinebeck",
        "admin": "NY",
        "population": 2657,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 205,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.72972,
          32.94818
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Richardson",
        "admin": "TX",
        "population": 110815,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 685,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.10788,
          35.79662
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Richgrove",
        "admin": "CA",
        "population": 2882,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 479,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.15842,
          32.23904
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Richland",
        "admin": "MS",
        "population": 6912,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1724,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.34775,
          37.93576
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Richmond",
        "admin": "CA",
        "population": 109708,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 115,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.46026,
          37.55376
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Richmond",
        "admin": "VA",
        "population": 220289,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 433,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.31956,
          38.62866
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Richmond Heights",
        "admin": "MO",
        "population": 8481,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 458,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.49818,
          41.28148
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ridgefield",
        "admin": "CT",
        "population": 7645,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 288,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.13231,
          32.42848
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ridgeland",
        "admin": "MS",
        "population": 24047,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 599,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.98039,
          32.48074
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ridgeland",
        "admin": "SC",
        "population": 4036,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 597,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.72864,
          41.42034
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ridgway",
        "admin": "PA",
        "population": 4078,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1219,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.90722,
          38.49908
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Rio Dell",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1180,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.8203,
          26.37979
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rio Grande City",
        "admin": "TX",
        "population": 14404,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 35
      }
    },
    {
      "id": 1348,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.63747,
          39.41733
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Riverdale Park",
        "admin": "MD",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 363,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.66204,
          40.91704
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Riverhead",
        "admin": "NY",
        "population": 13299,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 838,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.82133,
          41.7216
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "River Heights",
        "admin": "UT",
        "population": 1734,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 361,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.21563,
          29.9602
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "River Ridge",
        "admin": "LA",
        "population": 13494,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 68,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.39616,
          33.95335
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Riverside",
        "admin": "CA",
        "population": 322424,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1760,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.99386,
          33.74368
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Riverside County",
        "admin": "CA",
        "population": 2189641,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 247,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.9391,
          40.52189
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Riverton",
        "admin": "UT",
        "population": 38753,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 672,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.06964,
          38.27586
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Riverview",
        "admin": "MO",
        "population": 3014,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1743,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.94143,
          37.27097
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Roanoke",
        "admin": "VA",
        "population": 99897,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1609,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.05085,
          37.20907
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Roanoke County",
        "admin": "VA",
        "population": 92376,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 400,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.11472,
          31.46767
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Robinson",
        "admin": "TX",
        "population": 10509,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1323,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.97562,
          43.30453
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rochester",
        "admin": "NH",
        "population": 30038,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 109,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.61556,
          43.15478
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rochester",
        "admin": "NY",
        "population": 209802,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 623,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.28645,
          40.70229
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rochester",
        "admin": "PA",
        "population": 3657,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 174,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.094,
          42.27113
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rockford",
        "admin": "IL",
        "population": 152871,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1722,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.02409,
          41.15243
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Rockland County",
        "admin": "NY",
        "population": 311687,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 549,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.62032,
          42.65565
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Rockport",
        "admin": "MA",
        "population": 4966,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1477,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.15276,
          39.084
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rockville",
        "admin": "MD",
        "population": 66980,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 556,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.89198,
          36.99764
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rocky Mount",
        "admin": "VA",
        "population": 4799,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 870,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.66848,
          47.59287
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Rocky Point",
        "admin": "WA",
        "population": 1564,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1308,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.63218,
          39.03751
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Roeland Park",
        "admin": "KS",
        "population": 6827,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1306,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7011,
          38.33964
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rohnert Park",
        "admin": "CA",
        "population": 42407,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1451,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.35752,
          33.75739
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Rolling Hills",
        "admin": "CA",
        "population": 1893,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 497,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.72804,
          38.42213
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Roseland",
        "admin": "CA",
        "population": 6325,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1414,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.80856,
          29.55718
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rosenberg",
        "admin": "TX",
        "population": 35510,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1593,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.38491,
          39.89622
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rose Valley",
        "admin": "PA",
        "population": 949,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1165,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.15661,
          45.00608
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Roseville",
        "admin": "MN",
        "population": 35580,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1147,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.36159,
          34.02316
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Roswell",
        "admin": "GA",
        "population": 94501,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1243,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.6789,
          30.50826
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Round Rock",
        "admin": "TX",
        "population": 115997,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1202,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.56388,
          32.9029
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rowlett",
        "admin": "TX",
        "population": 60236,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 874,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.07622,
          38.84838
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Roxana",
        "admin": "IL",
        "population": 1542,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1698,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.14465,
          42.48948
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Royal Oak",
        "admin": "MI",
        "population": 59008,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 679,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.29338,
          36.24042
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rural Hall",
        "admin": "NC",
        "population": 2937,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 327,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.43315,
          27.72086
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ruskin",
        "admin": "FL",
        "population": 17208,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 989,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.27138,
          40.41754
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Russiaville",
        "admin": "IN",
        "population": 1094,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1380,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.32852,
          39.90178
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Rutledge",
        "admin": "PA",
        "population": 795,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1216,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.68374,
          40.98065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Rye",
        "admin": "NY",
        "population": 16046,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 41,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.4944,
          38.58157
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sacramento",
        "admin": "CA",
        "population": 466488,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 302,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.12926,
          34.04543
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Saint Andrews",
        "admin": "SC",
        "population": 21151,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1675,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.47026,
          38.50519
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Saint Helena",
        "admin": "CA",
        "population": 5814,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1550,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.44341,
          38.64068
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Saint Louis County",
        "admin": "MO",
        "population": 998954,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 325,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.65579,
          38.25285
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Saint Matthews",
        "admin": "KY",
        "population": 17472,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 76,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.09327,
          44.94441
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Saint Paul",
        "admin": "MN",
        "population": 285068,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1754,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.67927,
          27.77086
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Saint Petersburg",
        "admin": "FL",
        "population": 244769,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 581,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.17767,
          37.8281
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Saint Robert",
        "admin": "MO",
        "population": 4340,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1159,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.89672,
          42.51954
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Salem",
        "admin": "MA",
        "population": 42869,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 167,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.0351,
          44.9429
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Salem",
        "admin": "OR",
        "population": 164549,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 177,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.6555,
          36.67774
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Salinas",
        "admin": "CA",
        "population": 150441,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 861,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.80158,
          39.42392
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Salisbury",
        "admin": "MO",
        "population": 1618,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 137,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.89105,
          40.76078
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Salt Lake City",
        "admin": "UT",
        "population": 192672,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1748,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.92403,
          40.66758
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Salt Lake County",
        "admin": "UT",
        "population": 1029655,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1741,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0804,
          47.64177
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sammamish",
        "admin": "WA",
        "population": 52253,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1409,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.43704,
          31.46377
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Angelo",
        "admin": "TX",
        "population": 100450,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1317,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.56164,
          37.97465
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Anselmo",
        "admin": "CA",
        "population": 12653,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 976,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.27453,
          28.33611
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Antonio",
        "admin": "FL",
        "population": 1138,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 11,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.49363,
          29.42412
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Antonio",
        "admin": "TX",
        "population": 1469845,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 110,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.28977,
          34.10834
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Bernardino",
        "admin": "CA",
        "population": 216108,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1296,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.26052,
          37.50716
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Carlos",
        "admin": "CA",
        "population": 29931,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 220,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.61199,
          33.42697
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Clemente",
        "admin": "CA",
        "population": 63522,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1589,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.84829,
          36.61718
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sand City",
        "admin": "CA",
        "population": 381,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 657,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.49141,
          35.17699
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sandia Heights",
        "admin": "NM",
        "population": 3193,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 12,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.15726,
          32.71533
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Diego",
        "admin": "CA",
        "population": 1307402,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 572,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.2389,
          27.76391
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Diego",
        "admin": "TX",
        "population": 4488,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1225,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.55325,
          48.27659
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sandpoint",
        "admin": "ID",
        "population": 7835,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 208,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.85077,
          40.58106
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sandy Hills",
        "admin": "UT",
        "population": 89575,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1739,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.37854,
          33.92427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sandy Springs",
        "admin": "GA",
        "population": 105330,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 17,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.41942,
          37.77493
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Francisco",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1276,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.82033,
          33.62724
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Joaquin",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1199,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.27145,
          37.93478
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Joaquin County",
        "admin": "CA",
        "population": 685306,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 14,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.56331,
          38.06659
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Jose",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1667,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.538,
          36.84551
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Juan Bautista",
        "admin": "CA",
        "population": 1961,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1768,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.15611111,
          37.725
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Leandro",
        "admin": "CA",
        "population": 84950,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1738,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.65962,
          35.28275
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Luis Obispo",
        "admin": "CA",
        "population": 47339,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1015,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.4522,
          35.38742
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Luis Obispo County",
        "admin": "CA",
        "population": 269637,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1424,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.35164,
          37.56438
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "San Mateo",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1177,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.40583,
          38.00374
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Miguel County",
        "admin": "CO",
        "population": 7359,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1288,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.23369,
          34.15973
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Rafael",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1311,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.97802,
          37.77993
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "San Ramon",
        "admin": "CA",
        "population": 76134,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 64,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.33011,
          34.41138
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Santa Ana",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1207,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.69819,
          34.42083
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Santa Barbara",
        "admin": "CA",
        "population": 91842,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1704,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.03078,
          34.53834
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Santa Barbara County",
        "admin": "CA",
        "population": 423895,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 145,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.54259,
          34.39166
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Santa Clarita",
        "admin": "CA",
        "population": 176320,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 223,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.0308,
          36.97412
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Santa Cruz",
        "admin": "CA",
        "population": 64220,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1695,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.00979,
          37.02161
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Santa Cruz County",
        "admin": "CA",
        "population": 262382,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1224,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.9378,
          35.68698
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Santa Fe",
        "admin": "NM",
        "population": 84099,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1702,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.97612,
          35.50686
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Santa Fe County",
        "admin": "NM",
        "population": 144170,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1731,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.49119,
          34.01945
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Santa Monica",
        "admin": "CA",
        "population": 93220,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 152,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.71443,
          38.44047
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Santa Rosa",
        "admin": "CA",
        "population": 167815,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 229,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.97392,
          32.83838
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Santee",
        "admin": "CA",
        "population": 53413,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1127,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.11417,
          35.9987
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sapulpa",
        "admin": "OK",
        "population": 20579,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 362,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.07056,
          30.82074
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Saraland",
        "admin": "AL",
        "population": 13405,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1155,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.53065,
          27.33643
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sarasota",
        "admin": "FL",
        "population": 55118,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1114,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.36498,
          27.18248
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sarasota County",
        "admin": "FL",
        "population": 379448,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1338,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.02301,
          37.26383
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Saratoga",
        "admin": "CA",
        "population": 30968,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1703,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.09983,
          32.08354
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Savannah",
        "admin": "GA",
        "population": 145674,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 537,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47454,
          35.82485
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sawmills",
        "admin": "NC",
        "population": 5240,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 579,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.6401,
          35.29116
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sayre",
        "admin": "OK",
        "population": 4375,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 522,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.5155,
          41.97896
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sayre",
        "admin": "PA",
        "population": 5587,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1059,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.93957,
          42.81424
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Schenectady",
        "admin": "NY",
        "population": 65305,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 380,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.8709,
          41.95586
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Schiller Park",
        "admin": "IL",
        "population": 11793,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 500,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.05948,
          41.44723
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Schuyler",
        "admin": "NE",
        "population": 6211,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1051,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.72587,
          42.19593
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Scituate",
        "admin": "MA",
        "population": 5245,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1287,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -103.70795,
          41.85061
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Scotts Bluff County",
        "admin": "NE",
        "population": 36970,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 104,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.89903,
          33.50921
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Scottsdale",
        "admin": "AZ",
        "population": 236839,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 566,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.84359,
          34.20934
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Seagate",
        "admin": "NC",
        "population": 4590,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1274,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.15718,
          29.78079
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sealy",
        "admin": "TX",
        "population": 6403,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 837,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.40395,
          35.76745
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Searles Valley",
        "admin": "CA",
        "population": 1739,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 952,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.19504,
          44.36174
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Searsmont",
        "admin": "ME",
        "population": 1221,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 867,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.07708,
          39.92679
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Seaside Park",
        "admin": "NJ",
        "population": 1579,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1588,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.29217,
          47.44846
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "SeaTac",
        "admin": "WA",
        "population": 28215,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 28,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.33207,
          47.60621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Seattle",
        "admin": "WA",
        "population": 684451,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1683,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.05653,
          40.78955
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Secaucus",
        "admin": "NJ",
        "population": 19104,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1294,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.2363,
          28.71698
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Seminole County",
        "admin": "FL",
        "population": 422718,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 612,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.1845,
          40.53646
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sewickley",
        "admin": "PA",
        "population": 3827,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 393,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.72462,
          35.89064
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Seymour",
        "admin": "TN",
        "population": 10919,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 547,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.86223,
          30.16493
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shady Hollow",
        "admin": "TX",
        "population": 5004,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 514,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.51218,
          38.84178
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Shady Side",
        "admin": "MD",
        "population": 5803,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 545,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.91562,
          40.91045
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shanor-Northvue",
        "admin": "PA",
        "population": 5051,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1125,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.55252,
          29.58495
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shavano Park",
        "admin": "TX",
        "population": 3527,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1282,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.72024,
          39.04167
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shawnee",
        "admin": "KS",
        "population": 65046,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1158,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.9253,
          35.32729
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shawnee",
        "admin": "OK",
        "population": 31286,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1324,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.10154,
          41.48754
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sheffield Lake",
        "admin": "OH",
        "population": 9026,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1236,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.8956,
          35.184
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shelby County",
        "admin": "TN",
        "population": 927644,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 541,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.37221,
          40.76555
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shenandoah",
        "admin": "IA",
        "population": 5150,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 544,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.20077,
          40.82037
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shenandoah",
        "admin": "PA",
        "population": 5071,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 592,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.60482,
          39.89366
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sherman",
        "admin": "IL",
        "population": 4148,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 389,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.2914,
          41.04172
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shiloh",
        "admin": "PA",
        "population": 11217,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1608,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.34152,
          47.75565
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Shoreline",
        "admin": "WA",
        "population": 55439,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1734,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.58912,
          44.9008
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shorewood",
        "admin": "MN",
        "population": 7614,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 920,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.61409,
          41.88169
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shorewood-Tower Hills-Harbert",
        "admin": "MI",
        "population": 1344,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 120,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.75018,
          32.52515
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shreveport",
        "admin": "LA",
        "population": 197204,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1214,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.40981,
          42.45648
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Shutesbury",
        "admin": "MA",
        "population": 1842,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1577,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.05285,
          34.16167
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sierra Madre",
        "admin": "CA",
        "population": 11163,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 810,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.25739,
          47.29436
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Silver Bay",
        "admin": "MN",
        "population": 1887,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 41
      }
    },
    {
      "id": 403,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.28033,
          32.77007
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Silver City",
        "admin": "NM",
        "population": 10004,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 320,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.25428,
          34.73706
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Simpsonville",
        "admin": "SC",
        "population": 18238,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 171,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.70033,
          43.54997
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sioux Falls",
        "admin": "SD",
        "population": 171544,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1342,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.80227,
          48.48215
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Skagit County",
        "admin": "WA",
        "population": 116901,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 731,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.4291,
          42.94701
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Skaneateles",
        "admin": "NY",
        "population": 2474,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 670,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.19292,
          41.15454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sloatsburg",
        "admin": "NY",
        "population": 3039,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1607,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.15943,
          30.00855
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Smithville",
        "admin": "TX",
        "population": 4101,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1181,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.72218,
          48.04602
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Snohomish County",
        "admin": "WA",
        "population": 713335,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 397,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.82539,
          47.52871
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Snoqualmie",
        "admin": "WA",
        "population": 13169,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1111,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.93782,
          39.21304
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Snowmass Village",
        "admin": "CO",
        "population": 2916,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 822,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.06136,
          43.23784
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sodus",
        "admin": "NY",
        "population": 1819,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1431,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.27115,
          32.99115
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Solana Beach",
        "admin": "CA",
        "population": 13449,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1488,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.94001,
          38.26692
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Solano County",
        "admin": "CA",
        "population": 413344,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1645,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.61631,
          40.56351
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Somerset County",
        "admin": "NJ",
        "population": 323444,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1623,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.0995,
          42.3876
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Somerville",
        "admin": "MA",
        "population": 80318,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1162,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.92254,
          38.52529
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sonoma County",
        "admin": "CA",
        "population": 483878,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 459,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.96788,
          40.95621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sound Beach",
        "admin": "NY",
        "population": 7612,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 823,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.41102,
          30.14021
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sour Lake",
        "admin": "TX",
        "population": 1813,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1104,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.38953,
          40.88427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Southampton",
        "admin": "NY",
        "population": 3265,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 35,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.04949,
          42.33343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "South Boston",
        "admin": "MA",
        "population": 571281,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 314,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.03341,
          42.0751
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Southbridge",
        "admin": "MA",
        "population": 19030,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 375,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.0045,
          29.16582
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "South Daytona",
        "admin": "FL",
        "population": 12252,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 645,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.68281,
          42.02316
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "South Duxbury",
        "admin": "MA",
        "population": 3360,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 298,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.2923,
          41.99419
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Elgin",
        "admin": "IL",
        "population": 21985,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1598,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.22187,
          42.47337
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Southfield",
        "admin": "MI",
        "population": 73156,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1444,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.21202,
          33.95474
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Gate",
        "admin": "CA",
        "population": 96401,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 242,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.95276,
          39.58721
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Southglenn",
        "admin": "CO",
        "population": 42268,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 633,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.63512,
          43.29924
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Glens Falls",
        "admin": "NY",
        "population": 3518,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 588,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.80636,
          41.09693
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Greeley",
        "admin": "WY",
        "population": 4217,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 776,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.54476,
          40.2784
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Greensburg",
        "admin": "PA",
        "population": 2117,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 232,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.92966,
          40.56217
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Jordan",
        "admin": "UT",
        "population": 50418,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1410,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.13418,
          32.94124
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Southlake",
        "admin": "TX",
        "population": 29941,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1034,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.98435,
          38.93324
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Lake Tahoe",
        "admin": "CA",
        "population": 21706,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1203,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.29338,
          25.7076
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "South Miami",
        "admin": "FL",
        "population": 12242,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 284,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.24088,
          43.64147
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "South Portland",
        "admin": "ME",
        "population": 25556,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 307,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.03494,
          44.89274
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "South Saint Paul",
        "admin": "MN",
        "population": 20160,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1003,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.40775,
          37.65466
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "South San Francisco",
        "admin": "CA",
        "population": 67271,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 624,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.69981,
          29.92743
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "South Vacherie",
        "admin": "LA",
        "population": 3642,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1213,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.93205,
          34.94957
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spartanburg",
        "admin": "SC",
        "population": 37867,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1447,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.99068,
          34.93126
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spartanburg County",
        "admin": "SC",
        "population": 284307,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 971,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.87977,
          40.12452
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Speers",
        "admin": "PA",
        "population": 1154,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1092,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.9923,
          42.24398
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spencer",
        "admin": "MA",
        "population": 5700,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 865,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.97831,
          39.11427
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Spencerville",
        "admin": "MD",
        "population": 1594,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 942,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.05813,
          36.82
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spencerville",
        "admin": "NM",
        "population": 1258,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 582,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.92927,
          35.36012
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spindale",
        "admin": "NC",
        "population": 4321,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 111,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.42908,
          47.65966
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spokane",
        "admin": "WA",
        "population": 208916,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1497,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.12881,
          36.18674
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springdale",
        "admin": "AR",
        "population": 77859,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 716,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.78618,
          34.68931
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springdale",
        "admin": "SC",
        "population": 2574,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 894,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.61436,
          37.40835
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springfield",
        "admin": "CO",
        "population": 1451,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1697,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.64371,
          39.80172
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springfield",
        "admin": "IL",
        "population": 116565,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 172,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.58981,
          42.10148
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springfield",
        "admin": "MA",
        "population": 154341,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 536,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.23916,
          42.32643
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springfield",
        "admin": "MI",
        "population": 5260,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 162,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.29824,
          37.21533
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springfield",
        "admin": "MO",
        "population": 166810,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1716,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.885,
          36.50921
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Springfield",
        "admin": "TN",
        "population": 16808,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 923,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.63598,
          43.56108
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spring Grove",
        "admin": "MN",
        "population": 1330,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 143,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.245,
          36.10803
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Spring Valley",
        "admin": "NV",
        "population": 178395,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 548,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.3023,
          41.95426
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Stafford Springs",
        "admin": "CT",
        "population": 4988,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1565,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.53873,
          41.05343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Stamford",
        "admin": "CT",
        "population": 128874,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 40,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.13986,
          40.56233
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Staten Island",
        "admin": "NY",
        "population": 468730,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 820,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.21806,
          39.08344
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Stephens City",
        "admin": "VA",
        "population": 1829,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1238,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.05837,
          36.11561
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Stillwater",
        "admin": "OK",
        "population": 48967,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 65,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.19789,
          38.62727
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "St Louis",
        "admin": "MO",
        "population": 315685,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1145,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.19789,
          38.62727
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "St. Louis",
        "admin": "MO",
        "population": 315685,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 749,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.32039,
          42.28759
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Stockbridge",
        "admin": "MA",
        "population": 2316,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 72,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.29078,
          37.9577
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Stockton",
        "admin": "CA",
        "population": 305658,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 85,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.67927,
          27.77086
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "St. Petersburg",
        "admin": "FL",
        "population": 257083,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 335,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.34594,
          41.23922
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Streetsboro",
        "admin": "OH",
        "population": 16028,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 326,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.41617,
          42.38343
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sudbury",
        "admin": "MA",
        "population": 17343,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1228,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.58496,
          36.72836
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Suffolk",
        "admin": "VA",
        "population": 88161,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1660,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.68524,
          40.94046
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Suffolk County",
        "admin": "NY",
        "population": 1493350,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 646,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.44467,
          39.10973
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sugar Creek",
        "admin": "MO",
        "population": 3345,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1251,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.63495,
          29.61968
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sugar Land",
        "admin": "TX",
        "population": 88156,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 575,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.60784,
          39.59948
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sullivan",
        "admin": "IL",
        "population": 4440,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1344,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.76814,
          41.71642
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sullivan County",
        "admin": "NY",
        "population": 77547,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 551,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.96835,
          34.50787
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sulphur",
        "admin": "OK",
        "population": 4929,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 340,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.60107,
          33.13845
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sulphur Springs",
        "admin": "TX",
        "population": 15449,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 563,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.81651,
          47.8626
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sultan",
        "admin": "WA",
        "population": 4651,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1511,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.95567,
          40.86815
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Summit County",
        "admin": "UT",
        "population": 36324,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1336,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.34147,
          33.92044
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sumter",
        "admin": "SC",
        "population": 40816,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 197,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.03635,
          37.36883
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sunnyvale",
        "admin": "CA",
        "population": 151754,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1113,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.1131,
          26.13397
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Sunrise",
        "admin": "FL",
        "population": 84439,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 134,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.07306,
          36.21108
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sunrise Manor",
        "admin": "NV",
        "population": 189372,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1450,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.35172,
          43.69713
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sun Valley",
        "admin": "ID",
        "population": 1422,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1327,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.1256,
          25.87843
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Surfside",
        "admin": "FL",
        "population": 6024,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 774,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.60766,
          41.20982
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sussex",
        "admin": "NJ",
        "population": 2130,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 341,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.0713,
          34.05149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Suwanee",
        "admin": "GA",
        "population": 15355,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 470,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.28175,
          42.8698
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Swanzey",
        "admin": "NH",
        "population": 7224,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1453,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.34991,
          39.90206
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Swarthmore",
        "admin": "PA",
        "population": 6211,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 970,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.82225,
          41.05034
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Sykesville",
        "admin": "PA",
        "population": 1157,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 187,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.14742,
          43.04812
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Syracuse",
        "admin": "NY",
        "population": 145170,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 122,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.44429,
          47.25288
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Tacoma",
        "admin": "WA",
        "population": 207948,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1597,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.00748,
          38.97789
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Takoma Park",
        "admin": "MD",
        "population": 17713,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 505,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.78865,
          42.24568
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Talent",
        "admin": "OR",
        "population": 6066,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 138,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.28073,
          30.43826
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tallahassee",
        "admin": "FL",
        "population": 189907,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 473,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.96937,
          40.79731
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tamaqua",
        "admin": "PA",
        "population": 7107,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1176,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.24977,
          26.21286
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tamarac",
        "admin": "FL",
        "population": 64681,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 62,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.45843,
          27.94752
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Tampa",
        "admin": "FL",
        "population": 369075,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 495,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.77277,
          33.58344
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tarrant",
        "admin": "AL",
        "population": 6397,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1078,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.40944,
          30.57076
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Taylor",
        "admin": "TX",
        "population": 16702,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 779,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.17647,
          35.9218
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Taylorsville",
        "admin": "NC",
        "population": 2098,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 245,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.01597,
          40.8976
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Teaneck",
        "admin": "NJ",
        "population": 40078,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1184,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.14114,
          33.48781
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Temecula",
        "admin": "CA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 161,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.90931,
          33.41477
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tempe",
        "admin": "AZ",
        "population": 175826,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 163,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.94348,
          33.41421
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tempe Junction",
        "admin": "AZ",
        "population": 158368,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 435,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.56882,
          41.77921
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Temperance",
        "admin": "MI",
        "population": 8517,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1254,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.34278,
          31.09823
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Temple",
        "admin": "TX",
        "population": 72277,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 997,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.29426,
          32.09626
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Terry",
        "admin": "MS",
        "population": 1063,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1472,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.58974,
          43.93476
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Teton County",
        "admin": "WY",
        "population": 21294,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1206,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.03769,
          33.44179
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Texarkana",
        "admin": "AR",
        "population": 30353,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1648,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.04769,
          33.42513
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Texarkana",
        "admin": "TX",
        "population": 37280,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1753,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.86641,
          40.84985
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "The Bronx",
        "admin": "NY",
        "population": 1385108,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 515,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.33517,
          39.17949
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "The Village of Indian Hill",
        "admin": "OH",
        "population": 5785,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1223,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.48938,
          30.15799
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "The Woodlands",
        "admin": "TX",
        "population": 93847,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 812,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.18171,
          44.07897
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Thomaston",
        "admin": "ME",
        "population": 1875,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1249,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.83759,
          34.17056
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Thousand Oaks",
        "admin": "CA",
        "population": 129339,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1485,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.83208,
          46.9295
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Thurston County",
        "admin": "WA",
        "population": 252264,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1262,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.45664,
          37.87354
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Tiburon",
        "admin": "CA",
        "population": 9214,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 699,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.64752,
          40.09531
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tilton",
        "admin": "IL",
        "population": 2724,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 75,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.55521,
          41.66394
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Toledo",
        "admin": "OH",
        "population": 287208,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 423,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.50402,
          43.97858
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tomah",
        "admin": "WI",
        "population": 9093,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1320,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.47366,
          42.45202
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tompkins County",
        "admin": "NY",
        "population": 101564,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1353,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.97588,
          43.92758
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Topsham",
        "admin": "ME",
        "population": 5931,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 869,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.08831,
          31.4454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tornillo",
        "admin": "TX",
        "population": 1568,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 186,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.34063,
          33.83585
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Torrance",
        "admin": "CA",
        "population": 148475,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1761,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.81554,
          39.83276
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Township of London Grove",
        "admin": "PA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1271,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.42618,
          37.73987
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tracy",
        "admin": "CA",
        "population": 87075,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1662,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.78195,
          30.33469
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Travis County",
        "admin": "TX",
        "population": 1024266,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1076,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.76899,
          27.76919
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Treasure Island",
        "admin": "FL",
        "population": 6887,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 507,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.61661,
          40.0789
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Trenton",
        "admin": "MO",
        "population": 6001,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1157,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.74294,
          40.21705
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Trenton",
        "admin": "NJ",
        "population": 84225,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 585,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.94145,
          35.98062
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Trenton",
        "admin": "TN",
        "population": 4264,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1193,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.14312,
          41.05929
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Trinidad",
        "admin": "CA",
        "population": 357,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 211,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.14993,
          42.60559
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Troy",
        "admin": "MI",
        "population": 80980,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 492,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.25281,
          33.1284
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Truth or Consequences",
        "admin": "NM",
        "population": 6475,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1305,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.41092,
          40.89899
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Tuckahoe",
        "admin": "NY",
        "population": 1373,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 38,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.92648,
          32.22174
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tucson",
        "admin": "AZ",
        "population": 520116,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1529,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.26096,
          47.47399
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Tukwila",
        "admin": "WA",
        "population": 20018,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 52,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.99277,
          36.15398
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tulsa",
        "admin": "OK",
        "population": 391906,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1384,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.82617,
          33.74585
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tustin",
        "admin": "CA",
        "population": 80583,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 841,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.16478,
          43.36279
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Twin Lake",
        "admin": "MI",
        "population": 1720,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1532,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.84567,
          32.00022
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Tybee Island",
        "admin": "GA",
        "population": 3102,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1168,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.30106,
          32.35126
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tyler",
        "admin": "TX",
        "population": 103700,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 480,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.59715,
          33.47123
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Tyrone",
        "admin": "GA",
        "population": 6879,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1619,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.25857,
          41.88815
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ulster County",
        "admin": "NY",
        "population": 182493,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1004,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.62118,
          34.71571
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Union",
        "admin": "SC",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1098,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.01913,
          37.59577
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Union City",
        "admin": "CA",
        "population": 74494,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1635,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.54243,
          33.58706
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Union City",
        "admin": "GA",
        "population": 20805,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 285,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.59291,
          40.70038
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Uniondale",
        "admin": "NY",
        "population": 24759,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1218,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30928,
          38.65588
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "University City",
        "admin": "MO",
        "population": 35058,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1603,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.8973,
          42.36808
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "University Park",
        "admin": "IL",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1503,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.2174,
          40.1646
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Upper Dublin",
        "admin": "PA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1506,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.20727,
          40.11059
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Urbana",
        "admin": "IL",
        "population": 42311,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 221,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.23266,
          43.1009
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Utica",
        "admin": "NY",
        "population": 62235,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 884,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.93154,
          34.67816
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Utica",
        "admin": "SC",
        "population": 1489,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 180,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.60953,
          34.44361
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Valencia",
        "admin": "CA",
        "population": 148456,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 418,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.11414,
          32.13238
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Valencia West",
        "admin": "AZ",
        "population": 9355,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1533,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.25664,
          38.10409
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Vallejo",
        "admin": "CA",
        "population": 121253,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 710,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.63718,
          32.52486
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Van",
        "admin": "TX",
        "population": 2632,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 160,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.66149,
          45.63873
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Vancouver",
        "admin": "WA",
        "population": 172860,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 607,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.48849,
          39.31087
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Vandalia",
        "admin": "MO",
        "population": 3899,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 617,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.42454,
          45.77373
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Venersborg",
        "admin": "WA",
        "population": 3745,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1399,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.45426,
          27.09978
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Venice",
        "admin": "FL",
        "population": 22211,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1343,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.12603,
          34.35753
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Ventura County",
        "admin": "CA",
        "population": 823318,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 398,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.53318,
          42.99083
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Verona",
        "admin": "WI",
        "population": 10619,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 289,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.87788,
          32.35265
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Vicksburg",
        "admin": "MS",
        "population": 23131,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 954,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.1476,
          38.85279
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Victoria",
        "admin": "KS",
        "population": 1214,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 878,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.54238,
          40.87593
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Victory Gardens",
        "admin": "NJ",
        "population": 1520,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1672,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.26526,
          38.90122
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Vienna",
        "admin": "VA",
        "population": 16522,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 318,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.52863,
          38.67727
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Vincennes",
        "admin": "IN",
        "population": 18423,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 570,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.98135,
          37.81007
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Vine Grove",
        "admin": "KY",
        "population": 4520,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 516,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.15413,
          36.63869
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Vinita",
        "admin": "OK",
        "population": 5743,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 45,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.97799,
          36.85293
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Virginia Beach",
        "admin": "VA",
        "population": 452745,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1052,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.14857,
          29.06345
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Volusia County",
        "admin": "FL",
        "population": 494593,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1299,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.14667,
          31.54933
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Waco",
        "admin": "TX",
        "population": 132356,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 834,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.02083,
          41.53616
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wakarusa",
        "admin": "IN",
        "population": 1758,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1060,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.65022,
          35.79012
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wake County",
        "admin": "NC",
        "population": 900993,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 944,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.06524,
          29.63135
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wallis",
        "admin": "TX",
        "population": 1252,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 900,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.14171,
          36.29541
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Walnut Cove",
        "admin": "NC",
        "population": 1425,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1021,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.06496,
          37.90631
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Walnut Creek",
        "admin": "CA",
        "population": 68910,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 510,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.2495,
          42.14177
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Walpole",
        "admin": "MA",
        "population": 5918,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1229,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.23561,
          42.37649
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Waltham",
        "admin": "MA",
        "population": 63378,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 218,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.5999,
          32.62098
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Warner Robins",
        "admin": "GA",
        "population": 66588,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 604,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.24005,
          44.12036
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Warren",
        "admin": "ME",
        "population": 3945,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1633,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.79527,
          38.71345
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Warrenton",
        "admin": "VA",
        "population": 9897,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 863,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.4346,
          40.35921
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Warsaw",
        "admin": "IL",
        "population": 1607,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1403,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.41617,
          41.7001
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Warwick",
        "admin": "RI",
        "population": 81699,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 29,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.03637,
          38.89511
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Washington",
        "admin": "DC",
        "population": 601723,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 907,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.36727,
          44.27369
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Washington",
        "admin": "ME",
        "population": 1398,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1464,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.03637,
          38.89511
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Washington, D.C.",
        "admin": "DC",
        "population": 601723,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1434,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.35342,
          45.58262
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Washougal",
        "admin": "WA",
        "population": 15288,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 27
      }
    },
    {
      "id": 1544,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.83877,
          42.25323
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Washtenaw County",
        "admin": "MI",
        "population": 344791,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1700,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.0515,
          41.55815
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Waterbury",
        "admin": "CT",
        "population": 108802,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 871,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.34274,
          40.91959
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Water Mill",
        "admin": "NY",
        "population": 1559,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 629,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.11817,
          41.60621
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Watertown",
        "admin": "CT",
        "population": 3574,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1720,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.63171,
          44.55201
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Waterville",
        "admin": "ME",
        "population": 16261,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 689,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.40877,
          33.8629
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Watkinsville",
        "admin": "GA",
        "population": 2832,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1678,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.75689,
          36.91023
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Watsonville",
        "admin": "CA",
        "population": 53628,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 935,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.89811,
          36.28031
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Waukomis",
        "admin": "OK",
        "population": 1286,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 237,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.00759,
          43.04946
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wauwatosa",
        "admin": "WI",
        "population": 47614,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 348,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.3557,
          31.21368
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Waycross",
        "admin": "GA",
        "population": 14649,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 719,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.55388,
          39.74371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wayne Heights",
        "admin": "PA",
        "population": 2545,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 399,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.57777,
          39.75593
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Waynesboro",
        "admin": "PA",
        "population": 10568,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 899,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.27327,
          31.26045
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Webb",
        "admin": "AL",
        "population": 1430,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 530,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.42999,
          43.21229
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Webster",
        "admin": "NY",
        "population": 5399,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1208,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.11826,
          29.53773
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Webster",
        "admin": "TX",
        "population": 11116,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 485,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.07729,
          28.48778
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wedgefield",
        "admin": "FL",
        "population": 6705,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 526,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.96933,
          44.251
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Weiser",
        "admin": "ID",
        "population": 5507,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1591,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.29256,
          42.29649
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Wellesley",
        "admin": "MA",
        "population": 27982,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 765,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.21373,
          34.85617
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wellington",
        "admin": "TX",
        "population": 2189,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 694,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.70422,
          42.77574
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wendell",
        "admin": "ID",
        "population": 2782,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 748,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.34655,
          41.67141
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Branch",
        "admin": "IA",
        "population": 2322,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1740,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.60804,
          39.96097
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Chester",
        "admin": "PA",
        "population": 19842,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1095,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.75339,
          41.15148
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Westchester County",
        "admin": "NY",
        "population": 949113,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 226,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.71133,
          41.57721
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Des Moines",
        "admin": "IA",
        "population": 64113,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 1765,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.3434,
          40.6516
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Westfield",
        "admin": "NJ",
        "population": null,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1156,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.74204,
          41.76204
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Hartford",
        "admin": "CT",
        "population": 63268,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 227,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.94705,
          41.27065
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "West Haven",
        "admin": "CT",
        "population": 54927,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1101,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.36174,
          34.09001
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Hollywood",
        "admin": "CA",
        "population": 36222,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1707,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.90807,
          40.42587
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Lafayette",
        "admin": "IN",
        "population": 45550,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1512,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.19501,
          32.99124
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Westlake",
        "admin": "TX",
        "population": 1264,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 668,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.80195,
          30.29798
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Lake Hills",
        "admin": "TX",
        "population": 3063,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 825,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.75577,
          40.25228
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Liberty",
        "admin": "OH",
        "population": 1805,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 262,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.3023,
          33.9414
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Westmont",
        "admin": "CA",
        "population": 31853,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1421,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.38067,
          41.20093
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Weston",
        "admin": "CT",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1295,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.39977,
          26.10037
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Weston",
        "admin": "FL",
        "population": 69959,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 602,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.96979,
          39.63453
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Westover",
        "admin": "WV",
        "population": 3983,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 1459,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.05337,
          26.71534
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "West Palm Beach",
        "admin": "FL",
        "population": 106779,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 353,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.19894,
          25.98454
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Park",
        "admin": "FL",
        "population": 14156,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1649,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.3579,
          41.14149
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Westport",
        "admin": "CT",
        "population": 26391,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 660,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.02906,
          38.75841
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Portsmouth",
        "admin": "OH",
        "population": 3149,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 60,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.66389,
          35.78682
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Raleigh",
        "admin": "NC",
        "population": 338759,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1195,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.53023,
          38.58046
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Sacramento",
        "admin": "CA",
        "population": 52721,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1123,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.36622,
          42.34592
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Stockbridge",
        "admin": "MA",
        "population": 1441,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 850,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.43495,
          41.58616
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Unity",
        "admin": "OH",
        "population": 1671,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1281,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.52194,
          41.69689
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "West Warwick",
        "admin": "RI",
        "population": 30146,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 590,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.57805,
          31.95871
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Westway",
        "admin": "TX",
        "population": 4188,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 51
      }
    },
    {
      "id": 1487,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.07335,
          40.7391
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Wendover",
        "admin": "NV",
        "population": 4294,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 1542,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.61905,
          40.30205
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "West Windsor",
        "admin": "NJ",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1141,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.10274,
          29.31164
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wharton",
        "admin": "TX",
        "population": 8726,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 47
      }
    },
    {
      "id": 1128,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.87283,
          48.82975
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Whatcom County",
        "admin": "WA",
        "population": 201140,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 864,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.63481,
          42.43981
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Whately",
        "admin": "MA",
        "population": 1600,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1166,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.00994,
          45.08469
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "White Bear Lake",
        "admin": "MN",
        "population": 25205,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 975,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.61008,
          44.37312
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Whitefield",
        "admin": "NH",
        "population": 1142,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 1267,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.33763,
          48.41108
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Whitefish",
        "admin": "MT",
        "population": 7073,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1204,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.76291,
          41.03399
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "White Plains",
        "admin": "NY",
        "population": 58459,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 564,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.14951,
          35.32647
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Whiteville",
        "admin": "TN",
        "population": 4638,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 781,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.3214,
          31.95182
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Whitney",
        "admin": "TX",
        "population": 2087,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1205,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.9677,
          42.32896
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Whitney Point",
        "admin": "NY",
        "population": 941,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 55,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.33754,
          37.69224
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wichita",
        "admin": "KS",
        "population": 389965,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1571,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.49339,
          33.91371
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wichita Falls",
        "admin": "TX",
        "population": 104710,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 1759,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.82332,
          40.42579
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wilkins Township",
        "admin": "PA",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 852,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.83743,
          40.70634
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Willard",
        "admin": "UT",
        "population": 1660,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 33
      }
    },
    {
      "id": 542,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.14942,
          39.15461
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Williams",
        "admin": "CA",
        "population": 5123,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 354,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.70746,
          37.2707
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Williamsburg",
        "admin": "VA",
        "population": 15052,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1005,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.20372,
          42.71202
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Williamstown",
        "admin": "MA",
        "population": 4325,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 534,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.73781,
          42.96395
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Williamsville",
        "admin": "NY",
        "population": 5300,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 519,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.47994,
          30.42493
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Willis",
        "admin": "TX",
        "population": 5662,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1040,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.35557,
          39.40961
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Willits",
        "admin": "CA",
        "population": 4861,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 484,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.01786,
          27.91614
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Willow Oak",
        "admin": "FL",
        "population": 6732,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1463,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.54659,
          39.74595
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wilmington",
        "admin": "DE",
        "population": 71948,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 886,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.87521,
          43.50076
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wilson",
        "admin": "WY",
        "population": 1482,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 7
      }
    },
    {
      "id": 1505,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.4379,
          41.19537
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Wilton",
        "admin": "CT",
        "population": 18062,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1265,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.13893,
          26.16036
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Wilton Manors",
        "admin": "FL",
        "population": 12385,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 20
      }
    },
    {
      "id": 1646,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.137,
          42.45232
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Winchester",
        "admin": "MA",
        "population": 21374,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 873,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5279,
          38.59033
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Winchester",
        "admin": "MO",
        "population": 1547,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1455,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.15702,
          41.69982
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Windham",
        "admin": "CT",
        "population": 23072,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1583,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.81638,
          38.54713
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Windsor",
        "admin": "CA",
        "population": 27464,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 683,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.85901,
          43.37667
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Winner",
        "admin": "SD",
        "population": 2897,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 29
      }
    },
    {
      "id": 454,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.62116,
          44.54701
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Winslow",
        "admin": "ME",
        "population": 7794,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 456,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.06011,
          41.92121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Winsted",
        "admin": "CT",
        "population": 7712,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 93,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.24422,
          36.09986
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Winston-Salem",
        "admin": "NC",
        "population": 229617,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 1670,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.33924,
          28.6
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Winter Park",
        "admin": "FL",
        "population": 29943,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 717,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.96231,
          31.95653
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Winters",
        "admin": "TX",
        "population": 2562,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 8
      }
    },
    {
      "id": 988,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.6656,
          44.00286
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Wiscasset",
        "admin": "ME",
        "population": 1097,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1161,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.81735,
          44.38358
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wisconsin Rapids",
        "admin": "WI",
        "population": 17897,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 684,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.28784,
          40.19285
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wolfdale",
        "admin": "PA",
        "population": 2888,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    },
    {
      "id": 919,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.64526,
          38.0127
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Woodacre",
        "admin": "CA",
        "population": 1348,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 933,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.20476,
          41.54453
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Woodbury Center",
        "admin": "CT",
        "population": 1294,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1149,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.7733,
          38.67852
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Woodland",
        "admin": "CA",
        "population": 58567,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 139,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.80229,
          42.26259
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Worcester",
        "admin": "MA",
        "population": 181045,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 369,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.5964,
          43.61996
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Worthington",
        "admin": "MN",
        "population": 12764,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 40
      }
    },
    {
      "id": 764,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.71986,
          32.72933
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wrightsville",
        "admin": "GA",
        "population": 2195,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 651,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.64428,
          42.69675
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Wynantskill",
        "admin": "NY",
        "population": 3276,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 36
      }
    },
    {
      "id": 677,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.65951,
          36.13458
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Yadkinville",
        "admin": "NC",
        "population": 2959,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 38
      }
    },
    {
      "id": 509,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.91705,
          40.83677
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Yaphank",
        "admin": "NY",
        "population": 5945,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 11
      }
    },
    {
      "id": 1523,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.18672,
          43.80064
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Yarmouth",
        "admin": "ME",
        "population": 5869,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1696,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.88687,
          39.80645
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Yellow Springs",
        "admin": "OH",
        "population": 3793,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 1322,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.90162,
          38.68665
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Yolo County",
        "admin": "CA",
        "population": 200849,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 126,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.89875,
          40.93121
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Yonkers",
        "admin": "NY",
        "population": 201116,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1406,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.66616,
          43.15092
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "York Corner",
        "admin": "ME",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 964,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.4728,
          42.53006
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Yorkshire",
        "admin": "NY",
        "population": 1180,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1085,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.80819,
          41.29565
        ]
      },
      "properties": {
        "proximity": {
          "ocean": true
        },
        "name": "Yorktown",
        "admin": "NY",
        "population": 0,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 16
      }
    },
    {
      "id": 1329,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.36081,
          38.40158
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Yountville",
        "admin": "CA",
        "population": 3017,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 18
      }
    },
    {
      "id": 1712,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.61299,
          42.24115
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Ypsilanti",
        "admin": "MI",
        "population": 19945,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 26
      }
    },
    {
      "id": 613,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.13673,
          40.79451
        ]
      },
      "properties": {
        "proximity": {
          "ocean": false
        },
        "name": "Zelienople",
        "admin": "PA",
        "population": 3812,
        "datasets": [
          "LOCA",
          "NEX-GDDP"
        ],
        "region": 48
      }
    }
  ]
