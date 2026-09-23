# Directrices del Proyecto Portfolio

## Hosting y Flujo de Despliegue
- **Proveedor:** Cloudflare Pages (conectado al repositorio de GitHub).
- **Prohibición:** Prohibido mencionar, empaquetar o sugerir Netlify o Netlify Drop.
- **Workflow de Entrega y Control de Despliegue (REGLA ESTRICTA):**
  1. **Trabajo en Copia de Seguridad / Local:** Todo cambio se desarrolla y prueba primero en una copia de seguridad o en el entorno local (`D:\projects\portfolio-dev` o servidor dev local), SIN alterar la rama remota de producción.
  2. **Verificación Local Obligatoria:** Verificar build y tipos localmente (`npm run build`).
  3. **Revisión y Aprobación del Usuario:** Presentar los cambios al usuario para su revisión y prueba en el preview local.
  4. **Cero Push Autónomo:** Queda TERMINANTEMENTE PROHIBIDO ejecutar `git push` o subir cambios a GitHub por iniciativa propia.
  5. **Orden Explícita Requerida:** ÚNICAMENTE cuando el usuario apruebe los cambios y diga EXPLÍCITAMENTE que se suban los cambios a GitHub (ej. "sube los cambios", "haz push a github"), se procederá a realizar el commit y push al repositorio para que Cloudflare ejecute el despliegue automático.
