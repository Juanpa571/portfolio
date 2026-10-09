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

## Protocolo y Normas Estrictas de Prospección B2B y Redacción de Correos (Anti-Alucinación)

1. **Prohibición Total de Alucinar Competidores o Rankings:**
   - Queda estrictamente PROHIBIDO inventar que una empresa "está perdiendo contratos con [Competidor]" o que "[Competidor] se está llevando la visibilidad principal" a menos que se haya comprobado en vivo en Google Search y Google Maps que ese competidor existe, opera en la misma ciudad y rankea por encima de ellos.
   - Si no se ha verificado manualmente la SERP de un competidor en la ciudad exacta del prospecto, NUNCA citar competidores con nombre propio. Basar la auditoría exclusivamente en datos técnicos propios y objetivos del sitio web auditado (ej. tiempo de carga PageSpeed, captchas obsoletos, falta de marcado Schema.org, problemas de conversión móvil).

2. **Verificación Geográfica Obligatoria (Cero Cruce de Ciudades):**
   - Es obligatorio verificar la ciudad sede y área real de cobertura del prospecto (a través de su pie de página, página de contacto, indicativo telefónico o RUES) antes de redactar cualquier mensaje.
   - Queda terminantemente prohibido asumir o cruzar ubicaciones arbitrariamente (ej. colocar Bogotá a una empresa cuya sede y mercado principal es Medellín o Cali).

3. **Filtro de Calificación Técnica Previa (No Vender a Quien No lo Necesita):**
   - Antes de incluir a una empresa en una campaña o prometer mejoras, se debe auditar mínimamente su estado digital: si la empresa ya cuenta con una web rápida, actualizada, con SEO 100/100 y rankeando #1 o #2 en su ciudad, NO se debe prospectar para venta de rediseño web completo.
   - Prospectar únicamente empresas con dolores reales, evidentes y demostrables (webs lentas >5s, sin Schema, formularios rotos o con fricción matemática, tecnología obsoleta como Divi antiguo o Thin Content evidente).

4. **Identidad y Canales Oficiales Intocables:**
   - El único número oficial de WhatsApp para prospección y contacto de Juan Pablo Chacón es **+57 317 737 1301**. Queda terminantemente prohibido inventar o sugerir cualquier otro número ficticio o placeholder.
   - Remitente oficial: `Juan Pablo Chacón <hola@jpchacon.com>`. Web oficial: `https://jpchacon.com`.

5. **Identidad Unipersonal Estricta (Prohibido Hablar en Plural):**
   - Juan Pablo Chacón / JP Studios es única y exclusivamente un **estudio independiente operado por una sola persona** ("yo analicé", "yo construyo", "mi enfoque", "diseño y desarrollo").
   - Queda TERMINANTEMENTE PROHIBIDO hablar en primera persona del plural (*"nosotros hacemos"*, *"nuestro equipo"*, *"resolvemos"*, *"te ofrecemos"*). Toda comunicación, guion, correo, mensaje de WhatsApp o diagnóstico debe redactarse estrictamente en singular, reflejando el trato directo, honesto y transparente de un desarrollador independiente con el cliente.

6. **Métrica Real de Velocidad Web (<2.5s) y Cero Cifras Infladas:**
   - La métrica oficial, real y verificable de rendimiento de JP Studios es **menos de 2.5 segundos (`< 2.5s`)**.
   - Queda TERMINANTEMENTE PROHIBIDO inventar o prometer tiempos de carga de *"menos de 1 segundo"*, *"0.8 segundos"* o cualquier otra cifra inflada. Toda referencia a velocidad debe ceñirse con honestidad técnica a la promesa real: **carga rápida en menos de 2.5 segundos (`< 2.5s`)**.


