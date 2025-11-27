$(document).ready(function() {
    var urls = {
        'first': 'https://meijastiina.github.io/news_rss_topstories.xml',
        'second': 'https://feeds.bbci.co.uk/news/world/rss.xml'
,
        'third': 'https://meijastiina.github.io/news_rss_sports.xml'
    };
    function loadContent(selection) {
        var url = urls[selection];
        if (url) {
            $('#ajax').load(url, function(response, status, xhr) {
            });
        }
    }


    $('#mySelect').on('change', function() {
        var selectedValue = $(this).val();
        loadContent(selectedValue);
    });

    $('#mySelect').val('first');
    loadContent('first');
});

//$("#contant").text ("moro")

//$('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7pJ8BfXJUsWLD4TYbULz2P9R9nOJRdJYSTYR-VX8R6PjjZGXyiTlneFiMJVdsuQN-CIr3T-th-DMhVYVpjsgwENdJcO2gnDJicmDVLLD&s=10');

//$('.sideBarListBox').hide();

//$('.sideBarListBox').show();

//$('li:contains("Lorem")').css('text-decoration', 'underline');

//$('.sideBarListBox a').css('background-color', 'yellow');

//$('h1').hide().fadeIn(1000);

//$('body').slideUp(1000);


//$('body').slideUp(1000);

//$('body').slideDown(1000);

////