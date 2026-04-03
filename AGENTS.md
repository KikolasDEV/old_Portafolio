# AGENTS.md

## Proyecto
- Este repositorio contiene un portfolio personal con base Django, pero su uso principal es como web de portfolio.
- La prioridad es preservar la identidad visual ya existente y mejorarla solo de forma controlada.

## Diseño
- No tocar la paleta de colores salvo que el usuario lo pida de forma explicita.
- Esto aplica tanto a cambios globales como a cambios en una seccion concreta.
- Si se propone una mejora visual, debe respetar primero la composicion base ya validada por el usuario.
- Hacer cambios de diseno paso a paso, no redisenos completos de una sola vez sin validacion del usuario.
- Si hay dudas entre una mejora agresiva y una conservadora, elegir la conservadora.

## Implementacion
- Mantener los cambios pequenos, claros y faciles de revisar.
- Hacer commits pequenos y separados por cada cambio funcional o visual.
- No mezclar en un mismo commit cambios de distintas areas si se pueden separar.
- Nunca hacer push, salvo que el usuario lo pida explicitamente.
- No tocar el valor local de `DEBUG` para produccion o desarrollo; el usuario lo gestiona manualmente.

## Archivos a no incluir en commits
- No incluir `myportfolio/db.sqlite3`.
- No incluir archivos `__pycache__` ni `*.pyc`.
- No incluir cambios locales de `DEBUG` en `settings.py`.
- No incluir archivos generados temporalmente por pruebas o capturas locales.

## Flujo recomendado
- Antes de tocar diseno, entender primero la seccion afectada en plantilla, CSS y JS.
- Si el usuario pide varias mejoras visuales, ejecutarlas por fases y validar cada bloque.
- Priorizar cambios minimos correctos sobre refactors amplios.
- Si un cambio visual rompe la identidad previa del portfolio, revertir hacia la version mas cercana a produccion.

## Idioma
- Si se trabaja en internacionalizacion, mantener el mismo diseno y tocar solo lo necesario:
  - textos
  - selector de idioma
  - recursos dependientes del idioma, como el CV
- Las traducciones al ingles deben sonar naturales y profesionales, no literales si eso empeora la calidad.

## Responsive
- Cualquier mejora visual debe comprobarse pensando en desktop, tablet y movil.
- No introducir cambios de layout grandes sin revisar antes su impacto responsive.

## Git
- Antes de crear commits, revisar bien el worktree para no arrastrar cambios ajenos o locales no relacionados.
- Si hay cambios del usuario sin relacion con la tarea actual, no tocarlos ni revertirlos.
