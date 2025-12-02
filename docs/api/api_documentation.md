# Default module

Base URLs:

* <a href="http://localhost:3000">Develop Env: http://localhost:3000</a>

# Authentication

* HTTP Authentication, scheme: bearer

# Auth

## POST Login

> POST /auth/login

> Body Parameters

```json
{
  "email": "teste@gmail.com",
  "password": "Bliblibli123"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNCIsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNzY0NjM2NDQ2LCJleHAiOjE3NjQ2NDAwNDZ9.IRbwvCxJG2c26LDFTAFvWhrf1QcEk1dUO9enL4Cfedc"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# User

## POST Create User

> POST /user

> Body Parameters

```json
{
  "name": "Luciano Amorim",
  "email": "teste@gmail.com",
  "birthdate": "1991-01-09T00:00:00.000Z",
  "password": "Bliblibli123",
  "phone": "85999998881",
  "instituteName": "Tongus",
  "profileType": "STUDENT"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "name": "Luciano Amorim",
  "email": "teste@gmail.com",
  "birthdate": "1991-01-08",
  "phone": "85999998881",
  "instituteName": "Tongus",
  "profileType": "STUDENT",
  "status": "ACTIVE",
  "responsible": null,
  "createdAt": "2025-11-10T09:22:25.542Z",
  "updatedAt": "2025-11-10T09:22:25.543Z"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get User by Name

> GET /user/by-name

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|name|query|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "name": "Luciano Amorim",
  "email": "teste@gmail.com",
  "birthdate": "1991-01-08",
  "phone": "85999998881",
  "instituteName": "Tongus",
  "profileType": "STUDENT",
  "status": "ACTIVE",
  "createdAt": "2025-11-10T10:46:27.355Z",
  "updatedAt": "2025-11-10T10:46:27.355Z"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT Edit User

> PUT /user/{id}/edit

> Body Parameters

```json
{
  "name": "Joaquim Tavora",
  "phone": "85999998881",
  "instituteName": "Tongus",
  "profileType": "VOLUNTEER"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "name": "Joaquim Tavora",
  "email": "teste@gmail.com",
  "birthdate": "1991-01-08",
  "phone": "85999998881",
  "instituteName": "Tongus",
  "profileType": "VOLUNTEER",
  "status": "ACTIVE",
  "createdAt": "2025-11-10T10:46:27.355Z",
  "updatedAt": "2025-11-10T10:46:27.355Z"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
