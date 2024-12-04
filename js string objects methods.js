//Questions on string methods
var a="       Hello world"
var b="Good morning      "
// var c=a.trimStart().concat(b.trimEnd())
var c=a.trimStart()+b.trimEnd()
console.log(c.toUpperCase())

//2Q).
var d="Today is so hot on Ac"
var e=d.split("")
e.splice(6,5,"Ajith")
var f=e.join("")
console.log(f)

//3Q).
var g="Stars"
var h=" Are white in colour"
var i=g.concat(h)
console.log(i.toUpperCase())
console.log(i.length)
console.log(i[23])


//4Q).
var j="Take an apple everyday"
var k="keeps a doctor away"
l=j.slice(0,3)
console.log(l)
console.log(k.length)
m=k.slice(16,19)
console.log(m)
console.log(l+m.toUpperCase())

//5Q).
var n="    hello worlds   "
var o="   this is Javascript   "
var p=n.trim()
var q=o.trim()
p=p.charAt(0).toUpperCase()+p.slice(1,-1)+p.charAt(p.length-1).toUpperCase()
q=q.charAt(0).toUpperCase()+q.slice(1,-1)+q.charAt(q.length-1).toUpperCase()
console.log(p)
console.log(q)
console.log(p.concat(q))


//6Q).
var r="hello there , how are you "
s=r.indexOf("are")
console.log(s)



// Questions on objects methods
var person={firstName:"Ajith", lastName:"D",age:21}
console.log(person.firstName)
person.city="New York"
console.log(person)

//2Q).
var product={name:"Earpods", price:2000, inStock:5 }
product.price=2500
console.log(product)
delete product.inStock
console.log(product)

//3Q).
var library={scienceFiction:{books:["harrypotter","life of pie"]},fantasy:{books:["Avatar","iron man"]},mystery:{books:["jumanji","detective"]}}
console.log(library)
library.scienceFiction.books.push("animal","Pushpa")
console.log(library)
library.fantasy
console.log(library)
library.fantasy.books.push("Robo","spiderman")
console.log(library)
var a=delete library.mystery
console.log(library)
console.log(a)

//4Q).
var user={username:"Ajith", email:"Ajith@gmail.com", address:"Near avn college",city:"vizag", state:"AP",zip:530001}
console.log(user)
Object.freeze(user)
console.log(user)
user.email="Ajithuu@gmail.com"
console.log(user)
console.log(Object.isFrozen(user))
user.phone="6303698338"
console.log(user)

//5Q).
var car={make:"White in color", model:"Duke",price:"1.6l" }
console.log(Object.seal(car))
car.model="pulsar Ns"
console.log(Object.isSealed(car))
console.log(car)
console.log(Object.isExtensible(car.model))