<template>
    <div>
        <h1> {{text}} </h1>
        <p class="checkpoint">Please check the named '.not-work' tag will be shown</p>
        <template v-for="v in numbers">
            <div> {{v}} Inner template</div>
        </template>

        <div class='not-work'>This tag not work after inner template</div>
    </div>
</template>

<script>
define(["Vue"], function(Vue) {
    Vue.component("my-component", {
        template: template,
        data: function() {
            return {
                "text": "component.vue",
                "numbers": [1,2,3,4]
            };
        }
    });
});
</script>

<style>
div {
    border: 1px solid;
}
.checkpoint {
  color: red
}
.not-work {
  color: blue
}
</style>
