const { createApp } = Vue

    createApp({
        data(){
            return{
                firstVariable:"Ali İmran",
                secondVariable:"Yazılım Mühendisi",
                age:24,
                clothing:{
                    hat:true,
                    pants:"Kot",
                    tshirt:false
                },
                skills:["Driver", "Development", "Boxer", "Good Swimmer"]
            }
        },
        methods: {

        }
}).mount("#first-app");