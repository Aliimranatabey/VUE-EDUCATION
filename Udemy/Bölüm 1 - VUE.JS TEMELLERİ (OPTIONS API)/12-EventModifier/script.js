const app=Vue.createApp({
    data(){
        return{
            counter:0,
            name:'Ali İmran',
        };
    },
    methods: {
        // login(event){
        //     event.preventDefault();
        //     alert('Giriş Yapıldı');
        // },
        login(event){
            // event.preventDefault();
            alert('Giriş Yapıldı');
        },
        setName(event, lastname){
            // debugger;
            this.name=event.target.value + ' ' + lastname;
        },
        add(number){
            this.counter=this.counter+number;
        },
        reduce(number){
            this.counter=this.counter-number;
        },
    },
});

app.mount('#frontend')