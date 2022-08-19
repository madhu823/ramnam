function hideKeyboard(element) {
    element.attr('readonly', 'readonly');
    element.attr('disabled', 'true');
    setTimeout(function () {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
    document.getElementById("RamNaam_Lekhan").scrollTop = 85;
    document.getElementById("RamNaam_Lekhan").scrollHeight = 165;
}

function ButtonTypeR() {
    var str3 = document.getElementById("RamNaam_Lekhan").value;

    var element = document.getElementById("Save");
    
    if (typeof (element) != 'undefined' && element != null) {
        //alert('Save button exists!');
    } else {
        // alert('Please click on the Home button and click My Account to reload the Save button.You cannot save as Save button doesnt exists!');
    }
    var result2 = str3.charAt(str3.length - 1);

    if ((result2 == " ") || (result2 == "")) {
        document.getElementById("RamNaam_Lekhan").value = document.getElementById("RamNaam_Lekhan").value + "R";
    }

}

function ButtonTypeA() {
    var str2 = document.getElementById("RamNaam_Lekhan").value;
    var result = str2.charAt(str2.length - 1);
    
    if (result == "R") {
        document.getElementById("RamNaam_Lekhan").value = document.getElementById("RamNaam_Lekhan").value + "A";
    }
}


function ButtonTypeM(doc1, doc11, doc12) {
    var str1 = document.getElementById("RamNaam_Lekhan").value;
    var result1 = str1.charAt(str1.length - 1);
        if (result1 == "A") {
            {
            document.getElementById("RamNaam_Lekhan").value = document.getElementById("RamNaam_Lekhan").value + "M ";
            }
        }    

        if (document.getElementById("RamNaam_Lekhan").value.length % 4 === 0) {
            document.getElementById("RamNaam_Lekhan").value = document.getElementById("RamNaam_Lekhan").value.replace('RAM ', "राम ");
            doc1.value = (parseInt(doc1.value) + 1) + " / " + ((parseInt(doc1.value) + 1) / 108).toFixed(2);
            document.getElementById("RamNaam_Lekhan").scrollHeight = document.getElementById("RamNaam_Lekhan").scrollHeight + 5;
            document.getElementById("RamNaam_Lekhan").scrollTop = document.getElementById("RamNaam_Lekhan").scrollTop + 5;
        }

        if (doc1.value == '216 / 2.00') {
            var userName = 'Madhusudan Prajapati ';
            window.onerror = function (message) { alert('।।जय श्री राम।। ' + userName + ' जी आपके राम नाम की 2 मालाएँ पूर्ण हो चुकी है,कृपया सेव करे|'); return true; };
                                                }
    document.getElementById("RamNaam_Lekhan").scrollHeight = document.getElementById("RamNaam_Lekhan").scrollTop;
    doc12.value = parseInt(doc1.value) + parseInt(doc11.value) + " / " + ((parseInt(doc1.value) + parseInt(doc11.value)) / 108).toFixed(2);
    document.getElementById('text1').value = doc11.value;
    document.getElementById('text').value = doc1.value;
    document.getElementById('text2').value = doc12.value;
}
  
function word_count(text, doc, doc1, doc2) {
    text = text.replace(/^\s*|\s*$/g, '');
    var count_array = text.split(" ");
    doc.value = 0;
        for (var i = 0; i < text.length; i++) {
            if ((text[i] + text[i + 1] + text[i + 2] == "RAM") || (text[i] + text[i + 1] + text[i + 2] == "ram") || (text[i] + text[i + 1] + text[i + 2] == "Ram") || (text[i] + text[i + 1] + text[i + 2] == "RAm") || (text[i] + text[i + 1] + text[i + 2] == "rAm") || (text[i] + text[i + 1] + text[i + 2] == "raM") || (text[i] + text[i + 1] + text[i + 2] == "rAM") || (text[i] + text[i + 1] + text[i + 2] == "राम")) {
                doc.value = (parseInt(doc.value) + 1) + " / " + ((parseInt(doc.value) + 1) / 108).toFixed(2);
            }
        }

        if (doc.value == '216 / 2.00') {
            $(document).keydown(function (e) {
                e.preventDefault();
                var userName = 'Madhusudan Prajapati ';
                alert('।।जय श्री राम।। ' + userName + ' जी आपके राम नाम की 2 मालाएँ पूर्ण हो चुकी है,कृपया सेव करे|');
            });
        }
        doc2.value = parseInt(doc.value) + parseInt(doc1.value) + " / " + ((parseInt(doc.value) + parseInt(doc1.value)) / 108).toFixed(2);
        document.getElementById('cphSite_inpHide').value = doc1.value;
        document.getElementById('cphSite_inpHideC').value = doc.value;
        document.getElementById('cphSite_inpHideT').value = doc2.value;
        m = document.getElementById('RamNaam_Lekhan');
        m.scrollTop = m.offsetHeight;
}

        $(document).ready(function () {
            $('#RamNaam_Lekhan').val('');
            $('#RamNaam_Lekhan').bind("input", function () {
                var previousValue = $(this).data('old_value') || '', newValue = $(this).val();
                if ((newValue.length - previousValue.length) > 1) {
                    $(this).val(previousValue);
                }
                $(this).data('old_value', $(this).val());
            });
        });

        var touching = null;
        $('selector').each(function () {
            this.addEventListener("touchstart", function (e) {
                e.preventDefault();
                touching = window.setTimeout(longTouch, 500, true);
            }, false);
            this.addEventListener("touchend", function (e) {
                e.preventDefault();
                window.clearTimeout(touching);
            }, false);
        });

        function validate(event) {
            if (event.target.value.length % 1 === 0) {
                event.target.value = event.target.value.replace('b', "");
                event.target.value = event.target.value.replace('c', "");
                event.target.value = event.target.value.replace('B', "");
                event.target.value = event.target.value.replace('C', "");
                event.target.value = event.target.value.replace('d', "");
                event.target.value = event.target.value.replace('e', "");
                event.target.value = event.target.value.replace('f', "");
                event.target.value = event.target.value.replace('g', "");
                event.target.value = event.target.value.replace('h', "");
                event.target.value = event.target.value.replace('i', "");
                event.target.value = event.target.value.replace('j', "");
                event.target.value = event.target.value.replace('k', "");
                event.target.value = event.target.value.replace('l', "");
                event.target.value = event.target.value.replace('n', "");
                event.target.value = event.target.value.replace('o', "");
                event.target.value = event.target.value.replace('p', "");
                event.target.value = event.target.value.replace('q', "");
                event.target.value = event.target.value.replace('s', "");
                event.target.value = event.target.value.replace('t', "");
                event.target.value = event.target.value.replace('u', "");
                event.target.value = event.target.value.replace('v', "");
                event.target.value = event.target.value.replace('w', "");
                event.target.value = event.target.value.replace('x', "");
                event.target.value = event.target.value.replace('y', "");
                event.target.value = event.target.value.replace('z', "");
                event.target.value = event.target.value.replace('B', "");
                event.target.value = event.target.value.replace('C', "");
                event.target.value = event.target.value.replace('D', "");
                event.target.value = event.target.value.replace('E', "");
                event.target.value = event.target.value.replace('F', "");
                event.target.value = event.target.value.replace('G', "");
                event.target.value = event.target.value.replace('H', "");
                event.target.value = event.target.value.replace('I', "");
                event.target.value = event.target.value.replace('J', "");
                event.target.value = event.target.value.replace('K', "");
                event.target.value = event.target.value.replace('L', "");
                event.target.value = event.target.value.replace('N', "");
                event.target.value = event.target.value.replace('O', "");
                event.target.value = event.target.value.replace('P', "");
                event.target.value = event.target.value.replace('Q', "");
                event.target.value = event.target.value.replace('S', "");
                event.target.value = event.target.value.replace('T', "");
                event.target.value = event.target.value.replace('U', "");
                event.target.value = event.target.value.replace('V', "");
                event.target.value = event.target.value.replace('W', "");
                event.target.value = event.target.value.replace('X', "");
                event.target.value = event.target.value.replace('Y', "");
                event.target.value = event.target.value.replace('Z', "");
                event.target.value = event.target.value.replace('0', "");
                event.target.value = event.target.value.replace('1', "");
                event.target.value = event.target.value.replace('2', "");
                event.target.value = event.target.value.replace('3', "");
                event.target.value = event.target.value.replace('4', "");
                event.target.value = event.target.value.replace('5', "");
                event.target.value = event.target.value.replace('6', "");
                event.target.value = event.target.value.replace('7', "");
                event.target.value = event.target.value.replace('8', "");
                event.target.value = event.target.value.replace('9', "");
            }

            if (event.target.value.length % 3 === 0) {
                event.target.value = event.target.value.replace('ram', "राम");
                event.target.value = event.target.value.replace('RAM', "राम");
                event.target.value = event.target.value.replace('Ram', "राम");
                event.target.value = event.target.value.replace('RAm', "राम");
                event.target.value = event.target.value.replace('rAm', "राम");
                event.target.value = event.target.value.replace('raM', "राम");
                event.target.value = event.target.value.replace('rAM', "राम");
            }
        }
        function eraseText() {
            document.getElementById("RamNaam_Lekhan").value = "";
        }

        function ChangeColor(element) {
            element.style.backgroundColor = "LightSeaGreen";
        }
            
        function NumberKey(evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode

            if (charCode == 114 || charCode == 97 || charCode == 109 || charCode == 82 || charCode == 65 || charCode == 77 || charCode == 32 || charCode == 8) {
                return true;

            }
            else {
                return false;
            }
        }