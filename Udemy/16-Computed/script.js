const app=Vue.createApp({
    data(){
        return{
            counter:0,
            name:'Ali İmran',
        };
    },
    computed:{
        // Biz bir computedı aslında bir method olmasına rağmen index.html içerisinden method gibi değil de data çağırır gibi çağırırız.
        fullNameComputed(){
            console.log('Computed Olan fullNameComputed Execute Edildi')
            if(this.name==''){
                return '';
            }
            return this.name + ' ' + 'Atabey';
        },
    },
    methods: {
        fullName(){
            console.log('Method Olan fullName() Execute Edildi')
            if(this.name==''){
                return '';
            }
            return this.name + ' ' + 'Atabey';
        },
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