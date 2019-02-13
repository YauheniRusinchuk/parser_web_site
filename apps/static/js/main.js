$(function(){

    $('.cls_form').on('submit', (e)=>{
        e.preventDefault();
        console.log('CLICK');

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: {
                name : $('.input_website').val(),
                csrfmiddlewaretoken : $('input[name=csrfmiddlewaretoken]').val()
            },
            success : function(data) {
                console.log('Success ...')
                $('.cls_form')[0].reset();
            }
        })
    })
})
