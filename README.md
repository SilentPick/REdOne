
REST API DOCUMENTATION
======================
----------
## Table of Contents
> ###Elastic Search Endpoints
[TOC]: #
1. [Classes](#classes)
    - [CREATE](#create)
    - [UPDATE](#update)
    - [READ](#read)
    - [DELETE](#delete)
    - [Classification Hierarchy](#classification-hierarchy)
    - [Internal Fields](#internal-fields)
2. [Key Facts Questions](#key-facts-questions)
    - [GET Key Facts Questions](#get-key-facts-questions)
    - [CREATE OR UPDATE Key Facts Question](#create-or-update-key-facts-question)
    - [DELETE Key Facts Question](#delete-key-facts-question)
3. [Adverts](#adverts)
    - [CREATE Advert](#create-advert)
    - [UPDATE Advert](#update-advert)
    - [GET Advert by id](#get-advert-by-id)
    - [DELETE Advert](#delete-advert)
    - [Advert Status](#advert-status)
    - [Advert isPremium flag update](#advert-ispremium-flag-update)
    - [Advert Keywords](#adverts-keywords)
    - [Upload Primary Image](#upload-primary-image)
    - [Upload Adverts Images](#upload-adverts-images)
    - [Delete Adverts Image](#delete-adverts-image)
    - [Get Adverts Images](#get-adverts-images)
4. [Autocomplete](#autocomplete)
5. [Regular Search](#regular-search)
6. [Related Search](#related-search)
7. [Highlighted Search](#highlighted-search)
8. [Response Status](#response-status)
9. [Data validation error response](#data-validation-error-response)
10. [Deployment](#deployment)
    - [Install mysql](#install-mysql)
    - [Install Java 8](#install-java-8)
    - [Install Elasticsearch as service](#install-elasticsearch-as-service)
    - [Install Tomcat as Service](#install-tomcat-as-service)
    - [Install nginx](#install-nginx)
11. [Bulk loading keyFacts questions](#bulk-loading-keyFacts-questions)


----------

> ###Application Endpoints
[TOC]: #
 1. [Profile Management](#profile-management)
    - [Registration - Step 1](#registration---step-1)
    - [Registration - Step 2](#registration---step-2)
	    - [Verify Registration - Email](#verify-registration---email)
	    - [Confirm Phone - Optional](#confirm-phone---optional)
    - [Registration - Step 3](#registration---step-3)
    - [Registration - List Registered Shops (Admin)](#Registration---List-Registered-Shops-(Admin))
    - [Registration - Review Shop (Admin)](#Registration---review-shop-(admin))
    - [Social Media Registration](#social-media-registration)
    - [Verify Registration - Email](#verify-registration---email)
    - [Verify Registration - Phone](#verify-registration---phone)
    - [Forgot Password](#forgot-password)
    - [Reset Password](#reset-password)
    - [Login with Email](#login-with-email)
    - [Login with Social Identification](#login-with-social-identification)
    - [Profile](#profile)
        - [List All Users' Profile](#list-all-user's-profile)
        - [GET User Profile](#get-user-profile)
        - [UPDATE User Profile](#update-user-profile)
 2. [Notifications & Actions](#notifications-&-actions)
    - [Email](#email)
        - [List Email Templates](#list-email-templates)
        - [Update Email Template](#update-email-template)
    - [SMS](#sms)
        - [List SMS Templates](#list-sms-templates)
        - [Update SMS Template](#update-sms-template)
 3. [Campaign Management](#campaign-management)
    - [Create Campaign](#create-campaign)
    - [Update Campaign](#update-campaign)
    - [Update Campaign - Admin’s Step](#update-campaign---admin's-step)
    - [Delete Campaign](#delete-campaign)
    - [Campaign Profile (Detail)](#campaign-profile-(detail))
    - [List Campaigns](#list-campaigns)
    - [Associate Campaigns to Adverts](#associate-campaigns-to-adverts)
    - [List Relevant Campaigns](#list-relevant-campaigns)
    - [Remove Campaign Association](#remove-campaign-association)
    - [Redeem Campaign Token](#redeem-campaign-token)
    - [Get Token Information](#get-token-information)
    - [Update Token Status](#update-token-status)
    - [List Tokens](#list-tokens)
 4. [Membership & Payment](#membership-&-payment)
    - [Create Premium Types](#create-premium-types)
    - [Associate Main Image and Icon for Premium Type](#associate-main-image-and-icon-for-premium-type)
    - [Create Addon](#create-addon)
    - [Associate Main Image and Icon for Addon](#associate-iain-image-and-icon-for-addon)
    - [Update Premium Type](#update-premium-type)
    - [Update Addon](#update-addon)
    - [List All Premium Types](#list-all-premium-types)
    - [List All Addons](#list-all-addons)
    - [List All Pure Addons](#list-all-pure-addons)
    - [Delete Premium Type](#delete-premium-type)
    - [Delete Addon](#delete-addon)
    - [Create Membership Type](#create-membership-type)
    - [Payment](#Payment)
        - [Membership](#Membership)
        - [Addons](#addons)
        - [Poll for Payment Details](#poll-for-payment-details)
        - [Delete Webhook](#delete-webhook)
 5. [Search Alert](#search-alert)
    - [Save Search](#save-search)
    - [List Saved Search Alerts](#list-saved-search-alerts)
 6. [Contact Details](#contact-details)
    - [Post Contact Details](#Post-Contact-Details)
    - [List Contact Details](#List-Contact-Details)
    - [Update Contact Details](#Update-Contact-Details)
    - [Update Contact Details’ Status](#Update-Contact-Details’-Status)
## Classes
 **(ClassLevelOne/ClassLevelTwo/ClassLevelThree)**

### CREATE
#### classLevelOne
```
  POST /classLevelOne
  Header: Content-Type application/json
  Body:
  {
      "name": "Wanted",
      “menuOrder”:4
  }
```
> NOTE: menuOrder must be unique for each record

```
Response:
Status: 201 (Created)
Body:
{
    "id": 4,
    "name": "Wanted",
     “menuOrder”:4
}
```
#### classLevelTwo
```
POST /classLevelTwo
Header: Content-Type application/json
Body:
{
	"name":"Home and Garden",
	“menuOrder”:5,
	“section”:1
}

```
> [NOTE: menuOrder must be unique for records having same section]

```
Response:
Status: 201 (Created)
Body:
{
    "id": 4,
    "name": "Home and Garden",
    “menuOrder”:5
}

```
#### classLevelThree
```
POST /classLevelThree
Header: Content-Type application/json
Body:
{
    "name":"Furniture",
    “menuOrder”:5,
    “category”:4
}
```
> [NOTE: menuOrder must be unique for records having same category]

```
Response:
Status: 201 (Created)
Body:
{
    "id": 4,
    "name": "Furniture",
    “menuOrder”:5
}

```

### UPDATE
```
PUT /classLevelOne/4
Header: Content-Type application/json
Body:
{
    "name": "**Wanted**"
}

```

> Generic Format : `PUT /classLevelOne/<id>`


```
Response:
Status: 200 (OK)
Body:
{
    "id": 4,
    "name": "**Wanted**",
    “menuOrder”:4,
    "subclasses": []
}

```
> [Note: Similar for classLevelTwo and classLevelThree]

### READ

```
GET  /classLevelOne/4
```
> Generic Format: `/classLevelOne/<id>`

```
Response:
Status: 200 (OK)
Body:
{
    "id": 4,
    "name": "**Wanted**",
    “menuOrder”:4,
    "subclasses": []
}

```
> [Note: Similar for classLevelTwo and classLevelThree]

### DELETE

```
DELETE  /classLevelOne/4
```
> Generic Format: `DELETE  /classLevelOne/<id> `

```
Response:
Status: 204 (No Content)

```

> [Note: Similar for classLevelTwo and classLevelThree]

### Classification Hierarchy

#### classLevelOne (All hierarchy)


```
GET /classLevelOne
```

```
Response:
Status: 200 (OK)
Body:
[
    {
        "id": 1,
        "name": "Buy",
        “menuOrder”:1,
        "subclasses": [
            {
                "id": 2,
                "name": "Properties",
	            “menuOrder”:2,
                "subclasses": []
            },
            {
                "id": 1,
                "name": "Vehicles",
                “menuOrder”:1,
                "subclasses": []
            },
            {
                "id": 4,
                "name": "Home and Garden",
                “menuOrder”:4,
                "subclasses": [
                    {
                        "id": 4,
                        "name": "Furniture",
		                “menuOrder”:4
                    },
                    {
                        "id": 5,
                        "name": "Kitchenware",
                        “menuOrder”:5

                    }
                ]
            },
            {
                "id": 5,
                "name": "Business and Industry",
                “menuOrder”:5,
                "subclasses": []
            }
        ]
    },
    {
        "id": 2,
        "name": "Rent",
        “menuOrder”:2,
        "subclasses": []
    },
    {
        "id": 3,
        "name": "Services",
        “menuOrder”:3,
        "subclasses": []
    },
    {
        "id": 5,
        "name": "Wanted",
        “menuOrder”:5,
        "subclasses": []
    }
]

```
> To drill down to search page from hierarchy use following endpoint
  `GET /adverts/search?section=1&category=1&subCategory=1&filter=true`
  Other generic parameters like sortBy, max and offset are also available

#### classLevelTwo

```
GET /classLevelTwo
```

```
Response:
Status: 200 (OK)
Body:
[
    {
        "id": 1,
        "name": "Vehicles",
“menuOrder”:1,
        "subclasses": []
    },
    {
        "id": 2,
        "name": "Properties",
“menuOrder”:2,
        "subclasses": []
    },
    {
        "id": 3,
        "name": "Electronics",
“menuOrder”:3,
        "subclasses": []
    },
    {
        "id": 4,
        "name": "Home and Garden",
“menuOrder”:4,
        "subclasses": [
            {
                "id": 4,
                "name": "Furniture",
“menuOrder”:4
            },
            {
                "id": 5,
                "name": "Kitchenware",
“menuOrder”:5
            }
        ]
    },
    {
        "id": 5,
        "name": "Business and Industry",
“menuOrder”:5,
        "subclasses": []
    }
]

```
### Internal Fields
Internal fields are used in searching and autocomplete. These fields are related to subCategory.

Internal Fields can be defined while creating subcategories like shown below.
```
POST /classLevelThree
Body:
{
"name":"Hello world",
"menuOrder":99,
"category":1,
"internalFields":["Make", "Model"]
}

Response:
Status: 200 (OK)
{
  "id": 205,
  "internalFields": ["Model", "Make"],
  "menuOrder": 99,
  "name": "Hello world"
}
```
Or, these can be updated on existing subcategory like shown below:
```
POST /classLevelThree/1
Body:
{
"internalFields":["Make", "Model"]
}

Response:
Status: 200 (OK)
{
  "id": 1,
  "internalFields": ["Model", "Make"],
  "menuOrder": 1,
  "name": "Motorcycles"
}
```

## Key Facts Questions

### GET Key Facts Questions
```
GET /keyFacts/1/1/7
```
> Generic Format: `GET /keyFacts/<sectionId>/<categoryId>/<subCategoryId>`

```
Response:
Status: 200 (OK)
Body:
[
{
"id": 108,
"questionOrder": 2,
"question": "Condition",
"answerType": "options",
"mandatory": true,
"multiselect": [],
"options": [
"New",
"Used",
"Reconditioned"
],
"notes": null,
"section": {
"id": 1,
"name": "Buy"
},
"category": {
"id": 1,
"name": "Vehicles"
},
"subCategory": {
"id": 7,
"name": "Heavy Vehicles"
}
},
{
"id": 107,
"questionOrder": 2,
"question": "Type",
"answerType": "options",
"mandatory": true,
"multiselect": [],
"options": [
"Bus",
"Lorry",
"Crane",
"Other"
],
"notes": null,
"section": {
"id": 1,
"name": "Buy"
},
"category": {
"id": 1,
"name": "Vehicles"
},
"subCategory": {
"id": 7,
"name": "Heavy Vehicles"
}
}
]
```

### CREATE OR UPDATE Key Facts Question

Automatically create if not exist and update if exist (section, category, subCategory, question combination is unique).
##### CREATE
```
POST /keyFacts/1/1/2
Header: Content-Type application/json
Body:
{
        "question": "Condition",
        "answerType": "options",
        "mandatory": true,
        "options":["New", "Used"]
 }

```

> Generic Format: `POST /keyFacts/<sectionId>/<categoryId>/<subCategoryId>`

```
Response:
Status: 201 (Created)
Body:
{
    "id": 42,
    "question": "Condition",
    "answerType": "options",
    "mandatory": true,
    "multiselect": [],
    "options": [
        "New",
        "Used"
    ],
    "notes": null,
    "isCoreField":false,
    "dynamicField": null,
    "section": {
        "id": 1,
        "name": "Buy"
    },
    "category": {
        "id": 1,
        "name": "Vehicles"
    },
    "subCategory": {
        "id": 2,
        "name": "MotorCycles"
    }
}

```

> `"isCoreField":true` should be added in the body to make a question core keyFact for section, category and subCategory combination.
By default `isCoreField` will be `false`.
Dynamic fields and values can be added in the body as follows:
```
"dynamicField": {
"measurementInfo": {
"baseUnit": "Acre",
"availableUnitConversions": {
"Perches": 0.00625,
"Sq-meter": 4046.86,
"Acre": 1
}
},
"selectedMeasurement": "Perches",
"SOME_OTHER_DYNAMIC_FIELD":"ITS_VALUE"
}
```

#### UPDATE
```
POST /keyFacts/1/1/2
Header: Content-Type application/json
Body:
{
        "question": "Condition",
        "answerType": "options",
        "mandatory": true,
        "options":["New", "Used", “Reconditioned”],
        "isCoreField":true,
        "dynamicField": {
        "measurementInfo": {
        "baseUnit": "Acre",
        "availableUnitConversions": {
        "Perches": 0.00625,
        "Sq-meter": 4046.86,
        "Acre": 1
        }
        },
        "selectedMeasurement": "Perches",
        "SOME_OTHER_DYNAMIC_FIELD":"ITS_VALUE"
        }
 }
```

```
Response:
Status: 200 (OK)
Body:
{
    "id": 42,
    "question": "Condition",
    "answerType": "options",
    "mandatory": true,
    "multiselect": [],
    "options": [
        "New",
        "Used",
        "Reconditioned"
    ],
    "notes": null,
    "isCoreField": true,
    "dynamicField": {
    "measurementInfo": {
    "baseUnit": "Acre",
    "availableUnitConversions": {
    "Perches": 0.00625,
    "Sq-meter": 4046.86,
    "Acre": 1
    }
    },
    "selectedMeasurement": "Perches",
    "SOME_OTHER_DYNAMIC_FIELD":"ITS_VALUE"
    },
    "section": {
        "id": 1,
        "name": "Buy"
    },
    "category": {
        "id": 1,
        "name": "Vehicles"
    },
    "subCategory": {
        "id": 2,
        "name": "MotorCycles"
    }
}
```

> If Response Status is 201, it is created and if Response status is 200, then it is updated

> NOTE: [`GET /keyFacts/<id>` is available for showing particular question]

### DELETE Key Facts Question
```
DELETE /keyFacts/<id>
```
```
Response:
Status: 204 (No Content)
```

## ADVERTS

### CREATE ADVERT
```
POST /adverts
Header: Content-Type application/json
Body:
{
	"title":"Fast nd Furious Car",
	"description":"Nice car with bla. bla. bla.",
	"section":1,
	"category":1,
	"subCategory":3,
	"price":2000,
	"contactNo":"9999999999",
	"shopInfo":{
		"agreePayment":true,
		"isDeal":true,
		"orderVal":1
	},
	"keyFacts":{
	"Make":"Racer",
	"Model":"234",
	"Condition":"New",
	"Car Features":{
		"Exterior":["Alloy Wheel","Fog light"],
		"Equipments":["Alarm System","Camera"]
	}
	},
	"location":{
    	"state":"Bagmati",
    	"city":"Lalitpur",
    	"geoPoint": {
    	"lat":27.6644,
    	"lon":85.3188
    	}
    }
}
```

```
Response:
Status: 201 (Created)
Body:
{
    "id": "QiwxumKrRLK2uoW6elhjOg",
    "title": "Fast nd Furious Car",
    "section": {
        "id": 1,
        "name": "Buy"
    },
    "category": {
        "id": 1,
        "name": "Vehicles"
    },
    "subCategory": {
        "id": 3,
        "name": "Cars"
    },
    "contactNo": "9999999999",
    "description": "Nice car with bla. bla. bla.",
    "keyFacts": {
        "Condition": "New",
        "Car Features": {
            "Equipments": [
                "Alarm System",
                "Camera"
            ],
            "Exterior": [
                "Alloy Wheel",
                "Fog light"
            ]
        },
        "Model": "234",
        "Make": "Racer"
    },
    "price": 2000,
    "shopInfo": {
        "id": 9,
        "agreePayment": true,
        "isDeal": true,
        "orderVal": 1
    },
"location":{
        "id":1,
    	"state":"Bagmati",
    	"city":"Lalitpur",
    	"geoPoint": {
    	"lat":27.6644,
    	"lon":85.3188
    	}
    },
    "dateCreated": "2017-09-16T15:03:57Z",
    "lastUpdated": "2017-09-16T15:03:57Z"
}
```
### UPDATE Advert
```
PUT /adverts/QiwxumKrRLK2uoW6elhjOg
Header: Content-Type application/json
Body:
{
	"title":"Fast and Furious Car",
	"description":"Nice car with something polite description",
	"keyFacts":{
	"Make":"Racer",
	"Model":"234",
	"Condition":"New",
	"Car Features":{
		"Exterior":["Alloy Wheel"],
		"Equipments":["Alarm System","Camera"]
	}
	}


}
```

```
Response:
Status: 200 (OK)
Body:
{
    "id": "QiwxumKrRLK2uoW6elhjOg",
    "title": "Fast and Furious Car",
    "section": {
        "id": 1,
        "name": "Buy"
    },
    "category": {
        "id": 1,
        "name": "Vehicles"
    },
    "subCategory": {
        "id": 3,
        "name": "Cars"
    },
    "contactNo": "9999999999",
    "description": "Nice car with something polite description",
    "keyFacts": {
        "Condition": "New",
        "Car Features": {
            "Equipments": [
                "Alarm System",
                "Camera"
            ],
            "Exterior": [
                "Alloy Wheel"
            ]
        },
        "Model": "234",
        "Make": "Racer"
    },
    "price": 2000,
    "shopInfo": {
        "id": 9,
        "agreePayment": true,
        "isDeal": true,
        "orderVal": 1
    },
    "dateCreated": "2017-09-16T15:03:57Z",
    "lastUpdated": "2017-09-16T15:12:11Z"
}
```

### GET Advert by Id
`GET /adverts/QiwxumKrRLK2uoW6elhjOg`

```
Response:
Status: 200 (OK)
Body:
{
    "id": "QiwxumKrRLK2uoW6elhjOg",
    "title": "Fast and Furious Car",
    "section": {
        "id": 1,
        "name": "Buy"
    },
    "category": {
        "id": 1,
        "name": "Vehicles"
    },
    "subCategory": {
        "id": 3,
        "name": "Cars"
    },
    "contactNo": "9999999999",
    "description": "Nice car with something polite description",
    "keyFacts": {
        "Condition": "New",
        "Car Features": {
            "Equipments": [
                "Alarm System",
                "Camera"
            ],
            "Exterior": [
                "Alloy Wheel"
            ]
        },
        "Model": "234",
        "Make": "Racer"
    },
    "price": 2000,
    "shopInfo": {
        "id": 9,
        "agreePayment": true,
        "isDeal": true,
        "orderVal": 1
    },
    "dateCreated": "2017-09-16T15:03:57Z",
    "lastUpdated": "2017-09-16T15:12:11Z"
}
```

### DELETE Advert
`DELETE /adverts/<advert_id>`

```
Response:
Status: 204 (No Content)
```

### Advert Status
The default status is **"pending"**. Other options are **"approved"** and **"rejected"**

#### Get adverts with status

`GET /adverts/status?status=approved&max=10&offset=0`
> max and offset are mandatory params. The default value of status is pending

```
Response:
Status: 200 (OK)
Body:
{
    "max": 10,
    "offset": 0,
    "totalHits": 2,
    "status": "approved",
    "adverts": [
        {
            "id": "EhJiVVPkTF6Z54MEwdj45w",
            "title": "Fast nd Furious Car",
            "keyFacts": {
                "Condition": "New",
                "Car Features": {
                    "Equipments": [
                        "Alarm System",
                        "Camera"
                    ],
                    "Exterior": [
                        "Alloy Wheel",
                        "Fog light"
                    ]
                },
                "Model": "234",
                "Make": "Racer"
            },
            "location": {
                "city": "Kathmandu",
                "id": 2,
                "state": "Bagmati",
                "geoPoint": null,
                "class": "com.ivalley.adverts.Location"
            },
            "price": 2000,
            "thumbnailImage": null,
            "status": "approved",
            "dateCreated": "2017-09-29T20:34:20.000Z",
            "lastUpdated": "2017-10-02T04:14:33.000Z"
        },
        {
            "id": "yZHH_hGDTpaM3D2WKGV_jw",
            "title": "Himalayan Bicycle",
            "keyFacts": {
                "Model": "H8848",
                "Make": "Himalayan Bicycle Company"
            },
            "location": {
                "city": "Kathmandu",
                "id": 1,
                "state": "Bagmati",
                "geoPoint": null,
                "class": "com.ivalley.adverts.Location"
            },
            "price": 1000,
            "thumbnailImage": null,
            "status": "approved",
            "dateCreated": "2017-09-29T09:09:30.000Z",
            "lastUpdated": "2017-10-02T04:15:00.000Z"
        }
    ]
}
```

#### Update status of advert

```
POST /adverts/status/EhJiVVPkTF6Z54MEwdj45w
Header: Content-Type application/json
Body:
{
"status":"approved"
}
```

```
Response:
Status: 200 (OK)
Body:
{
    "id": "EhJiVVPkTF6Z54MEwdj45w",
    "status": "approved"
}
```

### Advert isPremium flag update
By default isPremium will be false and it cannot be updated by editing advert for security reason.
```
POST /adverts/premium/EhJiVVPkTF6Z54MEwdj45w
Header: Content-Type application/json
Body:
{
"isPremium":true
}
```
> valid options are boolean true or false or "true" or "false"

```
Response:
Status: 200 (OK)
Body:
{
    "id": "EhJiVVPkTF6Z54MEwdj45w",
    "isPremium": true
}

```

### Advert Keywords
Keywords are used in search and autocomplete for matching.

#### Add Keywords

Keywords are value, weight pairs. Weights are used to introduce custom scoring in future when there are many similar matches. It will not be significant when data is less.
Values will be saved in lower case and weight should be between 0.1 to 3.0 . The default value of weight is 1.0, which means its optional.
The maximum number of keywords is set to be 25. Keyword value should be unique for advert.
```
POST /adverts/keywords/EhJiVVPkTF6Z54MEwdj45w
Header: Content-Type application/json
Body:
{
	"keywords":[
		{
			"value": "Race Cars",
			"weight": 3.0
		},
		{
			"value":"Fancy Cars"
		},
		{
		    "value": "Movie Cars",
		    "weight": 2.5
		}
		]
}
```
```
Response:
Status: 200 (OK)
Body:
[
    {
        "id": 4,
        "advert": {
            "id": "EhJiVVPkTF6Z54MEwdj45w"
        },
        "value": "race cars",
        "weight": 3
    },
    {
        "id": 5,
        "advert": {
            "id": "EhJiVVPkTF6Z54MEwdj45w"
        },
        "value": "fancy cars",
        "weight": 1
    },
    {
            "id": 6,
            "advert": {
                "id": "EhJiVVPkTF6Z54MEwdj45w"
            },
            "value": "movie cars",
            "weight": 2.5
        }
    ]
```

#### Remove Keywords
A list of keywords ids should be passed as shown below.
```
DELETE /adverts/keywords/EhJiVVPkTF6Z54MEwdj45w
Header: Content-Type application/json
Body:
{
	"keywords":[5, 6]
}
```

```
Response:
Status: 200 (OK)
Body:
[
    {
        "id": 4,
        "advert": {
            "id": "EhJiVVPkTF6Z54MEwdj45w"
        },
        "value": "race cars",
        "weight": 3
    }
]
```

#### GET keywords
```
GET /adverts/keywords/EhJiVVPkTF6Z54MEwdj45w
```

```
Response:
Status: 200 (OK)
Body:
[
    {
        "id": 4,
        "advert": {
            "id": "EhJiVVPkTF6Z54MEwdj45w"
        },
        "value": "race cars",
        "weight": 3
    }
]
```

### Upload Primary Image
A separate endpoint is available to upload primary image as it is treated separately from other images.
The input should be form data with a file and name "primaryImage"

```
POST /adverts/primaryImage/EhJiVVPkTF6Z54MEwdj45w
form-data
primaryImage image1.jpg
```

```
Response:
Status: 200 (OK)
Body:
{
    "id": 11,
    "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/EhJiVVPkTF6Z54MEwdj45w/T_1507086365317_367867.jpg",
    "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/EhJiVVPkTF6Z54MEwdj45w/1507086365317_367867.jpg"
}
```

> If there is already another primaryImage then it will be deleted and new one will be used.

### Upload Adverts Images
A maximum of 10 images (including Primary Image) can be uploaded with max size of 10 MB each.
Grails Asynchronous processing is used to upload with multiple threads and it is a bit faster.
Original image and thumbnail converted image will be saved on image storage. jpg, png and jpeg are included as supported formats.
If any other formats is to be supported, then it should be added in code.
```
POST /adverts/images/EhJiVVPkTF6Z54MEwdj45w
form-data
any_name image1.jpg,image2.jpg
any_name image3.png,image4.jpeg
```


```
Response:
Status: 200 (OK)
Body:
{
    hasError: false,
    errors: {},
    "images": [
            {
                "id": 14,
                "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1506881335148_628285.jpg",
                "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/1506881335148_628285.jpg"
            },
            {
                "id": 9,
                "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1506880308956_440346.jpg",
                "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/1506880308956_440346.jpg"
            },
             {
            "id": 24,
            "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1507095323452_293013.jpg",
            "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/1507095323452_293013.jpg"
        },
        {
            "id": 25,
            "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1507095323370_865694.jpg",
            "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/1507095323370_865694.jpg"
        }            
        ]
}
```

### Delete Adverts Image
```
DELETE /adverts/images/XeY4doLETSqnm6e5OPllaw/4
```

```
Response:
Status: 204 (No Content)
```

### Get Adverts Images

```
GET /adverts/images/XeY4doLETSqnm6e5OPllaw
```

```
Response:
Status: 200 (OK)
Body:
{
    "primaryImage": {
        "id": 1,
        "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1506874861012_774208.jpg",
        "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/1506874861012_774208.jpg"
    },
    "images": [
        {
            "id": 14,
            "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1506881335148_628285.jpg",
            "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/1506881335148_628285.jpg"
        },
        {
            "id": 9,
            "thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1506880308956_440346.jpg",
            "originalImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/1506880308956_440346.jpg"
        }
    ]
}
```

## Autocomplete
The user typed query should be sent in mandatory parameter `q`.
> Optimization Tip: It is better to used front end technology to send query only when minimum of 2 or 3 characters is typed and also limit number of hits to server.
Twitter typeahead is javascript library that is good in autocomplete.

#### Other Parameters
| Parameter|Type|Remarks|Example|
|--|--|--|--|
| `max` |Int , Range 1 to 100|Default 10|`/adverts/autocomplete?q=cars&max=20`|
|`section`|Long/List|Sections to be suggested|`/adverts/autocomplete?q=cars&section=[1,2]`|
|`category`|Long/List|Categories to be suggested|`/adverts/autocomplete?q=cars&section=1&category=5`|
|`subCategory`|Long/List|SubCategories to be suggested|`/adverts/autocomplete?q=cars&section=[1]&category=5&subCategory=[8,9,10]`|

> These parameters can be used to suggest user only with selected hierarchy.

```
GET /adverts/autocomplete?q=hero
```


```
Response:
Status: 200 (OK)
Body:
{
    "groups": {
        "Buy": [
            {
                "suggestion": "<em>Hero</em> Honda F55",
                "url": "/adverts/search?q=hero&section=1&internalField=Hero+Honda+F55"
            }
        ],
        "Rent": [
            {
                "suggestion": "<em>Hero</em> Mountain bike for rent",
                "url": "/adverts/search?q=hero&section=2&title=Hero+Mountain+bike+for+rent"
            }
        ]
    },
    "hits": [
        {
            "suggestion": "<em>Hero</em> bicycle",
            "url": "/adverts/search?q=hero&section=1&category=1&title=Hero+bicycle"
        }
    ]
}

```

The response has two parts `groups` and `hits`
`groups` contain matched section name with one suggestion and corresponding relative url.
`hits` contain other matches with suggestion and corresponding relative url.

## Regular Search

The endpoint is:
`GET /adverts/search?section=<sectionId>&<other_params>=<other_values>`

### Parameters
Following are the available parameters to be sent to the endpoint:

#### General Parameters

`max` **(Integer, Range 1 to 100)** maximum number of adverts to show. Default is set to 20 (to prevent each autocomplete url to contain max param).

`offset` **(Integer, Positive)** This is the index of the page used for pagination. Default offset is 0. For next page, the offset should be 1 and so on.

`filter` **(Boolean, true or false)** Default is false. Exactly match category and subCategory parameters in case of drill down from hierarchy/menu.

`section` **(Long/List, id of section)** This is mandatory parameter to determine section to search.

`category` **(Long/List, id of category)** Optional parameter. It boost or match category depending on `filter` parameter.

`subCategory` **(Long/List, id of subCategory)** Optional parameter. It boost or match subCategory depending on `filter` parameter.

`q` **(String, query term)** Optional parameter. The text to be matched while searching.

`latitude`, `longitude`, `distance`  **(Double, (lat,lon) of the center and radius in km)** All these three parameters must be present to filter the search results to include adverts only within the given radius of the center (lat,lon)

Eg: Filter the search results to include Buy adverts with 5km of kathmandu "lat":27.6644,"lon":85.3188
`GET /adverts/search?section=[1,2]&latitude=27.6644&longitude=85.3188&distance=5`

> `latitude` and `longitude` are also required for geo-distance sorting.

#### Sorting parameter
`sortBy` **(String, one of options below)** Optional parameter. Default sort is relevance.

##### Options
- `relevance` Most relevant adverts according to query will be shown first.
- `newest` Latest adverts based on created date will be shown first.
- `oldest` Old adverts based on created date will be shown first.
- `lowestPrice` Lowest price adverts will be shown first.
- `highestPrice` Highest price adverts will be shown first.
- `nearest` Nearest adverts from given parameter `latitude` and `longitude` will be shown first.
- `farthest` Farthest adverts from given parameter `latitude` and `longitude` will be shown first.

> If one or both of `latitude` and `longitude`params is missing then the `sortBy` will behave like `relevance` for`nearest` and `farthest`

#### Refiner Parameters

`price_min` **(Double, minimum price)** Optional parameter. Filter search results with price equal to or above given minimum price.

`price_max` **(Double, minimum price)** Optional parameter. Filter search results with price equal to or below given maximum price.

`location_city` **(String, name of city/cities)** Optional parameter. Filters the search result to include only given city/cities.
Eg:
`GET /adverts/search?section=1&q=cars&location_city=Kathmandu`
`GET /adverts/search?section=1&location_city=[Kathmandu,Pokhara]`

`location_state` **(String, name of state/states)** Optional parameter. Filters the search result to include only given state/states.

##### Other refiners
Other refiners should follow following pattern:
`refiner_<KeyFact_Question>` for string terms filter
and
`refiner_<KeyFact_Question><_min/_max>` for numeric range filter
i.e.
`refiner_Make=[Ford,BMW]`

`refiner_Land Area_min=1000`
`refiner_Land Area_max=3000`

Here, Make and Land Area are keyFacts questions. Make is string term while Land Area is numeric.

Example:
```
GET /adverts/search?section=1&q=cars&refiner_Condition=[New,Reconditioned]&refiner_Manufactured%20year_min=2000&refiner_Manufactured%20year_max=2016&price_max=10000&sortBy=lowestPrice
```

```
Response:
Status: 200 (OK)
Body:
{
"totalHits": 1,
"max": 20,
"offset": 0,
"sortBy": "relevance",
"premiumAdverts": [],
"adverts": [
{
"id": "U1iGhR1aSE6zOna0axYufw",
"title": "BMW Car",
"keyFacts": {
"Condition": "New",
"Make": "Racer",
"Manufactured year": 2014
},
"location": {
"city": "Lalitpur",
"id": 3,
"state": "Bagmati",
"geoPoint": null,
"class": "com.ivalley.adverts.Location"
},
"price": 5000,
"thumbnailImage": null
}
],
"categoryMatrix": {
"sections": [
{
"id": 1,
"count": 1,
"name": "Buy",
"categories": [
{
"id": 1,
"count": 1,
"name": "Vehicles",
"subCategories": [
{
"id": 2,
"count": 1,
"name": "Cars"
}
]
}
]
}
]
},
"priceStats": {
"minPrice": 5000,
"maxPrice": 5000,
"avgPrice": 5000
},
"locationMatrix": {
"states": [
{
"state": "Bagmati",
"count": 1,
"cities": [
{
"city": "Lalitpur",
"count": 1
}
]
}
]
},
"refiners": [
{
"question": "Condition",
"options": [
"New",
"Used",
"Reconditioned"
],
"answerType": "options",
"notes": null,
"multiselect": []
},
{
"question": "Make",
"options": [],
"answerType": "text",
"notes": null,
"multiselect": []
},
{
"question": "Model",
"options": [],
"answerType": "text",
"notes": null,
"multiselect": []
},
{
"question": "Manufactured year",
"options": [],
"answerType": "range",
"notes": "1941 - Present",
"multiselect": []
},
{
"question": "Registered year",
"options": [],
"answerType": "range",
"notes": "1941 - Present",
"multiselect": []
},
{
"question": "Number of Owners?",
"options": [],
"answerType": "int",
"notes": null,
"multiselect": []
},
{
"question": "Body Type",
"options": [
"station wagon",
"MPV",
"SUV",
"Hatch Back",
"convertible",
"coupe",
"Sedan",
"Other"
],
"answerType": "options",
"notes": null,
"multiselect": []
},
{
"question": "Number of Doors",
"options": [],
"answerType": "int",
"notes": null,
"multiselect": []
},
{
"question": "Transmission",
"options": [
"Triptonic",
"Manual",
"Automatic"
],
"answerType": "options",
"notes": null,
"multiselect": []
},
{
"question": "Fuel Type",
"options": [
"Hybrid",
"Gas",
"Petrol",
"Diesel",
"Electro",
"Hybrid Petrol",
"Plugin Hybrid"
],
"answerType": "options",
"notes": null,
"multiselect": []
},
{
"question": "Engine (cc)",
"options": [],
"answerType": "int",
"notes": null,
"multiselect": []
},
{
"question": "Mileage",
"options": [],
"answerType": "int",
"notes": null,
"multiselect": []
},
{
"question": "Color",
"options": [
"Maroon",
"Blue",
"Black",
"Orange",
"Red",
"Silver",
"White",
"Pink",
"Yellow",
"Purple",
"Green",
"Grey",
"Other"
],
"answerType": "options",
"notes": null,
"multiselect": []
},
{
"question": "Car Features",
"options": [],
"answerType": "multiSelect",
"notes": null,
"multiselect": [
{
"subQuestion": "Interior",
"options": [
"Dual A/C",
"A/C - Rear",
"Navigation",
"A/C - Front",
"Airbag - Side",
"DVD Player",
"AM/FM stereo",
"Airbag - Passenger",
"Airbag - Driver",
"Power Seats"
]
},
{
"subQuestion": "Equipment",
"options": [
"Parking Sensors",
"Alarm System",
"Cruise Control",
"Electric Mirrors",
"Back Camera",
"Power Steering"
]
},
{
"subQuestion": "Exterior",
"options": [
"Tinted glass",
"HID Lights",
"Matt Paint",
"Spotlights",
"Alloy-Wheels",
"Winch",
"Fog lights"
]
}
]
},
{
"question": "Is it under Finance?",
"options": [],
"answerType": "boolean",
"notes": null,
"multiselect": []
}
]
}
```

The search response has following:

- `totalHits` Total number of matched results. It can be used in pagination to calculate total number of pages with help of `max`
- `max` The maximum number of results in a page (passed in request).
- `offset` The current page index (passed in request).
- `sortBy` The sorting parameter (passed in request or default).
- `premiumAdverts` Premium adverts list matching the subCategory of top match basic advert.
- `adverts` Adverts matching query.
- `categoryMatrix` Sections, categories and subCategories matching the result with count of hits of each
- `priceStats` Min, max and avg price of matched results
- `locationMatrix` State and cities of matched results with count
- `refiners` Key facts questions matching section, category and subCategory of best match advert.

## Related Search

#### Parameters
| Parameter|Type|Remarks|
|--|--|--|--|
| `advertId` |String|(Mandatory)The id of advert whose related adverts is to be determined|
| `max` |Int, Range 1 to 100|(Mandatory)Maximum number of adverts to be returned|
| `offset` |Int|(Mandatory)Current page index of related adverts|
| `price_min` |Double|(Optional)Pivot criteria for related adverts|
| `price_max` |Double|(Optional)Pivot criteria for related adverts|
| `isTitleMatch` |Boolean true or false|(Optional)Whether to match title of adverts or not. Default true|

```
GET /adverts/related?advertId=U1iGhR1aSE6zOna0axYufw&max=10&offset=0
```
```
Response:
Status: 200 (OK)
Body:
{
"withInternalField": {
"totalHits": 1,
"adverts": [
{
"id": "3wmeUqIfSEORzh5Nc687QA",
"title": "Fast nd Furious Car",
"keyFacts": {
"Condition": "New",
"Make": "Racer"
},
"location": {
"city": "Lalitpur",
"id": 2,
"state": "Bagmati",
"geoPoint": {
"lon": 85.3188,
"lat": 27.6644
},
"class": "com.ivalley.adverts.Location"
},
"price": 2000,
"isPremium": false,
"thumbnailImage": null
}
],
"offset": 0,
"max": 10
},
"withoutInternalField": {
"totalHits": 1,
"adverts": [
{
"id": "XeY4doLETSqnm6e5OPllaw",
"title": "Himalayan Bicycle",
"keyFacts": {},
"location": {
"city": "Kathmandu",
"id": 1,
"state": "Bagmati",
"geoPoint": {
"lon": 85.33,
"lat": 27.71
},
"class": "com.ivalley.adverts.Location"
},
"price": 1000,
"isPremium": false,
"thumbnailImage": "https://ivalleydiag649.blob.core.windows.net/ivalley-images/adverts/XeY4doLETSqnm6e5OPllaw/T_1506874861012_774208.jpg"
}
],
"offset": 0,
"max": 10
}
}
```

> The response will have two sections:
"withInternalField" and "withoutInternalField"
"withInternalField" contains the adverts that match the generated internal field of reference advert. Example: If Make and model are internal fields then it contains matches of "BMW ModelA".
"withoutInternalField" contains remaining adverts that don't match internal field but match other criteria.

## Highlighted Search

Search premium adverts.
`max` and `offset` are mandatory params.
```
GET /adverts/highlighted?max=10&offset=0
```

```
Response:
Status: 200 (OK)
Body:
{
"max": 10,
"offset": 0,
"totalHits": 1,
"adverts": [
{
"id": "CNKgm2PaR0K0-R49NNhq2A",
"title": "BMW Car",
"keyFacts": {
"Condition": "New",
"Make": "Racer"
},
"location": {
"city": "Lalitpur",
"id": 2,
"state": "Bagmati",
"geoPoint": {
"lon": 85.3188,
"lat": 27.6644
},
"class": "com.ivalley.adverts.Location"
},
"price": 5000,
"thumbnailImage": null
}
]
}
```

## Response Status

- `200` OK -> means the operation has been successfully completed and results are returned.
- `201` CREATED -> means new record/s are created and operation has been successfully completed.
- `204` NO CONTENT -> means record/s have been deleted successfully
- `422` UNPROCESSABLE ENTITY -> means data is invalid and can't be processed further
- `500` INTERNAL SERVER ERROR -> means some unhandled exception, edge condition or bug has been encountered

## Data validation error response
Response Status will be 422

General error messages

```
{
    "hasError": true,
    "errors": [
        "error1"
    ]
}
```

Error message for specific parameters

```
hasError:true,
"errors": {
"max": [
"Param max is mandatory."
],
"offset": [
"Param offset is mandatory."
]
}
```


## Deployment

The following deployment guide is for ubuntu 16.04 but any other OS with requirement below can be used.

Requirements:

- mysql
- Java 8
- Elasticsearch 2.3.3
- Tomcat 7
- Nginx

## Install mysql

```
sudo apt-get update
sudo apt-get install mysql-server
```
You will be asked root username and password during installation.
Create a new database for the app.
```
mysql -uroot -p
****
mysql> create database ivalley
```
Credentials and database url information should be placed on
`grails-app/conf/application.yml` file.
Eg:
```
production:
        dataSource:
            driverClassName: com.mysql.jdbc.Driver
            dialect: org.hibernate.dialect.MySQL5InnoDBDialect
            dbCreate: update
            url: jdbc:mysql://localhost/ivalley #url of the database to connect (like local or Amazon RDS or any other)
            username: root #put your username here
            password: **** #put your password here

```
### Install Java 8
```
# upgrade
sudo apt-get update && \
  apt-get dist-upgrade -y
# remove default
sudo apt-get --purge remove openjdk*
# install java
sudo echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections
sudo echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" > /etc/apt/sources.list.d/webupd8team-java-trusty.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EEA14886
sudo apt-get update
sudo apt-get install -y --no-install-recommends oracle-java8-installer
```

### Install Elasticsearch as service

```
cd /opt
sudo wget https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/deb/elasticsearch/2.3.3/elasticsearch-2.3.3.deb
sudo dpkg -i elasticsearch-2.3.3.deb
```
Please refer following link below to configure elasticsearch as service and get idea of available settings.
[Elasticsearch as Service on Linux](https://www.elastic.co/guide/en/elasticsearch/reference/2.3/setup-service.html)
The default configuration is located at file `etc/default/elasticsearch`
Add or change following parameters
`MAX_MAP_COUNT=262144`
and
`MAX_OPEN_FILES=131070`

Edit `elasticsearch.yml` file to include your cluster name and node name.
The file is located at `/etc/elasticsearch/elasticsearch.yml`
Eg:
```
.
.
# Use a descriptive name for your cluster:
#
cluster.name: es_ivalley
#
# ------------------------------------ Node ------------------------------------
#
# Use a descriptive name for the node:
#
node.name: ivalley node 1
#
.
.
```

Now you are ready to start elasticsearch as service
```
sudo /bin/systemctl daemon-reload
sudo /bin/systemctl enable elasticsearch.service
sudo /bin/systemctl start elasticsearch.service
```

Check if elasticsearch is working
`curl localhost:9200`

## Install Tomcat as Service

1. Download tomcat
```
cd /opt
sudo wget https://archive.apache.org/dist/tomcat/tomcat-7/v7.0.81/bin/apache-tomcat-7.0.81.tar.gz
sudo tar -xvf apache-tomcat-7.0.81.tar.gz
sudo ln -s apache-tomcat-7.0.81 tomcat
```

2. Create user and group `tomcat` and provide necessary permissions
```
sudo groupadd tomcat
sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
sudo chgrp -R tomcat /opt/tomcat
sudo chmod -R g+r conf
sudo chmod g+x conf
sudo chown -R tomcat webapps/ work/ temp/ logs/ conf/
```
3. Create service and start
Open a file called `tomcat.service` in the `/etc/systemd/system` directory by typing:
`sudo nano /etc/systemd/system/tomcat.service`

Add following content and save it.
```
[Unit]
Description=Apache Tomcat Web Application Container
After=network.target

[Service]
Type=forking

Environment=JAVA_HOME=/usr/lib/jvm/java-8-oracle
Environment=CATALINA_PID=/opt/tomcat/temp/tomcat.pid
Environment=CATALINA_HOME=/opt/tomcat
Environment=CATALINA_BASE=/opt/tomcat
Environment='CATALINA_OPTS=-Xms512M -Xmx2048M -server -XX:+UseParallelGC'
Environment='JAVA_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom'

ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh

User=tomcat
Group=tomcat
UMask=0007
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
```

Now you are ready to start tomcat service.
```
sudo systemctl daemon-reload
sudo systemctl start tomcat
```
Check the status of tomcat service
```
sudo systemctl status tomcat
```

Some time will be taken to actually start the server. You can follow the logs with
```
sudo tail -f /opt/tomcat/logs/catalina.out
```

You can check the web app using:
```
curl localhost:8080
```

Due to security reasons, the tomcat service is owned by a user tomcat not root and non-root user cannot access ports below 1024.
So, we need nginx to route web request in port 80 to port 8080.

## Install nginx

```
sudo apt-get update
sudo apt-get install nginx
```

Adjust nginx config located at `/etc/nginx/nginx.conf` by adding following inside html {} block.

```
server {
        listen  80;
	client_max_body_size 8M;
	server_name 40.86.176.255;
        location / {
            proxy_set_header    Host $host;
            proxy_set_header    X-Real-IP   $remote_addr;
            proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass  http://localhost:8080;
        }
}
```

> Note: You can add other dns in server_name. Also replace server_name with your own public ip.
> `client_max_body_size`: You have set the maximum file size to be allowed on each REST endpoint payload. (E.g icon images etc)

Now start nginx service
```
sudo service nginx start
```

Check if successfully started.
```
sudo systemctl status nginx
```

Access the webservice from browser or postman:
```
http://40.86.176.255/classLevelOne
```

## Bulk loading keyFacts questions
The valid json file should be placed on following path on the source code of project.
`<PROJECT_ROOT_PATH>/grails-app/conf/keyFacts/`

Now, war file should be built and it should be copied to
`/opt/tomcat/webapps/ROOT.war` in the server. The keyFacts questions will be loaded on application startup.
`sudo service tomcat restart` command should be used to restart application.

ES index reset - curl -XDELETE localhost:9200/com.ivalley.adverts*


## Profile Management
Our system does have 5 different user roles. Based on their roles, each have access to different REST endpoints.

 1. User
 2. Shop
 3. Campaigner
 4. Content Administrator
 5. System Administrator

### Registration - Step 1

    Access : Everyone
>
    POST : /register
    Header : Content-Type application/json
    Request :
    {
		"name":<Name>,
		"email":<Valid_Email>,
		"password":<Password>,
		"password2":<Match_Password>,
	}
	Response :
	{
    "hasError": false,
    "emailSent": true,
    "errors": {},
    "userCreated": true,
    "registerCommand": {
        "email": <Valid_Email>,
        "errors": {
            "errors": []
        },
        "password": <Password>,
        "password2": <Match_Password>,
        "username": <Valid_Email>
    }
    }

#### Parameters
`name` Full Name of the user/shop/campaigner
`email` : Email to be registered with the system
`password` : Password with conformity (Mix of upper, lower case, number and sign)
`password2` : Matching password


### Registration - Step 2
This section contains instructions involves in the second step of the registration.

####  Verify Registration - Email

    Access : Relevant profile
>
	GET : register/verify?t=uniqueId
	Response:
	{
	    "hasError": false,
	    "errors": null,
	    "message": [
	        "Your registration is complete"
	    ],
	    "defaultTargetUrl": "/"
    }

#### Confirm Phone (Optional)

    Access : Relevant profile

>
	POST : /register/verifySms
	Content-Type: application/json
	Request :
	{
		"smstoken":"token in sms"
	}
	Response:
	{
	    "hasError": false,
	    "emailSent": true,
	    "errors": []
	}

### Registration - Step 3

    Access : Profile Owner, Content Admin, System Admin
>
    POST /profile/<id> HTTP/1.1
    Cache-Control: no-cache
    Content-Type: multipart/form-data;
    Request : "userType":<userType>

#### Parameters
`id` This is the unique id of the user
`userType` : `user | shop | campaigner`


### Registration - List Registered Shops (Admin)

    Access : Content Admin, System Admin
>
    GET /userReview HTTP/1.1

This is to list pending registration from shops

### Registration - Review Shop (Admin)

    Access : Content Admin, System Admin
>
    POST /reviewBusiness/<businessId> HTTP/1.1
    Content-Type: application/json
    Cache-Control: no-cache
    Request :
    {
	    "status":<statusText>
    }


#### Parameters
`businessId` This is the unique id of the shop/campaigner
`status` : `complete | rejected | pending`

### Social Media Registration

    Access : Everyone

>
	POST /oauth HTTP/1.1
	Content-Type: application/json
	Cache-Control: no-cache
	Request :
	{
		"provider":<social_provider>,
		"idToken":<id_token>
	}

#### Parameters
`idToken` This is the id token of the user from the relevant social provider. Initial handshake must be done from the relevant platform and the resultant idToken must be passed here.
`provider` : `google | facebook`


### Forgot Password

    Access : Anonymous

>
    POST : /register/forgotPassword
    Content-Type: application/json
    Request :
    {
        "username" : "{{username}}"
    }

### Reset Password

    Access : Forgot password link holders

>
    POST : /register/resetPassword
    Content-Type: application/json
    Request :
    {
        "password" : "{{new_password}}",
        "password2" : "{{confirm_password}}",
        "t" : "Token received in email. This will be available in the query string of front-end page (Reset password page)"
    }

### Login with Email

    Access : Anonymous

>
    POST : /api/login
    Content-Type : application/json
    Request :
    {
        "username":"{{userEmail}}",
        "password":"{{password}}"
    }

### Login with Social Identification

    Access : Anonymous - Social network users

>

    POST : /oauth
    Content-Type : application/json
    Request :
    {
        "provider":"{{google ¦ facebook}}",
        "idToken": "id_token"
    }

## Profile

### List All Users' Profile

    Access : Content Admin, System Admin

>

    GET : /user

### Get User Profile

    Access : Everyone

>

    GET : /user/{{userId}}

### Update User Profile

    Access : Everyone

>

    POST : /user/{{userId}}
    Content-Type : Form-data

    Request :
    {
        "name":{{new name}},
        "phoneNumber":{{new phone number}}, //The new number will be getting validation sms.
        "businessLogo":{{file path of logo}}, //business
        "contactName" : {{contact name}}, //business
        "contactNumber" : {{contact number}}, //business
        "serviceDescription" : {{service related description}}, //business
        "openingTime" : {{opening times}}, //business, This should be an HTML section. The HTML must be sent from front-end
        "picture" : {{file path of profile picture}}, //regular user
        "location" : {{Location information}}, //everyone
        "birthday" : {{Valid date}} //regular user
        "bannerImage":{{file path of banner image}}, //everyone
        "idNumber" : {{social identification number}}, //everyone
        "userType":{{user | shop | campaigner}} //One of these three values
    }

`userType`is the decisive field, must be placed first on the complete-registration page. Based on the value selected on this field, complete-registration page should ask for additional information.
If the `userType` = shop, generate the form with HTML controls for `//business` fields on the above

If the user has selected the business, it should also list all available memberships. Please look at the membership listing [List All Packages](#List-All-Packages). Upon selecting a membership, payment gateway should be triggered.
Please refer [Payment](#payment) section.

## Notifications & Actions
This section guides you through how to setup/amend the email and sms notifications templates.
### Email
#### List Email Templates
    Access : System Admin

>
    GET : /mail

#### Update Email Template
    Access : System Admin

>
    POST : /mail/update/{{template id}}
    Content-Type : application/json
    Request :
    {
        "eventName": "Registration Verification",
        "defaultValues": {
                "footer": "<div>Company 1</div><div>Canon Valley</div>",
                "logo": "<img alt='' height='94' src='https://marketing-image-production.s3.amazonaws.com/uploads/0f596fa29c2cc3d57ae795f0d3d2c892ec7384c2189494bc5326e14637bb882fbb947c3c3a5508771335376a729c3c0717cbcdd48e74a64a2832c4c4e113b483.png' style='width: 180px; height: 94px; border: 0px; max-width: 180px;' width='180' />"
                },
        "template": "<html><body><div>Hi ${Name},</div><div>${logo}</div><div>Just one more step</div><a href='${url}'>Click Here</a></body>${footer}</html>",
        "mailFrom": "Register-compan@gmail.com"
        }

>
    Note: ${placeholder} for template must be provided other wise it will fails to generate script for template and mail will not send.

### SMS

#### List SMS Templates
>
    Access : System Admin

>
    GET : /sms

#### Update SMS Template
>
    Access : System Admin

>
    POST : /sms/update/{{id}}
    Content-Type : application/json
    Request :
    {
        "defaultValues":{
            "companyname" : "Test",
            "phonenumber" : "+109234245"
        },
        "template":"Thanks for registering with ${companyname}. Your code is : ${code}."
    }

## Campaign Management
This section guides you through create, update, delete campaigns and campaign related token management. Further this section lists methods regarding the relevant campaigns.

#### Create Campaign
    Access : Campaigner, System Admin, Content Admin
>
    POST : /campaign
    Content-Type : form-data
    Request :
    {
        title:"campaign title", //mandatory
        detail:"campaign detail", //mandatory
        contactName:"contactName", //mandatory
        contactNumber:"997979797", //mandatory
        quota:4,
        tokenValidDays:16, //mandatory
        campaignImage:<file path of image>,
        startDate:"MM/dd/yy",
        endDate:"MM/dd/yy"
    }
>
    Sample Response :
    {
        "id": "oo-4dY4vQR2ocHEKwxs53Q",
        "user": {
            "id": 4
        },
        "title": "this is campain test info",
        "detail": "campaigner here",
        "contactName": "kumar",
        "contactNumber": "984545464465",
        "quota": 18,
        "tokenValidDays": 8,
        "status": "pending",
        "startDate": null,
        "endDate": null,
        "isActive": false,
        "dateCreated": "2017-12-17T15:49:56Z",
        "campaignImage": {
            "thumbnailImage": null,
            "originalImage": null
        },
        "isPremium": true,
        "levels": []
    }

#### Update Campaign
    Access : Campaigner, System Admin, Content Admin
>
    POST : /campaign/{{campaign id}}
    Content-Type : form-data
    Request :
    {
        title:"campaign title",
        detail:"campaign detail",
        contactName:"contactName",
        contactNumber:"997979797",
        quota:4,
        tokenValidDays:16
    }

#### Update Campaign - Admin's Step
    Access : System Admin, Content Admin
>
    POST : /campaign/{{campaign id}}
    Content-Type : form-data
    Request :
    {
        isPremium: true | false,
        status:approved | pending | rejected
    }

#### Delete Campaign
    Access : System Admin, Content Admin
>
    DELETE : /campaign/{{campaign id}}

#### Campaign Profile (Detail)
    Access : Campaign Owner, Content Admin, System Admin
>
    GET : /campaign/{{campaign id}}

#### List Campaigns
    Access : Content Admin, System Admin, Campaign Owner(s)
>
    GET : /campaign?offsetDate={{valid date}}&maxDate={{valid date}}&status={{valid status}}
>
    Note : Valid Status : approved,pending,rejected
           Valid date format : MM/dd/yy

#### Associate Campaigns to Adverts
    Access : Content Admin, System Admin
>
    POST : /campaign-level/{{campaign id}}
    Request :
    {
        section:1, //valid section id as per the advert hierarchy
        category:1, //valid category id as per the advert hierarchy
        subCategory:2 //valid sub-category id as per the advert hierarchy
    }
>
    Note : This endpoint is to create logic between campaigns and adverts, this is a create form. The section, category, sub-category id are as per the [`Adverts Hierarchy`](#read)
>
    Sample Response:
    {
        "id": "BnOLObqbTbe7GQyaUxNYLg",
        "user": {
            "id": 1
        },
        "title": "campaing title3",
        "detail": "details",
        "contactName": "contact name",
        "contactNumber": "576867858678",
        "quota": 0,
        "tokenValidDays": 0,
        "status": "approved",
        "startDate": "2018-01-11T00:00:00Z",
        "endDate": "2018-03-30T00:00:00Z",
        "isActive": true,
        "isQuotaMax": false,
        "dateCreated": "2018-01-11T16:12:09Z",
        "campaignImage": {
            "thumbnailImage": null,
            "originalImage": null
        },
        "isPremium": false,
        "levels": [
            {
                "id": 7,
                "section": {
                    "id": 1,
                    "name": "Buy"
                },
                "category": {
                    "id": 2,
                    "name": "Properties"
                },
                "subCategory": {
                    "id": 1,
                    "name": "Motorcycles"
                }
            },
            {
                "id": 14,
                "section": {
                    "id": 1,
                    "name": "Buy"
                },
                "category": {
                    "id": 1,
                    "name": "Vehicles"
                },
                "subCategory": {
                    "id": 2,
                    "name": "Cars"
                }
            }
        ]
    }

#### List Relevant Campaigns
    Access : Everyone including anonymous
>
    POST : /relevant-campaign
    Request:
    {
        "section":1,
        "category":1,
        "subCategory":1,
        "isPremium":true | false,
        "max":10,
        "offset":0
    }
>
    Note : This will be called from the advert details page. At this page, you should have section, category, sub category ids along with whether the given product is premium or not. Collect these information and pass it to the above endpoint's payload.

#### Remove Campaign Association
    Access : System Admin, Content Admin
>
    DELETE : /campaign-level/{{campaign id}}/{{level id}}

#### Redeem Campaign Token
    Access : Any registered users
>
    POST : /redeem
    Content-Type : application/json
    Request :
    {
        "advert": {{advert id}}
        "campaign": {{campaign id}}
    }
>
    Sample Response:
    {
      "advert": "frzx9km3R8yOwz-5vAN7jQ",
      "redeem": {
        "id": 10,
        "token": "0591a93d",
        "status": "active",
        "tokenValidDate": "2017-12-23T08:42:36Z",
        "redeemedDate": "2017-12-23T08:42:36Z"
      }
    }

#### Get Token Information
    Access : Redeemed User, Relevant Campaign Owner, Content Admin, System Admin
>
    POST : /token-info
    ContentType :application/json
    Request :
    {
        "token":{{valid token id}}
    }
>
    Sample Response:
    {
      "redeem": {
        "id": 10,
        "token": "0591a93d",
        "status": "active",
        "tokenValidDate": "2017-12-23T08:42:37Z",
        "redeemedDate": "2017-12-20T08:42:37Z"
      },
      "campaign": {
        "id": "bCQKESnzSqS0VzCPM9uDPw",    //this is the campaign info for which redeem is done
        "user": {
          "id": 4
        },
        "title": "this is campain test info",
        "detail": "campaigner here",
        "contactName": "kumar",
        "contactNumber": "984545464465",
        "quota": 5,
        "tokenValidDays": 3,
        "status": "approved",
        "startDate": "2018-02-12T00:00:00Z",
        "endDate": "2018-06-12T00:00:00Z",
        "isActive": true,
        "dateCreated": "2017-12-20T07:18:55Z",
        "campaignImage": {
          "thumbnailImage": null,
          "originalImage": null
        }
      }
    }

#### Update Token Status
    Access : Campaign Owner, Content Admin, System Admin
>
    POST : /token-status
    ContentType :application/json
    Request :
    {
        "token":"{{token id}}",
        "status":{{active | expired | used}}
    }

#### List Tokens
    Access : Relevant Campaign Owners, System Admin
>
    POST : /tokens
    Content-Type : application/json
    Request :
    {
        "campaign":{{campaign id}},
        "status":{{active | used | expired}}
    }

## Membership, Packages & Payment
This section guides you through adverts' packages, addons creation and payment. Further it explains about the membership creation and membership related payment flow.

### Membership
This refers to shop users only. Shop users can exist only with a membership.
#### Create Membership Type
    Access : Content Admin, System Admin
>
    POST : /membership
    Content-Type : application/json
    Request :
    {
    	"numberOfMonth":9,
    	"membershipCost":8,
    	"membershipType":"ANNUAL"
    }

 #### Update Membership Type

	 Access : Content Admin, System Admin
>
	PUT : /membership
	Content-Type : application/json
	Request :
	{
		"numberOfMonth":9,
    	"membershipCost":8,
    	"membershipType":"ANNUAL"
	}

#### Delete Membership Type

### Packages
This refers to upgrade option for adverts. Anyone can upgrade their adverts with one of the available package. A variation of this is called Addon. The addon allows anyone to choose specific feature to be upgraded on the advert and upgrade it.

#### Create Package
    Access : Content Admin, System Admin
>
    POST : /package
    Content-Type : application/json
    Request :
    {
	  "packageName":"GOLD",
	  "packageDescription":"Golden type adverts",
	  "premiumCost":"15.00",
	  "isActive" : true,
	  "packageOrder" : 2,
	  "validDays" : 5
	}
   `validDays` : It refers to the number of days the given package promoted
   `isActive` : Only active packages are displayed for the user to select. The system keep inactive packages to support for the historical advert packages

#### Associate Main Image and Icon for Package Type
    Access : Content Admin, System Admin
>
    POST : /package/upload
    Content-Type : form-data
    Request :
        id : {{packageTypeId}}
        packageImage : {{file path for main image}}
        packageIcon : {{file path for icon}}

#### Create Addon
    Access : Content Admin, System Admin
>
    POST : /addons
    Content-Type : application/json
    Request :
    {
      "addonsName":"XYZ Addon",
      "addonsDescription":"This feature enables...",
      "addonsCost":1.00,
      "isPure":"true"
    }

#### Associate Main Image and Icon for Addon
    Access : Content Admin, System Admin
>
    POST : /addons/upload
    Content-Type : form-data
    Request :
        id : {{addonId}}
        packageImage : {{file path for main image}}
        packageIcon : {{file path for icon}}

#### Update Package
    Access : Content Admin, System Admin
>
    PUT : /package/{{packageId}}
    Content-Type : application/json
    Request :
    {
      "packageName":"GOLD",
      "packageDescription":"New description",
      "premiumCost":"20.00"
    }

#### Update Addon
    Access : Content Admin, System Admin
>
    PUT : /addons/{{addonId}}
    Content-Type : application/json
    Request :
    {
      "addonsName":"XYZ Addon",
      "addonsDescription":"This is a new feature",
      "premiumCost":1.00,
      "isPure":"false"
    }

#### List All Packages
    Access : Everyone including anonymous
>
    GET : /package

#### List All Addons
    Access : Everyone including anonymous
>
    GET : /addons

#### List All Pure Addons
    Access : Everyone including anonymous
>
    GET : /addons/pure

#### Delete Package
    Access : Content Admin, System Admin
>
    DELETE : /package/{{packageId}}

#### Delete Addon
    Access : Content Admin, System Admin
>
    DELETE : /addons/{{addonId}}

#### Payment
Payment can be executed in three different ways.
	- Credit card
	- Paypal
	- Bank transfer (This is admin's task to enter the bank payment manually)

Based on the `paymentMethod`on the input param of relevant payment endpoint, either Credit card or Paypal related `redirectURL` will be generated in the response of the payment endpoint.
Please note that paypal is enabled with the webhook technology. Redirect the user based on the response.
Once the payment is done in paypal, our DB will be automatically updated with payment information (This is done by paypal notification POST). From the front-end, you have to poll for the updated information with paymentId. [Poll for Payment Details](#poll-for-payment-details).

##### Membership Payment
    Access : Shops
>
    POST : /paymember
    Content-Type : application/json
    Request :
    {
    	"paymentMethod":"{{paypal | paycorp}}",
    	"membershipType" : "ANNUAL"
    }

    Sample Response :
    {
        "redirectURL": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-8VC68695TB385790S",
        "paymentId": "HYrwJQKPRkiJ4uvX8GU5CA",
        "paidByUser": "mahinthansl2005@gmail.com",
        "paidAmount": 8,
        "paidDate": "2018-02-18T16:43:18Z",
        "paymentStatus": "PENDING",
        "webhookId": "3N004445LC022391P"
    }

##### Addons Payment
*This is under the review*

    Access : Registered users or shops
>
    POST : /makePayment
    Content-Type : application/json
    Request :
    {
    	"paymentMethod":"paypal",
    	"advertId":"2q9XlqTrQACaoLkbYc1rjw",
    	"packageType":"ADDONS",
    	"packageId":"JfkZgVYBQQKYFKb2n1Oc1g"
    }
>
    Note : packageId  refers to the relevant addon

##### Poll for Payment Details
This is to poll for the updated payment details by paypal.

    Access : Registered Users, Shops, Content Admin, System Admin
>
    GET : /payment?id={{paymentId}}

##### Delete Webhook
*This is not to be used in front-end*

    DELETE : /paypal/webhook/{{webHookId}}
>
    Note : webHookId is part of the paypal payment response.


## Search Alert
This section guides through how to save a search criteria and get alerts for the saved criteria.
#### Save Search
    Access : Registered users/shops/campaigners, Content Admin, System Admin
>
    POST : /SearchCriteria
    Content-Type : application/json
    Request :
    {
        "q":"some q",
        "section":{{classLevel1Id}},
        "category":{{classLevel2Id}},
        "subCategory":{{classLevel3Id}},
        "price_min":10000,
        "price_max":15000,
        "filter":true,
        "keyFacts":{
    		"Number of Bedrooms_min":1,
    		"Number of Bedrooms_max":2,
    		"Deed Status": ["in progress","available"]
    	}
    }
>
    Note : filter should always be set to true. Section is the only mandatory parameter.
            Section, Category, SubCategory, Price are common questions applicable for any type of adverts. However, Keyfacts is an object holding questions regarding the specific group of products. Inside Keyfacts object, the refiner question is the Key.
            If multiselected answers to be saved, use the array
            For the range type of refiners, use "_min" and "_max" along with the question name


#### List Saved Search Alerts
    Access : Registered users/shops/campaigners, Content Admin, System Admin
>
    GET : /SearchCriteria


## Contact Details
This section guides you through to submit contact details and its life cycle following the submission.

#### Post Contact Details
    Access : Everyone including anonymous
>
    POST : /contactDetails
    Content-Type : application/json
    Request :
    {
        "name":"Shan Rox",
        "emailAddress":"u.mahinthan@gmail.com",
        "message":"Hello",
        "category" : "Advert question",
        "phoneNumber" : "0125487895"
    }
>
    Response :
    {
        "id": "8aqub3R7TsGo2gGBhi0xkw",
        "category": "Advert question",
        "emailAddress": "u.mahinthan@gmail.com",
        "message": "Hello",
        "name": "Shan Rox",
        "phoneNumber": "0125487895",
        "status": "PENDING"
    }
>
As you can see above, following the submission, the status automatically sets to "pending"

#### List Contact Details
    Access : System Admin, Content Admin
>
    GET : /contactDetails/list?status=pending&offset=0&max=1
>
    Query String Params :
    status - mandatory
    offset - This is for pagination, depicts the page number (default 0)
    max - Number of contact details shown. (default 10)

#### Update Contact Details
    Access : System Admin, Content Admin
>
    PUT : /contactDetails/{{contactDetailsId}}
    Content-Type : application/json
    Request : Same as in the "Post Contact Details Section"

#### Update Contact Details' Status
    Access : System Admin, Content Admin
>
    POST : /contactDetails/update/{{contactDetailsId}}
    Content-Type : application/json
    Request : { "status":"Completed ¦ In Progress" }


###Order in Advert
**/adverts/order (PUT)
```{
     "id":"Xp9-ja05S_GO8jfysjfX-Q",
     "menuOrder":"3"
   }
```
###Video Upload

**/videoUpload** (POST AND FORMDATA)
```
advert : advert id params
video : video file
```

### Category Image
**/category/upload** (PUT)


```id : id value
   icon : image file
```
### Advert User filter
***/adverts/search?user=<user_id>&&status=<status>***


###BUSINESS CATEGORY															 
***
add business category
localhost:8080/businessCategory
{
"name":"test",
"description":"test business"
}


localhost:8080/businessCategory/4 (PUT)
{
"name":"test",
"description":"test business updated"
}


localhost:8080/businessCategory/4 (DELETE)


Associate to an user
localhost:8080//businessCategory/add (ROLE_SHOP)
{
"businessCategory":"2,4" (Pass valid business category separated by comma)
}
***


###ADVERT VIEW
***															 


-----------------ClickRecord Advert ---------------------
localhost:8080/clickRecord/5EyKKx_NQcm5m9NgEFK6_w(This is advert_id) (PUT)

 Auto index to ES and store according to data

localhost:8080/advert/5EyKKx_NQcm5m9NgEFK6_w/advertviews?days=1&offset=10

 Will result total hit and number of advertView as per days(Start)


***

###WISH_LIST

***
wish List

ADD
localhost:8080/wishList <POST>
{
"adverts":"Xp9-ja05S_GO8jfysjfX-Q"
}

GET
localhost:8080/wishList/<id> <GET>

DELETE
localhost:8080/wishList/<id> <DELETE>

UPDATE
localhost:8080/wishList/<id> <PUT>
{
"adverts":"Xp9-ja05S_GO8jfysjfX-Q"
}

GET BY USER
localhost:8080/wishList/user?offset=1&max=5 (GET)

by default max=10 and offset =0

***
