const getId = id => document.getElementById(id);
getId('B').onclick = function () {
    if (getId('all2').style.fontWeight == 'normal') {

        getId('all2').style.fontWeight = 'bold';
    } else {
        getId('all2').style.fontWeight = 'normal';
    }
}
getId('I').onclick = function () {
    if (getId('all2').style.fontStyle == 'normal') {

        getId('all2').style.fontStyle = 'italic';
    } else {
        getId('all2').style.fontStyle = 'normal';
    }

}
getId('S').onclick = function () {
    if (getId('all2').style.textDecoration == 'none'||  getId('all2').style.textDecoration == 'underline') {

        getId('all2').style.textDecoration = 'line-through';
    } else {
        getId('all2').style.textDecoration = 'none';
    }

}
getId('U').onclick = function () {
    if (getId('all2').style.textDecoration == 'none'||getId('all2').style.textDecoration == 'line-through'){

        getId('all2').style.textDecoration = 'underline';
    }
    
     else {
        getId('all2').style.textDecoration = 'none';
    }

}
getId('left').onclick = function () {
    getId('all2').style.textAlign = 'left';
}
getId('center').onclick = function () {
    getId('all2').style.textAlign = 'center';
}
getId('right').onclick = function () {
    getId('all2').style.textAlign = 'right';
}
const f1 = document.forms['f1'];
for (let i = 0; i < f1.length; i++) {
    f1.elements[i].onclick = function () {
        getId('all2').style.fontFamily = this.value;
    }
}
const f2 = document.forms['f2'];
for (let i = 0; i < f2.length; i++) {
    f2.elements[i].onclick = function () {
        getId('all2').style.fontSize = this.value;
    }
}
getId('color').onclick = function () {
    getId('block1').style.display = "block"
    getId('B').disabled = true
    getId('I').disabled = true
    getId('S').disabled = true
    getId('U').disabled = true
    getId('left').disabled = true
    getId('center').disabled = true
    getId('right').disabled = true
    getId('bg').disabled = true
    getId('bg').disabled = true
    getId('SignIn').disabled = true
    getId('cross').onclick = function () {
        getId('block1').style.display = "none"
        getId('B').disabled = false
        getId('I').disabled = false
        getId('S').disabled = false
        getId('U').disabled = false
        getId('left').disabled = false
        getId('center').disabled = false
        getId('right').disabled = false
        getId('bg').disabled = false
        getId('bg').disabled = false
        getId('SignIn').disabled = false
    }
    let box = document.getElementsByClassName('box');
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function () {
            getId('all2').style.color = box[i].style.backgroundColor;
        }
    }
}
function readURL(e) {
    if (this.files && this.files[0]) {
         var reader = new FileReader();
        $(reader).load(function(e) { 
            $('#upload-img').attr('src', e.target.result); 
    getId('all2').style.background ='url('+getId('upload-img').src+')'
    getId('upload-img').style.display='none'
        });
        reader.readAsDataURL(this.files[0]);  
    }
}
 $("#upload").change(readURL);



