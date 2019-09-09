// var data = { status: 'Component' };
// Vue.components(' ', {});
var cmp =  {
    data: function () {
        return {
            status: 'Component'
        };
    },
    template: '<p>Server status: {{ status }} (<button @click = "change">Change</button>)</p>',
    methods: {
        change: function(){
            this.status = 'Changed';
        }
    }
};


var vm1 = new Vue({
    el: '#app1',
    components: {
        'my-cmp': cmp
    }
})
var vm1 = new Vue({
    el: '#app2',
    components: {
        'my-cmp': cmp
    }
})