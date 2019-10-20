new Vue({
    el: '#app',
    data: {
        description: 'Bu bir açıklamadır.',
        link: 'https://github.com/ekin-ceylan/',
        githubLink: '<a href="https://github.com/ekin-ceylan/"> EC GitHub <a>',
        counter: 0,
        x: 0,
        y: 0,
        text: 'deneme'
    },
    methods: {
        hello : function () {
            return 'Merhaba Dünya';
        },
        desc: function(){
            this.description = 'Açıklama değişti.';
            return this.description;
        },
        showAlert: function(){
            alert(this.counter);
        },
        getCoords: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        showText: function(event){
            alert(event.target.value);
        }
    }
});