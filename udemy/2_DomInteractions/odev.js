new Vue({
    el: '#app',
    data:{
        Name: 'Ekin Ceylan',
        Age: '33',
        Image: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
        ImageTitle: 'Octocat'
    },
    methods:{
        rand: function(){
            return Math.round(Math.random()*100)/100;
        },
        nameChange(event){
            this.Name = event.target.value;
        }
    }
});