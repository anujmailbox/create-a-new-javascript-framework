(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Channel = milo.createComponentClass({
    className: 'Channel',
    facets: {
        container: undefined
    },
    methods: {
        
    }
});

},{}],2:[function(require,module,exports){
'use strict';

var ChannelItem = milo.createComponentClass({
    className: 'ChannelItem',
    facets: {
        data: undefined,
        item: undefined
    },
    methods: {
        
    }
});

},{}],3:[function(require,module,exports){
'use strict';

var ChannelsPane = milo.createComponentClass({
    className: 'ChannelsPane',
    facets: {
        container: undefined
    },
    methods: {

    }
});

},{}],4:[function(require,module,exports){
'use strict';

var MessageItem = milo.createComponentClass({
    className: 'MessageItem',
    facets: {
        data: undefined,
        item: undefined
    },
    methods: {
        
    }
});

},{}],5:[function(require,module,exports){
require('./ChannelsPane');
require('./ChannelItem');
require('./Channel');
require('./MessageItem');

},{"./Channel":1,"./ChannelItem":2,"./ChannelsPane":3,"./MessageItem":4}],6:[function(require,module,exports){
'use strict';

require('./components');

milo(milo.binder);

},{"./components":5}]},{},[6]);
