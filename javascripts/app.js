(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e){for(var n in e)r(e,n)&&(t[n]=e[n])};e.require=a,e.require.define=f,e.require.brunch=!0})(),window.require.define({application:function(e,t,n){var r;r={initialize:function(){var e,n,i,s,o,u,a;return u=t("models/notes"),e=t("views/home_view"),i=t("views/note_list_view"),o=t("views/notepad_view"),s=t("views/note_view"),n=t("views/new_note_view"),a=t("lib/router"),this.notes=new u,this.homeView=new e,this.noteListView=new i,this.notepadView=new o,this.newNoteView=new n,this.router=new a,typeof Object.freeze=="function"?Object.freeze(r):void 0}},n.exports=r}}),window.require.define({initialize:function(e,t,n){var r;r=t("application"),$(function(){return r.initialize(),Backbone.history.start()})}}),window.require.define({"lib/router":function(e,t,n){var r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("application"),n.exports=r=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return o(t,e),t.prototype.routes={"":"home"},t.prototype.home=function(){return i.homeView.render(),i.notes.fetch()},t}(Backbone.Router)}}),window.require.define({"models/collection":function(e,t,n){n.exports=Backbone.Collection.extend({})}}),window.require.define({"models/model":function(e,t,n){n.exports=Backbone.Model.extend({})}}),window.require.define({"models/note":function(e,t,n){var r,i,s=function(e,t){return function(){return e.apply(t,arguments)}},o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("./model"),n.exports=i=function(e){function t(){return this.setCurrent=s(this.setCurrent,this),this.clear=s(this.clear,this),this.url=s(this.url,this),t.__super__.constructor.apply(this,arguments)}return u(t,e),t.prototype.defaults={title:"Click to edit",content:"Note content",current:!1},t.prototype.url=function(){},t.prototype.clear=function(){return this.destroy(),this.view.remove()},t.prototype.setCurrent=function(e){return this.save({current:e})},t}(r)}}),window.require.define({"models/notes":function(e,t,n){var r,i,s,o,u=function(e,t){return function(){return e.apply(t,arguments)}},a={}.hasOwnProperty,f=function(e,t){function r(){this.constructor=e}for(var n in t)a.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("./collection"),o=t("application"),i=t("models/note"),n.exports=s=function(e){function t(){return this.setCurrent=u(this.setCurrent,this),this.initialize=u(this.initialize,this),this.url=u(this.url,this),t.__super__.constructor.apply(this,arguments)}return f(t,e),t.prototype.model=i,t.prototype.url=function(){},t.prototype.initialize=function(){return this.localStorage=new Store("notes")},t.prototype.setCurrent=function(e){return o.notes.map(function(t){if(t!==e)return t.setCurrent(!1)}),e.save({current:!0},{silent:!0})},t}(r)}}),window.require.define({"views/home_view":function(e,t,n){var r,i,s,o,u={}.hasOwnProperty,a=function(e,t){function r(){this.constructor=e}for(var n in t)u.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),s=t("application"),o=t("./templates/home"),n.exports=r=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return a(t,e),t.prototype.el="#page-container",t.prototype.template=o,t.prototype.afterRender=function(){return this.$el.find("#note-editor").append(s.notepadView.render().el),this.$el.find("#notes-list").append(s.noteListView.render().el)},t}(i)}}),window.require.define({"views/new_note_view":function(e,t,n){var r,i,s,o,u=function(e,t){return function(){return e.apply(t,arguments)}},a={}.hasOwnProperty,f=function(e,t){function r(){this.constructor=e}for(var n in t)a.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),s=t("application"),o=t("./templates/new_note"),n.exports=r=function(e){function t(){return this.createNewNote=u(this.createNewNote,this),t.__super__.constructor.apply(this,arguments)}return f(t,e),t.prototype.template=o,t.prototype.id="add-note-view",t.prototype.events={"click #add-note":"createNewNote"},t.prototype.createNewNote=function(){return s.notes.create()},t}(i)}}),window.require.define({"views/note_list_view":function(e,t,n){var r,i,s,o,u,a=function(e,t){return function(){return e.apply(t,arguments)}},f={}.hasOwnProperty,l=function(e,t){function r(){this.constructor=e}for(var n in t)f.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};s=t("./view"),r=t("./note_view"),o=t("application"),u=t("./templates/note_list"),n.exports=i=function(e){function t(){return this.afterRender=a(this.afterRender,this),this.initialize=a(this.initialize,this),this.addAll=a(this.addAll,this),this.addOne=a(this.addOne,this),t.__super__.constructor.apply(this,arguments)}return l(t,e),t.prototype.template=u,t.prototype.addOne=function(e){var t;t=new r({model:e}),this.$el.find("#add-note").before(t.render().el);if(e.attributes.current)return t.$el.find(".note").click()},t.prototype.addAll=function(){return o.notes.each(this.addOne)},t.prototype.initialize=function(){return o.notes.bind("add",this.addOne),o.notes.bind("reset",this.addAll)},t.prototype.afterRender=function(){return this.$el.find("ul").append(o.newNoteView.render().el)},t}(s)}}),window.require.define({"views/note_view":function(e,t,n){var r,i,s,o,u=function(e,t){return function(){return e.apply(t,arguments)}},a={}.hasOwnProperty,f=function(e,t){function r(){this.constructor=e}for(var n in t)a.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),s=t("application"),o=t("./templates/note"),n.exports=r=function(e){function t(){return this.clear=u(this.clear,this),this.remove=u(this.remove,this),this.updateTitleOnEnter=u(this.updateTitleOnEnter,this),this.updateTitle=u(this.updateTitle,this),this.viewEdit=u(this.viewEdit,this),this.getRenderData=u(this.getRenderData,this),this.afterRender=u(this.afterRender,this),this.initialize=u(this.initialize,this),t.__super__.constructor.apply(this,arguments)}return f(t,e),t.prototype.template=o,t.prototype.tagName="li",t.prototype.events={"click .note":"viewEdit","click .delete":"clear"},t.prototype.initialize=function(){return this.model.bind("change",this.render),this.model.view=this},t.prototype.afterRender=function(){var e;return e=this.$el.find(".note"),this.model.attributes.current&&e.focus(),e.bind("blur",this.updateTitle),e.bind("keyup",this.updateTitleOnEnter)},t.prototype.getRenderData=function(){return{note:this.model.toJSON()}},t.prototype.viewEdit=function(){return s.notes.setCurrent(this.model)},t.prototype.updateTitle=function(e){return this.model.save({title:this.$(e.target).text()})},t.prototype.updateTitleOnEnter=function(e){var t;t=this.$(e.target);if(e.keyCode===13)return this.model.save({title:t.text()}),t.blur()},t.prototype.remove=function(){return this.$el.remove()},t.prototype.clear=function(){return this.model.clear()},t}(i)}}),window.require.define({"views/notepad_view":function(e,t,n){var r,i,s,o,u=function(e,t){return function(){return e.apply(t,arguments)}},a={}.hasOwnProperty,f=function(e,t){function r(){this.constructor=e}for(var n in t)a.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),s=t("application"),o=t("./templates/notepad"),n.exports=r=function(e){function t(){return this.updateContent=u(this.updateContent,this),this.afterRender=u(this.afterRender,this),this.showNoteContent=u(this.showNoteContent,this),this.initialize=u(this.initialize,this),t.__super__.constructor.apply(this,arguments)}return f(t,e),t.prototype.template=o,t.prototype.currentNote=null,t.prototype.initialize=function(){return s.notes.bind("sync",this.showNoteContent)},t.prototype.showNoteContent=function(e,t){return this.currentNote=e,this.$("#note-input").text(e.attributes.content)},t.prototype.afterRender=function(){return this.$("#note-input").bind("blur",this.updateContent)},t.prototype.updateContent=function(){if(this.currentNote)return this.currentNote.save({content:this.$("#note-input").text()})},t}(i)}}),window.require.define({"views/templates/home":function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="row-fluid fullheight"><aside id="notes-list" class="span3"></aside><section id="note-editor" class="span9"></section></div>')}return buf.join("")}}}),window.require.define({"views/templates/index":function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div id="content"><h1>brunch<h2>Welcome!</h2><ul><li><a href="http://brunch.readthedocs.org/">Documentation</a></li><li><a href="https://github.com/brunch/brunch/issues">Github Issues</a></li><li><a href="https://github.com/brunch/twitter">Twitter Example App</a></li><li><a href="https://github.com/brunch/todos">Todos Example App</a></li></ul></h1></div>')}return buf.join("")}}}),window.require.define({"views/templates/layout":function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Brunch Notes</title><link rel="stylesheet" href="/stylesheets/app.css"></head><body>');var __val__=body;buf.push(null==__val__?"":__val__),buf.push('<script src="/javascripts/vendor.js"></script><script src="/javascripts/app.js"></script></body></html>')}return buf.join("")}}}),window.require.define({"views/templates/new_note":function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<li id="add-note">New Note</li>')}return buf.join("")}}}),window.require.define({"views/templates/note":function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;note.current?buf.push('<div contenteditable="true" class="note current">'+escape((interp=note.title)==null?"":interp)+"</div>"):buf.push('<div contenteditable="true" class="note">'+escape((interp=note.title)==null?"":interp)+"</div>"),buf.push('<span class="delete">&cross;</span>')}return buf.join("")}}}),window.require.define({"views/templates/note_list":function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<ul class="fullheight"></ul>')}return buf.join("")}}}),window.require.define({"views/templates/notepad":function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div id="note-input" contenteditable="true" class="notepad"></div>')}return buf.join("")}}}),window.require.define({"views/view":function(e,t,n){var r,i=function(e,t){return function(){return e.apply(t,arguments)}},s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};n.exports=r=function(e){function t(){return this.afterRender=i(this.afterRender,this),this.render=i(this.render,this),this.getRenderData=i(this.getRenderData,this),this.template=i(this.template,this),this.initialize=i(this.initialize,this),t.__super__.constructor.apply(this,arguments)}return o(t,e),t.prototype.initialize=function(){return this.render=_.bind(this.render,this)},t.prototype.template=function(){},t.prototype.getRenderData=function(){},t.prototype.render=function(){return this.$el.html(this.template(this.getRenderData())),this.afterRender(),this},t.prototype.afterRender=function(){},t}(Backbone.View)}})