import chekNumInputs from "./chekNumInputs";

const changeModalState = (state) => {
     const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox'),
          nextBtn = document.querySelector('[data-btnNext]'),
          nextBtnProfile = document.querySelector('.popup_calc_profile_button');

          chekNumInputs('#width');
          chekNumInputs('#height');

       
        function bindActionToElements(event, elem, prop)  {
            elem.forEach((item, i) => {

                item.addEventListener(event, () => {
                    switch(item.nodeName) {
                    case"SPAN":                        
                        state[prop] = i;
                        break;
                    case"INPUT":
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ?  state[prop]= "Холодное" : state[prop] = "Теплое";

                            elem.forEach((box, j) => {
                            box.checked  = false;
                            if(j === i ) box.checked  = true;
                        });
                        } else {
                            state[prop] = item.value;
                        }                 
                    
                        break;
                    case"SELECT":                        
                        state[prop] = item.value;
                        break;
                };  

                    checkRequiredFields(windowWidth[0]?.value?.trim() !== '', windowHeight[0]?.value?.trim() !== '');
                    checkRequiredFieldsBox(windowProfile[0].checked, windowProfile[1].checked);
                    console.log(state);

                });
            });
            


            
        }; 

          bindActionToElements('click', windowForm, 'form' );
          bindActionToElements('input', windowWidth, 'width');
          bindActionToElements('input', windowHeight, 'height');
          bindActionToElements('change', windowType, 'type');
          bindActionToElements('change', windowProfile, 'profile');

function checkRequiredFields(argum1, argum2) {


    if ( argum1 && argum2 ) {
        nextBtn.removeAttribute('disabled');
        nextBtn.classList.remove('disabled');
    } else {
        nextBtn.setAttribute('disabled', true);
        nextBtn.classList.add('disabled');
    }
}

function checkRequiredFieldsBox(argum1, argum2) {


    if ( argum1 || argum2 ) {
        nextBtnProfile.removeAttribute('disabled');
        nextBtnProfile.classList.remove('disabled');
    } else {
        nextBtnProfile.setAttribute('disabled', true);
        nextBtnProfile.classList.add('disabled');
    }
}
        checkRequiredFields();

};

export default changeModalState;