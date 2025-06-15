const app=Vue.createApp({
    data(){
        return{
            firstGoal:'HTML',
            myLinkedin:'https://www.linkedin.com/in/aliimranatabey/',
        };
    },
    methods: {
        ourGoal(){
            const randomNumber=Math.random();
            if(randomNumber<0.4){
                return 'randomNumber değeri 0.4 den küçüktür';
            }else{
                return 'randomNumber değeri 0.4 den büyüktür';
            }
            
        }
    },
});

app.mount('#frontend')