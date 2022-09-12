let div = document.createElement('div')
let img = document.createElement('img')
let red = document.createElement('div')
let p = document.createElement('p')
let p1 = document.createElement('p')
let btm = document.createElement('div')
let p2 = document.createElement('p')
let h3 = document.createElement('h3')
let box = document.createElement('div')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let btn = document.createElement('button')



div.classList.add('top')
red.classList.add('red')
btm.classList.add('bottom')
box.classList.add('red_div')
btn.classList.add('btn')
p3.className = 'p3'
p.className = 'p'
p1.className = 'p1'


p.innerHTML = '0|0|5'
p1.innerHTML = 'Рассрочка'
p2.innerHTML = 'Школьные наборы'
h3.innerHTML = '666 000 сум'
p3.innerHTML = 'От 134 000 сум/месяц'
p4.innerHTML = 'Школьный набор для 5-9 классов девочки'
img.src = 'https://olcha.uz/image/200x200/products/MEqcLOk60JPeVqohXghrXkgmSjNm1nzsvsdtdQcQhUojJw21aAqBd5J0hJyu.'
btn.innerHTML = 'Купить'

red.append(p,p1)
box.append(p3)

btm.append(p2,h3,box,p4,btn)
div.append(img,red,btm)
document.body.append(div)