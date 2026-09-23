# Directrices del Proyecto Portfolio

## Hosting y Flujo de Despliegue
- **Proveedor:** Cloudflare Pages.
- **Flujo:** Despliegue continuo a través de **GitHub** (Git push a la rama principal).
- **Prohibición:** Prohibido mencionar, empaquetar o sugerir Netlify o Netlify Drop.
- **Workflow de Entrega:**
  1. Verificar build y tipos localmente (`npm run build`).
  2. Verificar estado de Git (`git status`).
  3. Realizar commit y push a GitHub para que Cloudflare ejecute la compilación y despliegue automáticamente en el Edge.
