const data = {
        "driving": {
            "wayPoints": [
                {
                    "transitMode": "driving",
                    "distance": 7646,
                    "time": 1240,
                    "wayPoint": {
                        "lat": 40.3919385,
                        "lng": -3.6971829
                    },
                    "additionalInfo": {}
                },
            ],
            "totalDistance": 7646,
            "totalTime": 1240,
            "totalCalories": 0,
            "co2": 894.582,
            "cost": null
        },
        "bicycling": {
            "wayPoints": [
                {
                    "transitMode": "walking",
                    "distance": 1553,
                    "time": 1141,
                    "wayPoint": {
                        "lat": 40.3919385,
                        "lng": -3.6971829
                    },
                    "additionalInfo": {}
                },
                {
                    "transitMode": "bicycling",
                    "distance": 3311,
                    "time": 1031,
                    "wayPoint": {
                        "lat": 40.4144226,
                        "lng": -3.7007164
                    },
                    "additionalInfo": {}
                },
                {
                    "transitMode": "walking",
                    "distance": 115,
                    "time": 89,
                    "wayPoint": {
                        "lat": 40.413866,
                        "lng": -3.701186
                    },
                    "additionalInfo": {}
                }
            ],
            "totalDistance": 4979,
            "totalTime": 2261,
            "totalCalories": 174.55,
            "co2": 0,
            "cost": 2
        },
        "walking": {
            "wayPoints": [],
            "totalDistance": 4335,
            "totalTime": 3487,
            "totalCalories": 348.70000000000005,
            "co2": 0,
            "cost": 0
        },
        "bus": {
            "wayPoints": [
                {
                    "transitMode": "WALKING",
                    "distance": 193,
                    "time": 138,
                    "wayPoint": {
                        "lat": 40.3833804,
                        "lng": -3.7027202
                    },
                    "additionalInfo": {
                        "transitType": "",
                        "line": "",
                        "numStops": ""
                    }
                },
                {
                    "transitMode": "TRANSIT",
                    "distance": 4916,
                    "time": 1508,
                    "wayPoint": {
                        "lat": 40.41280649999999,
                        "lng": -3.6998306
                    },
                    "additionalInfo": {
                        "transitType": "Bus",
                        "line": "6",
                        "numStops": 14
                    }
                },
                {
                    "transitMode": "WALKING",
                    "distance": 245,
                    "time": 185,
                    "wayPoint": {
                        "lat": 40.4140277,
                        "lng": -3.7011321
                    },
                    "additionalInfo": {
                        "transitType": "",
                        "line": "",
                        "numStops": ""
                    }
                }
            ],
            "totalDistance": 5354,
            "totalTime": 2432,
            "totalCalories": 0,
            "co2": 0,
            "cost": 1.5
        },
        "subway": {
            "wayPoints": [
                {
                    "transitMode": "WALKING",
                    "distance": 614,
                    "time": 439,
                    "wayPoint": {
                        "lat": 40.3839571,
                        "lng": -3.6980466
                    },
                    "additionalInfo": {
                        "transitType": "",
                        "line": "",
                        "numStops": ""
                    }
                },
                {
                    "transitMode": "TRANSIT",
                    "distance": 4594,
                    "time": 650,
                    "wayPoint": {
                        "lat": 40.41682,
                        "lng": -3.70326
                    },
                    "additionalInfo": {
                        "transitType": "Subway",
                        "line": "3",
                        "numStops": 6
                    }
                },
                {
                    "transitMode": "WALKING",
                    "distance": 454,
                    "time": 367,
                    "wayPoint": {
                        "lat": 40.4140277,
                        "lng": -3.7011321
                    },
                    "additionalInfo": {
                        "transitType": "",
                        "line": "",
                        "numStops": ""
                    }
                }
            ],
            "totalDistance": 5662,
            "totalTime": 1727,
            "totalCalories": 0,
            "co2": 0,
            "cost": 1.5
        }
    }


export default data;

