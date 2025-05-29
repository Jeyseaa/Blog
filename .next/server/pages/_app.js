(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/_app.tsx
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (_app)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./store/slices/authSlice.ts
var authSlice = __webpack_require__(43);
;// CONCATENATED MODULE: ./store/slices/blogSlice.ts
// store/slices/blogSlice.ts

const initialState = {
    blogs: [],
    total: 0,
    loading: false,
    error: null
};
const blogSlice = (0,toolkit_.createSlice)({
    name: "blog",
    initialState,
    reducers: {
        setBlogs (state, action) {
            state.blogs = action.payload.blogs;
            state.total = action.payload.total;
            state.loading = false;
            state.error = null;
        },
        setLoading (state, action) {
            state.loading = action.payload;
        },
        setError (state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    }
});
const { setBlogs, setLoading, setError } = blogSlice.actions;
/* harmony default export */ const slices_blogSlice = (blogSlice.reducer);

;// CONCATENATED MODULE: ./store/index.ts
// store/index.ts



const store = (0,toolkit_.configureStore)({
    reducer: {
        auth: authSlice/* default */.ZP,
        blog: slices_blogSlice
    }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Navbar.tsx
// components/Navbar.tsx



function Navbar() {
    const user = (0,external_react_redux_.useSelector)((state)=>state.auth.user);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        style: {
            marginBottom: 20,
            padding: "1rem",
            borderBottom: "1px solid #ccc"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("a", {
                href: "/blogs",
                style: {
                    marginRight: 15
                },
                children: "Blogs"
            }),
            !user ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/register",
                        style: {
                            marginRight: 15
                        },
                        children: "Register"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/login",
                        style: {
                            marginRight: 15
                        },
                        children: "Login"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        style: {
                            marginRight: 15
                        },
                        children: [
                            "Hello, ",
                            user.name
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/logout",
                        children: "Logout"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./lib/supabase.ts
var supabase = __webpack_require__(463);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.tsx
// File: pages/_app.tsx








function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(AppInitializer, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
// This component fetches the logged-in user and updates Redux
function AppInitializer() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        const loadUser = async ()=>{
            const { data, error } = await supabase/* supabase */.O.auth.getUser();
            if (data?.user) {
                const { id, email, user_metadata } = data.user;
                dispatch((0,authSlice/* setUser */.av)({
                    id,
                    email: email ?? "",
                    name: user_metadata?.name ?? "User"
                }));
            }
        };
        loadUser();
    }, [
        dispatch
    ]);
    return null;
}
/* harmony default export */ const _app = (MyApp);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ supabase)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)("https://homygzzkuoxpkndpylgm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXlnenprdW94cGtuZHB5bGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzOTAxMDIsImV4cCI6MjA2Mzk2NjEwMn0.gyUPSAZurrIeKS-U7DVViwTdKDv0wgHAQN3VXRioECQ", {
    auth: {
        persistSession: true,
        autoRefreshToken: true
    }
});


/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   av: () => (/* binding */ setUser),
/* harmony export */   pn: () => (/* binding */ clearUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    user: null
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setUser (state, action) {
            state.user = action.payload;
        },
        clearUser (state) {
            state.user = null;
        }
    }
});
const { setUser, clearUser } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 885:
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 76:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(874)));
module.exports = __webpack_exports__;

})();