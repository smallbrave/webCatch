Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
    }
    return -1;
}
Array.prototype.remove = function(val) { 
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
}
//餐厅
// function Restaurant(cash,seats,staff){
//     this.cash = cash;
//     this.seats = seats;
//     this.staff = staff;
//     this.hire = function(obj){
//         this.staff.push(obj) 
//     }
//     this.fire = function(obj){
//        this.staff.remove(obj);
//     }
// }

//职工（父类）
function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.doing = function(){
        console.log("doing");
    }
}
//服务员
function Waiter(id,name,salary,job){
   Waiter.prototype = new Employee(id,name,salary)
   this.welcome = function(fn){
        return Customer.getCustomer(fn);
   }
   this.getMenu = function(val){
       console.log(val.name +"  right now");
       return val.name;
   }
   this.push = function(){
       console.log("请慢用");
   }
   this.out = function(obj){
       obj.array.shift();
       Customer.instance = null;
   }
}
//代理方式实现单例模式
var ProxyWaiter = (function(){
    var instance;
    return function(id,name,salary,job){
        if(!instance){
            instance = new Waiter(id,name,salary,job);
        }
        return instance;
    }
})();

//厨师
function Cook(id,name,salary,job){
    Cook.prototype = new Employee(id,name,salary)
    this.cook = function(val, fn){
        console.log(val+" cook is over");
        fn();
    }
}
//代理的方式
var ProxyCook = (function(){
    var instance;
    return function(id,name,salary,job){
        if(!instance){
            instance = new Cook(id,name,salary,job);
        }
        return instance;
    }
})();
//用自己的属性
//顾客
var Customer = function(name){
    var instance;
    this.name = name;
    //点餐
    this.order = function(dish){
        return new Dish().orderDish(dish);
    }
    this.eat = function(){
        return 1;   
    }
}
Customer.getCustomer = function(name){
    if(!this.instance){
        instance = new Customer(name);
    }
    return instance;
}

//菜品
function Dish(){
    var menu = [
        {
            name: "1",
            price: "$10" 
        },
        {
            name: "2",
            price: "$20"
        },
        {
            name: "3",
            price: "$30"
        },
        {
            name: "4",
            price: "$40"
        },
    ];
    //点菜
    this.orderDish = function(name){
        for(var val of menu){
            if(val.name == name){
                return val;
            }
        }
    }
}
//顾客队列
function List(){
    this.array = [];
    //控制顾客人数
    this.enter = function(name){
        this.array.push(name);
        return name;
    }
}
//厨师和服务员
var cooker = ProxyCook("10","huan","50","cooker");
var waiter = ProxyWaiter("1","kan","800","waiter");
//顾客队列
var customers = new List();
//来人了
var customer = waiter.welcome(customers.enter("kangkang"));
console.log(customer);
console.log(customers.array);
//开始点菜
var dish = customer.order("1");
console.log(dish);
//服务员处理
var menu = waiter.getMenu(dish);
//通知给厨师
cooker.cook(menu,waiter.push);
//转回给顾客，顾客吃完
if(customer.eat){
    waiter.out(customers);
}
console.log(customers.array);