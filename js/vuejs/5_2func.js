// Using Component

Vue.component('hello', {
    template: '<h1>HELLO</h1>',
})

var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance has been Updated');
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value)
        }
    }
})

console.log(vm1.$data.title);

// using $mounting

vm1.$mount('#app1');

// Using refs on template

vm1.$refs.heading.innerText = 'Change something else!';


// Change title dependence timer = 3000ms

// setTimeout(function(){
//     vm1.title = 'Change by timer';
//     vm1.show();
// }, 3000);


var vm2 = new Vue({
    el: "#app2",
    data: {
        title: 'The Second Instance'
    },
    methods: {
        onChange: function () {
            this.title = 'Changed!!!'
        }
    }
});

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);