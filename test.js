//Write a function to count the occurrence of each character in the input string.
//Input: “abbcccd”
//Output: a: 1, b: 2, c: 3, d: 1
/*var count = {};
let counter = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(count.arr.charAt(i)) {
            count[arr.charAt(i)] += 1;
        }
        //else count.push({arr[charAt(i)]: 1});
    }
}
counter('abbcccd');*/

/*let str = 'abbcccd';
let reverse = '';
for(let i=str.length-1; i >=0; i--) {
    reverse = reverse.concat(str[i]);
}
console.log(reverse);*/

function counter() {
    var count = 0;
    return function() {count++;console.log(count);}
}
var counterx = counter();
document.getElementById('clickMe').addEventListener('click', counter());

function counter1() {
    var count = 0;
    document.getElementById('clickMe1').addEventListener('click', function(){console.log(++count)});
}
counter1();

document.getElementById("child").addEventListener("click", function() {return alert("Child element!")}, true);
document.getElementById("parent").addEventListener("click", function() {return alert("Parent element!")}, false);
document.getElementById("grand-parent").addEventListener("click", function() {return alert("Grand Parent element!")}, true);

document.getElementById("inputs").addEventListener("keyup", function(e) {console.log(e);
    if(e.target.dataset.uppercase != undefined) e.target.value = e.target.value.toUpperCase();
});

document.getElementById("inputs").addEventListener("keyup", function(e) {
    if(e.target.dataset.capitalize != undefined) e.target.value = e.target.value[0].toUpperCase()+e.target.value.slice(1);
});

(function debounce() {
    var timer, delay = 2000;
    document.getElementById("search").addEventListener("keyup", function(e) {
        if(e.target.dataset.searchbar != undefined) {
            if(timer) {
                clearTimeout(timer);
                console.log('Timer Cleared');
            }
            console.log('Timer Created');
            timer = setTimeout(() => {console.log(Date(), e.target.value, timer); clearTimeout(timer);}, delay);
        }
    });
})();

(function throttle() {
    var timer, delay = 2000, inputString;
    document.getElementById("search").addEventListener("keyup", function(e) {
        if(e.target.dataset.searchbar1 != undefined) {
            if(timer) {
                return console.log('Timer Present');
            }
            console.log('Timer Created');
            inputString = e.target.value;
            timer = new Promise(function(resolve, reject) {setTimeout(() => {
                console.log(Date(), inputString, timer); resolve(undefined);}, delay);
            }).then((value) => timer = value);
        }
    });
})();

function LL() {
    this.head = null; this.tail = null; this.length = 0;
}
function Node(value, next) {
    this.value = value; this.next = next;
}
LL.prototype.addtoHead = function(value) {
    var newNode = new Node(value, this.head);
    if(!this.head) this.tail = newNode;
    this.head = newNode;
    /*if(this.head) {newNode.next = this.head;}
    else this.tail = newNode;
    this.head = newNode;*/
    this.length = parseInt(this.length) + 1;
}
LL.prototype.addtoTail = function(value) {
    var newNode = new Node(value, null);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
    this.length = parseInt(this.length) + 1;
}
LL.prototype.addAt = function(value, position) {
    if(position < 1) {return console.log('Invalid Position. Position Starts at 1.')}
    if(this.length - position < -1) {return console.log('Linked List is short. Current length:', this.length)}
    if(position == 1) {return this.addtoHead(value)}
    let previous, current = this.head, index = position;
    while(--position) {
        previous = current;
        current = current.next;
    }
    var newNode = new Node(value, current);
    previous.next = newNode;
    if(this.length + 1 == index) {this.tail = newNode;}
    this.length = parseInt(this.length) + 1;
}
LL.prototype.removeFromHead = function() {
    if(!this.head) return console.log('Empty List');
    if(this.head == this.tail) {this.head = null; this.tail = null; return this.length = parseInt(this.length) - 1;}
    this.head = this.head.next;
    this.length = parseInt(this.length) - 1;
}
LL.prototype.removeFromTail = function() {
    if(!this.head) return console.log('Empty List');
    if(this.head == this.tail) {this.head = null; this.tail = null; return this.length = parseInt(this.length) - 1;}
    let current = this.head;
    while(current.next != this.tail) {current = current.next;}
    this.tail = current;
    this.tail.next = null;
    this.length = parseInt(this.length) - 1;
}
LL.prototype.removeAt = function(position) {
    if(position < 1) {return console.log('Invalid Position. Position Starts at 1.')}
    if(this.length - position < 0) {return console.log('Linked List is short. Current length:', this.length)}
    if(position == 1) {return this.removeFromHead()}
    let previous, current = this.head, index = position;
    while(--position) {
        previous = current;
        current = current.next;
    }
    previous.next = current.next;
    if(this.length == index) {this.tail = previous;}
    this.length = parseInt(this.length) - 1;
}
LL.prototype.printLL = function() {
    let current = this.head;
    while(current) {console.log(current.value); current = current.next;}
}
LL.prototype.searchLL = function(value) {
    let current = this.head, result = [], index = 1;
    while(current) {if(current.value == value) {result.push({value: value, position: index})} current = current.next; index++;}
    return result;
}
var sll = new LL();
sll.addtoHead(5); sll.addtoHead(11);
console.log(sll);
sll.addtoTail(6); sll.addtoTail(20);
console.log(sll);
sll.addAt(-1, 0); sll.addAt(0, 1); sll.addAt(-1, 9); sll.addAt(0, 5);
console.log(sll);
sll.printLL();
/*sll.removeFromHead(); sll.removeFromHead();sll.removeFromTail();//sll.removeFromTail();sll.removeFromTail();//sll.removeFromHead();
console.log(sll);
sll.printLL();
sll.removeAt(-3); sll.removeAt(13); sll.removeAt(3); sll.removeAt(2);
console.log(sll);
sll.printLL();*/
console.log(sll.searchLL(0)); console.log(sll.searchLL(5)); console.log(sll.searchLL(10));

function fibonnaciSeries(count) {
    var result=[];
    if(count < 1) {console.log('Invalid Count'); return [];}
    function fibonnaci(count){console.log(result);
        if(result[count - 1] != undefined) return result[count - 1];
        else{
            if(count == 1) {result[count - 1] = 1; return 1;}
            else if(count == 2) {result[count - 1] = 1; return 1;}
            else{return result[count - 1] = fibonnaci(count - 1) + fibonnaci(count - 2);}
        }
    }
    fibonnaci(count);
    return result;
}
fibonnaciSeries(4);

function hello() {
    var a = 10;
    function One() {
      a = 11;
    }
    function Two() {
      return a;
    }
    Two();
}
console.log('Print hello', hello()); 