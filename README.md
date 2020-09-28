# Victoria-Lo_TAPI

## Build a REST API with Node.js

I will try to recreate the example of a REST API for tea using Node.js with the help of this awesome tutorial series [Let's Build a Node.js REST API](https://hashnode.com/series/lets-build-a-nodejs-rest-api-ckcov1aob00dcfms19o5g2x42) made by [Victoria Lo](https://lo-victoria.com/)

[Victoria's Github repo](https://github.com/victoria-lo/TAPI)

## Table of contents 👀
* [General info](#general-info)
* [Technologies](#technologies)
* [Blog](#blog)
* [Setup](#setup)


### General info
TAPI or T-API is a Tea REST API made to show some love for the beverage.

#### The TEA Object 🍵
| Properties | Description | Type  |
|:----------- |:---------------|:--------|
|name| the tea name | String|
|image| an image url | String |
|description| the description | String |
|keywords|words associated with the tea  |String |
|origin|country where the tea is first made | String|
|brew_time|time to brew in minutes | Number |
|temperature|best temperature in Celsius to drink | Number |
|comments|any comments posted about the tea |Array of String |

#### Routes ⚡
| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /tea      | GET                  | Displays all tea
| /tea      | POST               | Creates a new tea
| /tea      | DELETE            | Deletes all tea
|/tea/:name| GET     | Displays a specific tea, given its name
|/tea/:name| POST  | Adds a comment to a specific tea, given its name
|/tea/:name| DELETE | Deletes a specific tea, given its name

### Technologies
Project is created with:
* Node version: 12.18.4
* Express version: 4.17.1
* Mongoose version: 5.10.7
* Multer version: 1.4.2
* MongoDB Atlas

#### 👉 Deployed original code from Victoria's at: https://tea-api-vic-lo.herokuapp.com/
> Note: heroku can load the page quite slow sp please wait a while. Once it loads, it should run smoothly. Please let me know if you find any bugs or errors at victoria-lo@hotmail.com

### How I built it
👉 [Check out the series here!](https://hashnode.com/series/lets-build-a-nodejs-rest-api-ckcov1aob00dcfms19o5g2x42)

-----
### Setup
To run this project locally, clone repo and execute in command prompt:

```
$ cd Victoria-Lo_TAPI
$ npm install
$ npm start
or
$ node server.js
```

---


## Follow me

### [fertorresmx.dev](https://www.fertorresmx.dev/)

#### :globe_with_meridians: Twitter, Instagram: [@fertorresmx](http://www.twitter/fertorresmx)