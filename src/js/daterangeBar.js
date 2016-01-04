/**
 * Created by nikolay_smeh on 04.01.16.
 * Email: nikolay@nikolay.ws
 * www.nikolay.ws
 */


(function($) {
    var methods = {
        init: function(obj, options) {

            var $this = $(this),
                data = $this.data('daterangeBar');

            if (!data) {
                $(this).data('daterangeBar', {
                    target : obj
                });
            }
            methods.renderBar(obj, options);

            return this;
        },

        renderBar: function(obj, options) {
            var startDateArr = options.startDate.split('-');
            startDate = new Date(startDateArr[2], startDateArr[1]-1, startDateArr[0]);

            var endDateArr = options.endDate.split('-');
            endDate = new Date(endDateArr[2], endDateArr[1]-1, endDateArr[0]);

            var today = new Date();

            var fullRange = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
            var todayRange = Math.round((today - startDate) / (1000 * 60 * 60 * 24));

            var dateDiff = Math.round(todayRange * (parseInt(options.maxValue) - parseInt(options.minValue)) / fullRange);
            if (dateDiff < options.minValue){
                dateDiff = options.minValue;
            }
            if (dateDiff > options.maxValue){
                dateDiff = options.maxValue;
            }


            var progress = $('<div/>')
                .addClass('progress');

            if (options.privateColors){
                progress
                    .css('border', '1px solid ' + options.barColor)
                    .css('background-color', options.bgColor);
            }
            else{
                progress
                    .attr('role', 'progressbar')
                    .attr('aria-valuenow', dateDiff)
                    .attr('aria-valuemin', options.minValue)
                    .attr('aria-valuemax', options.maxValue);
            }

            var progressBar = $('<div/>')
                .addClass('progress-bar')
                .css('width', dateDiff + '%');

            if (options.privateColors){
                progressBar
                    .css('background-color', options.barColor);
            }

            if (options.barClass != undefined){
                progressBar.addClass(options.barClass);
            }
            progressBar.text(dateDiff + '% ' + options.msg);

            $(progress).append(progressBar);
            obj.append(progress);
        }
    };


    $.fn.daterangeBar = function(options) {
        var settings = $.extend({
            'msg': 'of the year',
            'startDate': '01-01-2016',
            'endDate': '31-12-2016',
            'barClass': undefined,
            'bootstrap': false,
            'privateColors': true,
            'barColor': '#7BA7B5',
            'bgColor': '#9CD3E6',
            'minValue': 0,
            'maxValue': 100
        }, options);

        return methods.init(this, settings);
    }
})(jQuery);