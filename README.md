# VISIÓN 360 - Agencia de Marketing

## Descripción

Sitio web de la agencia de marketing "VISIÓN 360" construido con React y Tailwind CSS. Presenta servicios de marketing integral, portafolio de casos de éxito, información sobre la empresa y formulario de contacto.

## Tecnologías

- **Framework**: React 19 con TypeScript
- **Build Tool**: Vite 6
- **Estilos**: Tailwind CSS 4
- **Enrutamiento**: React Router DOM 7
- **Iconos**: Lucide React
- **Animaciones**: Motion (framer-motion)
- **Servidor**: Express (backend)

### Comandos

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview producción
npm run preview

# Lint
npm run lint
```

## Estructura del Proyecto

```
agencia_marketing/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Barra de navegación
│   │   │   └── Footer.tsx      # Pie de página
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Sección hero (inicio)
│   │   │   ├── Philosophy.tsx  # Filosofía de la empresa
│   │   │   ├── Services.tsx   # Servicios
│   │   │   ├── Portfolio.tsx   # Portafolio (inicio)
│   │   │   ├── Testimonials.tsx# Testimonios (carrusel)
│   │   │   ├── Contact.tsx     # Formulario de contacto
│   │   │   ├── Cta.tsx         # Llamada a la acción
│   │   │   ├── Values.tsx      # Valores
│   │   │   └── WhyChooseUs.tsx # Por qué elegirnos
│   │   └── ui/
│   │       └── Button.tsx      # Componente botón
│   ├── pages/
│   │   ├── Inicio.tsx          # Página de inicio
│   │   ├── Nosotros.tsx        # Página sobre nosotros
│   │   ├── Portfolio.tsx       # Página de portafolio
│   │   ├── Contacto.tsx        # Página de contacto
│   │   └── components/         # Componentes de página
│   │       ├── NuestraFilosofia.tsx
│   │       ├── PruebaSocial.tsx
│   │       ├── Valores.tsx
│   │       ├── Equipo.tsx
│   │       ├── HistoriaFundadora.tsx
│   │       ├── NosotrosHero.tsx
│   │       └── Cierre.tsx
│   ├── App.tsx                 # Routing principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globales
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Patrones de Diseño

### Tamaños de Fuente (Estándar)

| Elemento | Clase Tailwind |
|----------|----------------|
| **H1 Hero** | `text-5xl sm:text-6xl lg:text-7xl` |
| **H1 Página** | `text-4xl md:text-5xl lg:text-6xl` |
| **H2** | `text-4xl lg:text-5xl font-extrabold tracking-tight` |
| **H3** | `text-xl lg:text-2xl font-bold` |
| **Párrafo** | `text-lg` |

### Colores

- **Primary**: `#D946EF` (fuchsia-500)
- **Secondary**: Color secundario
- **Accent**: Acento
- **Slate**: Grises (`slate-900`, `slate-500`, etc.)

### Clases Comunes

- **Gradiente de texto**: `gradient-text` (definido en CSS)
- **Glow neón**: `neon-glow`
- **Panel de vidrio**: `glass-panel`
- **Fondos con blur**: `bg-primary/15 blur-[60px]`

### Estructura de Secciones

Las secciones siguen este patrón:

```tsx
<section className="relative w-full py-24 px-6 md:px-10 lg:px-20">
  <div className="max-w-[1200px] mx-auto">
    {/* Header */}
    <div className="mb-16 text-center">
      <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
        Etiqueta
      </span>
      <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
        Título <span className="gradient-text">destacado</span>
      </h2>
      <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
        Descripción
      </p>
    </div>
    {/* Contenido */}
  </div>
</section>
```

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/nosotros` | Nosotros (Visión 360) |
| `/portfolio` | Portafolio |
| `/contacto` | Contacto |

## Navegación

El menú de navegación contiene:
- Inicio (`/`)
- Visión 360 (`/nosotros`)
- Servicios (`/#servicios`)
- Portfolio (`/portfolio`)
- Contacto (`/contacto`)

## Componentes Especiales

### Testimonials (Carrusel)

- Muestra 3 testimonios visibles
- Navegación con flechas izquierda/derecha
- Cambio automático cada 5 segundos
- Indicadores de posición
- Transiciones suaves
- Hay 6 testimonios en total

### Formulario de Contacto

Campos:
- Nombre completo
- Email
- Teléfono
- Empresa
- Servicio de interés
- Mensaje

**IMPORTANTE**: El formulario de contacto NO está en la página de inicio - está en la página `/contacto` dedicada.

## Notas Importantes

1. **El formulario de contacto está en `/contacto`**, NO en la página de inicio.

2. **Los testimonios tienen 6 elementos** y se muestran en carrusel con autoplay de 5 segundos.

3. **El hero de inicio** tiene `lg:text-7xl` y la página de nosotros también usa `lg:text-7xl`.

4. **Philosophy.tsx** tiene estilos inline con colores hardcodeados (`#D946EF`, `#333333`, etc.) que podrían necesitar refactorización.

5. **Tailwind CSS v4** usa `@import "tailwindcss"` en lugar de directivas `@tailwind`.

6. **Todas las páginas comparten los mismos patrones de tamaño de fuente** para mantener consistencia visual.

## Imágenes

Las imágenes usan `referrerPolicy="no-referrer"` para evitar problemas con Google.

## Dark Mode

Soporta `dark:` para ambos modos. Los colores usan:
- `slate-900` / `slate-800` para fondos oscuros
- `white` / `slate-100` para texto en modo oscuro
