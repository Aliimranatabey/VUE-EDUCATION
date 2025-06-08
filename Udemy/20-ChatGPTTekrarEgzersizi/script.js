const app=Vue.createApp({
    data(){
        return{
            number1: 0,
            message: 'Henüz kontrol edilmedi',
            number2:0,
            number3:0,
            // Dinamik kaynaklar
            imageUrl: 'https://vuejs.org/images/logo.png',
            linkUrl:  'https://vuejs.org/',
            // Buton’un başlangıç durumu
            isDisabled: false,
            rawHtml: '<p style="color:red">Kırmızı <strong>yazı</strong></p>',
            randomNumber:0,
            randomText:'Sıfır',
            message:'mesaj'
        };
    },
    watch:{
        number1(newVal) {
            if (newVal > 5) {
                this.message = 'number1, 5\'ten büyük';
            } else {
                this.message = 'number1, 5\'ten küçük veya eşit';
            }
        }
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
        },
        // Buton durumunu tersine çevirir
        toggleDisabled() {
        this.isDisabled = !this.isDisabled;
        },
        pozitifOrNegatif(){
            this.randomNumber=Math.floor(Math.random() * 21) - 10;
            if(this.randomNumber>0){
                this.randomText='Pozitif';
                console.log(this.randomNumber)
                return this.randomText;
            }else if(this.randomNumber<0){
                this.randomText='Negatif';
                return this.randomText;
            }else{
                return this.randomText
            }
        },
        messageChange(){
            this.message='Yeni Mesaj'
        }
    },
});

app.mount('#frontend')