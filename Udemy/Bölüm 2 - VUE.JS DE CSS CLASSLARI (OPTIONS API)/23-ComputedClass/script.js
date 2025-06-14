const app=Vue.createApp({
    data() {
        return {
            firstBox : false,
            secondBox : false,
            thirdBox : false
        }
    },
    watch:{
 
    },
    computed:{
        boxOneSelected(){
            return {selected : this.secondBox}
        }
    },
    methods: {
        chooseBox(number){
            if(number==='1'){
                this.firstBox=true;
            }
            else if(number==='2'){
                this.secondBox=true;
            }
            else if(number==='3'){
                this.thirdBox=true;
            }
        }
    },
});

app.mount('#frontend')