/* {
    "driving": {
        "wayPoints": [],
        "totalDistance": 7646,
        "totalTime": 1240,
        "totalCalories": 0,
        "co2": 894.582,
        "cost": null
    },
    "bicycling": {
        "wayPoints": [
            {
                "transitMode": "walking",
                "distance": 1553,
                "time": 1141,
                "wayPoint": {
                    "lat": 40.3919385,
                    "lng": -3.6971829
                },
                "additionalInfo": {}
            },
            {
                "transitMode": "bicycling",
                "distance": 3306,
                "time": 1039,
                "wayPoint": {
                    "lat": 40.4144226,
                    "lng": -3.7007164
                },
                "additionalInfo": {}
            },
            {
                "transitMode": "walking",
                "distance": 115,
                "time": 89,
                "wayPoint": {
                    "lat": "40.413866",
                    "lng": "-3.701186"
                },
                "additionalInfo": {}
            }
        ],
        "totalDistance": 4974,
        "totalTime": 2269,
        "totalCalories": 174.95,
        "co2": 0,
        "cost": 2
    },
    "walking": {
        "wayPoints": [],
        "totalDistance": 4335,
        "totalTime": 3487,
        "totalCalories": 348.70000000000005,
        "co2": 0,
        "cost": 0
    },
    "bus": {
        "wayPoints": [
            {
                "transitMode": "WALKING",
                "distance": 193,
                "time": 138,
                "wayPoint": {
                    "lat": 40.3833804,
                    "lng": -3.7027202
                },
                "additionalInfo": {
                    "transitType": "",
                    "line": "",
                    "numStops": ""
                }
            },
            {
                "transitMode": "TRANSIT",
                "distance": 4916,
                "time": 1580,
                "wayPoint": {
                    "lat": 40.41280649999999,
                    "lng": -3.6998306
                },
                "additionalInfo": {
                    "transitType": "Bus",
                    "line": "6",
                    "numStops": 14
                }
            },
            {
                "transitMode": "WALKING",
                "distance": 245,
                "time": 185,
                "wayPoint": {
                    "lat": 40.4140277,
                    "lng": -3.7011321
                },
                "additionalInfo": {
                    "transitType": "",
                    "line": "",
                    "numStops": ""
                }
            }
        ],
        "totalDistance": 5354,
        "totalTime": 2504,
        "totalCalories": 0,
        "co2": 0,
        "cost": 1.5
    },
    "subway": {
        "wayPoints": [
            {
                "transitMode": "WALKING",
                "distance": 614,
                "time": 439,
                "wayPoint": {
                    "lat": 40.3839571,
                    "lng": -3.6980466
                },
                "additionalInfo": {
                    "transitType": "",
                    "line": "",
                    "numStops": ""
                }
            },
            {
                "transitMode": "TRANSIT",
                "distance": 4594,
                "time": 650,
                "wayPoint": {
                    "lat": 40.41682,
                    "lng": -3.70326
                },
                "additionalInfo": {
                    "transitType": "Subway",
                    "line": "3",
                    "numStops": 6
                }
            },
            {
                "transitMode": "WALKING",
                "distance": 454,
                "time": 367,
                "wayPoint": {
                    "lat": 40.4140277,
                    "lng": -3.7011321
                },
                "additionalInfo": {
                    "transitType": "",
                    "line": "",
                    "numStops": ""
                }
            }
        ],
        "totalDistance": 5662,
        "totalTime": 1877,
        "totalCalories": 0,
        "co2": 0,
        "cost": 1.5
    },
    "vtc": [
        {
            "cabify": {
                "wayPoints": [],
                "totalDistance": 7646,
                "totalTime": 1420,
                "totalCalories": 0,
                "co2": 715.6655999999999,
                "cost": 7.2844999999999995
            }
        },
        {
            "uber": {
                "wayPoints": [],
                "totalDistance": 7646,
                "totalTime": 1480,
                "totalCalories": 0,
                "co2": 715.6655999999999,
                "cost": 6.1376
            }
        }
    ],
    "taxi": {
        "wayPoints": [],
        "totalDistance": 7646,
        "totalTime": 1540,
        "totalCalories": 0,
        "co2": 894.582,
        "cost": 10.0683
    }
}
 */