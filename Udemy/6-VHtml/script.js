const app=Vue.createApp({
    data(){
        return{
            firstGoal:'HTML',
            secondGoal:'<h3> CSS </h3>',
            myLinkedin:'https://www.linkedin.com/in/aliimranatabey/',
        };
    },
    methods: {
        ourGoal(){
            const randomNumber=Math.random();
            if(randomNumber<0.4){
                return this.firstGoal;
            }else{
                return this.secondGoal;
            }
            
        }
    },
});

app.mount('#frontend')