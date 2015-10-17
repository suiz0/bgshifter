Background Shifter (bgshifter) 
======

JQuery plugin that allows to switch with a slider like effect element's background color when mouse enters or leave.

### Initialize Plugin
 ``` javascript
 jQuery(function($){
 	$('.element').bgshifter({
    	'bgColor' : '#ccc',
        'overlayColor' : '#000'
    });
 });
 ```
### Options
| Name          | Type       | Description                                     |
| ------------- |:----------:|------------------------------------------------:|
| overlayColor  | string     | Overlay background color                        |
| baseColor     | string     | Visible background color                        |
| bgClass       | string     | CSS class(es) to be applied  to both backgrounds|
| speed 	    | string/int | Speed of the animation                          |
| wrapperClass  | string     | CSS class(es) for the parent wrapper            |




