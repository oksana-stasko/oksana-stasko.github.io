jQuery(document).ready(function ($) {  
  
    var dashboard = function(opts) {
        
    }

    dashboard.prototype = {
        animationSpeed: 300,
        elBg: ".reveal-modal-bg",
        el: ".ya-dashboard-page",
        openSelector: ".reveal-modal.open",
    
        open: function(content) {       
            var openModals = $(this.openSelector);
            if (openModals.length === 1) {
                this.el = openModals.first();
                this.insertContent(content);
                $(".ya-dashboard-page-inner").animate({
                    height:  $(".ya-dashboard-page-container").height(),
                    width:  $(".ya-dashboard-page-container").width()
                },600);
            } else {
                this.createPage(content);
            }
        
        },
        
        insertContent: function(content) {         
            $(".ya-dashboard-page-container", this.el).html(content);                        
        },
        
        updatePage: function(content) {
            this.insertContent(content);
        },
        
        createPage: function(content){
            this.el = $(this.el);
            //stop animation
            this.el.stop(true, true);
            
            this.insertContent(content);
            
            this.el.addClass("open");
            this.el.css({
                'opacity': 0, 
                'visibility': 'visible', 
                'display' : 'block'
            });
        
            this.elBg = $(this.elBg);
            if (this.elBg.length === 0) {
                this.elBg = $('<div class="reveal-modal-bg" />').insertAfter(this.el);
                this.elBg.fadeTo('fast', 0.96);
            } else {
                this.elBg.stop(true, true);
            }
            this.elBg.fadeIn(this.animationSpeed / 2);
            var el = this.el;
            $(".ya-dashboard-page-inner").height($(".ya-dashboard-page-container").height());
            $(".ya-dashboard-page-inner").width($(".ya-dashboard-page-container").width());
            this.el.delay(this.animationSpeed / 2).animate({
                "opacity": 1
            }, this.animationSpeed, function () {               
                el.trigger('reveal:opened');
            });                        
        
            this.el.bind('reveal:close.reveal', $.proxy(this.closeHandler, this));
            $(".close-btn", this.el).on("click", function(event){
                event.preventDefault();            
                el.trigger("reveal:close");
            });
        },
    
        closeHandler: function(){
            this.el.removeClass("open");
            var el = this.el;
            this.el.animate({
                "opacity" : 0
            }, this.animationSpeed, function () {
                el.css({
                    'opacity': 1, 
                    'visibility': 'hidden', 
                    'display' : 'none'
                });
            });

            this.elBg.delay(this.animationSpeed).fadeOut(this.animationSpeed);
        }

    }
    
    dashboard = new dashboard();
    $('a[data-reveal-id]').live('click', function (event) {
        event.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');
        dashboard.open($('#' + modalLocation).html());
    });
});
jQuery(document).ready(function ($) {  
  
    var dashboard = function(opts) {
        
    }

    dashboard.prototype = {
        animationSpeed: 300,
        elBg: ".reveal-modal-bg",
        el: ".ya-dashboard-page",
        openSelector: ".reveal-modal.open",
    
        open: function(content) {       
            var openModals = $(this.openSelector);
            if (openModals.length === 1) {
                this.el = openModals.first();
                this.insertContent(content);
                $(".ya-dashboard-page-inner").animate({
                    height:  $(".ya-dashboard-page-container").height(),
                    width:  $(".ya-dashboard-page-container").width()
                },600);
            } else {
                this.createPage(content);
            }
        
        },
        
        insertContent: function(content) {         
            $(".ya-dashboard-page-container", this.el).html(content);                        
        },
        
        updatePage: function(content) {
            this.insertContent(content);
        },
        
        createPage: function(content){
            this.el = $(this.el);
            //stop animation
            this.el.stop(true, true);
            
            this.insertContent(content);
            
            this.el.addClass("open");
            this.el.css({
                'opacity': 0, 
                'visibility': 'visible', 
                'display' : 'block'
            });
        
            this.elBg = $(this.elBg);
            if (this.elBg.length === 0) {
                this.elBg = $('<div class="reveal-modal-bg" />').insertAfter(this.el);
                this.elBg.fadeTo('fast', 0.96);
            } else {
                this.elBg.stop(true, true);
            }
            this.elBg.fadeIn(this.animationSpeed / 2);
            var el = this.el;
            $(".ya-dashboard-page-inner").height($(".ya-dashboard-page-container").height());
            $(".ya-dashboard-page-inner").width($(".ya-dashboard-page-container").width());
            this.el.delay(this.animationSpeed / 2).animate({
                "opacity": 1
            }, this.animationSpeed, function () {               
                el.trigger('reveal:opened');
            });                        
        
            this.el.bind('reveal:close.reveal', $.proxy(this.closeHandler, this));
            $(".close-btn", this.el).on("click", function(event){
                event.preventDefault();            
                el.trigger("reveal:close");
            });
        },
    
        closeHandler: function(){
            this.el.removeClass("open");
            var el = this.el;
            this.el.animate({
                "opacity" : 0
            }, this.animationSpeed, function () {
                el.css({
                    'opacity': 1, 
                    'visibility': 'hidden', 
                    'display' : 'none'
                });
            });

            this.elBg.delay(this.animationSpeed).fadeOut(this.animationSpeed);
        }

    }
    
    dashboard = new dashboard();
    $('a[data-reveal-id]').live('click', function (event) {
        event.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');
        dashboard.open($('#' + modalLocation).html());
    });
});