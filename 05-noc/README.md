# Project NOC

# dev
1. Clone file .env.tamplate to .env
2. Config enviroment variables

* Validate .env
```
    npm i dotenv
    npm i env-var
```

RUN PROJECT: `npm run start`

# Structure
your-project/
├── src/
│   ├── config/ : global configs like envs, axios, etc. 
│   ├── domain/ : app rules like data origin, models, repositories, etc.
│   │   └── use-cases : actions
│   ├── infraestructure/ : datasource and repository implementations.
│   └── presentation/ : services close to the user.
