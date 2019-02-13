$(function(){

    $('.cls_form').on('submit', (e)=>{
        e.preventDefault();
        $('.result_loading').text("Loading ....")

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: {
                name : $('.input_website').val(),
                csrfmiddlewaretoken : $('input[name=csrfmiddlewaretoken]').val()
            },
            success : function(data) {
                console.log(data['absolute_links'])
                $('.cls_form')[0].reset();
                $('.result_loading').hide();
                let main_result = $('.main_result');
                let div_abs = $('<div/>', {
                    class: 'absolute'
                });
                div_abs.append("<h4> ABSOLUTE LINKS </h4>")
                data['absolute_links'].forEach((element)=>{
                    let newlink = document.createElement('a');
                    newlink.innerHTML = element
                    newlink.setAttribute('href', element);
                    newlink.setAttribute('target', '_blank');
                    div_abs.append(newlink)
                })
                main_result.append(div_abs)
            }
        })
    })
})
