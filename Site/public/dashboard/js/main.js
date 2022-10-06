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



    /* Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "#1c003b",
                    "#4b0374",
                    "#7f00b2",
                    "#bc4ed8",
                    "#f988ff"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });
   

    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "#1c003b",
                    "#4b0374",
                    "#7f00b2",
                    "#bc4ed8",
                    "#f988ff"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    }); */
    // CPU
    var chartCPU = $("#CPU").get(0).getContext("2d");
    var myChartCPU = new Chart(chartCPU, {
        type: "line",
        data: {
            labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
            datasets: [{
                label: "% de uso",
                fill: true,
                backgroundColor: "#7f00b2",
                data: [45, 35, 40, 50, 68, 72, 80]
            }]
        },
        options: {
            responsive: true
        }
    });
    // Temp
    var chartTemp = $("#Temp").get(0).getContext("2d");
    var myChartTemp = new Chart(chartTemp, {
        type: "line",
        data: {
            labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
            datasets: [{
                label: "Temperatura em C°",
                fill: true,
                backgroundColor: "#7f00b2",
                data: [45, 45, 42, 56, 68, 72, 62]
            }]
        },
        options: {
            responsive: true
        }
    });
    // RAM
    var chartRAM = $("#RAM").get(0).getContext("2d");
    var myChartRAM = new Chart(chartRAM, {
        type: "line",
        data: {
            labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
            datasets: [{
                label: "% de uso°",
                fill: true,
                backgroundColor: "#7f00b2",
                data: [20, 25, 18, 24, 47, 68, 67]
            }]
        },
        options: {
            responsive: true
        }
    });
    /*
    var chartHDD = $("#HDD").get(0).getContext("2d");
    var myChartHDD = new Chart(chartHDD, {
        type: "pie",
        data: {
            labels: ["Livre", "Em uso"],
            datasets: [{
                backgroundColor: [
                    "#1c003b",
                    "#4b0374",
                    //"#7f00b2",
                    //"#bc4ed8",
                   // "#f988ff"
                ],
                data: [33, 67]
            }]
        },
        options: {
            responsive: true
        }
    });
    */
    // HDD
    var chartHDD = $("#HDD").get(0).getContext("2d");
    var myChartHDD = new Chart(chartHDD, {
        type: "line",
        data: {
            labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00'],
            datasets: [{
                label: "% de uso°",
                fill: true,
                backgroundColor: "#7f00b2",
                data: [40, 44, 44, 44, 45, 47, 48]
            }]
        },
        options: {
            responsive: true
        }
    });
    
})(jQuery);

