
$(function () {
    $("#log_btn").click(
    function () {
        var n = chrome.extension.getURL("logger.html");
        var tabId = chrome.extension.getBackgroundPage().viewTabId;
        if (tabId != 0)
            try {
                chrome.tabs.remove(tabId, function () { })
            }
            catch (t)
            { console.log(t) }
        chrome.tabs.create({ url: n })
    });
    $('#options').click(function () {
        if (!$(this).data("enabled")) {
            $("#setting_board").fadeOut('fast', function () {
                $('#options_box').show();
                $('#options').data('enabled', 1);

            })
        } else {
            $("#options_box").fadeOut('fast', function () {
                $('#setting_board').show();
                $('#options').data('enabled', 0);
            })
        }
    });
});

