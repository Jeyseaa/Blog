"use strict";
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J$: () => (/* binding */ fetchBlogs),
/* harmony export */   Vh: () => (/* binding */ createBlog),
/* harmony export */   X4: () => (/* binding */ deleteBlog),
/* harmony export */   zZ: () => (/* binding */ updateBlog)
/* harmony export */ });
/* harmony import */ var _supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(463);

async function fetchBlogs(page, pageSize) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    const { data, error, count } = await _supabase__WEBPACK_IMPORTED_MODULE_0__/* .supabase */ .O.from("blogs").select("*", {
        count: "exact"
    }).order("created_at", {
        ascending: false
    }).range(from, to);
    if (error) throw error;
    return {
        blogs: data || [],
        total: count || 0
    };
}
async function createBlog(title, content, user_id) {
    const { data, error } = await _supabase__WEBPACK_IMPORTED_MODULE_0__/* .supabase */ .O.from("blogs").insert([
        {
            title,
            content,
            user_id
        }
    ]).select();
    if (error) throw error;
    return data[0];
}
async function updateBlog(id, title, content) {
    const { data, error } = await _supabase__WEBPACK_IMPORTED_MODULE_0__/* .supabase */ .O.from("blogs").update({
        title,
        content
    }).eq("id", id).select();
    if (error) throw error;
    return data[0];
}
async function deleteBlog(id) {
    const { error } = await _supabase__WEBPACK_IMPORTED_MODULE_0__/* .supabase */ .O.from("blogs").delete().eq("id", id);
    if (error) throw error;
}


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;