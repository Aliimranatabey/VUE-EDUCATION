function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}


const app=Vue.createApp({
    data(){
        return{
            winner:null,
            myHealth:100,
            computerHealth:100,
        };
    },
    watch:{    },
    computed:{    },
    methods: {   
        attackToComputer(){
            const attackValue=getRandomValue(7,15)
            this.computerHealth=this.computerHealth-attackValue;
            this.attackMe()

        },
        attackMe(){
                const attackValue=getRandomValue(10,20)
                this.myHealth=this.meHealth-attackValue;

        }
      },
});

app.mount('#frontend')