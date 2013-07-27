/**
 *  EZ-Sticky-Footer -- jQuery plugin to make the page footer stick to the
 *                      bottom of the page.
 *
 *  https://github.com/maratbn/EZ-Sticky-Footer
 *
 *  Version:        0.0.2
 *
 *  Module:         jquery.ez-sticky-footer-0.0.2-min.js
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


(function(d){var j=d(window);var f=d("html");var g=d("body");var i=d(".jq-ez-sticky-footer-page-container");var e=d(".jq-ez-sticky-footer-page-footer");var c=d(".jq-ez-sticky-footer-content-expander");function a(){function l(){function m(n){return 1*n.replace("px","")}return m(f.css("margin-top"))+m(f.css("margin-bottom"))+m(f.css("padding-top"))+m(f.css("padding-bottom"))}return l()+g.outerHeight(true)}i.css("padding","1px 0");i.css("margin","-1px 0");function b(){var o=i.outerHeight(true);var m=c.height();var l=o-m;var n=0;if(l<j.height()){var p=a()-o;n=j.height()-l-p}c.height(n)}b();j.bind("resize",function(){b()});var k=null;function h(){if(a()==k){return}b();k=a()}j.bind("DOMSubtreeModified",h);d(document).load(function(){h()});d(document).ready(function(){h()})})(jQuery);
