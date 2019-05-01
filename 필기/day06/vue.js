
const STORAGE_KEY = 'vue-app'

let todoStorage = {
    save : function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    },
    fetch : function(){
        let str = localStorage.getItem(STORAGE_KEY || '[]')
        let todos = JSON.parse(str)
        return todos
    }
}


const app = new Vue({
    el : "#app",
    data : {
        imageSource : "https://images.mypetlife.co.kr/wp-content/uploads/2018/07/27094143/pexels-photo-1220755-1024x682.jpeg",
        linkSource : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiIh9OQ0PnhAhUO5LwKHY7-B9oQjhx6BAgBEAM&url=https%3A%2F%2Fmypetlife.co.kr%2F10333%2F&psig=AOvVaw1sXX8a910uEaXxyQMFmE2F&ust=1556775854724405",
        header : "이것은 제목입니다. aaaabbbb",
        anchor : "링크입니다.",
        todos : todoStorage.fetch(),
        content : ""
    },
    methods : {
        hello : function(){
            this.header = "제목이 바뀔걸?"
            return this.header
        },
        addTodo : function(){
            this.todos.push(this.content)
            this.content = ''
        }
    },
    filters : {
        capitalize : function(value){
            let str_array = value.split(" ")
            let cap_array = str_array.map((str) => {
                return str.charAt(0).toUpperCase() + str.slice(1)
            })
            return cap_array.join(" ")
        }
    },
    watch : {
        todos : {
            handler : function(todolist){
                todoStorage.save(todolist)
            }
        } 
    }
})