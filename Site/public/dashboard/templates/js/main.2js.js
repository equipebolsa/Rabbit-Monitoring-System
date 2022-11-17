(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";



    var chartTemp = $("#cpuChart").get(0).getContext("2d");
    var myChartTemp = new Chart(chartTemp, {
        type: "line",
        data: {
            labels: ['2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16'],
            datasets: [{
                label: 'Porcetagem da CPU (%)',
                borderColor: 'rgb(75, 192, 192)',
                data: [45, 45, 42, 56, 68, 72, 62,45, 45, 42, 56, 68, 72, 62]
            }]
        },
        options: {
            responsive: true
        }
    });


  
    var chartTemp = $("#temp").get(0).getContext("2d");
    var myChartTemp = new Chart(chartTemp, {
        type: "line",
        data: {
            labels: ['2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16','2022-10-16'],
            datasets: [{
                label: "Temperatura em C°",
                borderColor: "#ED4537",
                data: [45, 45, 42, 56, 68, 72, 62,45, 45, 42, 56, 68, 72, 62]
            }]
        },
        options: {
            responsive: true
        }
    });

    var chartRAM = $("#ram").get(0).getContext("2d");
    var myChartRAM = new Chart(chartRAM, {
        type: "line",
        data: {
            labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
            datasets: [{
                label: 'Memória Disponivel (%)',
                borderColor: 'rgb(19, 237, 114)',
                data: [20, 25, 18, 24, 47, 68, 67]
            }]
        },
        options: {
            responsive: true
        }
    });
    

    var chartHDD = $("#hdd").get(0).getContext("2d");
    var myChartHDD = new Chart(chartHDD, {
        type: "line",
        data: {
            labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
            datasets: [{
                label: 'Memória Disponivel (GB)',
                borderColor: 'rgb(237, 154, 7)',
                data: [40, 44, 44, 44, 45, 47, 48]
            }]
        },
        options: {
            responsive: true
        }
    });

})(jQuery);

