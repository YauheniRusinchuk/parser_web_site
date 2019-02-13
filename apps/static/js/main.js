$(function(){

    $('.cls_form').on('submit', (e)=>{
        e.preventDefault();
        console.log('CLICK');
        let result = $('.input_website').val();

        console.log("INPUT : ", result)

    })

})
