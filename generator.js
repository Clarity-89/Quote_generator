$(document).ready(function () {

    var quotes = [{
        quote: 'First, solve the problem. Then, write the code.',
        author: 'J. Johnson'
    }, {
        quote: 'When in doubt, use brute force.',
        author: 'K. Thompson'
    }, {
        quote: 'Deleted code is debugged code.',
        author: 'J. Sickel'
    }, {
        quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
        author: 'Abelson'
    }, {
        quote: 'A C program is like a fast dance on a newly waxed dance floor by people carrying razors.',
        author: 'W. Ravens'
    }, {
        quote: 'Before software can be reusable it first has to be usable.',
        author: 'R. Johnson'
    }, {
        quote: 'Computers are good at following instructions, but not at reading your mind. ',
        author: 'D. Knuth'
    }, {
        quote: 'Copy and paste is a design error.',
        author: 'D. Parnas'
    }, {
        quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
        author: 'M. Golding'
    }, {
        quote: 'Controlling complexity is the essence of computer programming.',
        author: 'B. Kernighan'
    }, {
        quote: 'Walking on water and developing software from a specification are easy if both are frozen.',
        author: 'E. V Berard'
    }, {
        quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
        author: 'B. Gates'
    }, {
        quote: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses',
        author: 'B. Stroustrup'
    }, {quote: "It's all talk until the code runs.", author: 'W. Cunningham'}];

    $('#buttonQuote').click(function () {
        // Remove tweet button if already exist on the page
        var t = $('#twitterbutton');
        if (t != null) {
            t.remove();
        }
        displayQuote();
    });

    // A function that shows a random quote from the list of quotes and generate new tweet button
    function displayQuote() {
        var i = getRandomInt(0, quotes.length - 1);
        $('#quote').html(quotes[i].quote + '<br />' + '<br />' + '<span id="ital">' + ' -' + quotes[i].author + '</span>');

        // Generate new tweet button for every new quote
        this.link = $('<a></a>')
            .attr({
                'href': 'https://twitter.com/share',
                'class': 'twitter-share-button',
                'style': 'margin: 50px;',
                'id': 'twitterbutton',
                'data-url': 'http://tinyurl.com/pr4gl3y',
                "data-text": $('#quote').text(),
                'data-count': 'none',
                "data-size": "large",
                'data-title': 'Hi'
            });

        // Put it inside the twtbox div
        var tweetdiv = $('#twtbox');
        tweetdiv.append(this.link);
        twttr.widgets.load(); //very important
    }

    // A function to generate random numbers in a specified range
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    displayQuote();
});
