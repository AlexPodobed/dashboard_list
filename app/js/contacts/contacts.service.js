;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .factory('Contacts', ContactsFactory);

    ContactsFactory.$inject = ["$resource", "API_URL", "$q", "$filter", '$localStorage'];

    var mocked_data = [
        {
            "id": "57fcd21a0d4e3bf2f3eaba5a",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Shelly Patterson",
            "phone": "+1 (814) 492-3050",
            "email": "shellypatterson@terragen.com",
            "notes": [
                {
                    "text": "1Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "2Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "3Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "4Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "Don't sell IBM today",
                    "timestamp": 1476190792591
                }
            ],
            "account_id": "A600000455",
            "account_description": "ING Bank",
            "account_link": "http://some.bank.com/"
        },
        {
            "id": "57fcd21a25abfbf58fd73fa6",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Powell Bradshaw",
            "phone": "+1 (951) 562-2738",
            "email": "powellbradshaw@terragen.com",
            "notes": [
                {
                    "text": "1Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "2Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "Don't sell IBM today",
                    "timestamp": 1476190792591
                }
            ],
            "account_id": "A600000458",
            "account_description": "PB Bank",
            "account_link": "http://some.bank.com/"

        },
        {
            "id": "57fcd21a857426c5e3d64b4b",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "James Atkinson",
            "phone": "+1 (902) 433-2337",
            "email": "",
            "notes": [
                {
                    "text": "1Don't sell IBM today",
                    "timestamp": 1476190792591
                }, {
                    "text": "2Don't sell IBM today",
                    "timestamp": 1476190792591
                }
            ],
            "account_id": "A600000774",
            "account_description": "Custom Bank",
            "account_link": "http://some.bank.com/"

        },
        {
            "id": "57fcd21a9049c59b679896cb",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Gould Duncan",
            "phone": "+1 (971) 511-3362",
            "email": "",
            "notes": [],
            "account_id": "A600000055",
            "account_description": "ING Bank",
            "account_link": "http://some.bank.com/"

        },
        {
            "id": "57fcd21a3da3a22566931a60",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Sonya Medina",
            "phone": "+1 (912) 466-2167",
            "email": "sonyamedina@terragen.com",
            "notes": [],
            "account_id": "A600000428",
            "account_description": "ING Bank",
            "account_link": "http://some.bank.com/"

        },
        {
            "id": "57fcd21a28174d9a08b9e3e7",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Velma Munoz",
            "phone": "+1 (878) 514-3570",
            "email": "velmamunoz@terragen.com",
            "notes": [],
            "account_id": "A600000491",
            "account_description": "ING Bank",
            "account_link": "http://some.bank.com/"

        },
        {
            "id": "57fcd21a8c2e185e041e9f3a",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Sheri Yates",
            "phone": "+1 (981) 505-2328",
            "email": "",
            "notes": [
                {
                    "text": "1Don't sell IBM today",
                    "timestamp": 1476190792591
                },
                {
                    "text": "2Don't sell IBM today",
                    "timestamp": 1476190792591
                },
                {
                    "text": "3Don't sell IBM today",
                    "timestamp": 1476190792591
                }
            ],
            "account_id": "A600012122",
            "account_description": "ING Bank",
            "account_link": "http://some.bank.com/"

        },
        {
            "id": "57fcd21a8b0c9be875d4b8e7",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Katharine Hunt",
            "phone": "+1 (886) 495-3991",
            "email": "katharinehunt@terragen.com",
            "notes": [],
            "account_id": "A600000291",
            "account_description": "ING Bank",
            "account_link": "http://some.bank.com/"

        },
        {
            "id": "57fcd21a7c4aca79b06b4308",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Bridget Young",
            "phone": "+1 (902) 569-2476",
            "email": "",
            "notes": [
                {
                    "text": "1Don't sell IBM today",
                    "timestamp": 1476190792591
                }
            ],
            "account_id": "",
            "account_description": "",
            "account_link": ""
        },
        {
            "id": "57fcd21aa131ccc332602bfa",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Lillie Fleming",
            "phone": "+1 (985) 572-2459",
            "email": "",
            "notes": [],
            "account_id": "",
            "account_description": "",
            "account_link": ""
        },
        {
            "id": "57fcd21a0ca8978a9f1820c3",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Mendoza Estrada",
            "phone": "+1 (840) 472-3596",
            "email": "mendozaestrada@terragen.com",
            "notes": [],
            "account_id": "",
            "account_description": "",
            "account_link": ""
        },
        {
            "id": "57fcd21a9880f08ba787ba1d",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Norton Rich",
            "phone": "+1 (986) 561-2430",
            "email": "nortonrich@terragen.com",
            "notes": [],
            "account_id": "",
            "account_description": "",
            "account_link": ""
        },
        {
            "id": "57fcd21a1fec04b3f6b5cf9c",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Gillespie Mcmahon",
            "phone": "+1 (805) 453-3835",
            "email": "gillespiemcmahon@terragen.com",
            "notes": [],
            "account_id": "",
            "account_description": "",
            "account_link": ""
        },
        {
            "id": "57fcd21aa7b78bf72eaac2b1",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Lawrence Byers",
            "phone": "+1 (905) 555-3451",
            "email": "lawrencebyers@terragen.com",
            "notes": [],
            "account_id": "",
            "account_description": "",
            "account_link": ""
        },
        {
            "id": "57fcd21afacbb5443894f808",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Schroeder Castro",
            "phone": "+1 (902) 501-2300",
            "email": "schroedercastro@terragen.com",
            "notes": [],
            "account_id": "",
            "account_description": "",
            "account_link": ""
        }
    ];

    function ContactsFactory($resource, API_URL, $q, $filter, $localStorage) {
        // should fetch data from BE
        // return resource(API_URL + "/contacts");

        if (!$localStorage.contacts) {
            $localStorage.contacts = mocked_data;
        }

        function query() {
            return $q(function (resolve, reject) {
                setTimeout(function () {
                    if(!$localStorage.contacts){
                        reject({err:"There is no contacts"});
                    }

                    resolve(angular.copy($localStorage.contacts));
                }, 250);
            });
        }

        function get(contact_id) {
            return $q(function (resolve, reject) {
                setTimeout(function () {
                    if(!$localStorage.contacts){
                        reject({err:"There is no contacts"});
                    }
                    var contact = $filter('filter')($localStorage.contacts, {id: contact_id})[0];
                    resolve(angular.copy(contact));
                }, 250);
            });
        }

        function save(contact) {
            return $q(function (resolve, reject) {
                setTimeout(function () {
                    if(!$localStorage.contacts){
                        reject({err:"There is no contacts"});
                    }
                    $localStorage.contacts.push(contact);
                    resolve(contact);
                }, 250);
            });
        }


        return {
            query: query,
            get: get,
            save: save
        };
    }
})();
