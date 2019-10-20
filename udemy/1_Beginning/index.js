new Vue({
    el: '#app', // body olamaz
    data:{
        title: 'Merhaba Dünya',
        description: 'Bu bir açıklamadır.'
    },
    methods: {
        changeTitle : function(event){
            this.description = event.target.value;
        }
    }
});