(function ($) {
    $(document).ready(function ($) {

        if( 'undefined' == typeof popup_frontend ) return false;

        var popup_json = JSON.parse(popup_frontend?.dnxte_popup_show);
        popupIds = popup_json?.popup_ids;


        popupIds.forEach((id) => {
            const content = $(`.dnxte_popup_content_${id}`).html();
            const data = JSON.parse(popup_json[`json_data${id}`]);

            // console.log(data)
            // const custom_selector = JSON.parse(popup_json[`custom_selector${id}`]);

            if ("true" === data?.remove_link) {
                $(`a#popup_${id}`).removeAttr("href");
            }

            if ("true" === data?.close_clicking_back_button) {
                window.history.pushState(null, null, '');
                $(window).on('popstate', function () {
                    $.magnificPopup.close()
                })
            }
            let preventScrolling = 'false' === data.prevent_page_scrolling ? `dnxte-prevent-scrolling` : '';
            const magnificPopupObj = {
                items: {
                    src: `.dnxte_popup_content_${id}`,
                },
                callbacks: {
                    beforeClose: function () {
                        $(`.dnxte_popup_content.dnxte_popup_content_${id}`)
                            .removeClass(`dnxte_popup_pro_${data.opening_animation}`)
                            .addClass(`dnxte_popup_pro_${data.closing_animation}`);
                    },
                    afterClose: function () {
                        $(`.dnxte_popup_content.dnxte_popup_content_${id}`)
                            .removeClass(`dnxte_popup_pro_${data.closing_animation}`)
                            .addClass(`dnxte_popup_pro_${data.opening_animation}`);
                    },
                    open: function () {
                        return false;
                    },
                },
                type: "inline",
                closeBtnInside: !JSON.parse(data.close_btn_outside.toLowerCase()),
                closeOnBgClick: JSON.parse(data.close_overlay_click.toLowerCase()),
                fixedContentPos: JSON.parse(data.prevent_page_scrolling.toLowerCase()),
                mainClass: `dnxte_popup_custom ${data.clickable_under_overlay} ${preventScrolling} dnxte_popup_custom_${id}`, // mainClass: `dnxte_popup_custom ${data.clickable_under_overlay} dnxte_popup_custom_${id}`,
                removalDelay: 1000,
                midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
                closeMarkup:
                    "false" === data.hide_close_button
                        ? `<button title="" type="button" class="mfp-close ${data.closing_css_selector} dnxte_popup_pro_${data.close_btn_position}_close">&#215;</button>`
                        : ``,
            };

            if ('on' == data.dnxte_disable_desktop && 981 < $(window).width()) {
                return;
            }
            if ('on' == data.dnxte_disable_tablet && (768 <= $(window).width() && 981 >= $(window).width())) {
                return;
            }
            if ('on' == data.dnxte_disable_phone && 768 > $(window).width()) {
                return;
            }

            var dnxte_popup_show = JSON.parse(popup_frontend.dnxte_popup_show);

            let startTime = 0;
            if ("" !== data?.trigger_delay_start) {
                startTime = +data?.trigger_delay_start * 1000;
            }
            const endTime = startTime + data?.trigger_delay_end * 1000;

            if ("trigger_on_none" !== data?.trigger_event) {
                if (
                    !document.cookie.includes(`dxnteHours${id}=`) &&
                    "every_time" != dnxte_popup_show[`popup_perodicity${id}`]
                ) {

                    // Set the cookie to expire in 1 day
                    var expires = new Date();
                    expires.setTime(
                        expires.getTime() + dnxte_popup_show[`periodicity_cookie${id}`]
                    ); // 1 day in milliseconds

                    document.cookie =
                        `dxnteHours${id}=true; expires=` +
                        expires.toUTCString() +
                        "; path=/;";
                }
                // console.log(dnxte_popup_show[`periodicity_cookie${id}`])
                if (!dnxte_popup_show[`popup_show${id}`]) return false;
            }
            var trigger_event = JSON.parse(popup_frontend.trigger_event);

            if ("trigger_on_none" === data.trigger_event) {

                $(`#popup_${id}`).on('click', function (event) {
                    event.preventDefault();
                    if (content) {
                        $.magnificPopup.open(magnificPopupObj);
                    }
                });

                /* custom css selector */
                if ('' == dnxte_popup_show[`custom_selector${id}`])
                    return false;

                $(dnxte_popup_show[`custom_selector${id}`]).on('click', function (event) {
                    event.preventDefault();
                    if (content) {
                        $.magnificPopup.open(magnificPopupObj);
                    }
                });
            } else if ("trigger_on_load" === data.trigger_event) {
                if (0 == startTime) {
                    $.magnificPopup.open(magnificPopupObj);
                } else {
                    const popupOpenTimer = setTimeout(() => {
                        $.magnificPopup.open(magnificPopupObj);
                        clearTimeout(popupOpenTimer);
                    }, startTime);
                }
                if (startTime < endTime) {
                    const popupCloseTimer = setTimeout(() => {
                        $.magnificPopup.close();
                        clearTimeout(popupCloseTimer);
                    }, endTime);
                }
            } else if ("trigger_on_scroll" === data.trigger_event) {

                let scroll_event = trigger_event[id];
                var recentScroll = false;
                $(window).on("scroll", function () {
                const scrollPosition = window.scrollY + window.innerHeight;
                const totalHeight = document.documentElement.scrollHeight;
                let isPopupShown = false;

                if (scroll_event.onscroll_offset_units != "px" && !recentScroll) {
                    const scrollPercentage = (scrollPosition / totalHeight) * 100;
                    if (scrollPercentage >= scroll_event.onscroll_offset) {
                        isPopupShown = true;
                        recentScroll = true;
                    }
                } else if (scroll_event.onscroll_offset_units == "px" && !recentScroll) {

                    if (window.scrollY >= scroll_event.onscroll_offset) {
                        isPopupShown = true;
                        recentScroll = true;
                    }
                }

                if (isPopupShown) {
                    $.magnificPopup.open(magnificPopupObj);
                }
                });
            } else if ("trigger_on_exit" === data.trigger_event) {
                document.addEventListener("mousemove", function (e) {
                    // Get current scroll position
                    var scroll = window.pageYOffset || document.documentElement.scrollTop;
                    if ((e.pageY - scroll) < 7)
                        $.magnificPopup.open(magnificPopupObj);
                });
            } else if ("trigger_on_inactivity" === data.trigger_event) {

                let inactivity_event = trigger_event[id];

                setIdleTimeout(
                    inactivity_event.oninactivity_delays * 1000,
                    function () {
                        $.magnificPopup.open(magnificPopupObj);
                    },
                    function () {
                        return false;
                    }
                );

                function setIdleTimeout(millis, onIdle, onUnidle) {
                    var timeout = 0;
                    startTimer();

                    function startTimer() {
                        timeout = setTimeout(onExpires, millis);
                        document.addEventListener("mousemove", onActivity);
                        document.addEventListener("keydown", onActivity);
                        document.addEventListener("touchstart", onActivity);
                    }

                    function onExpires() {
                        timeout = 0;
                        onIdle();
                    }

                    function onActivity() {
                        if (timeout) clearTimeout(timeout);
                        else onUnidle();
                        //since the mouse is moving, we turn off our event hooks for 1 second
                        document.removeEventListener("mousemove", onActivity);
                        document.removeEventListener("keydown", onActivity);
                        document.removeEventListener("touchstart", onActivity);
                        setTimeout(startTimer, 1000);
                    }
                }
            }
            return false;
        });
    });
})(jQuery);