/**
 *  EZ-Sticky-Footer -- jQuery plugin to make the page footer stick to the
 *                      bottom of the page.
 *
 *  https://github.com/maratbn/EZ-Sticky-Footer
 *
 *  Version:        0.0.1
 *
 *  Module:         jquery.ez-sticky-footer-0.0.1-min.js
 *
 *  Description:    Compressed / minified version of 'jquery.ez-sticky-footer.js'.
 *                  The JavaScript file for the EZ-Sticky-Footer plugin.
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
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS 
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


(function(e){var i=e(window);var g=e("body");var h=e(".jq-ez-sticky-footer-page-container");var f=e(".jq-ez-sticky-footer-page-footer");var d=e(".jq-ez-sticky-footer-content-expander");h.css("padding","1px 0");h.css("margin","-1px 0");function c(){var m=h.outerHeight(true);var k=d.height();var j=m-k;var l=0;if(j<i.height()){var n=g.outerHeight(true)-m;l=i.height()-j-n}d.height(l)}c();i.bind("resize",function(){c()});var b=null;function a(){if(g.outerHeight(true)==b){return}c();b=g.outerHeight(true)}h.bind("DOMSubtreeModified",a);f.bind("DOMSubtreeModified",a);e(document).load(function(){a()});e(document).ready(function(){a()})})(jQuery);
