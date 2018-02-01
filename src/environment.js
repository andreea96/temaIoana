export let environments={
    production: false,
    users: [
        {
            "username": "test",
            "password": "test",
            "name": "Mihai",
            "surname": "Stan",
            "email": "stan.mihaioctavian@gmail.com",
            "id": "322AA",
            "attendance" : ["112"]
        },
        {
            "username": "test1",
            "password": "test1",
            "name": "Ion",
            "surname": "Vasile",
            "email": "ion.vasile@gmail.com",
            "id": "322AB",
            "attendance" : []
        }
    ],
    laboratories: [
        {
            "name": "AWJ",
            "dates": [
                {
                    "day": "Monday",
                    "hour": 1300
                },
                {
                    "day": "Friday",
                    "hour": 1800
                }
            ],
            "groups": ["322AB", "322AC"],
            "id": "111"
        },
        {
            "name": "BD",
            "dates": [
                {
                    "day": "Monday",
                    "hour": 1100
                },
                {
                    "day": "Friday",
                    "hour": 1000
                }
            ],
            "groups": ["322AA"],
            "id": "112"
        }
    ],
    courses: [
        {
            "name": "AWJ",
            "dates": [
                {
                    "day": "Monday",
                    "hour": 1300
                },
                {
                    "day": "Friday",
                    "hour": 1800
                }
            ],
            "groups": ["322AB", "322AC"],
            "id": "113"
        },
        {
            "name": "BD",
            "dates": [
                {
                    "day": "Monday",
                    "hour": 1100
                },
                {
                    "day": "Friday",
                    "hour": 1000
                }
            ],
            "groups": ["322AA"],
            "id": "114"
        }
    ]
}