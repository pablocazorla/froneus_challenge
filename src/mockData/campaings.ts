import { Campaign } from "@/models/campaign";

interface CampaignList {
  elementsTotal: number;
  data: Campaign[];
}

const campaingsData: CampaignList = {
  "elementsTotal": 35,
  "data": [
    {
      "id": "c6bda4b0-2954-4d35-8f61-1e4b45312876",
      "name": "Job",
      "created_at": "2024-02-06T09:39:45Z",
      "start_at": "2024-08-17T08:44:10Z",
      "record_calls": true,
      "status": "actived",
      "users": [
        {
          "id": "81c58aa6-d021-4191-8472-045fd0a65023",
          "name": "Jamie",
          "last_name": "Chazier",
          "phone": "140-427-5075"
        },
        {
          "id": "2cbe1d18-c1dd-4e06-a8fe-5fad7cb39961",
          "name": "Vasilis",
          "last_name": "Keets",
          "phone": "457-484-2616"
        },
        {
          "id": "8e2d2048-ac27-4499-8f1f-61488898b566",
          "name": "Marlo",
          "last_name": "Oret",
          "phone": "187-185-7700"
        },
        {
          "id": "2e7a7c88-1272-41da-b5ea-612524cd783d",
          "name": "Gill",
          "last_name": "Norval",
          "phone": "561-127-9473"
        },
        {
          "id": "f2b29834-09c1-4d6c-a194-e28892151ef5",
          "name": "Merrill",
          "last_name": "Hesser",
          "phone": "282-926-5719"
        }
      ]
    },
    {
      "id": "dd723470-1d56-4bb3-9ba0-e2309782ea9c",
      "name": "Veribet",
      "created_at": "2024-05-30T05:34:55Z",
      "start_at": "2024-07-28T00:31:27Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "015dc874-fca3-496a-9db3-05a4396bdfc5",
          "name": "Jacquelin",
          "last_name": "Camacho",
          "phone": "465-685-5242"
        },
        {
          "id": "c66dc414-b25c-4bf0-9707-c20bb9f9cb2d",
          "name": "Kelley",
          "last_name": "Bortolomei",
          "phone": "472-333-3142"
        },
        {
          "id": "419035ba-3ffa-4399-a535-0fbc43e75638",
          "name": "Bron",
          "last_name": "Shakesby",
          "phone": "284-844-9460"
        },
        {
          "id": "0b746b8f-0e4a-4b82-b30c-e00b62c28d08",
          "name": "Carolin",
          "last_name": "Mealing",
          "phone": "601-199-7581"
        },
        {
          "id": "65770bf1-bdc3-4e38-9d52-0c6137af8d39",
          "name": "Timmie",
          "last_name": "Beernaert",
          "phone": "302-555-0968"
        },
        {
          "id": "34d0de53-dbf3-4eef-bf2a-a96c743ab195",
          "name": "Shepperd",
          "last_name": "Scorthorne",
          "phone": "911-769-1018"
        }
      ]
    },
    {
      "id": "c20b0ef7-ab20-4402-9f4c-7c7d2b02ba53",
      "name": "Bitwolf",
      "created_at": "2025-01-07T23:37:29Z",
      "start_at": "2025-01-03T14:56:42Z",
      "record_calls": true,
      "status": "actived",
      "users": [
        {
          "id": "ef15697b-25f3-4209-91b5-f52401c29e07",
          "name": "Grace",
          "last_name": "Mulligan",
          "phone": "719-562-9856"
        },
        {
          "id": "c1dd1d2e-64be-44db-ac5b-ac6f3004ccef",
          "name": "Adrianna",
          "last_name": "Kerry",
          "phone": "774-680-0070"
        }
      ]
    },
    {
      "id": "50029500-9165-43d6-a47e-c8bfefced866",
      "name": "Aerified",
      "created_at": "2024-08-20T22:22:13Z",
      "start_at": "2024-12-01T02:28:26Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "ab3beacd-d880-48c1-9931-b2e03cb61200",
          "name": "Lon",
          "last_name": "Ondrich",
          "phone": "409-360-8884"
        },
        {
          "id": "36b72f06-e7d7-49ca-bda2-ecaa3258a1f1",
          "name": "Myrna",
          "last_name": "Horsley",
          "phone": "825-449-3355"
        },
        {
          "id": "130b2d12-b017-4e87-a754-bb9895859da4",
          "name": "Barnebas",
          "last_name": "Moxom",
          "phone": "360-870-0015"
        }
      ]
    },
    {
      "id": "e0d1a17c-6300-4e3c-a311-60b8cde4e9ba",
      "name": "Greenlam",
      "created_at": "2024-12-14T19:07:59Z",
      "start_at": "2024-07-30T21:41:50Z",
      "record_calls": false,
      "status": "ended",
      "users": [
        {
          "id": "be3d54dd-04d7-4a1b-9760-42a7bb534ff0",
          "name": "Keary",
          "last_name": "Shawley",
          "phone": "468-429-8297"
        },
        {
          "id": "3a5f2704-b42f-4ed5-a326-81671d4b7906",
          "name": "Brittan",
          "last_name": "Thirlwall",
          "phone": "114-153-1756"
        },
        {
          "id": "c7f20b38-dadd-4b73-b002-6a3211c5e373",
          "name": "Ashbey",
          "last_name": "Coughan",
          "phone": "600-822-8823"
        },
        {
          "id": "7f800863-2ccd-4c2e-a523-262bfbb1a6c0",
          "name": "Aleece",
          "last_name": "Apple",
          "phone": "960-123-0398"
        },
        {
          "id": "4300e68f-5abc-4998-b580-7048ca9bed4a",
          "name": "Paco",
          "last_name": "Jurczak",
          "phone": "304-331-4258"
        },
        {
          "id": "0d0bf25c-5b71-4cab-ad84-ffe62dacf1f2",
          "name": "Miof mela",
          "last_name": "McIlmorie",
          "phone": "944-697-3257"
        },
        {
          "id": "e686eb62-fc55-4083-80f9-bd5e7622b4cc",
          "name": "Felicdad",
          "last_name": "Kivelle",
          "phone": "421-580-3615"
        }
      ]
    },
    {
      "id": "252c984b-32d3-4094-a237-4cf9389b7819",
      "name": "Opela",
      "created_at": "2024-08-03T23:59:40Z",
      "start_at": "2024-12-11T05:49:37Z",
      "record_calls": true,
      "status": "actived",
      "users": [
        {
          "id": "96968b2b-bcb7-4a0a-960f-fcdd9716371d",
          "name": "Quintina",
          "last_name": "Colerick",
          "phone": "359-347-6279"
        },
        {
          "id": "465da1f0-af4b-40c6-b824-fa4fbe132381",
          "name": "Mandy",
          "last_name": "Corr",
          "phone": "840-626-1311"
        },
        {
          "id": "7751bd79-b824-4f79-ba67-c41e7a1180c0",
          "name": "Sephira",
          "last_name": "Stockill",
          "phone": "736-370-1344"
        },
        {
          "id": "2d909432-c582-44ab-9be9-44b8fb493cf7",
          "name": "Paulie",
          "last_name": "Shernock",
          "phone": "961-631-3281"
        }
      ]
    },
    {
      "id": "2dd196ec-a75c-4ec3-872c-6152a8906c69",
      "name": "Stim",
      "created_at": "2024-12-28T20:26:13Z",
      "start_at": "2024-02-12T06:04:40Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "9c0470ed-9d44-4528-b9ca-5d866675fc42",
          "name": "Rusty",
          "last_name": "Paten",
          "phone": "638-120-1963"
        },
        {
          "id": "a089b5f7-a07f-4ca6-8ca8-3d384d3346d7",
          "name": "Cara",
          "last_name": "Freckelton",
          "phone": "166-751-4668"
        },
        {
          "id": "0ae80e37-472f-4c6e-ac7c-ed8920a04f45",
          "name": "Roobbie",
          "last_name": "Banbrick",
          "phone": "999-659-9334"
        },
        {
          "id": "2968b619-e52b-43ba-bfdb-a17eef51632b",
          "name": "Zonda",
          "last_name": "Garnsey",
          "phone": "302-491-9610"
        },
        {
          "id": "601fcc15-74c8-493a-a8ea-dd25c155e680",
          "name": "Danya",
          "last_name": "Noad",
          "phone": "285-971-0633"
        }
      ]
    },
    {
      "id": "9751d8b2-028b-4f1f-848e-27fe0f7f65c1",
      "name": "Zontrax",
      "created_at": "2024-06-23T15:19:48Z",
      "start_at": "2024-11-27T21:53:57Z",
      "record_calls": true,
      "status": "actived",
      "users": [
        {
          "id": "8c470bea-de4a-419a-a08a-0817722ffdb9",
          "name": "Valdemar",
          "last_name": "Maylott",
          "phone": "263-263-0534"
        },
        {
          "id": "ee83d8e0-0a56-45f4-9ab0-afa689c62615",
          "name": "Britte",
          "last_name": "Wenderott",
          "phone": "705-444-3457"
        },
        {
          "id": "12726c9d-5080-4213-9736-3a4a80148cf1",
          "name": "Consuela",
          "last_name": "Buckmaster",
          "phone": "798-991-6488"
        },
        {
          "id": "1d1d4644-8701-4a2b-a336-57c8df67970b",
          "name": "Sandro",
          "last_name": "Biasini",
          "phone": "516-350-6799"
        }
      ]
    },
    {
      "id": "8ead3416-083f-40b0-a77c-a388ec1c5a51",
      "name": "Pannier",
      "created_at": "2024-04-30T23:32:29Z",
      "start_at": "2024-12-24T18:54:05Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "711ef007-b0b4-42a6-945c-11d1fe8f47d4",
          "name": "Karee",
          "last_name": "Fretson",
          "phone": "976-394-2561"
        },
        {
          "id": "f2eb92c7-cbc4-4746-a1d9-cfa97d2c9d9b",
          "name": "Sharia",
          "last_name": "Fillgate",
          "phone": "866-269-9650"
        }
      ]
    },
    {
      "id": "310862c6-80aa-4921-9fa6-b1bd0cc375a2",
      "name": "Pannier",
      "created_at": "2024-03-18T02:29:49Z",
      "start_at": "2024-10-01T21:51:12Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "bcf1c774-0264-48fd-bed9-c3cf3feae862",
          "name": "Coralie",
          "last_name": "McRae",
          "phone": "506-989-0270"
        },
        {
          "id": "0264ce9a-6397-4a93-89b9-407d9614c839",
          "name": "Florina",
          "last_name": "Ference",
          "phone": "820-844-2606"
        }
      ]
    },
    {
      "id": "463e048a-deb5-4760-9c9d-99b8d63d53d8",
      "name": "Ventosanzap",
      "created_at": "2024-11-13T03:34:33Z",
      "start_at": "2024-06-06T22:09:59Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "af7fb777-4c40-4f51-b66e-2bd15023884c",
          "name": "Katya",
          "last_name": "D'eath",
          "phone": "580-850-9134"
        },
        {
          "id": "ecafa4df-f15a-4e84-9965-92a27fc350a2",
          "name": "Jehu",
          "last_name": "Swate",
          "phone": "981-437-2787"
        },
        {
          "id": "4e18a54b-1d08-4f14-b325-ed1bdf8d2367",
          "name": "Cord",
          "last_name": "Kemmish",
          "phone": "773-987-2597"
        },
        {
          "id": "18612432-6ce3-4f5f-9372-217d2c386fc5",
          "name": "Whitaker",
          "last_name": "Yardley",
          "phone": "329-379-3277"
        }
      ]
    },
    {
      "id": "7198ae39-15d3-4b96-b119-b3e12f57bf8c",
      "name": "Fixflex",
      "created_at": "2024-06-23T14:54:33Z",
      "start_at": "2024-08-08T23:38:49Z",
      "record_calls": false,
      "status": "ended",
      "users": [
        {
          "id": "fed18c32-b284-4052-86d8-d12ce7caa99d",
          "name": "Ysabel",
          "last_name": "Hessel",
          "phone": "212-767-9463"
        },
        {
          "id": "c51865a2-49fb-4c32-a3b6-19816055890d",
          "name": "Jacenta",
          "last_name": "Cashin",
          "phone": "383-265-7653"
        }
      ]
    },
    {
      "id": "e9735aef-79bf-444f-b9eb-f845ae41c6a1",
      "name": "Regrant",
      "created_at": "2024-12-01T14:13:14Z",
      "start_at": "2024-05-02T13:37:33Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "70fd77ab-c4b5-4444-96cf-450abbcbcb8b",
          "name": "Roch",
          "last_name": "Churms",
          "phone": "292-185-5888"
        },
        {
          "id": "02bf5d01-92cc-4886-a285-797b1207c113",
          "name": "Hyatt",
          "last_name": "Moth",
          "phone": "911-991-5669"
        },
        {
          "id": "1288e09c-5b84-41c3-a47f-d1615c5a7435",
          "name": "Lodovico",
          "last_name": "Tarry",
          "phone": "864-124-0457"
        },
        {
          "id": "51cade09-a88c-4c42-a6bd-7372eeb4543f",
          "name": "Haleigh",
          "last_name": "Beatey",
          "phone": "741-436-6427"
        },
        {
          "id": "462bf7f3-59a9-44cd-bdbe-9c3633fab5c8",
          "name": "Elora",
          "last_name": "Doylend",
          "phone": "956-338-2304"
        }
      ]
    },
    {
      "id": "824f8f0b-4ac9-432c-8507-74b9b683efc8",
      "name": "Subin",
      "created_at": "2024-07-18T16:37:50Z",
      "start_at": "2024-05-30T20:27:38Z",
      "record_calls": true,
      "status": "actived",
      "users": [
        {
          "id": "b3157e31-4d05-4237-a842-4142ceda4b07",
          "name": "Anne-corinne",
          "last_name": "Ellerbeck",
          "phone": "941-624-0080"
        },
        {
          "id": "e60db205-bf01-4a3d-80f4-9c4043b8e464",
          "name": "Ethelred",
          "last_name": "Mellers",
          "phone": "945-674-5622"
        },
        {
          "id": "b883efcc-2fa1-49f1-b171-dfee888c0388",
          "name": "Peterus",
          "last_name": "Isoldi",
          "phone": "684-534-2864"
        },
        {
          "id": "a5c8895e-123c-4dd8-ab9e-0ec1989e046c",
          "name": "Rosemarie",
          "last_name": "Geldeford",
          "phone": "300-929-1601"
        },
        {
          "id": "5bc3cac1-899d-442c-a860-d7f55b08ec31",
          "name": "Alaster",
          "last_name": "Washington",
          "phone": "280-574-4645"
        },
        {
          "id": "ef9b184d-4796-4773-b608-9de1dc9a97c1",
          "name": "Ranice",
          "last_name": "Hablet",
          "phone": "951-838-4477"
        },
        {
          "id": "78c5aa53-2b86-404f-8eb4-566a72feabc2",
          "name": "Casey",
          "last_name": "Reubel",
          "phone": "237-521-5259"
        }
      ]
    },
    {
      "id": "34ec54fe-462b-42c5-a563-7a0ec2c2cabb",
      "name": "Stringtough",
      "created_at": "2024-02-18T19:38:32Z",
      "start_at": "2024-08-13T04:14:26Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "952780a5-965a-458d-af24-1190822de57d",
          "name": "Maje",
          "last_name": "Squeers",
          "phone": "431-380-5580"
        },
        {
          "id": "68a41130-1f30-439b-b9f7-7f5dc4200c1e",
          "name": "Jerrie",
          "last_name": "Gloy",
          "phone": "926-853-2678"
        },
        {
          "id": "5c8a1bf5-aad2-41b0-9a6f-046b12ee9ef7",
          "name": "Verne",
          "last_name": "Seale",
          "phone": "647-664-1233"
        },
        {
          "id": "0213a0a5-20c2-497b-9cca-58f1b835e2e9",
          "name": "Katinka",
          "last_name": "Peile",
          "phone": "639-180-3073"
        },
        {
          "id": "4bfaf671-31b7-4f15-ad2e-c3f38a26a781",
          "name": "Artair",
          "last_name": "Cutmare",
          "phone": "892-265-4274"
        },
        {
          "id": "8a79b370-fdcd-445f-ae37-f085f551c4f3",
          "name": "Inesita",
          "last_name": "Aldridge",
          "phone": "955-222-2675"
        },
        {
          "id": "a9d7722e-3d53-4be5-85bb-17ee4a978d22",
          "name": "Bale",
          "last_name": "Beazer",
          "phone": "991-819-4259"
        }
      ]
    },
    {
      "id": "d31bfb91-1214-41b8-91f4-103cd47c453c",
      "name": "Voyatouch",
      "created_at": "2024-08-30T16:34:59Z",
      "start_at": "2024-11-25T05:38:38Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "c7d5f9d9-3533-43af-b580-27844712991a",
          "name": "Obadiah",
          "last_name": "Cadreman",
          "phone": "485-756-0440"
        },
        {
          "id": "37177af5-ea92-4611-bd13-dc9399e26fe7",
          "name": "Hobie",
          "last_name": "Beverstock",
          "phone": "609-874-3237"
        },
        {
          "id": "d62f3763-16c5-448c-80ee-ed60a1042856",
          "name": "Florie",
          "last_name": "Larver",
          "phone": "442-890-0230"
        },
        {
          "id": "f53fa1da-860a-4931-bb3e-7df85bad4b89",
          "name": "Cortney",
          "last_name": "Shermar",
          "phone": "421-624-3052"
        },
        {
          "id": "8d9b1920-80dc-4b4f-b5a0-1de0cd15f70f",
          "name": "Valeda",
          "last_name": "Stoner",
          "phone": "623-650-2097"
        },
        {
          "id": "5f115afd-c49e-435f-a5e0-20174763d1a6",
          "name": "Corty",
          "last_name": "Jozefczak",
          "phone": "336-559-7975"
        }
      ]
    },
    {
      "id": "d03e356e-9a70-44db-9b76-b44e806dcb89",
      "name": "Sonsing",
      "created_at": "2024-08-23T14:03:39Z",
      "start_at": "2024-12-10T07:57:00Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "4e4488ce-c48a-45ab-8bfb-bf4a62b7adca",
          "name": "Griffie",
          "last_name": "Morot",
          "phone": "817-803-3135"
        },
        {
          "id": "f8be17b3-6afa-4b95-b155-e001fdbd9a5b",
          "name": "Jule",
          "last_name": "I'anson",
          "phone": "770-859-4249"
        },
        {
          "id": "01f6d4d7-f142-4e1b-83c8-6d46c08fa696",
          "name": "Lyman",
          "last_name": "Wolfendale",
          "phone": "539-562-3290"
        },
        {
          "id": "d25ed395-a4fe-4539-9a35-9b62e209cffe",
          "name": "Catherina",
          "last_name": "Gorman",
          "phone": "270-901-8597"
        }
      ]
    },
    {
      "id": "586bf70a-c1bb-477b-bfdc-ccbf7418fa47",
      "name": "Konklux",
      "created_at": "2025-01-10T15:22:09Z",
      "start_at": "2025-01-10T18:10:02Z",
      "record_calls": false,
      "status": "actived",
      "users": [
        {
          "id": "5468c4e9-b298-42ac-9d4b-c6d78f2dc3c3",
          "name": "Tiffi",
          "last_name": "Panswick",
          "phone": "843-491-1045"
        },
        {
          "id": "8fd066ab-9115-42fe-9b00-f6f38c1707e8",
          "name": "Nelie",
          "last_name": "Attersoll",
          "phone": "785-699-3023"
        },
        {
          "id": "07272781-e229-43ae-9290-06b3b12a5187",
          "name": "Leone",
          "last_name": "Biddlestone",
          "phone": "955-406-1414"
        },
        {
          "id": "95243bea-461c-4d8d-ae57-96118b8a4882",
          "name": "Nikki",
          "last_name": "Cable",
          "phone": "343-337-4124"
        },
        {
          "id": "596666ea-427b-4ffb-a1c2-ed5727fafdb5",
          "name": "Nathalie",
          "last_name": "Ethridge",
          "phone": "822-899-6028"
        },
        {
          "id": "89919a87-a96c-42bd-809c-b419f48744c1",
          "name": "Madelina",
          "last_name": "Cahani",
          "phone": "554-314-7064"
        }
      ]
    },
    {
      "id": "83f7486f-927f-4a1b-aaf1-5e8ad5093bcb",
      "name": "Transcof",
      "created_at": "2024-11-24T02:46:03Z",
      "start_at": "2024-10-14T17:37:26Z",
      "record_calls": false,
      "status": "ended",
      "users": [
        {
          "id": "fdd12e4d-bcfd-4314-9bad-e76e43622461",
          "name": "Zulema",
          "last_name": "Troucher",
          "phone": "309-886-8992"
        },
        {
          "id": "f7734525-4cd0-4dbd-bafd-ed1837ea6ba6",
          "name": "Cheston",
          "last_name": "Rosterne",
          "phone": "831-247-5864"
        },
        {
          "id": "9f3af9a9-53f2-48f7-a2e7-51f969953a77",
          "name": "Fancy",
          "last_name": "Lyfe",
          "phone": "163-339-9459"
        },
        {
          "id": "3376fdde-c9e8-4025-9a57-bc4b1ffc93b3",
          "name": "Jeffry",
          "last_name": "Gaisford",
          "phone": "995-177-9919"
        }
      ]
    },
    {
      "id": "922c0a0f-e74b-4df3-8cff-dac1700842fa",
      "name": "Toughjoyfax",
      "created_at": "2024-06-08T20:18:21Z",
      "start_at": "2025-01-26T18:42:05Z",
      "record_calls": true,
      "status": "ended",
      "users": [
        {
          "id": "5c8bebf7-7c68-456e-a0f3-f362b12f0a1c",
          "name": "Sydel",
          "last_name": "Bloor",
          "phone": "779-946-1073"
        },
        {
          "id": "d4cefad1-72a1-41b6-9391-63e032b79b61",
          "name": "Sheelah",
          "last_name": "Balazs",
          "phone": "864-966-2010"
        },
        {
          "id": "8432a2b3-bb60-46d1-8e33-fc08072696a4",
          "name": "Anderea",
          "last_name": "Mellows",
          "phone": "544-150-0344"
        },
        {
          "id": "91840dd0-0a7e-483b-831c-733015df8937",
          "name": "Ali",
          "last_name": "Rittelmeyer",
          "phone": "880-516-3797"
        }
      ]
    },
    {
      "id": "6f4169a8-40e4-4fc5-abee-da7a2ab216d2",
      "name": "Zathin",
      "created_at": "2024-05-08T08:51:55Z",
      "start_at": "2024-10-02T01:12:39Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "273cbea5-e9b9-4604-b6e7-6d2247d64b4d",
          "name": "Ferguson",
          "last_name": "Dowles",
          "phone": "244-601-4491"
        },
        {
          "id": "1532f261-9b94-400d-8cd4-2ea3730a4535",
          "name": "Tish",
          "last_name": "Matthewman",
          "phone": "191-219-4531"
        },
        {
          "id": "142c1fdc-96e2-4bea-addd-de362074b748",
          "name": "Margit",
          "last_name": "Handrek",
          "phone": "613-142-3340"
        },
        {
          "id": "e3c0fa83-6323-4227-9df0-05f24eadcceb",
          "name": "Raquel",
          "last_name": "Mattson",
          "phone": "488-309-5835"
        },
        {
          "id": "00b99636-9a3f-4c4a-af31-8f1e78076c6b",
          "name": "Baron",
          "last_name": "Izkovitz",
          "phone": "556-692-6430"
        },
        {
          "id": "866daa6e-6b83-4aed-83d4-5913555ff1c4",
          "name": "Rafe",
          "last_name": "Linskill",
          "phone": "937-147-6342"
        }
      ]
    },
    {
      "id": "abb250da-2874-4e01-b25a-d52bbf2a5461",
      "name": "Otcom",
      "created_at": "2024-06-17T19:59:53Z",
      "start_at": "2024-03-13T09:31:42Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "1ef2dd63-3239-4be0-bfbb-00292b7a615b",
          "name": "Tracey",
          "last_name": "Allworthy",
          "phone": "482-576-7900"
        },
        {
          "id": "0dc8b221-206c-4d69-940d-8d954f4e21f7",
          "name": "Winifred",
          "last_name": "Oakton",
          "phone": "796-247-2369"
        },
        {
          "id": "03c02396-32bd-4340-a866-041d471231da",
          "name": "Melinde",
          "last_name": "Scapens",
          "phone": "711-132-2764"
        }
      ]
    },
    {
      "id": "86b98377-c9d2-43b7-9446-99333d07a446",
      "name": "Zamit",
      "created_at": "2024-11-28T04:08:17Z",
      "start_at": "2024-02-25T05:12:33Z",
      "record_calls": false,
      "status": "ended",
      "users": [
        {
          "id": "c177f588-76fe-4dc3-9226-2c4f65a7a5a5",
          "name": "Gisela",
          "last_name": "Giurio",
          "phone": "800-381-4758"
        },
        {
          "id": "5360707c-b1cf-4882-9476-4ae26fb924bd",
          "name": "Silvana",
          "last_name": "Renehan",
          "phone": "539-234-0500"
        },
        {
          "id": "6b4ba3ba-4d1a-4957-8fdd-e0c291052b10",
          "name": "Clarie",
          "last_name": "Jardein",
          "phone": "457-687-5319"
        },
        {
          "id": "45097287-31c1-425c-b241-220031585922",
          "name": "Dion",
          "last_name": "Sheather",
          "phone": "163-305-1205"
        },
        {
          "id": "23472bdc-5c07-4d1f-a937-e40283ceb1da",
          "name": "Cecelia",
          "last_name": "Whale",
          "phone": "832-189-7031"
        }
      ]
    },
    {
      "id": "e1a525cd-b89a-4ffa-9915-38a81959a618",
      "name": "Trippledex",
      "created_at": "2024-05-09T09:18:07Z",
      "start_at": "2024-07-24T23:40:52Z",
      "record_calls": false,
      "status": "ended",
      "users": [
        {
          "id": "1e7db900-00f8-4e56-a5fc-ec14803f6d57",
          "name": "Kean",
          "last_name": "Alvey",
          "phone": "486-518-2084"
        },
        {
          "id": "9fa198ed-0245-48a2-a998-ecaed9ffc554",
          "name": "Powell",
          "last_name": "Pridden",
          "phone": "959-864-0312"
        },
        {
          "id": "13519bd2-927e-4472-b539-5c3aed605c00",
          "name": "Dorette",
          "last_name": "Smithyman",
          "phone": "455-660-3574"
        },
        {
          "id": "fa8c5ff2-b25c-447b-a321-256bf5f0fa7f",
          "name": "Freddie",
          "last_name": "Briddle",
          "phone": "666-233-0399"
        },
        {
          "id": "cf0c8f9a-6216-4467-ba02-204a258d6ecc",
          "name": "Myrta",
          "last_name": "Josephs",
          "phone": "814-985-5028"
        }
      ]
    },
    {
      "id": "73e476db-0fc2-43c5-9d05-d5bef2290249",
      "name": "Fixflex",
      "created_at": "2024-03-07T21:49:16Z",
      "start_at": "2024-06-13T01:05:21Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "76e795fd-f79e-4dad-92c4-2a2526dfe80c",
          "name": "Doris",
          "last_name": "Splevings",
          "phone": "118-792-6143"
        },
        {
          "id": "8256ab92-bdb7-4b7e-b3e8-7336aa6c1fad",
          "name": "Lani",
          "last_name": "Bockh",
          "phone": "177-402-5985"
        },
        {
          "id": "c962e699-bf90-47ff-95a9-7432e488bff4",
          "name": "Hilde",
          "last_name": "Dudney",
          "phone": "529-832-8869"
        },
        {
          "id": "21606368-7b0c-4fac-81c8-2b5d0d7c5331",
          "name": "Igor",
          "last_name": "Cookman",
          "phone": "469-115-7530"
        }
      ]
    },
    {
      "id": "ba857db4-e956-464b-8a9e-6a1f93f2df95",
      "name": "Regrant",
      "created_at": "2024-08-16T13:48:18Z",
      "start_at": "2024-03-31T18:28:43Z",
      "record_calls": true,
      "status": "ended",
      "users": [
        {
          "id": "0868e734-7f86-4512-8680-9e062f463aca",
          "name": "Mariana",
          "last_name": "Culbard",
          "phone": "871-918-9941"
        },
        {
          "id": "4558edd4-89c8-4f81-9d79-95bec0e913ed",
          "name": "Zachery",
          "last_name": "Dulton",
          "phone": "345-129-2009"
        }
      ]
    },
    {
      "id": "ee062934-9833-4cba-ba54-dd6874006eb9",
      "name": "Treeflex",
      "created_at": "2024-08-11T20:17:15Z",
      "start_at": "2024-04-22T02:33:18Z",
      "record_calls": false,
      "status": "ended",
      "users": [
        {
          "id": "5014ca4a-a842-4a5a-b6f6-91f2ba527a43",
          "name": "Carlin",
          "last_name": "Maasze",
          "phone": "309-221-9711"
        },
        {
          "id": "f7e67bf6-247b-4a05-82c4-eaf27c49fe3c",
          "name": "Fawnia",
          "last_name": "Ronci",
          "phone": "404-916-9840"
        }
      ]
    },
    {
      "id": "6a99004d-8b61-4081-aea1-4d069f2a6007",
      "name": "Transcof",
      "created_at": "2024-03-19T07:41:31Z",
      "start_at": "2025-01-18T07:45:51Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "6e598c22-5147-4807-a10f-09773b1b955e",
          "name": "Charlie",
          "last_name": "Breinlein",
          "phone": "218-106-3853"
        },
        {
          "id": "cfecf9f4-50b8-48d7-868f-64d0d3df973c",
          "name": "Odey",
          "last_name": "Waddup",
          "phone": "394-868-5422"
        },
        {
          "id": "656699d4-a513-4462-8a07-e1416e021125",
          "name": "Alric",
          "last_name": "Ponceford",
          "phone": "253-218-9309"
        },
        {
          "id": "9884840e-b0c9-44e5-bb89-63506c7111d3",
          "name": "Caterina",
          "last_name": "Boerderman",
          "phone": "789-945-9203"
        }
      ]
    },
    {
      "id": "f28273f6-1ca2-446e-a385-9d5939582000",
      "name": "Y-find",
      "created_at": "2024-06-27T08:26:24Z",
      "start_at": "2024-11-05T13:09:19Z",
      "record_calls": true,
      "status": "ended",
      "users": [
        {
          "id": "45ce985d-0a70-4d34-bd76-41003badc67e",
          "name": "Lucius",
          "last_name": "Maha",
          "phone": "854-543-4419"
        },
        {
          "id": "809d027e-5756-4d23-b64e-17afee50684f",
          "name": "Cecilio",
          "last_name": "Stailey",
          "phone": "664-291-9292"
        },
        {
          "id": "54bbcf0c-826c-41dc-ba52-256c7a5c81ff",
          "name": "Dede",
          "last_name": "Scoles",
          "phone": "432-820-1238"
        },
        {
          "id": "c1dd7e5d-4dc6-4292-9940-00f9fef6eb1e",
          "name": "Hatti",
          "last_name": "Arrighini",
          "phone": "525-731-3983"
        },
        {
          "id": "e101ce26-7fd6-4912-9f79-17a90081e0db",
          "name": "Imojean",
          "last_name": "Faust",
          "phone": "206-740-3688"
        },
        {
          "id": "949a785f-73d9-43f2-8778-226d61e6cbe4",
          "name": "Carlee",
          "last_name": "Beddin",
          "phone": "975-788-8376"
        },
        {
          "id": "5572bec5-500b-45ab-ac24-0096fe570af3",
          "name": "Baillie",
          "last_name": "McCreath",
          "phone": "258-747-1095"
        }
      ]
    },
    {
      "id": "f37dedb8-0952-4c88-b99d-3be4570303f4",
      "name": "Y-find",
      "created_at": "2024-04-18T02:54:31Z",
      "start_at": "2024-12-06T17:53:22Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "b65dba8e-8595-4e91-b52f-b0564c18b2f3",
          "name": "Clywd",
          "last_name": "Bridgewood",
          "phone": "862-560-4859"
        },
        {
          "id": "540e1668-3739-41ea-a72c-7df9183cb6ef",
          "name": "Thoma",
          "last_name": "Petherick",
          "phone": "517-935-3369"
        },
        {
          "id": "2dec1b26-3e85-469c-bdaa-ebd640cc539d",
          "name": "Idaline",
          "last_name": "O'Hogertie",
          "phone": "662-878-3203"
        }
      ]
    },
    {
      "id": "e4dbc5eb-8ccd-47ae-b1a2-36f1450542e4",
      "name": "Tampflex",
      "created_at": "2024-03-28T07:14:15Z",
      "start_at": "2024-06-23T10:43:18Z",
      "record_calls": true,
      "status": "actived",
      "users": [
        {
          "id": "f442eaf4-cb26-4b52-9b88-97c83a5906b9",
          "name": "Veronica",
          "last_name": "Botly",
          "phone": "634-682-2985"
        },
        {
          "id": "1ffbdf47-54c6-4377-bad1-2c7790427f69",
          "name": "Dee",
          "last_name": "De la Eglise",
          "phone": "867-398-1857"
        },
        {
          "id": "7d0b29c3-6b54-44b6-9cec-56b312c31a7a",
          "name": "Park",
          "last_name": "Tradewell",
          "phone": "371-640-1412"
        }
      ]
    },
    {
      "id": "da6068bf-3c13-41f1-92ca-14c80849869d",
      "name": "Tampflex",
      "created_at": "2024-10-14T19:03:57Z",
      "start_at": "2024-04-11T23:57:39Z",
      "record_calls": false,
      "status": "on_hold",
      "users": [
        {
          "id": "85580524-73af-4911-b391-927712e9d061",
          "name": "Roseann",
          "last_name": "Schofield",
          "phone": "514-994-1347"
        },
        {
          "id": "2e667fe8-dfce-4f2f-a93e-ded6826c5440",
          "name": "Natty",
          "last_name": "Ganniclifft",
          "phone": "875-420-5863"
        },
        {
          "id": "4d9c1ca4-a2aa-4c89-b804-c39e7960d3c0",
          "name": "Dieter",
          "last_name": "Crowdy",
          "phone": "562-710-3545"
        }
      ]
    },
    {
      "id": "8ef88e92-2fb6-4047-8ca9-7e2d1c5bd48a",
      "name": "Mat Lam Tam",
      "created_at": "2024-05-18T00:32:06Z",
      "start_at": "2024-07-12T04:52:26Z",
      "record_calls": false,
      "status": "actived",
      "users": [
        {
          "id": "eeb0c25e-ee0f-4e11-aefe-db836bceea49",
          "name": "Adan",
          "last_name": "Clawsley",
          "phone": "352-405-9596"
        },
        {
          "id": "ab2db3c0-f501-4b90-9768-b94c4e104020",
          "name": "Clementina",
          "last_name": "Hadigate",
          "phone": "210-144-5447"
        },
        {
          "id": "c6202a1a-85dd-4a9a-838a-e320918d68be",
          "name": "Hyacinth",
          "last_name": "Give",
          "phone": "900-778-7809"
        }
      ]
    },
    {
      "id": "79e114b8-08fb-4a6e-bf64-4ec840242d52",
      "name": "Fix San",
      "created_at": "2024-02-09T17:22:12Z",
      "start_at": "2024-04-28T17:31:49Z",
      "record_calls": true,
      "status": "on_hold",
      "users": [
        {
          "id": "e8da32f9-3b49-4a2e-8e73-1e1a1f663c97",
          "name": "Maynard",
          "last_name": "Patsall",
          "phone": "961-566-1782"
        },
        {
          "id": "babb0f73-e1f5-473c-b977-1eb6128b3238",
          "name": "Izzy",
          "last_name": "Huske",
          "phone": "695-774-5067"
        }
      ]
    },
    {
      "id": "68e700ad-863e-4367-9e6f-f32b44108636",
      "name": "Asoka",
      "created_at": "2024-02-19T19:44:04Z",
      "start_at": "2024-10-23T08:51:51Z",
      "record_calls": false,
      "status": "actived",
      "users": [
        {
          "id": "46782fc7-7463-4062-8672-4617d04b59fb",
          "name": "Puff",
          "last_name": "Wreakes",
          "phone": "537-366-9512"
        },
        {
          "id": "df9087aa-0545-488e-a1eb-3f6828e13a92",
          "name": "Fredra",
          "last_name": "Wanell",
          "phone": "627-594-5485"
        },
        {
          "id": "dc09324e-266f-42d0-935b-508004c260fb",
          "name": "Alexia",
          "last_name": "Stormes",
          "phone": "547-304-6406"
        },
        {
          "id": "4c1680cc-9bc0-49f9-a1eb-7a71f4f48714",
          "name": "Jaquelyn",
          "last_name": "Axby",
          "phone": "410-949-5692"
        },
        {
          "id": "d9c31dff-9fe0-4c76-8361-68340066ae70",
          "name": "Natalee",
          "last_name": "Kremer",
          "phone": "371-569-0170"
        }
      ]
    }
  ]
}

export default campaingsData;