$("#upload").change(readURL);
getId('bg').onclick = function () {
    getId('box_appear1').style.display = 'flex'
    getId('box_appear2').style.display = 'none'
    getId('block2').style.display = "block"
    getId('B').disabled = true
    getId('I').disabled = true
    getId('S').disabled = true
    getId('U').disabled = true
    getId('left').disabled = true
    getId('center').disabled = true
    getId('right').disabled = true
    getId('color').disabled = true
    getId('SignIn').disabled = true
    getId('cross1').onclick = function () {
        getId('block2').style.display = "none"
        getId('B').disabled = false
        getId('I').disabled = false
        getId('S').disabled = false
        getId('U').disabled = false
        getId('left').disabled = false
        getId('center').disabled = false
        getId('right').disabled = false
        getId('color').disabled = false
        getId('SignIn').disabled = false

    }
    let box = document.getElementsByClassName('box');
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function () {
            getId('all2').style.background = box[i].style.backgroundColor;
        }
    }
}
getId('bgColor').onclick = function () {
    getId('box_appear1').style.display = 'flex'
    getId('box_appear2').style.display = 'none'
    getId('box_appear3').style.display = 'none'
}
getId('bgImages').onclick = function () {
    getId('box_appear1').style.display = 'none'
    getId('box_appear2').style.display = 'flex'
    getId('box_appear3').style.display = 'none'

    let box1 = document.getElementsByClassName('box1');
    for (let i = 0; i < box1.length; i++) {
        box1[i].onclick = function () {
            getId('all2').style.background = box1[i].style.backgroundImage;
        }
    }
}
getId('bgFile').onclick = function () {
    getId('box_appear1').style.display = 'none'
    getId('box_appear2').style.display = 'none'
    getId('box_appear3').style.display = 'block'

}
getId('SignIn').onclick = function () {
    getId('block3').style.display = 'block'
    getId('B').disabled = true
    getId('I').disabled = true
    getId('S').disabled = true
    getId('U').disabled = true
    getId('left').disabled = true
    getId('center').disabled = true
    getId('right').disabled = true
    getId('color').disabled = true
    getId('bg').disabled = true


    getId('buttonSignIn').onclick = function () {
        console.log('hhh', getId('passwordSignIn').value.length, 'jjjj');
        if (getId('passwordSignIn').value.length == 0) {

            getId('passwordSignIn').style.border = '2px solid red'
            getId('loginSignIn').style.border = '2px solid red'
            getId('value1').style.display = 'inline'
            getId('value2').style.display = 'none'


        } else if (getId('passwordSignIn').value !== 'admin' && getId('loginSignIn').value !== 'admin') {
            getId('passwordSignIn').style.border = '2px solid red'
            getId('loginSignIn').style.border = '2px solid red'
            getId('value2').style.display = 'inline'
            getId('value1').style.display = 'none'
        } else {
            getId('block3').style.display = 'none'
            getId('B').disabled = false
            getId('I').disabled = false
            getId('S').disabled = false
            getId('U').disabled = false
            getId('left').disabled = false
            getId('center').disabled = false
            getId('right').disabled = false
            getId('color').disabled = false
            getId('bg').disabled = false
        }

    }
}
getId('change').onclick = function () {
    getId('button1').style.display = 'none'
    getId('button2').style.display = 'block'
    getId('all2').style.display = 'none'
    getId('textarea').style.display = 'block'
    getId('textarea').textContent = getId('all2').innerHTML
}
getId('save').onclick = function () {
    getId('button1').style.display = 'block'
    getId('button2').style.display = 'none'
    getId('all2').style.display = 'block'
    getId('textarea').style.display = 'none'
    getId('all2').innerHTML = getId('textarea').value
}
regExp = /^\d+$/
getId('table').onclick = function () {
    getId('block4').style.display = 'block'
    getId('create').onclick = function () {
        if (regExp.test(getId('count_TR').value) == true && regExp.test(getId('width_TR').value) == true && regExp.test(getId('width_border').value) == true && regExp.test(getId('count_TD').value) == true && regExp.test(getId('height_TD').value) == true && getId('type_border').value !== 'choose style' && getId('color_border').value !== 'choose color') {
            // getId("block4").style.display = 'none'
            getId('table_value').style.display = 'none'

            var k = getId('count_TR').value; //зберігаємо в змінну k  кількість tr
            var m = getId('count_TD').value; //зберігаємо в змінну m  кількість td
            var new_table = document.createElement('table'); //створюємо таблицю
            for (var y = 0; y <= k - 1; y++) {
                var new_row = new_table.insertRow(y);
                for (var x = 0; x <= m - 1; x++) {
                    var new_coll = new_row.insertCell(x);
                    new_coll.textContent = 'TD';
                    new_coll.style.width = getId('width_TR').value + 'px'
                    new_coll.style.height = getId('height_TD').value + 'px';
                    // new_coll.style.color=getId('color_border').value;
                    new_coll.style.border = getId('width_border').value + 'px' + ' ' + getId('color_border').value + ' ' + getId('type_border').value;
    
                }
            }
            getId('textarea').value = getId('all2').innerHTML + ('<table>' + new_table.innerHTML + '</table>'); // записуємо innerHTML таблиці в textarea
            getId('save').onclick = function () {
                getId('button1').style.display = 'block'
                getId('button2').style.display = 'none'
                getId('all2').style.display = 'block'
                getId('textarea').style.display = 'none'
                getId('all2').innerHTML = getId('textarea').value;
    
            }
        } else {
            getId('table_value').style.display = 'block'

            if (regExp.test(getId('count_TR').value) == false) {
                getId('count_TR').style.border = '1px solid red'
            }
            if (regExp.test(getId('width_TR').value) == false) {
                getId('width_TR').style.border = '1px solid red'
            }

            if (regExp.test(getId('width_border').value) == false) {
                getId('width_border').style.border = '1px solid red'
            }
            if (regExp.test(getId('count_TD').value) == false) {
                getId('count_TD').style.border = '1px solid red'
            }
            if (regExp.test(getId('height_TD').value) == false) {
                getId('height_TD').style.border = '1px solid red'
            }
            if (getId('type_border').value == 'choose style') {
                getId('type_border').style.border = '1px solid red'
            }
            if (getId('color_border').value == 'choose color') {
                getId('color_border').style.border = '1px solid red'
            }
        }
        getId('count_TR').oninput = function () {
            if (regExp.test(getId('count_TR').value) == false) {
                getId('count_TR').style.border = '1px solid red'
            } else {
                getId('count_TR').style.border = '1px solid black'
            }
        }

        getId('width_TR').oninput = function () {
            if (regExp.test(getId('width_TR').value) == false) {
                getId('width_TR').style.border = '1px solid red'
            } else {
                getId('width_TR').style.border = '1px solid black'
            }
        }

        getId('width_border').oninput = function () {
            if (regExp.test(getId('width_border').value) == false) {
                getId('wibth_border').style.border = '1px solid red'
            } else {
                getId('width_border').style.border = '1px solid black'
            }
        }

        getId('count_TD').oninput = function () {
            if (regExp.test(getId('count_TD').value) == false) {
                getId('count_TD').style.border = '1px solid red'
            } else {
                getId('count_TD').style.border = '1px solid black'
            }
        }

        getId('height_TD').oninput = function () {
            if (regExp.test(getId('height_TD').value) == false) {
                getId('height_TD').style.border = '1px solid red'
            } else {
                getId('height_TD').style.border = '1px solid black'
            }
        }

        getId('type_border').oninput = function () {
            if (getId('type_border').value == 'choose style') {
                getId('type_border').style.border = '1px solid red'
            } else {
                getId('type_border').style.border = '1px solid black'
            }
        }

        getId('color_border').oninput = function () {
            if (getId('color_border').value == 'choose color') {
                getId('color_border').style.border = '1px solid red'
            } else {
                getId('color_border').style.border = '1px solid black'
            }
        }
    
      
    }
    getId('reset').onclick = function () {
        getId('count_TR').value = ''
        getId('width_TR').value = ''
        getId('width_border').value= ''
        getId('count_TD').value = ''
        getId('height_TD').value= ''
        getId('type_border').value = 'choose style'
        getId('color_border').value = 'choose color'
        
    }
}
getId('cross2').onclick = function () {
    getId('block4').style.display = "none"
}
getId('ol').onclick = function () {
    getId('block5').style.display = "block"
    getId('cross3').onclick = function () {
        getId('block5').style.display = "none"
    }
    getId('createlist').onclick = function () {
        if (regExp.test(getId('count_li').value) == true &&getId('type_marks').value !== 'choose Ol type mark' ){
            getId('list_value').style.display = 'none'
           
            let ol = document.createElement('ol');//створюємо список
            const w=getId('count_li').value;//зберігаємо в змінну w кількість li
            for (let i = 0; i <= w-1; i++) {
                let li = document.createElement('li');//створюємо ді
                ol.appendChild(li);//додаємо елементи в список
                li.textContent=`item ${i+1}`;
                li.style.listStyleType= getId('type_marks').value;
            }
            getId('textarea').value = getId('all2').innerHTML +('<ol>'+ ol.innerHTML+'</ol>');// записуємо innerHTML списку в textarea
            
        }
        else{
            getId('list_value').style.display = 'block'
            if (regExp.test(getId('count_li').value) == false) {
                getId('count_li').style.border = '1px solid red'
            }
            if (getId('type_marks').value == 'choose Ol type mark') {
                getId('type_marks').style.border = '1px solid red'
            }
        }
        getId('count_li').oninput = function () {
            if (regExp.test(getId('count_li').value) == false) {
                getId('count_li').style.border = '1px solid red'
                getId('list_value').style.display = 'block'
            } else {
                getId('count_li').style.border = '1px solid black'
                

                if(getId('type_marks').value !=='choose Ol type mark'){
                    getId('list_value').style.display = 'none'
                }
                else{
                    getId('list_value').style.display = 'block'
                }
            }
        }
        getId('type_marks').oninput = function () {
            if (getId('type_marks').value =='choose Ol type mark') {
                getId('type_marks').style.border = '1px solid red'
                getId('list_value').style.display = 'block'
            } else {
                getId('type_marks').style.border = '1px solid black'
              
                if(regExp.test(getId('count_li').value) == true){
                    getId('list_value').style.display = 'none'
                }
            }
        }
    }
    getId('resetlist').onclick = function () {
        getId('count_li').value = ''
        getId('type_marks').value = 'choose Ol type mark'
        
    }
}
getId('ul').onclick = function () {
    getId('block6').style.display = "block"
    getId('cross4').onclick = function () {
        getId('block6').style.display = "none"
    }
    getId('createlistUl').onclick = function () {
        if (regExp.test(getId('count_li_ul').value) == true &&getId('type_marksul').value !== 'choose Ul type mark' ){
            getId('list_value_Ul').style.display = 'none'
           
            let ul = document.createElement('ul');//створюємо список
            const u=getId('count_li_ul').value;//зберігаємо в змінну w кількість li
            for (let i = 0; i <= u-1; i++) {
                let li = document.createElement('li');//створюємо ді
                ul.appendChild(li);//додаємо елементи в список
                li.textContent=`item ${i+1}`;
                li.style.listStyleType= getId('type_marksul').value;
            }
            getId('textarea').value = getId('all2').innerHTML +('<ul>'+ ul.innerHTML+'</ul>');// записуємо innerHTML списку в textarea
        }
        else{
            getId('list_value_Ul').style.display = 'block'
            if (regExp.test(getId('count_li').value) == false) {
                getId('count_li_ul').style.border = '1px solid red'
            }
            if (getId('type_marksul').value == 'choose Ul type mark') {
                getId('type_marksul').style.border = '1px solid red'
            }
        }
        getId('count_li_ul').oninput = function () {
            if (regExp.test(getId('count_li_ul').value) == false) {
                getId('count_li_ul').style.border = '1px solid red'
                getId('list_value_Ul').style.display = 'block'
            } else {
                getId('count_li_ul').style.border = '1px solid black'
                

                if(getId('type_marksul').value !=='choose Ul type mark'){
                    getId('list_value_Ul').style.display = 'none'
                }
                else{
                    getId('list_value_Ul').style.display = 'block'
                }
            }
        }
        getId('type_marksul').oninput = function () {
            if (getId('type_marksul').value =='choose Ul type mark') {
                getId('type_marksul').style.border = '1px solid red'
                getId('list_value_Ul').style.display = 'block'
            } else {
                getId('type_marksul').style.border = '1px solid black'
              
                if(regExp.test(getId('count_li_ul').value) == true){
                    getId('list_value_Ul').style.display = 'none'
                }
            }
        }
    }
    getId('resetlistUl').onclick = function () {
        getId('count_li_ul').value = ''
        getId('type_marksul').value = 'choose Ul type mark'
        
    }
}