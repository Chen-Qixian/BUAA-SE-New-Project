
/* ========================================================================= */
/*  
/*  
/******************************* Main Javascript *****************************/
/*  
/*  
/* ========================================================================= */

/* ============================= On scroll fade/bounce fffect  ============================================ */

    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false
    });
    wow.init();

/* ============================= count  ============================================ */
    "use strict";
    $(".counters-item").appear(function () {
        $(".counters-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });