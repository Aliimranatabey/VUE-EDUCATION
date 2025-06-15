const app=Vue.createApp({
    data(){
        return{
            counter:0,
            message:"",
        };
    },
    watch:{
        counter(value){
            if(value>25){
                this.message="Değerin Üstündesiniz...";
            }else if(value<25){
                this.message="Değerin Altındasınız...";
            }else{
                this.message="Tam Değere Eşitsiniz..."
            }
        }
    },
    computed:{
        result(){
            if(this.counter>25){
                return "25 Değerinin Üstündesiniz...";
            }else if(this.counter<25){
                return "25 Değerinin Altındasınız...";
            }else{
                return "Tam 25 Değerine Eşitsiniz..."
            }
        }
    },
    methods: {
        add(number){
            this.counter=this.counter+number;
        },
        reduce(number){
            this.counter=this.counter-number;
        },
    },
});

app.mount('#frontend')