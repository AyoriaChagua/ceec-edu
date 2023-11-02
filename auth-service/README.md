# Auth service

This authentication service only returns a token which you can use to save it wherever you like, by default the token will expire in 2 days.

## Contenido

- [Requisitos previos](#requisitos-previos)
- [Configuración](#configuración)
- [Uso](#uso)
- [Ejemplos](#ejemplos)

## Requisitos previos

- Estar registrado en el sistema

## Configuración
```bash
git clone https://github.com/AyoriaChagua/ceec-edu/tree/main/auth-service
cd auth-service
npm i
```

## Uso

Enviar los siguientes datos al endpoint http://localhost:3000/api/auth/signin

## Ejemplos

```json

{
  "email": "ayoria@test.com",
  "password": "12345"
}

```
Y recibiras...

```json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk3MjY1NzkyLCJleHAiOjE2OTc0Mzg1OTJ9.vTxePG_e7BPPBV7FFecMtQ2QO33D8Udn1_SnAcz0KvY"
}

```