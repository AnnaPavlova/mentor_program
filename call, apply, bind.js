var obj1 = {
        a:3,
        b:4,
        arr:[12,13]
    },

    obj2 = {
        a:1,
        b:2,
        sum : function(){
            return this.a+this.b;
        },
        sum2 : function(a,b){
            return a+b;
        }
    }

console.log('call',obj2.sum.call(obj1));
console.log('call',obj2.sum2.call(obj1,obj1.a,obj1.b));


console.log('apply',obj2.sum.apply(obj1,[obj1.a,obj1.b]));
console.log('apply',obj2.sum.apply(obj1,new Array(obj1.a,obj1.b)));
console.log('apply',obj2.sum.apply(obj1,obj1.arr));

obj1.sum = obj2.sum.bind(obj1);
console.log('bind',obj1.sum())