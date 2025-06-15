const app=Vue.createApp({
    data(){
        return{
            counter:0,
            name:'',
            lastName:'',
            fullName:'',
        };
    },
    watch:{
        name(){
            if(this.name==''){
                this.fullName=''
            }else{
            this.fullName = this.name + ' ' + this.lastName;
            }
        },
        lastName(value){
            if(value==''){
                this.fullName=''
            }else{
            this.fullName = this.name + ' ' + value;
            }
        },
        counter(value){
            if(value>20){
                this.counter=0;
            }
        }
    },
    computed:{
        // Biz bir computedı aslında bir method olmasına rağmen index.html içerisinden method gibi değil de data çağırır gibi çağırırız.
        fullNameComputed(){
            if(this.name=='' || this.lastName==''){
                return '';
            }
            return this.name + ' ' + this.lastName;
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
            this.lastName=''
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