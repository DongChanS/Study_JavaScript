let app = new Vue({
    el : "#app",
    data : {
        color : '',
        changed : false,
        coordinate : '아직없음',
        userColor : '',
    },
    methods : {
        changeColor : function(){
            // this.color = (this.color) ? '' : 'red';
            this.changed = !this.changed;
        },
        scream : function() {
            this.color = this.userColor
        },
        printCoordinate : function(num, event){
            this.coordinate = `(${event.clientX}, ${event.clientY})`
        }
    },
    computed : {
        inputColor : function(){
            return {
                backgroundColor : this.color
            }
        }
    }
})