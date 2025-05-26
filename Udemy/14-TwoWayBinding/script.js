const app=Vue.createApp({
    data(){
        return{
            counter:0,
            name:'Ali İmran',
        };
    },
    methods: {
        reset(event){
            this.name=''

        },
        login(event){
            // event.preventDefault();
            alert('Giriş Yapıldı');
        },
        setName(event){
            // debugger;
            this.name=event.target.value;
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