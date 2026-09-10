# Digital Copy

SPA construida con React, React Router y Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Desarrollo con Docker y hot reload

```bash
docker compose up --build
```

El código fuente se monta dentro del contenedor y Vite observa los cambios con
polling, por lo que las modificaciones se reflejan sin reconstruir la imagen.

## Producción

```bash
docker build -t digital-copy .
docker run --rm -p 8080:80 digital-copy
```
