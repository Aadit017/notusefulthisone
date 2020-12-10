let text="aaditsinghbagga"
func(text)
function func(text){ 
    setInterval(function(){
        text=text.slice(1,text.length)+text.charAt(0);
        console.log(text)
    },100)
}
// this will print something very amazing 
