let Mock = require("mockjs")
let data = [
    {title:"舌尖上的没事",name:"小红",llq:"145"},
    {title:"舌尖上的没事",name:"小红",llq:"12345"},
    {title:"舌尖上的没事",name:"小红",llq:"142342"},
    {title:"舌尖上的没事",name:"小红",llq:"14345"},
    {title:"舌尖上的没事",name:"小红",llq:"14325"},
]
Mock.mock("/api/homeIndex","get",function(config){
    console.log(config)
    return data
})