# DaterangeBar jQuery plugin

The DaterangeBar is a jquery plugin which can be used for displaying percent of spent time in date range. The plugin support both Bootstrap classes and alone-mode. For more information see examples. 

## Version
0.0.1

## Examples
### Bootstrap mode
```sh
$('document').ready(function(){
    $('.daterangeBar').daterangeBar({
        'endDate': '31-01-2016',
        'barClass': 'progress-bar-success progress-bar-striped active',
        'bootstrap': true,
        'privateColors': false,
        'msg': 'of January'
        });
    });    
```

### Alone mode
```sh
$('document').ready(function(){
    $('.daterangeBar').daterangeBar({
        'endDate': '31-12-2016',
        'privateColors': true
    });
});    
```

## Options
### msg
The message will be show fater percent value. 
By default 'of Year'

### startDate
Start date in Format DD-MM-YYYY. 
By default: 01-01-2016

### endDate'
End date in Format DD-MM-YYYY. 
By default: 31-12-2016

### barClass
The class name/s for progressbar block.
By default: undefined

### bootstrap
Will be used  bootstrap attributes for progress bars or not.
By default:  false

### privateColors
Will be used  private colors or not. If privateColors is false, that's mean what you need set up colors in css
By default: true

### barColor
Background color of progress bar
By default: '#7BA7B5'

### bgColor
Background color for the wrapper block of progress bar
By default:  '#9CD3E6',

### minValue
Minimal value of progress bar
By default: 0

### maxValue
Miximal value of progress bar
By default: 100

## License
MIT