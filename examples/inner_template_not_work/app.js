requirejs.config({
    paths: {
        "Vue": "https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.min",
        "vue": "https://rawgit.com/edgardleal/require-vuejs/aeaff6db/dist/require-vuejs"
        // Master version is work for 'not work tag after inner template' case.
        // "vue": "https://rawgit.com/edgardleal/require-vuejs/master/dist/require-vuejs"
    },
    shim: {
        "Vue": {"exports": "Vue"}
    }
});

require(["Vue", "vue!component"], function(Vue){
    var app = new Vue({
        el: "#app"
    });
});
