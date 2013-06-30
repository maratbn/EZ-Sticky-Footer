/**
 *  EZ-Sticky-Footer -- jQuery plugin to make the page footer stick to the
 *                      bottom of the page.
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

jQuery(document).ready(function($) {
    var jqWindow = $(window);
    var jqPageContainer = $('.jq-ez-sticky-footer-page-container');
    var jqContentExpander = $('.jq-ez-sticky-footer-expander');

    var strPageContainerOverflow = jqPageContainer.css('overflow');
    if (!strPageContainerOverflow || strPageContainerOverflow == 'visible') {
        jqPageContainer.css('overflow', 'hidden');
        //               ^^^^^^^^    ^^^^^^
        //  Just set the page container CSS 'overflow' property to 'hidden' to
        //  insure that any outer vertical margins of the child elements will
        //  get included in the calculated height of the page container.
        //
        //  Overflow value of 'auto' will also work.
        //
        //  http://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element
    }

    function adjustExpander() {
        var heightPageContainer = jqPageContainer.outerHeight(true);
        var heightExpander = jqContentExpander.height();
        var heightContainerNoExpander = heightPageContainer - heightExpander;

        var deltaHeight = jqWindow.height() - heightContainerNoExpander;

        jqContentExpander.height(deltaHeight > 0 ? deltaHeight : 0);
    }

    adjustExpander();

    jqWindow.bind('resize', function() {
            adjustExpander();
        });

    var heightContainerLast = null;

    jqPageContainer.bind('DOMSubtreeModified', function() {
            if (jqPageContainer.outerHeight(true) == heightContainerLast) return;

            adjustExpander();
            heightContainerLast = jqPageContainer.outerHeight(true);
        });
});
