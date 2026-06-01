# Next.js + Prisma CRUD

Aplicación de tareas con **Next.js 16**, **React 19**, **Prisma 6** y **PostgreSQL**.

## Requisitos

- Node.js 20.9+
- Base de datos PostgreSQL

## Configuración

1. Copia las variables de entorno:

```bash
cp .env.example .env
```

2. Completa `POSTGRES_PRISMA_URL` y `POSTGRES_URL_NON_POOLING` en `.env`.

3. Instala dependencias y aplica migraciones:

```bash
npm install
npm run db:migrate
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run db:migrate` | Migraciones en desarrollo |
| `npm run db:push` | Sincronizar schema sin migración |
| `npm run db:studio` | Prisma Studio |

## Estructura

```
src/
  actions/     # Server Actions (CRUD)
  app/         # App Router (páginas)
  components/  # UI reutilizable
  lib/         # Cliente Prisma (singleton)
prisma/
  schema.prisma
  migrations/
```

## Despliegue

En Vercel, configura las mismas variables de entorno y usa `prisma migrate deploy` en el build si aplica.
