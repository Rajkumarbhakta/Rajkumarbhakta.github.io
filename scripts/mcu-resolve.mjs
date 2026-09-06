/**
 * Node ESM resolve hook.
 *
 * @material/material-color-utilities@0.4.0 is published as ESM but its internal
 * relative imports are emitted without file extensions (e.g. `../dynamiccolor/
 * dynamic_scheme`), which Node's ESM resolver rejects. This hook retries any
 * failed resolution with `.js` appended. Authoring-time only — it never ships.
 */
export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (error) {
    if (error.code === "ERR_MODULE_NOT_FOUND" && !specifier.endsWith(".js")) {
      return nextResolve(`${specifier}.js`, context);
    }
    throw error;
  }
}
