

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C10SzQKY.js","_app/immutable/chunks/C1JNRcsB.js","_app/immutable/chunks/7LwFGTVl.js"];
export const stylesheets = ["_app/immutable/assets/0.BJxIG_zl.css"];
export const fonts = [];
