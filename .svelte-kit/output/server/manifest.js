export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B9R_ECDu.js",app:"_app/immutable/entry/app.JMsWNEBf.js",imports:["_app/immutable/entry/start.B9R_ECDu.js","_app/immutable/chunks/Bkzr8dUC.js","_app/immutable/chunks/7LwFGTVl.js","_app/immutable/chunks/DtKB1_9u.js","_app/immutable/entry/app.JMsWNEBf.js","_app/immutable/chunks/7LwFGTVl.js","_app/immutable/chunks/CvwgUIOn.js","_app/immutable/chunks/C1JNRcsB.js","_app/immutable/chunks/DtKB1_9u.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
