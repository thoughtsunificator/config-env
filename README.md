# config-env

Provide a way to inject environment variables into your application.

## Getting started

### Installing

- ``npm install @thoughtsunificator/config-env --save-dev``

### How does it work?

config-env will create a new object from the config file, env file and ``process.env``.

Order of priority:

1. process.env
2. env file
3. config file

### Usage

```javascript
import config from '@thoughtsunificator/config-env' // assumes ".env.json" and "data/config.json"
```

or 

```javascript
import { createConfig } from '@thoughtsunificator/config-env'
const config = createConfig(".env.json", "data/config.json")
```

``data/config.json``
```json
{
  "SITE_NAME": "FOO"
}
```

``.env.json``
```json
{
  "SITE_NAME": "BAR"
}
```

Within the context of your application:

```javascript
import config from '@thoughtsunificator/config-env'

console.log(config)
/* outputs:
{
  SITE_NAME: "BAR"
}
*/

```


