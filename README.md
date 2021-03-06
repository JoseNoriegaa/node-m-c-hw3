# Pizza delivery - APP

This is the homework assignment 3 of the course "[Node JS Master Class](https://pirple.thinkific.com/courses/the-nodejs-master-class)".

These are some features that I considered to make the project:
- ECMAScript 6
- Async/Await
- [Airbnb JS Style Guide](https://github.com/airbnb/javascript)
- Functionality inspired on [Express.JS](https://expressjs.com)
- x-www-form-urlencoded request support
- JSON request support
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)/[HTTPS](https://en.wikipedia.org/wiki/HTTPS) support
- Implementation of online payments with the [Stripe API](https://stripe.com/docs/api)
- Implementation of notifications by email with [Mailgun API](https://documentation.mailgun.com/en/latest/api_reference.html)
- No [NPM](https://docs.npmjs.com/about-npm/) or third-party dependencies
- Static content support
- Html templates

# Web App
| Route | Method | Requires auth |
|--|--|--|
| / | GET | false |
| /login | GET | false |
| /signup | GET | false |
| /order | GET | true |
| /profile | GET | true |

# Backend
## Routes 
#### USERS
| Route | Method | Required Data | Optional Data | Description |
|--|--|--|--|--|
| /api/users | GET | none | none | Returns the registered users |
| /api/user | GET | **queryString**: username | none | Returns a specific user by the username field.|
| /api/user | POST | **body**: username, fullname, email, address, and password.| none | Creates a new user |
| /api/user | POST | **queryString**: username | **body**: fullname, email, address, and password. | Updates a specific user by the username field, all the fields that are provided will be updated.|

#### Products
| Route | Method | Required Data | Optional Data | Description |
|--|--|--|--|--|
| /api/products | GET | **headers**: token; **queryString**: id | none | Gets the items |
| /api/product | GET | **headers**: token | none | Gets a specific item by the id |
| /api/product | POST | **headers**: token; **body**: name, price, description, currency, urlImage| none | Creates a new item |
| /api/product | PUT |  **headers**: token; **queryString**: id |  **body**: name, price, description, currency, urlImage | Updates a specific item by the id |
| /api/product | DELETE | **headers**: token; **queryString**: id | none | Deletes a specific item by the id |

#### Auth
| Route | Method | Required Data | Optional Data | Description |
|--|--|--|--|--|
| /api/auth/login | POST | **body**: username, password | none | Login |
| /api/auth/logout | POST | **headers**: token | none | Logout |

#### Orders
| Route | Method | Required Data | Optional Data | Description |
|--|--|--|--|--|
| /api/orders | GET | **headers**: token | none | Gets the orders |
| /api/order | GET | **headers**: token; **queryString**: username | none | Gets the orders related to a user |
| /api/order/item | POST | **headers**: token; **body**: username, productId, quantity | none | Adds an item to a order |
| /api/order/item | DELETE | **headers**: token; **body**: username, productId | none | Removes an item to a order |
| /api/order | DELETE | **headers**: token; **queryString**: username | none | Deletes a order |
| /api/order/pay | POST | **headers**: token, stripeSource; **queryString**: username | none | Order payment |

# Run it locally

- Clone this repo
  ```console
  $ git clone https://github.com/JoseNoriegaa/node-m-c-hw3.git
  ```
- set the environment variables
  ```text
  STRIPE_PK=YOUR_STRIPE_PUBLIC_KEY
  STRIPE_SK=YOUR_STRIPE_SECRET_KEY
  MAILGUN_DOMAIN=YOUR_MAILGUN_DOMAIN
  MAILGUN_API_KEY=YOUR_MAILGUN_API_KEY
  MAINGUN_SENDER=Pizza App <postmaster@YOUR_MAILGUN_DOMAIN>
  ```
- Run the project:
  ```console
  $ cd node-m-c-hw3
  $ node index
  ```

<p style="width:100%; text-align:center">
  <strong>Jose Noriega</strong>
  <br>
  Node version: v11.1.0
</p>
