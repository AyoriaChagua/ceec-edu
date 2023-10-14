# Administración de Usuarios

Para acceder a las consultas de usuarios y perfiles, es necesario proporcionar un token generado por el servicio de autenticación. 
A continuación, se presentan los pasos y ejemplos para llevar a cabo estas consultas.

## Cabecera de la Solicitud

Cuando realices una solicitud para consultar usuarios o perfiles, asegúrate de incluir la siguiente información en la cabecera de la solicitud:

**HTTP Headers**


- **Authorization**: `Tu-Token-Generado-Por-Auth-Service`

## Variables de Entorno

Para obtener información sobre las variables de entorno necesarias, consulta [este documento](https://docs.google.com/document/d/1z7IhUJXqgwakAU-dwJ5yuRYWbYUG_P7DKIIv-DV5HxY/edit?usp=sharing).


## Ejemplos de Rutas

### Consulta de Usuarios

Puedes realizar consultas de usuarios utilizando la siguiente ruta de ejemplo:

**Consulta de Todos los Usuarios**
```http
GET http://localhost:4500/users/users
```

**Ejemplo de Respuesta para la Consulta de Usuarios**
```json
[
  {
    "user_id": 1,
    "email": "prueba@test.com",
    "role_id": 2,
    "created_at": "2025-10-14T03:25:44.459Z",
    "updated_at": "2025-10-14T06:43:12.210Z"
  },
  {
    "user_id": 2,
    "email": "prueba@test.com",
    "role_id": 2,
    "created_at": "2025-10-14T03:26:00.895Z",
    "updated_at": "2025-10-14T18:07:33.002Z"
  }
]
```

### Consulta de Perfiles

Puedes realizar consultas de perfiles de usuarios siguiendo estas rutas de ejemplo:

**Consulta de Todos los Perfiles**
```http
GET http://localhost:4500/profiles/profiles
```

**Consulta de un Perfil Específico (Perfil ID: 1)**
```http
GET http://localhost:4500/profiles/profiles/1
```

**Ejemplo de Respuesta para la Consulta de Perfiles**
```json
[
  {
    "profile_id": 1,
    "first_name": "Prueba",
    "last_name": "prueba",
    "user_id": 2,
    "document_number": 67890,
    "phone": 945987654,
    "created_at": "2025-10-14T11:42:04.492Z",
    "updated_at": "2025-10-14T06:42:04.492Z"
  }
]
```

Asegúrate de incluir el token de autenticación en la cabecera de tus solicitudes para acceder a los recursos de administración de usuarios y perfiles.

