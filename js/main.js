const app = Vue.createApp({
    data:()=>({//データの用意
        newItem:'',//双方向バインディング
        todos:[]//配列
    }),
    methods:{//メソッドの用意
        addItem:function(event){
            // console.log('Clicked!')
            if(this.newItem === '') return //inputの値が未入力の場合に処理を中断させる仕組み
            let todo = { //変数の定義
                item:this.newItem, //itemデータにデータnewItemの値をセット
                isDone:false //isDoneの初期値はfalse
            }
            this.todos.push(todo) //todos配列にtodo変数を格納item:値の状態で保存される
            this.newItem = '' //配列に格納されたらnewItem(inputの値を消す)
        },
        deleteItem:function(index){//indexは0からはじまる配列の数字
            // console.log('Delete!')
            // console.log(index)
            this.todos.splice(index,1)//spliceは削除関数でthis.todos配列の添字の数を消す、第二引数の値は長さ何個消すかを表す
        }
    }
})
app.mount('#app')
