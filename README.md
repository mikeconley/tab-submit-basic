# TabSubmit Basic

This add-on is a rewrite of the now unmaintained [TabSubmit](https://addons.mozilla.org/en-US/firefox/addon/tabsubmit/) (which is, ironically, a rewrite of the still older [SubmitToTab](http://dragtotab.mozdev.org/submittotab/)).

It's very stripped down. Once you've installed the add-on, it should inject a scriptthat causes any form to target \_blank when you click on any input and hold down a meta key (like Cmd, Ctrl, etc), or use middle-click. That should, in theory, open it in a new tab or window, depending on what your [browser.link.open\_newwindow](http://kb.mozillazine.org/Browser.link.open_newwindow) pref is set at.

Made during a bout of insomnia for RyanVM, because that guy saves our butt daily.
