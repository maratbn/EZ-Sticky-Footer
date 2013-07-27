/**
 *  EZ-Sticky-Footer -- jQuery plugin to make the page footer stick to the
 *                      bottom of the page.
 *
 *  https://github.com/maratbn/EZ-Sticky-Footer
 *
 *  Version:        0.0.2
 *
 *  Module:         jquery.ez-sticky-footer.js
 *
 *  Description:    The JavaScript file for the EZ-Sticky-Footer plugin.
 *
 *  Copyright (c) 2013 Marat Nepomnyashy  http://maratbn.com  maratbn@gmail
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *      * Redistributions of source code must retain the above copyright
 *        notice, this list of conditions and the following disclaimer.
 *      * Redistributions in binary form must reproduce the above copyright
 *        notice, this list of conditions and the following disclaimer in the
 *        documentation and/or other materials provided with the distribution.
 *      * Neither the name of the <organization> nor the
 *        names of its contributors may be used to endorse or promote products
 *        derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 *  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 *  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 *  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function($) {
    var jqWindow = $(window);
    var jqHtml = $('html');
    var jqBody = $('body');
    var jqPageContainer = $('.jq-ez-sticky-footer-page-container');
    var jqPageFooter = $('.jq-ez-sticky-footer-page-footer');
    var jqContentExpander = $('.jq-ez-sticky-footer-content-expander');

    function _getPageHeight() {

        function _getHtmlMargins() {
            function _toNum(strMargin) {
                return 1 * strMargin.replace('px', "");
            }
            return _toNum(jqHtml.css('margin-top')) +
                    _toNum(jqHtml.css('margin-bottom')) +
                    _toNum(jqHtml.css('padding-top')) +
                    _toNum(jqHtml.css('padding-bottom'));
        }

        return _getHtmlMargins() + jqBody.outerHeight(true);
    }

    //  The following setting of self-cancelling margin and padding onto the
    //  page container is to make sure that it entirely covers any margins of
    //  its child components within its height.
    jqPageContainer.css('padding', '1px 0');
    jqPageContainer.css('margin', '-1px 0');

    function _adjustExpander() {
        var heightPageContainer = jqPageContainer.outerHeight(true);
        var heightExpander = jqContentExpander.height();
        var heightContainerNoExpander = heightPageContainer - heightExpander;

        var heightExpanderNew = 0;
        if (heightContainerNoExpander < jqWindow.height()) {
            var heightDeltaBody = _getPageHeight() - heightPageContainer;
            heightExpanderNew = jqWindow.height() - heightContainerNoExpander
                                                            - heightDeltaBody;
        }

        jqContentExpander.height(heightExpanderNew);
    }

    _adjustExpander();

    jqWindow.bind('resize', function() {
            _adjustExpander();
        });

    var heightPageLast = null;

    function _adjustExpanderIfNecessary() {
        if (_getPageHeight() == heightPageLast) return;

        _adjustExpander();
        heightPageLast = _getPageHeight();
    }

    jqWindow.bind('DOMSubtreeModified', _adjustExpanderIfNecessary);

    //  Adjusting the expander after the document is loaded as well as after
    //  it's completely ready just in case any DOM change effecting the layout
    //  was missed.
    $(document).load(function() {
            _adjustExpanderIfNecessary();
        });
    $(document).ready(function() {
            _adjustExpanderIfNecessary();
        });
})(jQuery);
