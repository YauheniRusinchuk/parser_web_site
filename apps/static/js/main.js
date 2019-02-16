$(function(){

    $('.cls_form').on('submit', (e)=>{
        e.preventDefault();
        $('.absolute_headers').remove();
        $('.absolute').remove();
        $('.error_h4').remove();
        $('.result_loading').text("Loading ....")

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: {
                name : $('.input_website').val(),
                csrfmiddlewaretoken : $('input[name=csrfmiddlewaretoken]').val()
            },
            success : function(data) {
                let headers = data['headers']
                // for (let key in headers) {
                //     console.log(key + ": " + headers[key])
                // }
                $('.cls_form')[0].reset();
                $('.result_loading').hide();
                let main_result = $('.main_result');

                let headers_div = $('<div/>', {
                    class: 'absolute_headers'
                })

                headers_div.append("<h4> HEADERS </h4>")
                for (let key in headers) {
                    headers_div.append('<p>' + key + ": " + "<span>" + headers[key] +"</span>" + '</p>');
                }
                main_result.append(headers_div)

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
            },

            error: function() {
                $('.result_loading').hide();
                let main_result = $('.main_result');
                let error_div = $('<div/>', {
                    class: 'error_h4'
                });
                error_div.append("<h4> An error has occurred, check the URL is correct. </h4>")
                main_result.append(error_div)
            },
        })
    })
})
