/**
 *  EZ-Sticky-Footer -- jQuery plugin to make the page footer stick to the
 *                      bottom of the page.
 *
 *  Project URLs:   http://maratbn.com/projects/ez-sticky-footer
 *                  https://github.com/maratbn/EZ-Sticky-Footer
 *                  https://plugins.jquery.com/ez-sticky-footer
 *
 *  Demo URL:       http://www.maratbn.com/misc/ez-sticky-footer-demo/example.html
 *
 *  Version:        0.1.3-development_unreleased
 *
 *  Module:         jquery.ez-sticky-footer-0.1.3-min.js
 *
 *  Description:    The EZ-Sticky-Footer jQuery plugin version 0.1.3 minified.
 *
 *  Copyright (c) 2013-2015 Marat Nepomnyashy  http://maratbn.com  maratbn@gmail
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

(function(a){a(document).ready(function(){var k=a(window);var f=a("html");var g=a("body");var i=a(".jq-ez-sticky-footer-page-container");var e=a(".jq-ez-sticky-footer-page-footer");var d=a(".jq-ez-sticky-footer-content-expander");function b(){function m(){function n(o){return 1*o.replace("px","")}return n(f.css("margin-top"))+n(f.css("margin-bottom"))+n(f.css("padding-top"))+n(f.css("padding-bottom"))}return m()+g.outerHeight(true)}i.css("padding","1px 0");i.css("margin","-1px 0");function c(){var p=i.outerHeight(true);var n=d.height();var m=p-n;var o=0;if(m<k.height()){var q=b()-p;o=k.height()-m-q}d.height(o)}c();k.bind("resize",function(){c()});var l=null;function h(){if(b()==l){return}c();l=b()}h();var j=false;k.bind("DOMSubtreeModified",function(){if(j){return}j=true;h();j=false});if(!a.ezsf){a.ezsf={adjustExpander:function(){c()},adjustExpanderIfNecessary:function(){h()}}}});a(document).load(function(){_adjustExpanderIfNecessary()})})(jQuery);
