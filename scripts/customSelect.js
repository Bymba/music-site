jQuery(document).ready(function(){
    jQuery.fn.fakeSelect = function(options){
        
        // default settings
        var defaults = {
            default_index: null
        }
        
        // add defaults value in options
        var opts = jQuery.extend(defaults, options);
        
        return this.each(function(){

            var element = jQuery(this);

            var select = jQuery('select', element).hide();
            var option = jQuery('option', select);
            var fakeSelect = jQuery("<div class='fakeSelect'></div>");
            var value = jQuery( "<span class='value'></span>" );
            var arrow = jQuery( "<span class='arrow'></span>" );

            var list = makeList( option );
            var li = list.find("li");
            var isSelect = false;


            //обрабтчики
            fakeSelect.on("click", selectHandler);
            function selectHandler(){
                if( isSelect ){
                    closeList();
                }else{
                    openList();
                }
            }

            li.on("click", function(){
                closeList();
                setValue( jQuery(this).index() );
            });

            function setValue( index ){
                option.filter(":selected").attr('selected', false);
                var text = option.eq( index ).attr('selected', true).html();
                li.removeClass("active");
                li.eq(index).addClass("active");
                value.html( text );
            }

            function openList(){
                fakeSelect.addClass("active");
                list.slideDown();
                isSelect = true;
            }
            function closeList(){
                fakeSelect.removeClass("active");
                list.slideUp();
                isSelect = false;
            }

            //вставялем элементы
            fakeSelect.append(value);
            fakeSelect.append(arrow);

            element.append(fakeSelect);
            element.append(list);



            function makeList( option ){
                var ul = jQuery("<ul class='list'></ul>");

                option.each(function(){
                    var value = jQuery(this).val();
                    ul.append("<li>"+value+"</li>");
                });

                return ul;
            }

            function init(){
                if( opts.default_index !== null ){
                    setValue( opts.default_index );
                }
            }
            init();


        }); // end return this
    }

});