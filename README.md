# ⚡ Technical Test for WorkKast

- Dependencies
[Node.js](https://nodejs.org/),
[Docker](https://www.docker.com/)

## Features
* TypeScript for the backend
* i have experience in [TypeOrm](https://typeorm.io/) so i used it

## Make it Run

## install mongoDB on Docker run this command on terminal or Windows CMD
```
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:latest
docker exec -it mongodb bash
mongo
```

## 1) rest server 
```
npm install
npm run build
cd dist/src/backendServer/
node index.js

```

## 2) all calls must have Authorization Header use this TOKEN:
```
5CD4ED173E1C95FE763B753A297D5
```


## create article (use HTTP POST method)
```
localhost:8080/article/
```

```
{
    "userId": "12312345123",
    "title": "title",
    "text": "texting",
    "tags": [
        "tag1"
    ]
}
```

## get all articles by array of tags (use HTTP POST method)
```
localhost:8080/article/getAll
```

```
{
	"tags": [
        "tag1"
    ]
}
```




## delete article (user HTTP DELETE method)
```
localhost:8080/article/
```

```
{
    "id": "5d69f27bd32ade63fc5cfa03"
}
```

## update article (user HTTP PUT method)
```
localhost:8080/article/
```

```
    {
        "id": "5d69f27bd32ade63fc5cfa03",
        "userId": "2325",
        "title": "title",
        "text": "new holy text",
        "tags": [
            "tag1"
        ]
    }
```



## create user
```
localhost:8080/user
```

```
{
    "name": "juan",
    "avatar": "url"
}
```



# now yo can see the project on localhost:8080
