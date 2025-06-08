const app=Vue.createApp({
    data(){
        return{
            number1:0,
            number2:0,
            number3:0,
        };
    },
    watch:{
        
    },
    computed:{
        sum(){
            console.log('Computed Tetiklendi');
            return this.number1+this.number2;
        }
    },
    methods: {
        sumMethod(){
            console.log('Method Tetiklendi');
            return this.number1+this.number2;
        },
        login(event){
            event.preventDefault();
            alert('Giriş Yapıldı');
        }
    },
});

app.mount('#frontend')