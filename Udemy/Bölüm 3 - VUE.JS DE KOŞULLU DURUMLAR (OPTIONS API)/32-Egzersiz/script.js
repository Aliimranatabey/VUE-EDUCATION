const app=Vue.createApp({
    data(){
        return{
            enteredTask:'',
            tasks:[],
            isVisible:true,
        };
    },
    watch:{    },
    computed:{    },
    methods: {  
        addTask(){
            this.tasks.push(this.enteredTask);
        },
        toggleTasks(){
            this.isVisible = !this.isVisible;
        }
    },
});

app.mount('#frontend')